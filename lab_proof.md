# Lab Proof: EU AI Act Compliance Audit of Project 3 (`Mobile Game Competitor Snapshot mk.III`)

**Author:** Jędrzej Czarnota  
**Date:** November 17, 2026

---

## 1. Lab Navigation & Supporting Documents

* **System Brief (Phase 1):** [`./01_project3_system_brief.md`](./01_project3_system_brief.md)
* **Risk Tier, Role Map & Obligation Checklist (Phases 2–4):** [`./02_eu_ai_act_risk_and_role_map.md`](./02_eu_ai_act_risk_and_role_map.md)
* **Gap Analysis & Remediation Plan (Phase 5):** [`./03_gap_analysis_and_remediation_plan.md`](./03_gap_analysis_and_remediation_plan.md)
* **Client Compliance Memo (Phase 6):** [`./04_client_compliance_memo_head_of_product.md`](./04_client_compliance_memo_head_of_product.md)
* **Workflow Export:** [`./Mobile Game Competitor Snapshot mk.III.json`](./Mobile%20Game%20Competitor%20Snapshot%20mk.III.json)
* **Execution Evidence Screenshot:** [`./Live flow screenshot on 2026-11-13 at 11.01.54.jpg`](./Live%20flow%20screenshot%20on%202026-11-13%20at%2011.01.54.jpg)

---

## 2. Workflow Export & Architecture Summary

The audited system is implemented in [`Mobile Game Competitor Snapshot mk.III.json`](./Mobile%20Game%20Competitor%20Snapshot%20mk.III.json), a 24-node n8n automation workflow designed for mobile gaming Product Managers (PMs), Marketing Managers (MMs), and Product Marketing Managers (PMMs). The execution path runs end-to-end without human intervention between trigger and delivery:

1. **Form Trigger (`Competitor Input`):** Collects `competitor` (string), `customerEmail` (email), and an optional `policyPdf` file upload.
2. **RAG Namespace Routing (`Has Custom Strategy PDF?`):** If a PDF is uploaded, chunks it (`Strategy PDF Chunking`, 150-char overlap), embeds it via OpenAI (`OpenAI Document Embeddings`, 1536 dimensions), and writes vectors to the Pinecone index `project-week6` under the `custom-strategy` namespace (`clearNamespace: true`); otherwise, selects the default `northstar-strategy` namespace.
3. **Parallel External Collection:** Executes three concurrent HTTP requests with node-level retries (`retryOnFail: true`, `onError: continueErrorOutput`) across Tavily Advanced Search (`include_answer: true`, max 7 results), GNews API (max 5 English news articles), and Apple iTunes Search API (up to 5 US iOS apps with derived rating velocity and LiveOps cadence signals).
4. **Availability Gate (`Check research availability`):** Verifies that at least one source returned data (`tavilyResults.length + newsArticles.length + appStoreResults.length > 0`) before invoking the LLM; otherwise halts at `Stop and Error`.
5. **Agentic Synthesis & Delivery (`AI Agent` -> `Convert Report to HTML` -> `Send a message`):** Uses OpenAI `gpt-4o-mini` with the `Pinecone Vector Store` retrieval tool to draft a four-section Markdown report, converts it to styled HTML, and emails it via Gmail OAuth.

---

## 3. Documented Runs: Input, Evidence, Final Output, and Failure/Limitation Hit

### Run A (Standard Benchmark Run — "Kolibri") and Run B (Edge-Case Stress Run — "Patrianna")

* **Input submitted to `Competitor Input` form:**
  * **Run A:** `competitor = "Kolibri"`, `customerEmail = "jedrzej.czarnota@icloud.com"`, `policyPdf = [empty -> defaults to northstar-strategy]`.
  * **Run B:** `competitor = "Patrianna"`, `customerEmail = "jedrzej.czarnota@icloud.com"`, `policyPdf = [empty -> defaults to northstar-strategy]`.
* **Evidence produced during execution ([`Live flow screenshot on 2026-11-13 at 11.01.54.jpg`](./Live%20flow%20screenshot%20on%202026-11-13%20at%2011.01.54.jpg)):**
  * Total workflow execution time for Run B (`Patrianna`) was **42.7 seconds** (`AI Agent` node completed in **10.898 seconds** consuming **~13,484 tokens**).
  * `Normalize Tavily Research` returned `tavilyAnswer` and 7 `tavilyResults` objects (e.g., `https://www.pocketgamer.biz/industry/appmagic`), along with scraped executive names (`Max Samorukov`, `Alina Zlotnik`).
  * `Pinecone Vector Store` executed two vector retrieval tool calls using OpenAI embeddings to pull KPI benchmarks from `project-week6`.
* **Final Output:**
  * **Run A** delivered the formatted HTML email `Competitor report: Kolibri` grounded against `northstar-strategy`, reporting >250M portfolio downloads, Ubisoft's 2020 acquisition, an iOS Storefront Telemetry Table, cited news headlines, and three strategy takeaways.
  * **Run B** generated the four-section Markdown output for `Patrianna` (headquartered in Alexandria, Virginia) and explicitly flagged in Section 2: `"Studio-level revenue/download figures for Patrianna's mobile games are not publicly reported in current search results"`, followed by `Convert Report to HTML` and Gmail delivery.
* **Failure / Limitation Hit (Technical & Compliance):**
  1. **Search Context Contamination & Unfiltered Third-Party PII:** In Run B (`Patrianna`), because Patrianna's mobile revenue is not publicly reported by SensorTower or AppMagic, Tavily's search query (`"Patrianna mobile games lifetime revenue annual bookings downloads SensorTower AppMagic PocketGamer"`) matched generic AppMagic industry articles. Consequently, `tavilyAnswer` injected unrelated revenue figures (`Honor of Kings` at $172.4M, `Block Blast!` at 28M installs) and personal names of third-party AppMagic staff (`Max Samorukov`, `Alina Zlotnik, Head of Market Insights`) into the agent context and n8n logs. Although `gpt-4o-mini`'s system prompt prevented it from misattributing *Honor of Kings* to Patrianna in the final text, the raw execution logs retained third-party personal data without a GDPR legal basis or log-pruning schedule.
  2. **Multi-Tenant Namespace Overwrite (`custom-strategy`):** In `Insert Custom Strategy PDF`, all user-uploaded strategy PDFs write to a single shared Pinecone namespace (`custom-strategy`) with `clearNamespace: true`. Concurrent or sequential runs by different pilot studios overwrite or expose another studio's proprietary strategy benchmarks.

---

## 4. Check for Understanding (CFU) Checkpoints

### CFU 1: Recognize (First-Pass Risk Tier Justification)
The Mobile Game Competitor Snapshot Agent qualifies as an **AI system** under Article 3(1) of the EU AI Act (Regulation (EU) 2024/1689) because it uses machine-based language models (`gpt-4o-mini` and Tavily's synthesis model) to infer structured competitive insights and strategic recommendations from unstructured web, news, and telemetry inputs. On a first-pass assessment, the system is classified as **Minimal Risk** with **Article 50 Limited Risk (Transparency) touchpoints** and mandatory **Article 4 AI Literacy** obligations. It does not fall under **Article 5 (Prohibited Practices)** because it analyzes corporate entities (mobile game studios) rather than manipulating natural persons, exploiting vulnerabilities, social scoring individuals, or scraping facial biometrics. It does not fall under **Article 6 / Annex I** (not a regulated product safety component) or **Annex III (High-Risk Areas)** because its outputs inform B2B product and marketing strategy rather than making or influencing decisions in biometrics, critical infrastructure, education, employment/HR, credit/insurance, law enforcement, migration, or justice. Under **Article 50** (applicable since 2 August 2026), because the system uses a generative AI model to produce synthetic text reports, the provider must ensure machine-readable marking of AI-generated output (Article 50(2)), while visible human labeling under Article 50(4) is only triggered if a deployer publishes the unreviewed output externally to inform the public on matters of public interest.

### CFU 2: Map Roles (Provider, Deployer, Vendor Framework)
Role mapping depends on which of the two operating models described in the Project 3 documentation is used in production:
* **Commercial SaaS / Managed GTM Sprints Model:** When Jędrzej Czarnota hosts the n8n web form and sells the €99/month report service (5 reports/month) under his own name to EU studios in Berlin, Warsaw, and Helsinki, **Jędrzej Czarnota is the Provider** (specifically a downstream application provider integrating a General-Purpose AI model), and the **client game studios (PMs, MMs, PMMs) are the Deployers**.
* **Client Self-Hosted / Handover Model:** When a game studio imports `Mobile Game Competitor Snapshot mk.III.json` into its own self-hosted n8n instance and binds its own API keys, the **client game studio is the Deployer** (and internal operator), while **Jędrzej Czarnota acts as an AI Consultant / Integrator** rather than a regulated provider.
* **Third-Party Vendors:** **OpenAI** is a **GPAI Model Provider** (Articles 53–55) supplying `gpt-4o-mini` and `text-embedding-3-small`; **Tavily** is an upstream AI search vendor (supplying web results plus an LLM-generated `tavilyAnswer`); and **Pinecone, GNews, Apple iTunes, and Google (Gmail)** act as infrastructure/data vendors and GDPR data processors.

### CFU 3: Identify Obligations
* **High-Risk Provider Obligations (Articles 9–15, 43, 47–49, 72):** Not legally applicable because the system does not fall under Annex I or Annex III.
* **Article 4 (AI Literacy — in force since 2 February 2025):** Applies to all providers and deployers regardless of risk tier; staff operating the n8n workflow and PMs/MMs reading the generated competitive briefings must understand the system's capabilities, propensity for search-context noise or hallucinated estimates, and limits. **Current status: Partial** (the report flags missing data in text, but no formal onboarding brief or user limitation guide accompanies the web form or email).
* **Article 50 (Transparency — in force since 2 August 2026):**
  * *Article 50(1) (Interacting with natural persons):* The web form (`Competitor Input`) states `"Our AI agent is gathering App Store telemetry, news, and company data"` and the HTML email footer states `"Generated autonomously via n8n"`. **Current status: Partially Met** (discloses automation, but omits explicit mention of OpenAI `gpt-4o-mini` and Tavily's LLM summary in the email footer).
  * *Article 50(2) (Machine-readable marking of synthetic content):* Providers of generative AI systems must ensure outputs are detectable as AI-generated in a machine-readable format. **Current status: Gap** (the HTML email template in `Send a message` contains no `<meta name="ai-generated">` or structured metadata headers).
* **Parallel EU Law — GDPR (Regulation (EU) 2016/679) & Trade Secret Protection (Directive (EU) 2016/943):**
  * Collecting `customerEmail` via the n8n form and scraping third-party executive names via Tavily/GNews triggers GDPR controller/processor duties (Articles 5, 6, 13, 28, and Chapter V international transfers to US APIs). **Current status: Gap**.
  * Ingesting client strategy PDFs (`policyPdf`) into a shared Pinecone namespace (`custom-strategy` with `clearNamespace: true`) creates a cross-tenant confidentiality risk. **Current status: Gap**.

### CFU 4 & CFU 5: Concise Summary of Gaps & Practical Remediations
*(Full structured entries are provided in [`03_gap_analysis_and_remediation_plan.md`](./03_gap_analysis_and_remediation_plan.md).)*
1. **Cross-Tenant Strategy Leakage in Pinecone:** `Insert Custom Strategy PDF` writes all uploaded playbooks to a single `custom-strategy` namespace with `clearNamespace: true`. *Remediation:* Dynamically generate a per-run UUID namespace (`={{ 'run-' + $execution.id }}`) and delete vectors immediately after report synthesis.
2. **Missing GDPR Notice, Hardcoded Personal Email Fallback & Unpruned PII Logs:** `Competitor Input` lacks a privacy notice, `Send a message` defaults to `jedrzej.czarnota@icloud.com`, and Tavily injects third-party personal names (`Max Samorukov`, `Alina Zlotnik`) into indefinite n8n execution logs. *Remediation:* Remove the personal fallback email, add a GDPR disclosure notice on the form, strip personal names in `Normalize Tavily Research`, and set n8n `EXECUTIONS_DATA_MAX_AGE` to 7 days (escalate to DPO/privacy counsel for US transfer DPAs).
3. **Incomplete Article 50 Transparency & Machine-Readable Marking:** The HTML email lacks machine-readable AI provenance tags and model attribution. *Remediation:* Add `<meta name="ai-generated" content="true">` and explicit `gpt-4o-mini` / Tavily disclosure to the `Send a message` HTML wrapper.
4. **Article 4 AI Literacy & Hallucination Guardrails ("Zero Human Intervention"):** The report delivers actionable `Low-Risk Test` recommendations directly to inboxes with no human review step or reliability warning. *Remediation:* Set `include_answer: false` on Tavily, add a mandatory verification banner in the HTML email template, and provide a one-page "AI Reader's Guide" during GTM onboarding.

---

## 5. Reinforce Section: Blind Spots & Hindsight Design Reflection

### Overlooked Component: Tavily's Hidden LLM (`include_answer: true`)
When reviewing the system brief closely, it is easy to treat `Tavily Company Research` as a simple deterministic web-search API and assume `gpt-4o-mini` is the only AI model in the pipeline. However, inspecting the JSON payload in `Tavily Company Research` reveals `"include_answer": true`, which instructs Tavily's own backend LLM to synthesize a natural-language summary (`tavilyAnswer`) that is then fed directly into the `AI Agent` prompt (`"Tavily summary:\n" + ($json.tavilyAnswer ?? "")`). This creates a **chained inference dependency**: if Tavily's ungrounded LLM hallucinates or merges unrelated game revenues (as seen in the `Patrianna` run where `tavilyAnswer` summarized *Honor of Kings* and *Roblox* metrics from an AppMagic page), `gpt-4o-mini` receives that synthesis as authoritative input context. While this does not push the system into Annex III High-Risk, it complicates **Article 4 AI Literacy** and **Article 50 Transparency** because two separate generative models (Tavily's synthesis model and OpenAI's `gpt-4o-mini`) shape the final text, and any upstream error in Tavily cascades silently into the final report. Setting `"include_answer": false` in the Tavily HTTP node and relying strictly on raw source snippets with explicit URLs eliminates this double-inference blind spot.

### Hindsight Design Decision Creating a Compliance Burden
During Project 3 development, I designed `Competitor Input` to accept an arbitrary `policyPdf` upload and routed it into a single static Pinecone namespace (`"pineconeNamespace": "custom-strategy"`, `"clearNamespace": true`) so users could test custom playbooks in one click without setting up an account. In a single-user classroom demo, this felt frictionless. Held up to a regulatory and commercial lens for GTM Sprint 2 (where six EU game studios upload their confidential strategy documents weekly), this design choice creates a severe **confidentiality, trade-secret, and GDPR data governance burden**:
* Every uploaded PDF is sent to OpenAI's embedding API and stored in a shared Pinecone namespace where a concurrent execution by a rival studio could read or overwrite it.
* If I were designing this today, I would **not** store uploaded client strategy PDFs in a shared cloud vector index on form submission; instead, for documents of this size (a 2–5 page KPI playbook), I would extract the text in memory within the isolated n8n execution, redact any personal names/emails via regex, pass the playbook text directly into the `gpt-4o-mini` system context for that single run, and immediately discard the binary payload upon completion.
