# Phase 5: Gap Analysis and Remediation Plan

## Gap 1: Multi-Tenant Strategy Data Leakage in Pinecone (Confidentiality, Trade Secrets & Data Governance)

* **Obligation:** Trade Secret Protection (Directive (EU) 2016/943), Contractual Confidentiality, GDPR Article 5(1)(f) & Article 32 (Integrity and Confidentiality, if uploaded PDFs contain staff names/emails), and AI Act Data Governance / Cybersecurity best practices.
* **Current state:** In `Mobile Game Competitor Snapshot mk.III.json`, the node `Insert Custom Strategy PDF` (`id: b40642c1-d99a-46c9-8d6b-afeae893f17a`) hardcodes `"pineconeNamespace": "custom-strategy"` with `"clearNamespace": true`, and `Use Custom Strategy Namespace` passes `"custom-strategy"` to `Pinecone Vector Store`. When multiple studios use the system during GTM Sprint 2 ("Weekly Watch", where 6 studios upload their internal strategy documents), any new upload wipes the shared `custom-strategy` namespace mid-flight or leaves the most recent client's confidential strategy vectors persisted in Pinecone until the next upload. If Studio B triggers a run without uploading a PDF—or if two runs overlap—confidential strategy chunks can be overwritten or leaked across tenants.
* **Required state:** Every client studio's uploaded strategy document must be strictly isolated during processing and purged immediately after the report is generated (or stored in a cryptographically isolated per-tenant namespace).
* **Remediation:**
  1. Replace the static `"custom-strategy"` string in `Insert Custom Strategy PDF`, `Use Custom Strategy Namespace`, and `Pinecone Vector Store` with a dynamic per-execution namespace expression: `={{ 'run-' + $execution.id }}`.
  2. Add an n8n HTTP Request / Pinecone Delete node immediately after `Convert Report to HTML` (and on the error branch) that deletes the temporary namespace `run-{{ $execution.id }}` from the `project-week6` index once synthesis is complete.
  3. Alternatively, because studio playbooks are short documents (typically 2–10 pages), bypass Pinecone storage for one-off uploads by extracting the PDF text via `Load Uploaded Strategy PDF` and injecting the sanitized text directly into the `AI Agent` prompt context in memory.
* **Escalation needed?** **Yes — to Legal Counsel and the Data Protection Officer (DPO)** to review client confidentiality terms and sub-processor clauses with Pinecone and OpenAI before onboarding Sprint 2 pilot studios.

---

## Gap 2: Unregulated Personal Data Collection, Hardcoded Personal Email Fallback & Scraped PII Retention (GDPR)

* **Obligation:** GDPR Article 5(1)(a)–(e) (Lawfulness, Transparency, Data Minimization, Storage Limitation), Article 6 (Lawful Basis), Article 13 (Privacy Notice at Collection), Article 28 (Processor Agreements), and Chapter V (International Data Transfers).
* **Current state:**
  1. The `Competitor Input` form collects `customerEmail` without displaying a privacy notice, data controller identity, retention period, or lawful basis disclosure.
  2. The `Send a message` Gmail node (`id: b05b286c-645c-4ff4-a0a9-9291e919a186`) contains a hardcoded personal fallback address: `={{ $('Competitor Input').first().json.customerEmail || 'jedrzej.czarnota@icloud.com' }}`.
  3. As demonstrated in the `Patrianna` execution log (`Live flow screenshot on 2026-11-13 at 11.01.54.jpg`), `Tavily Company Research` scrapes third-party personal data (e.g., `"Related People: Max Samorukov, Alina Zlotnik Head of Market Insights"`) and passes it into OpenAI and n8n execution logs without redaction or automatic log expiration.
* **Required state:** Personal data (`customerEmail` and any incidental third-party names in web scrapes or uploaded PDFs) must be processed under a documented lawful basis (e.g., Art. 6(1)(b) contract or Art. 6(1)(f) legitimate interest), accompanied by an Article 13 privacy notice, protected by EU-US Data Processing Agreements (DPAs) with OpenAI, Pinecone, Tavily, and Google, and automatically purged from logs after a short retention window.
* **Remediation:**
  1. Update `formDescription` in `Competitor Input` to include a concise GDPR transparency notice and a link to the privacy policy, plus a required checkbox acknowledging that uploaded PDFs must not contain sensitive personal data.
  2. Remove the `|| 'jedrzej.czarnota@icloud.com'` fallback in `Send a message` so a missing email fails safely rather than routing client reports to a personal iCloud inbox.
  3. Add a JavaScript regex sanitization step in `Normalize Tavily Research` and `Normalize GNews Results` to strip `Related People` blocks, email addresses, and phone numbers before sending payloads to `AI Agent`.
  4. Configure n8n environment variables `EXECUTIONS_DATA_PRUNE=true` and `EXECUTIONS_DATA_MAX_AGE=168` (7 days) so execution logs containing `customerEmail`, binary PDFs, and scraped text are automatically deleted.
* **Escalation needed?** **Yes — to a Data Protection Officer (DPO) or Privacy Lawyer** to finalize the GDPR Article 13 privacy notice, execute Article 28 DPAs / Standard Contractual Clauses (SCCs) with US API vendors (OpenAI, Tavily, Pinecone), and verify whether API zero-data-retention (ZDR) settings are enabled on OpenAI.

---

## Gap 3: Incomplete AI Transparency & Missing Machine-Readable Provenance (EU AI Act Article 50)

* **Obligation:** EU AI Act Article 50(1) (Disclosure of AI interaction) and Article 50(2) (Machine-readable marking of synthetic text content generated by AI systems), applicable since 2 August 2026.
* **Current state:** The `Send a message` HTML footer states `"Generated autonomously via n8n • Sources: Tavily Advanced Search, GNews API, Apple App Store Telemetry & Pinecone RAG"`. However, it does not disclose the generative AI models used (`OpenAI gpt-4o-mini` and `Tavily Search LLM`), nor does the HTML email contain machine-readable metadata markers enabling automated detection that the briefing is AI-generated.
* **Required state:** Recipients must be clearly informed that the text and strategic recommendations are synthesized by generative AI models, and the HTML payload should embed standard machine-readable AI provenance metadata.
* **Remediation:**
  1. Inject machine-readable `<meta>` tags into the `<head>` of the HTML template in `Send a message`: `<meta name="ai-generated" content="true" />`, `<meta name="ai-model" content="openai:gpt-4o-mini, tavily:search-llm" />`, and `<meta name="generator" content="Mobile Game Competitor Snapshot Agent (n8n)" />`.
  2. Update the visible footer in `Send a message` to read: `"AI-Generated Briefing: Synthesized autonomously by OpenAI (gpt-4o-mini) and Tavily AI Search via n8n, grounded in Apple App Store Telemetry, GNews API, and Pinecone RAG. Verify all third-party revenue estimates against original sources before external publication."`
* **Escalation needed?** **Yes — to Legal Counsel** to confirm whether our role as a downstream application wrapper around OpenAI's API requires additional watermarking standards under the European Commission's Article 50(2) technical implementation guidelines.

---

## Gap 4: Unmitigated Search Contamination & Missing AI Literacy Guidance (EU AI Act Article 4)

* **Obligation:** EU AI Act Article 4 (AI Literacy — requiring providers and deployers to ensure staff and users dealing with the operation and use of AI systems have a sufficient level of AI literacy, taking into account their technical knowledge, context, and the persons affected), in force since 2 February 2025.
* **Current state:** The system operates with `"Zero human intervention after form submission"` and delivers actionable recommendations (`Observation -> Implication -> Low-Risk Test -> Success Metric`) directly to PMs and MMs. In our live test on `"Patrianna"` (`Live flow screenshot on 2026-11-13 at 11.01.54.jpg`), because Patrianna lacked public SensorTower/AppMagic figures, Tavily's `include_answer: true` parameter generated an upstream LLM summary filled with unrelated top-grossing games (*Honor of Kings*, *Block Blast!*, *Roblox*). Furthermore, the workflow lacks a human review toggle for consultant-led GTM sprints and provides no user guidance explaining how `liveOpsCadenceSignal` or `ratingsPerYearVelocity` are calculated.
* **Required state:** Users (client PMs/MMs/PMMs) and internal operators must receive clear instructions on how telemetry metrics are derived, where hallucinations or search-contamination errors can occur, and why human verification is required before acting on or republishing the output.
* **Remediation:**
  1. Set `"include_answer": false` in the `Tavily Company Research` HTTP Request node so `gpt-4o-mini` relies strictly on verifiable raw search snippets (`tavilyResults`) rather than Tavily's ungrounded secondary LLM summary.
  2. Add a concise **"How to Read & Verify This AI Report"** callout box at the bottom of the HTML email template explaining the heuristic rules behind `liveOpsCadenceSignal` (`<=21d Active`, `22-60d Moderate`, `>60d Maintenance`) and reminding users to click source links before committing product budget.
  3. For GTM Sprint 1 & 2 (consultant-led outreach), add an n8n `Wait for Approval` (Human-in-the-Loop) node before `Send a message` so the consultant can review and approve the generated briefing before it reaches a prospective client's inbox.
* **Escalation needed?** **No** (this is an engineering and operational compliance improvement within the consultant's scope, though the client's internal compliance owner should track Article 4 staff training records upon handover).
