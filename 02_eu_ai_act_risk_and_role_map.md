# Phases 2–4: Risk Tier Classification, Role Map & Obligation Checklist

## Phase 2: Risk Tier Classification

| Question | Your Answer |
| :--- | :--- |
| **Does this system fall under any prohibited category (Article 5)?** | **No.** The system aggregates public business intelligence on corporate game studios and does not engage in subliminal manipulation (Art. 5(1)(a)), exploitation of vulnerabilities (Art. 5(1)(b)), social scoring of natural persons (Art. 5(1)(c)), crime prediction (Art. 5(1)(d)), facial scraping (Art. 5(1)(e)), workplace/educational emotion recognition (Art. 5(1)(f)), biometric categorization (Art. 5(1)(g)), live public biometric identification (Art. 5(1)(h)), or non-consensual intimate image/CSAM generation (Art. 5 as amended by Regulation (EU) 2026/1744). |
| **Does this system operate in any of the eight Annex III areas?** | **No.** It operates strictly in B2B mobile gaming market research and product strategy, outside the eight Annex III areas (biometrics, critical infrastructure, education, employment/worker management, essential private/public services, law enforcement, migration/border control, and justice/democracy) and outside Annex I regulated physical products. |
| **If Annex III: does it "significantly influence" decisions in that area, or is it narrow/preparatory?** | **Not applicable (Outside Annex III).** Even by analogy, the system performs a preparatory data-aggregation and strategy-comparison task for human product managers rather than profiling or ranking natural persons. |
| **Does this system interact with end users or generate content requiring disclosure (Article 50)?** | **Yes (Partially).** The system uses generative AI (`gpt-4o-mini` and Tavily's synthesis model) to generate synthetic text reports delivered to users via email, triggering **Article 50(2)** machine-readable marking duties for providers of generative AI systems and **Article 50(1)** transparency if users are not already aware they are interacting with an AI system. |
| **First-pass risk tier** | **Minimal Risk with Limited Risk (Article 50) Generative AI Transparency Obligations** (plus universal **Article 4 AI Literacy** duties). |
| **One-sentence justification citing the specific article or Annex entry** | Because the system neither engages in prohibited practices under Article 5 nor operates in regulated product sectors (Annex I) or high-risk life-affecting domains (Annex III), it defaults to Minimal Risk for core functionality while triggering synthetic-content marking and disclosure evaluation under Article 50(1)–(2) and staff literacy duties under Article 4. |

### Ambiguity & Escalation Note for Legal Review
There is a practical classification boundary between **Minimal Risk** and **Limited Risk (Article 50)** depending on how the system is commercialized in GTM Sprint 3 (€99/month subscription):
1. **Downstream Wrapper vs. Generative AI Provider under Article 50(2):** Under Article 50(2), providers of AI systems that generate synthetic text, audio, image, or video content must ensure outputs are marked in a machine-readable format and detectable as artificially generated (applicable from 2 August 2026, with a 2 December 2026 transition for older systems). Legal counsel should confirm whether a vertical B2B n8n workflow wrapping OpenAI's API bears an independent Article 50(2) machine-readable marking duty on the outgoing HTML email, or whether that duty rests solely on the upstream GPAI provider (OpenAI).
2. **Article 50(4) Visible Labeling Trigger:** Visible disclosure labels on AI-generated text are legally required under Article 50(4) only when the text is published with the purpose of informing the public on matters of public interest *without* human editorial review and responsibility. As long as reports remain internal B2B briefings read by studio PMs/MMs, Article 50(4) is not triggered; however, if a client studio automatically republishes the generated industry news digest on a public blog or Discord channel without human editorial sign-off, Article 50(4) could be argued to apply.

---

## Phase 3: Role Map

Because the Project 3 documentation outlines both a **hosted subscription service** (`gtm_future_sprints.md`) and an **importable self-hosted workflow** (`README.md` and `stack_decision.md`), both deployment topologies are mapped below:

| Role | Entity | Key AI Act & Parallel Legal Obligations |
| :--- | :--- | :--- |
| **Provider (SaaS / GTM Sprints 1–3 Mode)** | **Jędrzej Czarnota** (operating the hosted n8n service and selling the €99/month 5-report plan under his own name) | Ensure AI literacy of own staff/operations (Art. 4); provide clear AI interaction disclosure on the web form and email (Art. 50(1)); implement machine-readable provenance metadata in generated HTML reports (Art. 50(2)); comply with GDPR data controller/processor duties for `customerEmail`, uploaded PDFs, and scraped PII. |
| **Deployer (SaaS / GTM Sprints 1–3 Mode)** | **Client Mobile Game Studios** (e.g., studios in Berlin, Warsaw, Helsinki; Northstar Nova Games / Iron Citadel using the reports professionally) | Ensure AI literacy of PMs, MMs, and PMMs interpreting the reports so they understand hallucination risks and telemetry limits (Art. 4); ensure human editorial review if any generated text is published externally on matters of public interest (Art. 50(4)); ensure lawful basis before uploading internal PDFs containing personal data under GDPR. |
| **Deployer / Internal Operator (Self-Hosted Mode)** | **Client Mobile Game Studio** (importing `Mobile Game Competitor Snapshot mk.III.json` into its own n8n instance) | Assumes internal operational responsibility for Article 4 staff AI literacy, GDPR compliance for its own n8n instance and API keys, and Article 50(4) editorial controls if outputs are shared externally (Jędrzej Czarnota acts as the external AI Consultant / Integrator). |
| **GPAI Model Vendor** | **OpenAI** (`gpt-4o-mini` and `text-embedding-3-small`) | Comply with Title VIII GPAI Provider obligations (Arts. 53–55, in force since 2 Aug 2025): maintain technical model documentation for the EU AI Office, provide downstream integration documentation to application builders, enforce an EU copyright/opt-out policy, and publish a training data summary. |
| **AI Search & Infrastructure Vendors** | **Tavily** (AI web search), **Pinecone** (vector DB), **GNews**, **Apple iTunes**, **Google (Gmail)** | Tavily provides upstream AI-synthesized search answers (`tavilyAnswer`); Pinecone, OpenAI, Tavily, and Google act as sub-processors under GDPR Art. 28 requiring Data Processing Agreements (DPAs) and EU-US transfer safeguards. |

---

## Phase 4: Obligation Checklist (High-Risk Assessment & Voluntary Governance Baseline)

**Legal Applicability Note:** Because the Mobile Game Competitor Snapshot Agent is **not** a High-Risk AI system under Article 6 (neither Annex I nor Annex III), the 11 mandatory High-Risk provider obligations (Articles 9–15, 43, 47–49, 72) **do not legally apply** (and even for Annex III systems, enforcement was moved to 2 December 2027 by the July 2026 Digital Omnibus Regulation (EU) 2026/1744).

However, to demonstrate rigorous compliance engineering and expose architectural blind spots in `Mobile Game Competitor Snapshot mk.III.json` that also affect Article 4, Article 50, GDPR, and client confidentiality, the checklist below evaluates our current design against those technical standards as a voluntary benchmark before moving to Phase 5:

| Obligation | Article | Status | Note (Evaluated as Voluntary Benchmark on Project 3) |
| :--- | :--- | :--- | :--- |
| **Risk management system** | 9 | **Partial** | Workflow includes HTTP retries, `Check research availability`, and `Stop and Error`, but lacks a documented risk register for hallucination or multi-tenant data leakage. |
| **Data and data governance** | 10 | **Gap** | `Insert Custom Strategy PDF` overwrites a single shared `custom-strategy` Pinecone namespace (`clearNamespace: true`), creating cross-client data contamination risk, and Tavily scrapes third-party personal names without filtering. |
| **Technical documentation** | 11 | **Met** | `README.md`, `stack_decision.md`, and the exported JSON fully document the 24-node architecture, prompts, APIs, and failure routing. |
| **Record-keeping and logging** | 12 | **Partial** | n8n logs full execution traces (`Live flow screenshot`), but lacks a defined retention/pruning schedule to balance auditability against GDPR storage limitation. |
| **Transparency and user information** | 13 (and 50) | **Partial** | Form and email footer disclose autonomous n8n generation, but omit specific LLM names (`gpt-4o-mini`, Tavily LLM), machine-readable `<meta>` tags, and user limitation instructions. |
| **Human oversight** | 14 | **Gap** | Workflow runs with `"Zero human intervention after form submission"`; no optional human-in-the-loop approval gate exists before emailing reports to external clients. |
| **Accuracy, robustness, cybersecurity** | 15 | **Partial** | HTTP nodes retry 3–5s on failure and gate on empty results, but there is no prompt-injection sanitization on uploaded PDFs or scraped web snippets, nor tenant isolation in Pinecone. |
| **Conformity assessment** | 43 | **N/A** | Not required (system is Minimal / Limited Risk, not Annex I or Annex III High-Risk). |
| **EU declaration of conformity + CE marking** | 47–48 | **N/A** | Not required (prohibited to affix CE marking to non-high-risk AI systems under the AI Act). |
| **Registration** | 49 | **N/A** | Not required in the EU High-Risk database. |
| **Post-market monitoring** | 72 | **Partial** | GTM Sprint 1 includes 15-minute user feedback calls, but there is no automated drift or hallucination feedback link inside the delivered HTML emails. |
