# Intellectus — EU AI Act Assessment

## Assessment scope

This assessment covers Intellectus as it was actually built in Project 3 and the way it is intended to be used: as a consultant-facing system that turns available evidence into a structured starting point for a client conversation.

The assessment includes the research and evidence layer, the diagnostic and transformation workflows, the Intellectus web application, the n8n orchestration layer, the response validation logic and the final consultant-reviewed brief.

The current implementation already contains controls that matter from a compliance perspective. Evidence is separated from hypotheses and unknowns, demo evidence cannot be presented as client evidence, workflow inputs and outputs are schema-validated, the live and demo paths are separated, and the final output is intended to be reviewed by a consultant before client use.

This assessment does not assume that a working prototype is production-ready. Where the current design demonstrates the right control but does not yet make it durable or auditable, I classify it as a partial control rather than as an absent control.

---

## Phase 2 — Risk tier classification

| Question | Assessment |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | **No.** Intellectus does not use biometric identification, emotion recognition, social scoring, manipulative techniques or any of the other prohibited practices for its documented purpose. |
| Does this system operate in any of the Annex III high-risk areas? | **No for its intended use.** It supports organizational consulting and transformation work. It is not designed to decide access to employment, education, credit, essential services, law enforcement, migration, justice, critical infrastructure or other Annex III decisions concerning natural persons. |
| If Annex III: does it significantly influence decisions in that area, or is it narrow/preparatory? | **Not applicable to the current intended purpose.** If Intellectus were later repurposed to support a listed Annex III decision, the classification would need to be repeated. The existence of human review would not by itself remove a high-risk classification. |
| Does this system interact with users or generate content that may trigger Article 50? | **Potentially yes.** The intended production system provides AI-assisted analysis and generated diagnostic material to consultants. Depending on the final model and interaction design, Article 50 transparency and synthetic-content marking requirements may apply. |
| First-pass risk tier | **Limited risk / transparency**, subject to confirmation of the final production AI components and interaction model. |
| One-sentence justification | Intellectus does not perform a prohibited Article 5 practice or an Annex III high-risk use for its documented purpose, but its AI-assisted interaction and generation of diagnostic text make Article 50 the most relevant AI Act compliance layer. |

### Classification rationale

The important point is the intended purpose, not simply the fact that the product uses AI.

Intellectus supports a consultant in understanding an organization, identifying evidence gaps, preparing questions and structuring possible next steps. It does not make a binding decision about a natural person and does not determine eligibility, employment, admission, credit or access to an essential service.

Its output remains advisory. A consultant is expected to review evidence, challenge unsupported statements, add context and decide what is suitable for the final client brief.

For that reason, I would not classify Intellectus as high-risk on the facts of the current project.

The classification should nevertheless be treated as conditional. It would need to be reassessed if the product were later used to evaluate individuals, influence Annex III decisions, publish unreviewed public-interest material, or introduce a model or use case that materially changes the system's intended purpose.

---

## Phase 3 — Role map

| Role | Entity | First-pass AI Act position |
|---|---|---|
| Provider | The Project 3 team during the exercise; in production, the legal entity placing Intellectus into service under its own name | Defines intended purpose and product boundaries; documents the system and applicable role; implements provider-side transparency controls where required; maintains appropriate instructions and governance; reassesses the system after material changes. |
| Deployer | The consulting organization and the consultants using Intellectus professionally | Uses the system within its intended purpose; applies the human-review process; protects input data; keeps responsibility for consulting advice; follows disclosure, privacy and escalation requirements applicable to the use context. |
| Workflow vendor | n8n | Provides workflow-orchestration infrastructure. Its exact legal role depends on the production arrangement; it should not automatically be treated as the provider of the integrated Intellectus system. |
| AI / model vendor | Final production model provider — to be confirmed | Retains obligations attached to its own model or service. The Intellectus provider still has responsibility for the downstream product, its intended purpose and the way the model is integrated. |
| Research / extraction vendors | Final services — to be confirmed | Contract, data processing, retention, security, geographical processing and provider terms need to be assessed before production. |

No importer is identified in the current project. The role map should be revisited once the production legal entity, AI-model provider and hosting arrangement are fixed.

---

## Phase 4 — Applicable obligations

Intellectus is not classified as high-risk for its documented intended purpose, so the 11-item high-risk provider checklist is not applicable to this assessment.

The relevant AI Act issues are transparency, AI literacy and maintaining the intended-purpose boundary. GDPR, confidentiality, consumer-protection and information-security requirements remain relevant independently of the AI Act classification.

| Area | Status | Assessment |
|---|---|---|
| AI interaction transparency | **Partial** | The product is clearly presented as an intelligence and diagnostic tool, but the current documentation does not establish a mandatory, versioned notice shown at the relevant interaction point explaining where AI is used in the diagnostic process. |
| AI-generated content provenance | **Partial / conditional** | The system already records evidence and review status, but there is no complete production mechanism recording the origin and generation metadata of substantive AI-generated text. Applicability depends on the final AI component and Article 50 exceptions. |
| Human review | **Partial** | Human review is a real design feature, not an afterthought. However, the prototype does not yet make reviewer identity, corrections, approvals and overrides durable and auditable across sessions. |
| AI literacy | **Partial** | The product and documentation already teach users to distinguish evidence, inference, hypotheses and unknowns. A production deployment would still need a proportionate operating guide or training process for consultants using the system. |
| Intended-purpose control | **Partial** | The current purpose is narrow and documented, but there is not yet a formal production record defining allowed uses, prohibited repurposing and the trigger for regulatory reassessment. |
| Privacy and confidentiality | **Partial** | The current focus is public and organizational evidence, but public research can contain incidental personal data and future uploads could contain confidential or personal information. |
| Production security | **Gap before production** | The project documents several controls that would still be required before production, including authenticated access, stricter gateway controls, durable persistence and appropriate logging and retention. |

---

# Phase 5 — Gap analysis and remediation plan

## Gap 1 — Production AI-system inventory and intended-purpose record

- **Obligation / issue:** AI Act classification and role mapping depend on the actual system, its intended purpose and the components that perform AI inference.
- **Current state:** Intellectus has a documented product purpose and a functioning integrated workflow, but the final production model, research services, hosting arrangement and legal provider have not all been fixed.
- **Required state:** The organization should be able to identify which components use AI, what each one does, which data it receives, what it produces, which vendor provides it and which legal entity is responsible for the integrated product.
- **Remediation:** Create a versioned AI-system inventory covering each model or AI API, component owner, function, inputs, outputs, intended use, prohibited uses, data flow, deployment region and legal role. Trigger reassessment when a material component or use case changes.
- **Escalation needed?** **Yes — AI Act counsel** for final classification and provider/deployer confirmation.

---

## Gap 2 — User-facing AI transparency

- **Obligation / issue:** Article 50 transparency where the production configuration involves direct interaction with an AI system.
- **Current state:** The product positioning makes the use of intelligence and automation visible, but there is no formal control demonstrating that the relevant user receives a clear explanation of the AI-assisted nature of the diagnostic at the appropriate point.
- **Required state:** Where Article 50 applies, the user should receive clear, accessible information no later than the relevant first interaction.
- **Remediation:** Add a short disclosure during onboarding and within the diagnostic workspace. Keep the language practical rather than legalistic, for example: “Intellectus uses AI-assisted analysis to organise evidence and draft diagnostic findings. Outputs require consultant review before client use.” Store the notice version with the diagnostic run.
- **Escalation needed?** **No** for implementation; **legal review recommended** for final applicability and wording.

---

## Gap 3 — Provenance of AI-generated content

- **Obligation / issue:** Article 50(2), where applicable to the final production system.
- **Current state:** Intellectus already distinguishes evidence status and review status, which is a useful control, but those fields do not fully identify whether a piece of text was generated or transformed by an AI component.
- **Required state:** Where the marking obligation applies, the origin of synthetic output must be detectable in the manner required by the applicable technical framework.
- **Remediation:** Extend the output contract with generation provenance such as:

  - `content_origin`
  - `generator_component`
  - `model_version`
  - `generated_at`
  - `human_review_status`

  Preserve any provenance metadata supplied by the model provider through export and downstream processing.
- **Escalation needed?** **Yes — legal and technical review**, because the exact marking implementation depends on the final model, format and applicable exception.

---

## Gap 4 — Production-grade human-review control

- **Obligation / issue:** Responsible use and reliable client delivery. This is not presented as an Article 14 high-risk obligation because Intellectus is not classified as high-risk.
- **Current state:** Human review is already embedded in the product. The consultant reviews evidence, selects questions and next steps and marks the brief ready. The weakness is that this review is not yet a durable production control.
- **Required state:** A client-facing output should be traceable to an identified reviewer who has had a genuine opportunity to challenge, correct or reject unsupported findings.
- **Remediation:** Before export or client delivery, require a named consultant sign-off and record:

  - reviewer identity;
  - review timestamp;
  - corrections made;
  - unresolved evidence gaps;
  - overridden recommendation or finding;
  - override reason;
  - final approval status.

  The system should prevent a brief with unresolved critical evidence issues from being marked client-ready.
- **Escalation needed?** **No** for product implementation; approval criteria should be agreed with the product owner or compliance lead.

---

## Gap 5 — Personal data and confidentiality controls

- **Obligation / issue:** GDPR and confidentiality requirements apply independently from the AI Act risk tier.
- **Current state:** Intellectus primarily works with organizational and public information. This does not mean the data is automatically non-personal: public sources may contain names or other personal information, and future document uploads could introduce confidential or sensitive material.
- **Required state:** Production use should have defined rules for what data may be collected, why it is processed, how long it is retained, who may access it and how deletion or data-subject requests are handled.
- **Remediation:** Before enabling persistent uploads or client document storage:

  1. complete a data inventory and data-flow map;
  2. define permitted and prohibited inputs;
  3. apply minimisation and access controls;
  4. define retention and deletion periods;
  5. review processor agreements and vendor data-use terms;
  6. complete a DPIA screening.

- **Escalation needed?** **Yes — Data Protection Officer or privacy counsel.**

---

## Gap 6 — Production security and auditability

- **Obligation / issue:** Production governance and information security.
- **Current state:** The project has a functioning live integration and no credentials are committed to the repository. It also already identifies several limitations that remain before production.
- **Required state:** Production access and workflow execution should be authenticated, constrained, observable and recoverable without exposing sensitive input or output.
- **Remediation:** Introduce an authenticated backend or equivalent controlled gateway; restrict origins; apply rate and request-size limits; define redacted logging and retention; implement durable idempotency and failure handling; and document security ownership and incident escalation.
- **Escalation needed?** **Yes — engineering/security owner** before production launch.

---

## Gap 7 — AI literacy and appropriate-use boundaries

- **Obligation / issue:** Article 4 AI literacy.
- **Current state:** Intellectus already exposes useful concepts such as evidence status, hypotheses, unknowns and human review, but it does not yet define a formal operating standard for production users.
- **Required state:** Providers and deployers should take proportionate measures supporting the development of AI literacy for the people operating the system.
- **Remediation:** Create a short mandatory operating guide for consultants covering:

  - what Intellectus can and cannot conclude;
  - Fact / Inference / Hypothesis / Unknown distinctions;
  - evidence-quality checks;
  - automation bias;
  - when an output must be rejected or escalated;
  - what personal or confidential information should not be entered;
  - human sign-off requirements;
  - uses that require a new AI Act assessment.

- **Escalation needed?** **No.** The product and compliance owners can define the first version and update it as the production system evolves.

---

## Existing controls worth retaining

The audit identified gaps, but the current design already contains several controls that should be preserved rather than rebuilt:

- separation of evidence, hypotheses and unknowns;
- explicit evidence and review states;
- schema validation of structured inputs and outputs;
- validation of relationships between evidence and analytical findings;
- prevention of demo evidence being treated as approved client evidence;
- separation of demo and live modes;
- final response validation;
- consultant review before the brief is considered ready;
- documented production limitations;
- repository practices that avoid committing secrets.

These controls reduce the risk of unsupported findings being presented as established fact. They should form the starting point for production governance.

---

## Reassessment triggers

This classification should be repeated before Intellectus is used to:

- evaluate or rank individual employees or applicants;
- determine admission to education or vocational training;
- assess creditworthiness or access to essential services;
- support law-enforcement, migration or justice decisions;
- perform biometric or emotion analysis;
- publish AI-generated public-interest content without a controlled editorial process;
- make recommendations automatically actionable without meaningful human review.

A significant change in the model, data sources, target users or intended purpose should also trigger reassessment.

---

## Overall assessment

**First-pass classification: Limited risk / transparency.**

Intellectus is not high-risk because of what it currently does: it supports organizational consulting rather than making Annex III decisions about natural persons.

The main compliance work is therefore not a high-risk conformity programme. It is to make the existing product principles production-grade: define the AI-system boundary, make transparency explicit, preserve provenance, turn human review into an auditable control, establish privacy and security rules and ensure consultants understand the limits of the system.

The most important design principle to preserve is that Intellectus does not convert uncertainty into fact. Evidence, inference, hypotheses and unknowns remain distinct, and the consultant remains accountable for the final advice delivered to the client.