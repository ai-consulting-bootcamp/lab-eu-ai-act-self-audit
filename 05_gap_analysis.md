# Phase 5: Gap Analysis and Remediation Plan

The system is **limited risk** ([02_risk_classification.md](02_risk_classification.md)), so there is no Phase 4 checklist. Per the lab brief, this phase covers the **AI Act transparency gaps** plus the **parallel legal issues** (GDPR, German works council law, internal policy). Evidence is from the repo, the live app and run FMP-3464 ([lab_proof.md](lab_proof.md)).

## Summary

| # | Obligation | Status | Escalation |
|---|---|---|---|
| 1 | AI Act Art. 50(1): tell users they are dealing with an AI | Partial | No |
| 2 | AI Act Art. 50(2): machine-readable AI marking of reports | Gap | Yes: legal / AI governance |
| 3 | Annex III 4(b) boundary: written intended purpose | Partial | Yes: employment lawyer, works council |
| 4 | GDPR Art. 5(1)(c), 25: personal data in free text | Partial | Yes: DPO |
| 5 | GDPR Art. 5(1)(e), 6, 13, 30, 35: legal basis, notice, retention, records | Gap | Yes: DPO |
| 6 | GDPR Art. 28, 44 to 46: processors and US transfers | Gap | Yes: DPO, procurement |
| 7 | GDPR Art. 32: access control and security | Gap | No (IT security) |
| 8 | BetrVG §87(1) no. 6: works council co-determination | Gap | Yes: works council, employment lawyer |
| 9 | AI Act Art. 4: AI literacy | Partial | No |
| 10 | Internal AI Policy 5.2 and answer accuracy | Partial | No (AI Governance Board) |
| 11 | Vendor licence terms | Gap | Yes: procurement |

---

### Gap 1
- **Obligation:** AI Act Art. 50(1) and 50(5): people who interact directly with an AI system must be told so, clearly and at the latest at the first interaction, unless it is obvious.
- **Current state:** The footer says "Your report is AI-generated: check the sources before you act." It is small grey text at the bottom of the page, and the Chat tab shows nothing before the first message.
- **Required state:** A clear, distinguishable notice before or at the first use of the form and the chat.
- **Remediation:** Add a banner at the top of the Form and Chat tabs ("You are using an AI assistant. Its answers can be wrong; check the sources.") and repeat the label in the report header.
- **Escalation needed?** No.

### Gap 2
- **Obligation:** AI Act Art. 50(2): outputs of systems that generate synthetic text must be marked in a machine-readable format and be detectable as AI-generated.
- **Current state:** Report A (screen, Airtable) and Report B (Airtable, Notion page, Slack notice) carry no machine-readable marking.
- **Required state:** Marking that is effective and reliable as far as technically feasible. The Commission's Code of Practice on Transparency of AI-Generated Content (June 2026) is the reference for how to show this.
- **Remediation:** Add `ai_generated = true`, model name and prompt version as metadata on every Airtable row and Notion page; put an "AI-generated" label in the Notion page title and the Slack notice; follow the Code's measures for text.
- **Escalation needed?** Yes: legal or AI governance, to confirm which technique is enough for internal text.

### Gap 3
- **Obligation:** Staying outside Annex III point 4(b) (monitoring or evaluating workers) depends on the intended purpose. If a provider relies on the Art. 6(3) exception, Art. 6(4) requires a documented assessment.
- **Current state:** The design avoids names and stores only the department. But there is no written intended purpose or list of uses that are not allowed. Departments can be small, and feedback is stored per case.
- **Required state:** A documented assessment showing why the system is not high-risk, and controls that keep it that way.
- **Remediation:** Write a one-page intended-purpose statement ("for process and tool improvement; not for evaluating individuals or teams"). Enforce a minimum group of 5 for any department summary, as the fictional works council agreement (KA-BV-AI-2026) requires. Re-check the classification before adding any new report that summarises by department.
- **Escalation needed?** Yes: employment lawyer and works council.

### Gap 4
- **Obligation:** GDPR Art. 5(1)(c) data minimisation and Art. 25 data protection by design.
- **Current state:** No name field. But free text can contain names; protection is a UI notice plus an instruction to the AI. The raw text is stored and sent to OpenAI, Tavily, GNews and OpenAlex.
- **Required state:** Personal data limited to what is needed, removed by design where possible.
- **Remediation:** Remove personal details automatically before any AI or search call (an n8n step at intake); store only the cleaned text.
- **Escalation needed?** Yes: data protection officer.

### Gap 5
- **Obligation:** GDPR Art. 6 legal basis (with §26 BDSG for employee data), Art. 13 information to data subjects, Art. 5(1)(e) storage limitation, Art. 30 record of processing, Art. 35 impact assessment screening.
- **Current state:** No privacy notice in the app, no documented legal basis, **no retention period** (Airtable keeps rows forever), no processing record, no impact assessment screening.
- **Required state:** All five documented before real employee data enters the system.
- **Remediation:** Privacy notice linked from the app; legal basis documented; retention period of 12 months, then delete or anonymise; entry in the record of processing; impact assessment screening by the DPO.
- **Escalation needed?** Yes: data protection officer.

### Gap 6
- **Obligation:** GDPR Art. 28 (processor contracts) and Art. 44 to 46 (transfers outside the EU).
- **Current state:** Case text goes to OpenAI, Tavily, GNews, OpenAlex, Airtable, Notion and Slack; the vector store runs in AWS us-east-1. Several vendors are US-based. No contracts or transfer checks are documented; free or trial plans are used.
- **Required state:** A signed processing agreement with each processor and a valid transfer basis (EU-US Data Privacy Framework or standard contractual clauses).
- **Remediation:** Vendor register; processing agreements on business plans; EU data regions where vendors offer them; check each vendor's retention of API inputs.
- **Escalation needed?** Yes: data protection officer and procurement.

### Gap 7
- **Obligation:** GDPR Art. 32 security of processing.
- **Current state:** The app and the PDF upload form have no login. Anyone with the link can submit or upload. The n8n webhooks are protected by a shared header secret.
- **Required state:** Access limited to employees, admin upload limited to the AI enablement team.
- **Remediation:** Company single sign-on in front of the app and the upload form; rotate the webhook secret; move off the free hosting plan.
- **Escalation needed?** No: IT security can own it.

### Gap 8
- **Obligation:** German Works Constitution Act, BetrVG §87(1) no. 6: the works council co-determines technical devices suitable for monitoring behaviour or performance. Commentary on the ArbG Hamburg ChatGPT decision (2024) notes that an employer's own AI tool would likely need co-determination.
- **Current state:** The fictional works council agreement (KA-BV-AI-2026) is used as a knowledge source, but Fix My Process itself has not been notified to or agreed with the works council. It logs department, entry channel and feedback.
- **Required state:** At minimum the early-notice procedure in section 4 of the agreement; consent under section 5 if the works council sees a monitoring risk.
- **Remediation:** Present the system, its data fields and the "no evaluation of individuals or teams" rule to the works council; sign a short annex.
- **Escalation needed?** Yes: works council and employment lawyer.

### Gap 9
- **Obligation:** AI Act Art. 4 (as amended by the Digital Omnibus): providers and deployers must take measures to support the AI literacy of staff who operate and use AI systems.
- **Current state:** The app has a 5-step "What to do" guide. There is no training for employees, the AI enablement team or the Board on the system's limits.
- **Required state:** Proportionate, documented literacy measures.
- **Remediation:** A 15-minute onboarding (what it does, what confidence means, when to check sources) and a Board briefing on reviewing red cases; record who completed it.
- **Escalation needed?** No.

### Gap 10
- **Obligation:** The company's own AI Policy 5.2 (fictional, KA-AI-POL-001): amber cases get a Board decision within 5 working days. This is not an AI Act duty for a limited-risk system, but it limits the harm of wrong answers.
- **Current state:** Amber cases are posted to the Board channel but not decided; green and amber get no human check. Confidence does not track correctness (2 of 5 "High" reports wrong in the 15-case study). In run FMP-3464, Report A told the employee to "Sign up for Miro" while Report B recorded the external answer as "None".
- **Required state:** The workflow follows the policy, and the employee's advice matches the record the Board sees.
- **Remediation:** Send amber cases into the Board decision flow (a one-line change in the Quality Gate); add a code check that Report A and Report B name the same tools; recalibrate the confidence bands on a larger labelled set; add "not legal advice" to the "Is it allowed?" section.
- **Escalation needed?** No: AI Governance Board decision.

### Gap 11
- **Obligation:** Contract terms of the vendors (not the AI Act).
- **Current state:** GNews free plan is non-commercial; the Cohere trial key is non-production; Airtable Free allows 1,000 records per base.
- **Required state:** Licences that allow internal business use.
- **Remediation:** Business plans before any pilot (cost estimates are in `cost_analysis.md` in the repo).
- **Escalation needed?** Yes: procurement.

## Sources

- Art. 50 text: https://ai-act-law.eu/article/50/
- Code of Practice on Transparency of AI-Generated Content: https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
- Art. 4 after the Digital Omnibus: https://www.lewissilkin.com/insights/2026/07/27/the-digital-omnibus-on-ai-enters-into-force-today-102nedo
- BetrVG §87(1) no. 6 and the ArbG Hamburg decision (16 Jan 2024, 24 BVGa 1/24): https://cms.law/de/deu/legal-updates/kein-mitbestimmungsrecht-des-betriebsrats-bei-chatgpt-amp-co and https://kpmg-law.de/?p=30096
- Repo evidence: https://github.com/ayhandemir7-LSSBB/project3-research-and-report (`app.py` footer, `README.md` known gaps, `confidence_calibration.md`)
