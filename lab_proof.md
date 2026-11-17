# Lab Proof: Audit Your Own Project (Fix My Process, Project 3)

**Author:** Ayhan Demir · Ironhack AI Consulting & Integration Bootcamp · 17 Nov 2026
**System audited:** Fix My Process, my Project 3, as described in the system brief
**Result in one line:** **limited risk** under the EU AI Act (Art. 50 transparency + Art. 4 AI literacy), not prohibited, not high-risk; 9 gaps found, 6 need external review.

## Start here

| Phase | File | Outcome |
|---|---|---|
| 1. System brief | [01_system_brief.md](01_system_brief.md) | 497 words, answers the 7 Kick-off questions |
| 2. Risk tier | [02_risk_classification.md](02_risk_classification.md) | Limited risk; ambiguity with Annex III 4(b) flagged for legal review |
| 3. Role map | [03_role_map.md](03_role_map.md) | Provider, deployer and vendor groups with their obligations |
| 4. High-risk checklist | Skipped | Not high-risk, as the lab brief allows (reason in Phase 2) |
| 5. Gap analysis | [05_gap_analysis.md](05_gap_analysis.md) | 9 gaps: 2 AI Act transparency, 1 classification boundary, 3 GDPR, 1 works council, 1 AI literacy, 1 human review |
| 6. Compliance memo | [06_compliance_memo.md](06_compliance_memo.md) | One page for the Head of Product |

## Method

The audit works from the system brief only. Every statement about the system in Phases 2 to 6 can be traced to a line in [01_system_brief.md](01_system_brief.md); everything else comes from the AI Act, the GDPR and German works council law. Where the brief is silent on a required control (privacy notice, retention, training), I treat the control as missing.

## The query: input, evidence, output

**Input:** the system brief ([01_system_brief.md](01_system_brief.md)).

**Query:** the Phase 2 classification questions, also used as my answers for the EU AI Act Compliance Checker.

**Evidence: brief fact → legal test → result**

| Brief says | Legal test | Result |
|---|---|---|
| Recommends approved tools for work processes; no name or login | Art. 5 prohibited practices | Not prohibited |
| Records department and feedback; outputs are advice and summaries, not decisions about people | Annex III point 4(b), employment | Not high-risk on its intended purpose; ambiguity flagged |
| Employees use it directly and get answers back | Art. 50(1) | Must tell users they are dealing with an AI |
| Produces generated text (fix report, use-case summary) | Art. 50(2) | Outputs must carry a machine-readable AI marker |
| Description can contain names; ten third-party tools handle the data | GDPR Art. 5, 25, 28, 44 to 46 | Data protection gaps |
| Employer-provided tool that records department and feedback | BetrVG §87(1) no. 6 | Works council must be involved |

**Final output:** first-pass tier **limited risk**, the role map, 9 gaps with remediation, and the compliance memo.

## Failure or limitation I hit

**The brief cannot settle the tier on its own.** Whether Fix My Process stays limited risk or becomes high-risk under Annex III 4(b) depends on how the company uses the department and feedback data, and the brief, rightly, describes what the system does, not how managers will use its records. The same gap shows up for the GDPR items: the brief says nothing about a privacy notice, retention or contracts. So I flagged the classification for legal review instead of forcing a single answer, and treated the missing controls as gaps.

## Assumptions

- The law is checked as of 17 Nov 2026, including the Digital Omnibus on AI (Regulation (EU) 2026/1744, in force 27 Jul 2026).
- All internal documents named in the brief are fictional. Kleinanzeigen does not use the system.
- This is a course assessment, not legal advice.
