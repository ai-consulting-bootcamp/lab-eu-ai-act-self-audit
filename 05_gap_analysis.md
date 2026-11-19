# Phase 5: Gap Analysis and Remediation Plan

The system is **limited risk** ([02_risk_classification.md](02_risk_classification.md)), so there is no Phase 4 checklist. As the lab brief allows for non-high-risk systems, this phase covers the **EU AI Act transparency gaps** and the other AI Act duties that apply to this tier, plus the AI Act points that keep the system out of the high-risk tier. Every "current state" comes from the system brief ([01_system_brief.md](01_system_brief.md)). Where the brief says nothing about a required control, I treat it as not in place.

Other laws (GDPR, German works council law) are out of scope for this audit. They are listed for information only at the end.

## Summary

| # | AI Act obligation | Article | Status | Escalation |
|---|---|---|---|---|
| 1 | Tell users they are dealing with an AI, at first interaction | 50(1), 50(5) | Partial | No |
| 2 | Machine-readable marking of AI-generated text | 50(2) | Gap | Yes: AI Act specialist |
| 3 | Stay outside Annex III 4(b): intended purpose and use limits documented | 6(2), Annex III 4(b), 25(1)(c) | Partial | Yes: AI Act specialist |
| 4 | AI literacy measures for staff who run and use it | 4 | Gap | No |
| 5 | Information from the AI model providers on file | 53(1)(b) | Gap | No |
| 6 | Human oversight and accuracy of the compliance flag (voluntary for this tier) | 95 (voluntary codes) | Partial | No |

---

### Gap 1
- **Obligation:** Art. 50(1) and 50(5): the provider must design the system so that people interacting with it directly are told they are dealing with an AI, clearly and at the latest at the first interaction, unless it is obvious.
- **Current state:** The fix report is labelled as AI-generated. The brief describes no notice before the employee starts typing.
- **Required state:** A clear, distinguishable notice at or before the first use, not only on the result.
- **Remediation:** Add a notice at the top of the web page: "You are using an AI assistant. Its answers can be wrong; check the sources." Keep the label on the report.
- **Escalation needed?** No.

### Gap 2
- **Obligation:** Art. 50(2): providers of AI systems that generate synthetic text must mark the outputs in a machine-readable format so they are detectable as AI-generated. In force since 2 Aug 2026; the grace period to 2 Dec 2026 covers only systems placed on the market before 2 Aug 2026.
- **Current state:** The report has a visible label. Nothing in the brief marks the stored text in the case records, the Notion summaries or the Slack messages in a machine-readable way.
- **Required state:** Marking that is effective, interoperable, robust and reliable as far as technically feasible. The Commission's Code of Practice on Transparency of AI-Generated Content (June 2026) is the reference for showing compliance.
- **Remediation:** Store an "AI-generated" field, the model name and the date with every case record and summary; add an "AI-generated" label to every Notion summary and Slack message; apply the Code's measures for text.
- **Escalation needed?** Yes: an AI Act specialist, to confirm which technique is enough for internal text.

### Gap 3
- **Obligation:** Art. 6(2) and Annex III point 4(b): AI used to monitor or evaluate the performance and behaviour of workers, or to allocate tasks based on their behaviour, is high-risk. The tier depends on the intended purpose (Art. 3(12)). If the company later uses the system that way, it changes the intended purpose and becomes the provider of a high-risk system (Art. 25(1)(c)).
- **Current state:** No name or login is asked for. But each case records the department and the employee's feedback, the description can contain names, and the brief sets no limit on how this data may be used.
- **Required state:** A documented classification showing why the system is not high-risk, and stated limits that keep it there.
- **Remediation:**
  1. Write a one-page intended-purpose statement: "for process and tool improvement; not for monitoring, evaluating or allocating tasks to individuals or teams".
  2. Show department figures only for groups of at least 5 people.
  3. Keep the Phase 2 classification on file and re-check it before any new report that summarises by department.
  4. If it is ever reclassified as high-risk, plan for the Annex III duties from 2 Dec 2027, including informing workers' representatives before use (Art. 26(7)).
- **Escalation needed?** Yes: an AI Act specialist, because the boundary depends on use, not code.

### Gap 4
- **Obligation:** Art. 4, as amended by the Digital Omnibus: providers and deployers must take measures to support the AI literacy of staff and others who operate and use AI systems on their behalf.
- **Current state:** The brief describes no training for employees, the AI enablement team, the AI Governance Board or the workflow owner.
- **Required state:** Proportionate, documented literacy measures. No specific level has to be guaranteed.
- **Remediation:** A 15-minute onboarding for employees (what it does, what the confidence score means, when to check sources); a briefing for the Board on reviewing red cases; a short runbook for the workflow owner; a record of who completed each.
- **Escalation needed?** No.

### Gap 5
- **Obligation:** Art. 53(1)(b): providers of general-purpose AI models must give downstream providers the information they need to understand the model's capabilities and limits and to meet their own AI Act duties. Fix My Process is a downstream provider building on OpenAI's model.
- **Current state:** The brief names OpenAI and Cohere but no record of their model documentation or the model versions used.
- **Required state:** The model information kept with the system's documentation, so its limits can be explained to users and the Board.
- **Remediation:** Keep links to OpenAI's and Cohere's model documentation and usage policies in the repository, record the model versions, and update the record when a model changes.
- **Escalation needed?** No.

### Gap 6
- **Obligation:** For limited-risk systems, human oversight (Art. 14) and accuracy (Art. 15) are not mandatory. Art. 95 encourages providers to apply these high-risk requirements voluntarily through codes of conduct. Here it matters because the green, amber or red flag is advice about what the AI rules allow, and employees act on it.
- **Current state:** No human reviews the report before the employee acts. Green cases get no review, amber cases are posted for information only, and only red cases get a Board decision, after the report is out. A confidence score is shown, but nothing in the brief makes the flag a legal check.
- **Required state:** A proportionate human check where the AI says "allowed with conditions", and users who know the flag is guidance.
- **Remediation:** Send amber cases to the Board for a decision; add "This is guidance, not legal advice" to the flag; review a sample of green cases each month.
- **Escalation needed?** No: AI Governance Board decision.

---

## For information only: other laws (outside this audit's scope)

These are not assessed here and need their own review. They are listed so the AI Act findings are not read as the whole compliance picture.

| Area | Point raised by the brief | Owner |
|---|---|---|
| GDPR | Free text can contain names; case data is handled by about ten third-party tools, some outside the EU; the brief names no privacy notice or retention period (12 months proposed) | Data protection officer |
| German works council law (BetrVG §87(1) no. 6) | An employer-provided AI tool that records department and feedback will likely need works council involvement | Works council, employment lawyer |

## Sources

- Art. 50 text: https://ai-act-law.eu/article/50/
- Art. 50 in force since 2 Aug 2026, grace period for Art. 50(2): https://www.potterclarkson.com/news/eu-ai-act-article-50-new-ai-transparency-rules
- Code of Practice on Transparency of AI-Generated Content: https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
- Annex III point 4 and the Commission's draft high-risk guidelines (workplace): https://www.faegredrinker.com/en/insights/publications/2026/6/draft-commission-guidelines-on-high-risk-ai-implications-for-the-workplace
- Digital Omnibus in force, Annex III deadline 2 Dec 2027: https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-high-risk-deadline-omnibus-20260/
- Art. 4 after the Digital Omnibus: https://www.lewissilkin.com/insights/2026/07/27/the-digital-omnibus-on-ai-enters-into-force-today-102nedo
- GPAI Code of Practice signatories (OpenAI, Cohere): https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai
