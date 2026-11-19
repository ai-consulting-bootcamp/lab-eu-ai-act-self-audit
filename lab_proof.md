# Lab Proof: Audit Your Own Project (Fix My Process, Project 3)

**Author:** Ayhan Demir · Ironhack AI Consulting & Integration Bootcamp · 19 Nov 2026
**System audited:** Fix My Process, my Project 3, as described in the system brief
**Scope:** EU AI Act (Regulation (EU) 2024/1689 as amended by Regulation (EU) 2026/1744). Other laws are noted for information only.
**Result in one line:** **limited risk** (Art. 50 transparency + Art. 4 AI literacy), not prohibited, not high-risk; 6 AI Act gaps, 2 need specialist review.

## Start here

| Phase | File | Outcome |
|---|---|---|
| 1. System brief | [01_system_brief.md](01_system_brief.md) | 497 words, answers the 7 Kick-off questions |
| 2. Risk tier | [02_risk_classification.md](02_risk_classification.md) | Limited risk; ambiguity with Annex III 4(b) flagged for review |
| 3. Role map | [03_role_map.md](03_role_map.md) | Provider, deployer and vendors with their AI Act obligations |
| 4. High-risk checklist | Skipped | Not high-risk, as the lab brief allows (reason in Phase 2) |
| 5. Gap analysis | [05_gap_analysis.md](05_gap_analysis.md) | 6 AI Act gaps: Art. 50(1), 50(2), Annex III 4(b) boundary, Art. 4, Art. 53 information, voluntary oversight (Art. 95) |
| 6. Compliance memo | [06_compliance_memo.md](06_compliance_memo.md) | One page for the Head of Product |

## Method

The audit works from the system brief only. Every statement about the system in Phases 2 to 6 can be traced to a line in [01_system_brief.md](01_system_brief.md); everything else comes from the EU AI Act. Where the brief is silent on a required control (AI notice before first use, machine-readable marking, training), I treat the control as missing.

## The query: input, evidence, output

**Input:** the system brief ([01_system_brief.md](01_system_brief.md)).

**Query:** the Phase 2 classification questions, also used as my answers for the EU AI Act Compliance Checker.

**Evidence: brief fact → AI Act test → result**

| Brief says | AI Act test | Result |
|---|---|---|
| Recommends approved tools for work processes; no name or login | Art. 5 prohibited practices | Not prohibited |
| Records department and feedback; outputs are advice and summaries, not decisions about people | Art. 6(2), Annex III point 4(b) | Not high-risk on its intended purpose; ambiguity flagged |
| Employees use it directly and get answers back | Art. 50(1), 50(5) | Users must be told up front they are dealing with an AI |
| Produces generated text (fix report, use-case summary) | Art. 50(2) | Outputs need a machine-readable AI marker |
| Used by employees, the AI enablement team and the Board | Art. 4 | AI literacy measures needed |
| Built on OpenAI and Cohere models | Art. 53(1)(b) | Model information to keep on file |
| No human review before the employee acts | Art. 14, 15 (high-risk only), Art. 95 | Not mandatory; voluntary oversight recommended |

**Final output:** first-pass tier **limited risk**, the role map, 6 AI Act gaps with remediation, and the compliance memo.

## Failure or limitation I hit

**The brief cannot settle the tier on its own.** Whether Fix My Process stays limited risk or becomes high-risk under Annex III 4(b) depends on how the company uses the department and feedback data, and the brief, rightly, describes what the system does, not how managers will use its records. So I flagged the classification for specialist review instead of forcing a single answer, and made the written intended purpose a gap to close (Gap 3).

## Assumptions

- The law is checked as of 19 Nov 2026, including the Digital Omnibus on AI (in force 27 Jul 2026).
- All internal documents named in the brief are fictional. Kleinanzeigen does not use the system.
- This is a course assessment, not legal advice.
