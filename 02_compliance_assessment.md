# Phases 2–5 – Compliance Assessment: Job Application Prep Agent

## Phase 2 – Risk tier classification

| Question | Answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | **No.** No manipulative techniques, no exploitation of vulnerabilities, no social scoring, no biometric processing, no emotion recognition. The CV photo is passed along as part of the document, but nothing identifies or categorises people from it. |
| Does this system operate in any of the eight Annex III areas? | **Close to one, but not in it.** Annex III 4(a) covers AI used *for recruitment or selection*: targeting job ads, analysing and filtering applications, evaluating candidates. This tool works for the **applicant**, not for whoever decides on the application. It doesn't filter, rank or evaluate anyone for a hiring decision. |
| If Annex III: does it "significantly influence" decisions in that area, or is it narrow/preparatory? | Not applicable. It influences only how the applicant presents themselves. The employer's decision stays entirely with the employer. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | **Yes, partly.** (1) It generates synthetic text (the cover letter), so as provider I may need to mark its output in a machine-readable way under **Art. 50(2)**. The "assistive function for standard editing" exception doesn't fit, because the letter is newly written, not lightly edited. (2) Users interact with it directly, but they knowingly open an AI tool, so the Art. 50(1) disclosure is arguably "obvious from the context". A one-line notice still costs nothing. |
| **First-pass risk tier** | **Limited risk / transparency** (Art. 50(2)). Without the text-marking question it would be minimal risk. |
| One-sentence justification | It's not an Art. 5 practice and not Annex III 4(a), because it serves the applicant rather than evaluating candidates; the only AI Act duty is Art. 50(2) marking of AI-generated text, which falls on me as the provider of a system that generates text. |

**Ambiguity to flag for legal review:**
- **Downstream builder or model provider?** Does Art. 50(2) bind me as the builder of a downstream app, or is it satisfied by the general-purpose model provider's own marking? A lawyer should confirm. The Digital Omnibus on AI also changed the transition period for Art. 50(2) marking, so the application date should be checked.
- **Tier changes with use.** The tier changes completely if the deployer uses the tool on the *other* side of the market. If a recruitment agency used the "CV vs. job posting" comparison to judge which candidates fit a vacancy, it would be Annex III 4(a) and therefore high-risk.

## Phase 3 – Role map

| Role | Entity | Key AI Act obligations |
|---|---|---|
| **Provider** | **Nicolò**: developed the custom n8n system and would make it available under his name | Art. 50(2): machine-readable marking of generated text, as far as technically feasible. Art. 50(1): design it so users know it's AI (light here). Clear instructions on intended use, including that it isn't for candidate selection. Art. 4 AI literacy (its scope was changed by the Omnibus, so check what remains). |
| **Deployer** | **CareerBridge**: uses the system professionally with its coaches and candidates | Use it within its intended purpose. If it ever repurposed the tool to assess candidates, it could become a provider of a high-risk system (Art. 25). Art. 50(4) doesn't apply: cover letters aren't text published to inform the public. |
| **Vendor: AI model** | Third-party LLM provider (via API) | General-purpose AI model provider duties (Chapter V, Art. 53): technical documentation, information for downstream providers, copyright policy, training-data summary. These sit with the vendor, not with me. |
| **Vendor: platform** | n8n | Not an AI provider. A workflow tool and a **GDPR processor** for the execution data it stores. |

## Phase 4 – Obligation checklist (high-risk only)

**Skipped.** The system isn't high-risk (see Phase 2), so the 11 provider obligations in Art. 9–72 don't apply. They would apply in full if a deployer used the tool to evaluate candidates for employers. That's why Gap 6 below adds a use restriction.

## Phase 5 – Gap analysis and remediation

Because the system isn't high-risk, the gaps below cover the transparency duty and the parallel legal issues (GDPR and consumer protection) that still apply.

**Gap 1 – Machine-readable marking of AI text**
- **Obligation:** Art. 50(2), marking of synthetic text.
- **Current state:** the cover letter is returned as plain text with no marking or metadata.
- **Required state:** outputs are marked in a machine-readable format and detectable as AI-generated, as far as technically feasible.
- **Remediation:** export the letter as a document with an "AI-generated draft" metadata field. Use the model vendor's provenance or marking features where they exist. Add a visible "AI-drafted, review before sending" header in the interface.
- **Escalation needed?** **Yes, a lawyer:** on the scope of Art. 50(2) for downstream builders, and the transition date.

**Gap 2 – No AI notice at the entry point**
- **Obligation:** Art. 50(1), plus good practice.
- **Current state:** the form doesn't say that a third-party AI model processes the CV.
- **Required state:** users know they're using an AI system, unless that's obvious.
- **Remediation:** add a one-line notice on the form, plus a link to the transparency notice (see the Stretch file).
- **Escalation needed?** No.

**Gap 3 – Too much personal data sent to the model**
- **Obligation:** GDPR Art. 5(1)(c), data minimisation. Art. 9 if the photo or nationality reveals special-category data.
- **Current state:** the full CV text goes into the prompt, including date of birth, photo-related content, nationality and home address.
- **Required state:** only the data the purpose needs.
- **Remediation:** add a pre-processing node that strips the photo, date of birth, address, nationality and marital status before the LLM call. Keep only work history, education and skills.
- **Escalation needed?** **Yes, a DPO**, to confirm the legal basis and the special-category handling.

**Gap 4 – Transfer to a US-based model vendor**
- **Obligation:** GDPR Art. 28 (processor contract) and Chapter V (international transfers).
- **Current state:** an API call with default settings. No data-processing agreement is documented, and the vendor's data retention is unclear.
- **Required state:** a signed DPA, a valid transfer mechanism, and no use of the data for training.
- **Remediation:** use an enterprise or API tier with a DPA, EU data residency or zero-data-retention where offered, and record it in the processing register.
- **Escalation needed?** **Yes, DPO and legal.**

**Gap 5 – CVs kept in workflow logs**
- **Obligation:** GDPR Art. 5(1)(e), storage limitation.
- **Current state:** n8n saves the full execution data, including CV text and outputs, according to its execution-retention settings.
- **Required state:** CVs are deleted once the outputs are delivered.
- **Remediation:** turn off saving of successful-execution data for this workflow, or set automatic pruning to a short window. Document the retention period in the transparency notice.
- **Escalation needed?** No.

**Gap 6 – No guardrail against misuse for candidate selection**
- **Obligation:** avoiding an Annex III 4(a) reclassification (Art. 6, Art. 25).
- **Current state:** nothing stops a deployer from feeding in many CVs to compare candidates against a vacancy.
- **Required state:** the intended purpose is clearly documented and enforced.
- **Remediation:** an intended-use clause in the terms and instructions ("for job seekers' own applications only; not for screening or ranking candidates"). Process one CV per run, and don't output a fit score.
- **Escalation needed?** **Yes, a lawyer**, to draft the use restriction.

**Gap 7 – Invented details in the cover letter**
- **Obligation:** not an AI Act duty for this tier (Art. 15 accuracy applies only to high-risk systems). It does create consumer-protection and reputational risk for the user, and for CareerBridge.
- **Current state:** the prompt asks the model not to invent facts, but nothing checks it.
- **Required state:** every claim in the letter is backed by the CV.
- **Remediation:** add a second LLM step that lists each factual claim in the letter and checks it against the CV, flagging anything unsupported before the output is shown.
- **Escalation needed?** No.

## Reinforce

- **A component I'd minimised:** the agent's web search on the employer and the CV feedback both make *inferences*. The CV suggestions can implicitly comment on age (graduation years), career gaps or nationality. That doesn't change the AI Act tier, but it raises the GDPR and fairness exposure. It's another reason to strip those fields (Gap 3) and to tell the model not to comment on protected characteristics.
- **A design decision that created a compliance burden:** I passed the whole CV document straight into the prompt because it was quickest to build. With hindsight I'd have parsed the CV into structured fields first (roles, dates, skills) and sent only those. That would have closed Gaps 3 and 4 at the design stage and made Gap 7's fact-check much easier.
