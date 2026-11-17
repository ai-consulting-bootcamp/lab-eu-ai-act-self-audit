# Phase 5: Gap Analysis and Remediation Plan

The system is **limited risk** ([02_risk_classification.md](02_risk_classification.md)), so there is no Phase 4 checklist. As the lab brief allows for non-high-risk systems, this phase covers the **AI Act transparency gaps** and the **parallel legal issues** (GDPR and German works council law). Every "current state" below comes from the system brief ([01_system_brief.md](01_system_brief.md)). Where the brief says nothing about a required control, I treat it as not in place.

## Summary

| # | Obligation | Status | Escalation |
|---|---|---|---|
| 1 | AI Act Art. 50(1): tell users they are dealing with an AI | Partial | No |
| 2 | AI Act Art. 50(2): machine-readable AI marking of generated text | Gap | Yes: legal / AI governance |
| 3 | Annex III 4(b) boundary: written intended purpose | Partial | Yes: employment lawyer, works council |
| 4 | GDPR Art. 5(1)(c), 25: personal data in free text | Partial | Yes: DPO |
| 5 | GDPR Art. 5(1)(e), 6, 13, 30, 35: legal basis, notice, retention, records | Gap | Yes: DPO |
| 6 | GDPR Art. 28, 44 to 46: processors and transfers outside the EU | Gap | Yes: DPO, procurement |
| 7 | BetrVG §87(1) no. 6: works council co-determination | Gap | Yes: works council, employment lawyer |
| 8 | AI Act Art. 4: AI literacy | Gap | No |
| 9 | Human review and reliability of the compliance flag | Partial | No (AI Governance Board) |

---

### Gap 1
- **Obligation:** AI Act Art. 50(1) and 50(5): people who interact directly with an AI system must be told so, clearly and at the latest at the first interaction, unless it is obvious.
- **Current state:** The fix report is labelled as AI-generated. The brief does not describe any notice before the employee starts typing.
- **Required state:** A clear, distinguishable notice at or before the first use, not only on the result.
- **Remediation:** Add a short notice at the top of the web page: "You are using an AI assistant. Its answers can be wrong; check the sources." Keep the label on the report.
- **Escalation needed?** No.

### Gap 2
- **Obligation:** AI Act Art. 50(2): outputs of systems that generate synthetic text must be marked in a machine-readable format and be detectable as AI-generated.
- **Current state:** The report has a visible label. Nothing in the brief marks the stored text in Airtable, the Notion summaries or the Slack messages in a machine-readable way.
- **Required state:** Marking that is effective and reliable as far as technically feasible. The Commission's Code of Practice on Transparency of AI-Generated Content (June 2026) is the reference for how to show this.
- **Remediation:** Store an "AI-generated" field, the model name and the date with every case record and summary; put an "AI-generated" label on every Notion summary and Slack message; follow the Code's measures for text.
- **Escalation needed?** Yes: legal or AI governance, to confirm which technique is enough for internal text.

### Gap 3
- **Obligation:** Staying outside Annex III point 4(b) (monitoring or evaluating workers) depends on the intended purpose. If a provider relies on the Art. 6(3) exception, Art. 6(4) requires a documented assessment.
- **Current state:** No name or login is asked for. But each case records the department and the employee's feedback, and the brief sets no limit on how that data may be used.
- **Required state:** A documented assessment showing why the system is not high-risk, and rules that keep it that way.
- **Remediation:** Write a one-page intended-purpose statement ("for process and tool improvement; not for evaluating individuals or teams"). Show department figures only for groups of at least 5 people. Re-check the classification before any new report that summarises by department.
- **Escalation needed?** Yes: employment lawyer and works council.

### Gap 4
- **Obligation:** GDPR Art. 5(1)(c) data minimisation and Art. 25 data protection by design.
- **Current state:** The description can still contain names; only an on-screen warning asks people to leave them out. The text is passed to the AI model and the search services.
- **Required state:** Personal data limited to what is needed and removed by design where possible.
- **Remediation:** Remove names and other personal details automatically before any AI or search step, and store only the cleaned text.
- **Escalation needed?** Yes: data protection officer.

### Gap 5
- **Obligation:** GDPR Art. 6 legal basis (with §26 BDSG for employee data), Art. 13 information to employees, Art. 5(1)(e) storage limitation, Art. 30 record of processing, Art. 35 impact assessment screening.
- **Current state:** The brief describes case records in Airtable but no privacy notice, legal basis, retention period, processing record or impact assessment.
- **Required state:** All five in place before real employee data enters the system.
- **Remediation:** Privacy notice on the web page; documented legal basis; retention of 12 months, then delete or anonymise; entry in the record of processing; impact assessment screening by the DPO.
- **Escalation needed?** Yes: data protection officer.

### Gap 6
- **Obligation:** GDPR Art. 28 (processor contracts) and Art. 44 to 46 (transfers outside the EU).
- **Current state:** Case text is handled by up to ten third-party tools (OpenAI, Cohere, Pinecone, Tavily, GNews, OpenAlex, Airtable, Notion, Slack, Render). Several are based outside the EU, OpenAI in the US for example. The brief describes no contracts or transfer checks.
- **Required state:** A processing agreement with each processor and a valid transfer basis (EU-US Data Privacy Framework or standard contractual clauses).
- **Remediation:** A vendor register; processing agreements on business plans; EU data regions where vendors offer them; send search services only short queries, never the full description.
- **Escalation needed?** Yes: data protection officer and procurement.

### Gap 7
- **Obligation:** German Works Constitution Act, BetrVG §87(1) no. 6: the works council co-determines technical devices suitable for monitoring behaviour or performance. Commentary on the ArbG Hamburg ChatGPT decision (2024) notes that an AI tool the employer provides itself would likely need co-determination.
- **Current state:** The works council agreement is one of the documents the system reads, but the brief does not say the works council has seen or agreed to Fix My Process itself, which records department and feedback.
- **Required state:** The works council informed before rollout, and its consent if it sees a monitoring risk.
- **Remediation:** Present the system, the data it records and the "no evaluation of individuals or teams" rule to the works council; sign a short annex to the AI agreement.
- **Escalation needed?** Yes: works council and employment lawyer.

### Gap 8
- **Obligation:** AI Act Art. 4 (as amended by the Digital Omnibus): providers and deployers must take measures to support the AI literacy of staff who operate and use AI systems.
- **Current state:** The brief describes no training for employees, the AI enablement team or the AI Governance Board.
- **Required state:** Proportionate, documented literacy measures.
- **Remediation:** A 15-minute onboarding (what it does, what the confidence score means, when to check sources) and a briefing for the Board on reviewing red cases; record who completed it.
- **Escalation needed?** No.

### Gap 9
- **Obligation:** Not an AI Act duty for a limited-risk system, but needed to limit the harm of wrong answers: the "allowed / not allowed" flag is advice employees act on.
- **Current state:** No human reviews the report before the employee acts. Green cases get no review, amber cases are posted for information only, and only red cases get a Board decision, after the report is already out. A confidence score is shown, but nothing in the brief makes the flag a legal check.
- **Required state:** A human decision where the AI says "allowed with conditions", and employees who know the flag is guidance, not a legal clearance.
- **Remediation:** Send amber cases to the Board for a decision; add "This is guidance, not legal advice" to the flag; check a sample of green cases each month.
- **Escalation needed?** No: AI Governance Board decision.

## Sources

- Art. 50 text: https://ai-act-law.eu/article/50/
- Code of Practice on Transparency of AI-Generated Content: https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
- Art. 4 after the Digital Omnibus: https://www.lewissilkin.com/insights/2026/07/27/the-digital-omnibus-on-ai-enters-into-force-today-102nedo
- BetrVG §87(1) no. 6 and the ArbG Hamburg decision (16 Jan 2024, 24 BVGa 1/24): https://cms.law/de/deu/legal-updates/kein-mitbestimmungsrecht-des-betriebsrats-bei-chatgpt-amp-co and https://kpmg-law.de/?p=30096
