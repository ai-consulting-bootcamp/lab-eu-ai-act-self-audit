# Lab Proof: Audit Your Own Project (Fix My Process, Project 3)

**Author:** Ayhan Demir · Ironhack AI Consulting & Integration Bootcamp · 17 Nov 2026
**System audited:** Fix My Process, my Project 3 ([repo](https://github.com/ayhandemir7-LSSBB/project3-research-and-report) · [live app](https://fix-my-process.onrender.com))
**Result in one line:** **limited risk** under the EU AI Act (Art. 50 transparency + Art. 4 AI literacy), not prohibited, not high-risk; 11 gaps found, 6 need external review.

## Start here

| Phase | File | Outcome |
|---|---|---|
| 1. System brief | [01_system_brief.md](01_system_brief.md) | 497 words, answers the 7 Kick-off questions |
| 2. Risk tier | [02_risk_classification.md](02_risk_classification.md) | Limited risk; ambiguity with Annex III 4(b) flagged for legal review |
| 3. Role map | [03_role_map.md](03_role_map.md) | Provider / deployer / 6 vendor groups with obligations |
| 4. High-risk checklist | Skipped | Not high-risk, as the brief allows (reason in Phase 2) |
| 5. Gap analysis | [05_gap_analysis.md](05_gap_analysis.md) | 11 gaps: 2 AI Act transparency, 1 classification boundary, 4 GDPR, 1 works council, 1 AI literacy, 1 internal policy, 1 licences |
| 6. Compliance memo | [06_compliance_memo.md](06_compliance_memo.md) | One page for the Head of Product |
| Evidence | [evidence/](evidence/) | Report A and Report B from run FMP-3464 |

## 1. Code and workflow export

The audited system, unchanged for this lab:

- Main workflow (49 nodes): [`n8n_workflows/Fix My Process_ main.json`](https://github.com/ayhandemir7-LSSBB/project3-research-and-report/blob/main/n8n_workflows/Fix%20My%20Process_%20main.json)
- Error handler: [`n8n_workflows/Fix My Process - Error Handler.json`](https://github.com/ayhandemir7-LSSBB/project3-research-and-report/blob/main/n8n_workflows/Fix%20My%20Process%20-%20Error%20Handler.json)
- UI (no AI keys, calls n8n webhooks only): [`app.py`](https://github.com/ayhandemir7-LSSBB/project3-research-and-report/blob/main/app.py)

What I checked in the code for this audit: the only AI notice is the footer in `app.py` ("Your report is AI-generated: check the sources before you act."); the name warning is input hint text in `app.py` and a notice in `ui_style.py`; there is no login and no deletion step.

## 2. One run: input, evidence, output

**Run:** FMP-3464, 11 Nov 2026, Gradio form on the live app.

**Input**

| Field | Value |
|---|---|
| Department | Other |
| Problem | "After each team retro we have 50 or more anonymous sticky notes. Grouping them into themes and drawing a simple process map by hand takes about an hour. There are no names on the notes, and the team reviews the result together." |
| Tools used today | (none given) |
| How often | Weekly |

**Evidence the system produced**

- Compliance: **GREEN** (rules G1, G2, G3, G5 of the fictional AI policy KA-AI-POL-001), no review needed
- Confidence: **Medium (68%)**; quality inputs rerank 0.614, groundedness 1
- Internal sources: KA-AI-TOOLS-002 section 3 and Annex A; KA-AI-POL-001 section 5.1
- Web sources: theagilecompany.org, post-it.com, miro.com
- Stored: one Airtable row (department, problem, tools, compliance, confidence, both reports, feedback "both methods are nice") and one Notion page

**Final output**

- Report A (employee): use Miro AI, request access first, keep personal data out of the notes; "Is it allowed?" green. [evidence/FMP-3464_report_A_employee.pdf](evidence/FMP-3464_report_A_employee.pdf)
- Report B (AI enablement team): use case "Streamlining Feedback Organization", effort Low, impact Medium, two improvement ideas. [evidence/FMP-3464_report_B_use_case.pdf](evidence/FMP-3464_report_B_use_case.pdf)

**What this run shows for the audit**

| Audit question | Seen in FMP-3464 | Phase |
|---|---|---|
| Is the user told it is AI? | Only in the footer, after the report | Gap 1 |
| Is the output marked as AI-generated in storage? | No marker in Airtable or Notion | Gap 2 |
| What personal data is kept? | Department, free text, feedback; no name in this case, but nothing would stop one | Gaps 3 to 5 |
| Does a human check green answers? | No | Gap 10 |

## 3. Failure and limitation I hit

**Failure (found in the evidence):** in FMP-3464, **Report A** tells the employee "Approved external alternative: Miro... 1. Sign up for Miro", while **Report B**, the record the AI enablement team and the Board see, says "External answer: None". The employee got advice that the governance record does not show, on a green case that no human checks. Signing up for an external account is also the kind of step the policy wants to control. Fix: a code check that both reports name the same tools (Gap 10).

**Limitation (of the method):** the risk tier cannot be settled from the code alone. Whether it stays limited risk or becomes high-risk under Annex III 4(b) depends on how the company uses the department and feedback data. So I flagged it for legal review instead of forcing a single answer (Phase 2).

**Compliance Checker:** my answers and the expected result (Art. 50 transparency and Art. 4, no high-risk obligations) are in Phase 2. The checker is a beta tool and cannot see how the company will use the data, which is exactly where the classification is uncertain.

## 4. Assumptions

- The law is checked as of 17 Nov 2026, including the Digital Omnibus on AI (Regulation (EU) 2026/1744, in force 27 Jul 2026).
- All internal documents (AI policy, tools list, works council agreement, past projects) are fictional and written for Project 3. Kleinanzeigen does not use the system.
- This is a course assessment, not legal advice.
