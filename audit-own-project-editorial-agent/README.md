# Audit your own project — EU AI Act self-audit of an Editorial Research Agent

**Student:** Jaime Garate Marquerie · Ironhack AI Consulting, Week 7
**Project audited:** Project 3, an Editorial Research Agent for Independent Bookshops ([repository](https://github.com/jaimegmarquerie-ui/proyecto3-agente-editorial), commit `3939562`)

**Start here:** [`lab_proof.md`](lab_proof.md)

## File map
| File | Lab phase | Content |
|---|---|---|
| [`lab_proof.md`](lab_proof.md) | Submission entry point | Workflow, one real run (input, evidence, output), one failure, Compliance Checker result |
| [`system_brief_editorial_research_agent.md`](system_brief_editorial_research_agent.md) | Phase 1 | Plain-language description of the system (488 words) |
| [`ai_act_risk_classification_and_role_map.md`](ai_act_risk_classification_and_role_map.md) | CFU 1–3 · Phases 2–4 | Classification table, justification, role map, applicable obligations |
| [`gap_analysis_and_remediation_plan.md`](gap_analysis_and_remediation_plan.md) | CFU 4–5 · Phase 5 | 8 gaps with current state, requirement, evidence, remediation, owner and escalation |
| [`compliance_memo_head_of_product.md`](compliance_memo_head_of_product.md) | Phase 6 | One-page memo for a non-technical Head of Product |

## Rubric map ([`rubric.md`](../rubric.md) of `ai-consulting-bootcamp/lab-eu-ai-act-self-audit`)
| Rubric # | Criterion | Where |
|---|---|---|
| 1, 4, 11 | System brief and Phase 1 | `system_brief_editorial_research_agent.md` |
| 5, 12 | Risk tier with Article/Annex justification | `ai_act_risk_classification_and_role_map.md` §1–3 |
| 6, 13 | Role map with obligations per role | `ai_act_risk_classification_and_role_map.md` §4 |
| 7, 14 | Obligation checklist (high-risk only) / transparency obligations | `ai_act_risk_classification_and_role_map.md` §5. The 11-item checklist is skipped because the system is not high-risk; Article 50 is addressed |
| 2, 8, 15 | Specific gap analysis | `gap_analysis_and_remediation_plan.md` |
| 3, 9 | Remediation for each gap | `gap_analysis_and_remediation_plan.md` |
| 10, 16 | One-page compliance memo | `compliance_memo_head_of_product.md` |

**Submission layout:** this folder is added to the root of a fork of `ai-consulting-bootcamp/lab-eu-ai-act-self-audit`, next to the original `README.md`, `instructions.md` and `rubric.md`, which are left unchanged. A pull request is then opened back to the original repository.

## Result in one line
**Minimal risk** on a first pass, with an open Article 50(2) question about marking AI-written text, and three priority issues:
1. Free-tier AI service used with personal data.
2. AI-written or wrongly "verified" content.
3. Personal and copyrighted data stored and published without rules.

This is not a legal opinion.

## Optional parts
The Reinforce and Stretch tasks are not completed.

## How AI tools were used
Claude (Anthropic), acting as tutor, inspected the public repository, re-ran the automated tests on a clone and drafted these documents. The student reviewed and justified the conclusions. The underlying Project 3 code was written mostly by Codex (OpenAI) from the student's instructions.
