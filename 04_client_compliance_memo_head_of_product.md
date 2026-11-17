# Phase 6: Client Compliance Memo

**MEMORANDUM**

**TO:** Head of Product, Northstar Nova Games  
**FROM:** Jędrzej Czarnota, AI Consultant  
**DATE:** November 17, 2026  
**SUBJECT:** First-Pass EU AI Act & Data Governance Assessment — Mobile Game Competitor Snapshot Agent

---

## 1. System Classification
Based on a first-pass technical review against Regulation (EU) 2024/1689 (the EU AI Act, as amended by the July 2026 Digital Omnibus Regulation (EU) 2026/1744), the **Mobile Game Competitor Snapshot Agent** falls into the **Minimal Risk** tier with **Article 50 Limited Risk (Transparency)** obligations and universal **Article 4 (AI Literacy)** duties. Because the tool analyzes corporate competitors (mobile game studios) and public storefront telemetry to support internal product and marketing strategy—rather than scoring, hiring, or profiling individuals—it does not trigger any Article 5 prohibitions or Annex III High-Risk requirements.

## 2. Role Map (Who Is Responsible for What)
Under the EU AI Act, responsibilities depend on how Northstar Nova Games deploys the workflow:
* **During Hosted Pilot Sprints (SaaS Mode):** When my consultancy hosts the web form and delivers reports to your team on the €99/month plan, **I act as the downstream AI System Provider** (responsible for system-level AI disclosures, machine-readable output marking, and secure pipeline operation), and **Northstar Nova Games acts as the Deployer** (responsible for ensuring your Product and Marketing Managers understand the tool's limits under Article 4 and do not publish unreviewed AI text externally).
* **Upon Internal Handover (Self-Hosted n8n Mode):** If your Product Ops team imports the workflow into Northstar's own n8n environment using your own API keys, **Northstar Nova Games acts as the Deployer and internal operator** for both EU AI Act literacy and GDPR data protection, while **OpenAI** remains the upstream **General-Purpose AI (GPAI) Model Provider** for `gpt-4o-mini` and embeddings.

## 3. Key Findings (Top Three Compliance & Design Gaps)
While our EU AI Act regulatory burden is light, holding our current n8n prototype (`mk.III`) up to a compliance lens revealed three practical gaps we must close before scaling to multi-studio pilots:
1. **Shared Strategy Storage Risk (Confidentiality & Data Isolation):** When a user uploads a custom studio strategy PDF, the workflow currently writes those document chunks into a single shared Pinecone database folder (`custom-strategy`) and wipes previous data on each upload. If multiple studios or teams run reports at the same time, one studio's confidential KPI playbook could be overwritten or exposed to another run.
2. **Personal Data & Log Hygiene (GDPR):** The web form collects recipient email addresses without a privacy notice, the Gmail delivery node includes a hardcoded personal fallback email address, and our web search provider (Tavily) occasionally pulls the names and job titles of industry executives from news articles into n8n's execution logs without an automatic deletion schedule.
3. **Chained AI Summaries & Transparency (EU AI Act Articles 4 & 50):** Our workflow currently asks Tavily's search AI to summarize web results *before* passing them to OpenAI's `gpt-4o-mini` to write the report, and delivers the final email with zero human review. In edge-case tests on smaller studios with sparse public data, Tavily's summary pulled in revenue figures from unrelated top-grossing games. In addition, the HTML email needs machine-readable AI metadata tags (Article 50(2)) and a brief reader guide explaining how our App Store LiveOps signals are calculated (Article 4).

## 4. Recommended Next Steps
We can close all three technical gaps in under two days of engineering work, paired with targeted legal sign-off:
1. **Immediate Engineering Fixes (Days 1–2 — Consultant):**
   * Isolate uploaded strategy PDFs into unique, single-use execution namespaces (`run-{{ $execution.id }}`) that auto-delete immediately after the email is sent (or process the PDF text solely in memory).
   * Turn off Tavily's secondary AI summary (`include_answer: false`) so `gpt-4o-mini` only cites raw, verifiable source snippets, and remove the hardcoded fallback email in the Gmail node.
   * Add machine-readable AI `<meta>` tags, explicit `gpt-4o-mini` model attribution, and a short "How to Verify This Report" banner to the HTML email template, and set n8n logs to auto-delete after 7 days.
2. **External Legal & Privacy Review (Before Commercial Rollout — Legal / DPO):**
   * Have your **Data Protection Officer (DPO) or privacy counsel** approve a short GDPR privacy notice for the web form and verify that Data Processing Agreements (DPAs) and zero-data-retention settings are in place with OpenAI, Pinecone, Tavily, and Google.
   * Have **legal counsel** confirm whether our role as a B2B application wrapper around OpenAI requires any additional synthetic-content marking under Article 50(2) of the EU AI Act.

## 5. Caveats
This memorandum is a **first-pass technical compliance assessment** prepared from an AI consulting perspective to spot architectural risks early and plan practical engineering remediations. **It is not a formal legal opinion, a GDPR Data Protection Impact Assessment (DPIA), an EU AI Act conformity assessment, or a legal certification of compliance.** Final interpretation of statutory obligations under the EU AI Act and GDPR must be confirmed by qualified legal counsel.
