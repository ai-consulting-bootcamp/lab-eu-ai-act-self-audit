# EU AI Act Self-Audit – RCSA Evidence & Challenge Agent
**Author / builder:** Murat Çömez · **Date:** 17 Nov 2026 · **Basis:** [system brief](system_brief_rcsa_evidence_challenge_agent.md)

## Phase 2 – Risk tier classification

| Question | My answer |
|---|---|
| Does this system fall under any prohibited category (Art. 5)? | **No.** No manipulation, social scoring, emotion recognition, biometric categorisation or predictive policing. It assesses processes and controls, not people. |
| Does it operate in any of the eight Annex III areas? | **Not by intended purpose.** The closest area is **4(b), employment / worker management**: monitoring and evaluating the performance and behaviour of workers. The system challenges answers given by named process owners, but its purpose is to assess **process risk**, not to evaluate the employee. It is not credit scoring (5(b)) and not critical infrastructure (2): it supports internal risk management and is not a safety component of a payment system. |
| If Annex III: significant influence or narrow/preparatory? | Not applicable as designed. If a bank used challenge flags to rate owners (e.g. "owner X's answers were contradicted 8 times"), it would move into 4(b). Because that would be **profiling** of workers, Art. 6(3) would not allow an exit, so that use must be excluded by design. |
| Does it interact with end users or generate content requiring disclosure (Art. 50)? | **Yes, Art. 50(2):** the LLM generates synthetic text (risk suggestions, challenge explanations, report narrative), so the provider must mark outputs as AI-generated in a machine-readable way. **Art. 50(1):** the process owner interacts with the system. For trained bank staff using an internal RCSA tool, AI involvement is arguably obvious, but a clear notice costs nothing. |
| **First-pass risk tier** | **Limited risk / transparency** (Art. 50(2)); otherwise minimal. Not high-risk. |
| One-sentence justification | The agent supports operational risk assessment of business processes, so it falls outside Art. 5 and Annex III by intended purpose, but it generates text with an LLM and therefore carries the Art. 50(2) marking obligation. |

**Ambiguity flagged for legal review:** the line between "assessing a process" and "evaluating the employee who owns it" (Annex III 4(b)). This is resolved by a documented intended purpose plus a technical and contractual ban on HR use of the challenge data.

**Cross-check – EU AI Act Compliance Checker (18 Nov 2026):** result **"Out of scope – likely outside the scope of the EU AI Act (Article 2)"**. Screenshot: [`eu_ai_act_compliance_checker_result.png`](eu_ai_act_compliance_checker_result.png)

**Why the Checker differs from my classification:** the Checker assessed the system **as it is today**: a bootcamp prototype, run locally on synthetic data, not placed on the market or put into service. Under **Art. 2(8)**, AI systems in research, testing or development before market placement are excluded from the Act, so "out of scope" is correct for the MVP. My classification (limited risk, Art. 50(2)) assesses the **intended production use**, where a vendor or bank puts the agent into service with real users. The two results do not contradict each other; they answer different questions. **Conclusion:** no AI Act obligations today; the obligations in this audit apply the moment the agent is offered to or used by a bank. Art. 2(8) also states that real-world testing is not covered by the exclusion, so a pilot with real bank staff would bring it into scope.

## Phase 3 – Role map

| Role | Entity | Key AI Act obligations |
|---|---|---|
| **Provider** | Murat Çömez (builder); in production, the software vendor or consultancy offering the agent to banks under its name, or the bank itself if it builds it in-house | Art. 50(2) marking of AI output; Art. 4 AI literacy; documented intended purpose and instructions for use (good practice); reassess if the purpose changes. |
| **Deployer** | The bank (operational risk function and process owners using it professionally) | Art. 4 AI literacy for users; use within the intended purpose; Art. 50 disclosures to its own staff if the provider's UI does not cover them; no use for employee evaluation. |
| **Vendor** | OpenAI (GPAI model provider via API) | Its own Chapter V GPAI obligations (Art. 53: technical documentation, information for downstream providers, copyright policy). Under GDPR and DORA it is a processor and an ICT third-party service provider. |
| **Library** | LangGraph (open-source orchestration, run locally) | No AI Act role. If LangSmith tracing or a hosted LangGraph platform is used, it becomes a processor / ICT third party. |

## Phase 4 – High-risk obligation checklist
**Not applicable:** the system is not high-risk (see Phase 2). For transparency, the main design gaps if it were ever reclassified under Annex III 4(b) would be: no risk management file (Art. 9), no technical documentation (Art. 11), no logging of approvals (Art. 12), human oversight not enforced (Art. 14), and no conformity assessment, registration or post-market monitoring (Art. 43, 49, 72).

## Phase 5 – Gap analysis and remediation plan

**Gap 1 – AI-generated output not marked**
- **Obligation:** Art. 50(2) (applies from 2 Aug 2026)
- **Current state:** the report and challenge explanations are LLM text with no AI label or metadata.
- **Required state:** outputs marked as AI-generated in a machine-readable, detectable format.
- **Remediation:** add `generated_by: "AI (OpenAI <model>)"` and a timestamp to every JSON output, plus PDF/Markdown metadata. Show a visible line in the report: "Risk suggestions and challenge texts generated by AI; ratings require human approval."
- **Escalation needed?** No.

**Gap 2 – Intended purpose not documented; risk of drifting into Annex III 4(b)**
- **Obligation:** correct classification (Art. 6, Annex III 4(b)); provider responsibility for intended purpose (Art. 3(12))
- **Current state:** the brief says the tool is not designed to evaluate employees, but nothing stops a bank from aggregating challenge flags per owner.
- **Required state:** no use for monitoring or evaluating worker performance unless the system meets all high-risk requirements.
- **Remediation:** a one-page intended-purpose statement; report challenges **per process and risk, not per person**; no owner-level statistics or rankings in the UI; a clause in the licence or terms excluding HR use; the deployer involves its works council (BetrVG §87(1) Nr. 6).
- **Escalation needed?** **Yes, lawyer** (classification confirmation; works council question).

**Gap 3 – Human oversight is a design intention, not a control**
- **Obligation:** not mandatory under the AI Act for this tier, but required in practice by banking governance (MaRisk AT 4.3.2 / AT 7.2, EBA Guidelines on internal governance, model risk expectations) and to keep the tool out of automated decision-making.
- **Current state:** second-line review before ratings are accepted is not enforced or logged.
- **Required state:** no rating becomes final without a named reviewer's approval, with an audit trail.
- **Remediation:** an approval step in the workflow (LangGraph human-in-the-loop interrupt); log reviewer, timestamp, decision and override reason. See the [stretch procedure](04_stretch_human_oversight_procedure.md).
- **Escalation needed?** No.

**Gap 4 – AI literacy of users not addressed**
- **Obligation:** Art. 4 (applies since 2 Feb 2025, to provider and deployer)
- **Current state:** no user guidance on the limits of LLM risk suggestions (hallucination, missed risks, over-reliance).
- **Required state:** staff using the system have sufficient AI literacy for its context.
- **Remediation:** a two-page user guide and a 30-minute onboarding for process owners and second-line staff, with a record of completion.
- **Escalation needed?** No.

**Gap 5 – Parallel law: GDPR, DORA, outsourcing** (not AI Act obligations, but they block production use)
- **Current state:** loss event text, possibly with employee or customer data, is sent to OpenAI; no DPA, transfer check, ICT third-party assessment or outsourcing assessment.
- **Required state:** GDPR compliance (lawful basis, minimisation, DPIA likely; see the GDPR self-audit), a DORA ICT third-party register entry and risk assessment (DORA Art. 28), and a MaRisk AT 9 outsourcing analysis.
- **Remediation:** pseudonymise loss events before LLM calls; EU data residency or zero-retention API settings; vendor due diligence on OpenAI.
- **Escalation needed?** **Yes, DPO, information security / DORA officer and outsourcing officer.**

## Reinforce
- **Minimised component:** I described OpenAI as "writing the report", but it also **makes the judgement** about whether a loss event contradicts an owner's answer. That makes accuracy and explainability more important than the brief suggests, and means real loss-event text leaves the bank. The tier stays the same, but Gap 5 becomes more serious.
- **Design decision I would change:** I linked every RCSA answer to the named owner from the start. Linking answers to a **role** (e.g. "Head of Payments Ops") with the name stored only in the bank's RCSA tool would cut both the Annex III 4(b) drift risk and the GDPR exposure.
