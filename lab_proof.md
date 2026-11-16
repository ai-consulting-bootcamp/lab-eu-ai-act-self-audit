# Lab Proof – Audit Your Own Project (EU AI Act)

**Student:** Nicolò · **System audited:** Project 3, the Job Application Prep Agent (n8n) · **Date:** 16 Nov 2026

This file is the entry point for the reviewer.

## File map

| File | What it contains | Lab phase |
|---|---|---|
| [01_system_brief.md](01_system_brief.md) | Plain-language description of what the system does, its inputs, outputs, affected people, human review, builder and users | Phase 1 |
| [02_compliance_assessment.md](02_compliance_assessment.md) | Risk-tier table, role map, high-risk checklist (skipped, with reason), seven gaps with remediation, Reinforce answers | Phases 2–5 + Reinforce |
| [03_compliance_memo.md](03_compliance_memo.md) | One-page memo to the client's Head of Product | Phase 6 |
| [04_stretch_transparency_notice.md](04_stretch_transparency_notice.md) | Draft transparency notice closing the most significant gap | Stretch |
| [project3_workflow_export.json](project3_workflow_export.json) | The n8n workflow being audited | Workflow export |

## 1. Workflow export

The audited system is the n8n workflow in `project3_workflow_export.json`:

1. Form trigger (job URL + CV)
2. HTTP fetch of the job posting
3. CV text extraction
4. AI agent with a web-search tool
5. Output formatting (prep brief, CV suggestions, cover letter)

The audit itself followed the lab order: system brief → tier classification → role map → obligations → gaps → memo.

## 2. One run: input → evidence → output

**Input:** the system brief (`01_system_brief.md`), run through the Phase 2 classification questions and then cross-checked with the European Commission's EU AI Act Compliance Checker (AI Act Service Desk).

**My first-pass answers:**
- Art. 5 prohibited practice? **No.**
- Annex III area? **No.** It's near 4(a) recruitment, but the tool serves the applicant and doesn't evaluate candidates for a decision-maker.
- Art. 50? **Yes.** It generates text, so Art. 50(2) marking applies. The Art. 50(1) user disclosure is arguably obvious from context.

**Evidence – Compliance Checker cross-check:** *(fill in after running the checker at https://ai-act-service-desk.ec.europa.eu/en/eu-ai-act-compliance-checker)*
- Role selected:
- Checker's result / obligations listed:
- Agrees with my classification? Yes / No. Where it differed:

**Final output:**
- **Tier:** limited risk / transparency (Art. 50(2)).
- **Role map:** Nicolò = provider · CareerBridge = deployer · LLM vendor = general-purpose AI model provider.
- **Top gaps:** AI-text marking, personal-data minimisation and transfer to the model vendor, and CV retention in n8n logs.

See [03_compliance_memo.md](03_compliance_memo.md).

## 3. Failure / limitation

- **The tier depends on intended use, not on the code.** The same workflow pointed the other way, by a recruiter comparing many CVs against one vacancy, would be high-risk under Annex III 4(a). The audit can only classify the documented purpose, so I added a use restriction (Gap 6) instead of relying on the classification alone.
- **One duty can't be settled by me.** Whether Art. 50(2) marking falls on me as a downstream builder, or is met by the model vendor's own marking, isn't something I can resolve. It's flagged for legal review, together with the transition date changed by the Digital Omnibus on AI.
