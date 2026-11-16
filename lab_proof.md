# Lab proof – Audit your own project (Vendor Due-Diligence Agent)

**Entry point for the reviewer.** This lab audits my Project 3, an AI agent that pre-screens vendors for compliance teams, against the EU AI Act.

## File map
| File | Contents |
|---|---|
| `lab_proof.md` | This page: entry point, the run, the evidence, the limitation |
| [`vendor-dd-agent_self-audit.md`](vendor-dd-agent_self-audit.md) | Phases 1–5: system brief, risk tier, role map, gap analysis, Reinforce |
| [`vendor-dd-agent_compliance-memo.md`](vendor-dd-agent_compliance-memo.md) | Phase 6: one-page memo to the Head of Product |
| [`vendor-dd-agent_human-oversight-procedure.md`](vendor-dd-agent_human-oversight-procedure.md) | Stretch: draft human oversight procedure |

## Code / workflow
Project 3 repo: [link to vendor-dd-agent repo]. It's a LangGraph pipeline with 10 steps:
1. `validate_input`
2. `resolve_entity` (GLEIF, KvK)
3. `screen_sanctions` (OpenSanctions, fuzzy match)
4. router: hit goes to enhanced review, otherwise standard
5. `standard_review` / `enhanced_review` (ReAct agent: news and guidance search)
6. `assess_risk` (LLM rating, plus a minimum rating set in code)
7. `write_report`
8. `check_report` (numbers and sources)
9. one rewrite if the check fails
10. `save_report`

Workflow diagram: [link or image].

## One run
- **Input:** `python main.py "ING Groep"`
- **Evidence produced:**
  - GLEIF match → KvK 33231073 → KvK profile
  - 0 sanctions hits → standard review
  - adverse media: the 2018 AML settlement (€775M)
  - LangSmith trace: [link / screenshot]
- **Final output:** `reports/ING_Groep_2026-11-11.md`
  - rating: [fill in]
  - recommendation: [fill in]
- **What the audit-trail section (section 8) shows:** the code caught four LLM errors in this one run.
  - an unverified amount, removed by the number check
  - two cited guidance pages that were never retrieved
  - one settlement counted as two red flags

## Failure / limitation
- **Failure caught by a safeguard.** The first draft summed fines to "€1.475 billion", despite a prompt rule against it. The number check rejected the draft and the rewrite passed. LangSmith shows `amounts not found in the evidence: ['€1.475 billion', '$1.682 billion']`.
- **Open limitation, relevant to this audit.** The agent can't tell a perpetrator from a victim. ASML and Heineken were flagged "Medium" for crimes committed against them. That is Gap 2 in the self-audit: an accuracy and third-party harm issue under GDPR, not an AI Act tier issue.

## Conclusion
The system is **minimal risk** under the EU AI Act. The main gaps are under GDPR: criminal-offence data, transparency to the people screened, US transfers and logging, and accuracy. See the memo for next steps.
