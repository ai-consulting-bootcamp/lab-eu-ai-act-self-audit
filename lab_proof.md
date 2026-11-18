# lab_proof.md – LAB | Audit your own project (Week 7, EU AI Act)
**Author:** Murat Çömez · **System audited:** my Project 3, the RCSA Evidence & Challenge Agent (Python, LangGraph, OpenAI API)

## File map
| File | What it contains |
|---|---|
| [`system_brief_rcsa_evidence_challenge_agent.md`](system_brief_rcsa_evidence_challenge_agent.md) / [`.pdf`](system_brief_rcsa_evidence_challenge_agent.pdf) | Phase 1: system brief (also sent to my teammate for the peer audit) |
| [`self_audit_rcsa_eu_ai_act.md`](self_audit_rcsa_eu_ai_act.md) | Phases 2–5: classification, role map, high-risk check, 5 gaps with remediation, reinforce |
| [`03_compliance_memo_head_of_product.md`](03_compliance_memo_head_of_product.md) | Phase 6: one-page compliance memo |
| [`04_stretch_human_oversight_procedure.md`](04_stretch_human_oversight_procedure.md) | Stretch: human oversight procedure closing Gap 3 |

## 1. Workflow
Brief → Art. 5 check → Annex III check (+ Art. 6(3)) → Art. 50 check → EC Compliance Checker cross-check → role map → gaps → remediation → memo.

## 2. One run – input
Brief §1/§4: the agent flags when "an owner marks a risk not applicable but a loss event shows it happened", and each answer is linked to a named process owner.

## 3. Evidence it produced
- Not Art. 5; Annex III 4(b) (worker evaluation) **close but not met** by intended purpose; Art. 6(3) profiling rule means any per-person use = high-risk.
- Art. 50(2) applies because the LLM generates the report and challenge text.

## 4. Final output
**Tier:** limited risk / transparency, not high-risk. **Top gaps:** AI output not marked (Art. 50(2)); intended purpose not locked against employee evaluation; human approval not enforced or logged; data sent to OpenAI without GDPR/DORA checks. Memo: [`03_compliance_memo_head_of_product.md`](03_compliance_memo_head_of_product.md).

## 5. Failure or limitation
**Blind spot as the builder:** I first described OpenAI as "writing the report", but in my design it also decides whether a loss event contradicts the owner's answer. I had minimised the AI's role in my own brief. A second limitation: the boundary between assessing a process and evaluating its owner is a legal judgement I cannot close myself, so it is escalated.
