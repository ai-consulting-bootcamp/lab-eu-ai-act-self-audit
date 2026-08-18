# MIRA gap analysis and remediation plan

## High-risk checklist status

**Not required.** The MIRA system does not meet the conditions for a high-risk AI system under the version of the EU AI Act described in the lab. The main risk is transparency and operational governance rather than Annex III high-risk obligations.

## Gap 1: Lack of clear AI disclosure in user-facing outputs

- **Obligation:** Article 50 transparency / clear disclosure where AI is used in direct interaction or AI-generated content is presented to users.
- **Current state:** The local MIRA source shows a user-facing creative workflow and generated imagery, but the docs do not show a formal AI disclosure or notice before the user begins the flow.
- **Required state:** The system should clearly tell users when they are interacting with an AI-assisted design system and when an output is AI-generated.
- **Remediation:** Add a short disclosure banner or pre-flight message at the start of each journey, and add a visible label on generated moodboard outputs and concept directions. If the system is used by a client or customer, the disclosure should be clear and not buried in help text.
- **Escalation needed?** Yes — product/legal review if the system is used outside private staging or for client-facing deployment.

## Gap 2: No formal user-facing transparency notice or output metadata policy

- **Obligation:** Article 50-style transparency and user communication expectations for AI-generated content.
- **Current state:** The system has human review and a private workflow, but no documented notice about AI-generated output or metadata handling.
- **Required state:** A brief user-facing notice explaining that content may be AI-generated, with an escalation path to human review if needed.
- **Remediation:** Create a simple transparency notice and include a metadata or caption note on final outputs when they are exported or shared.
- **Escalation needed?** Yes — product + legal review if the output is shared externally.

## Gap 3: No formal governance model for provider/deployer responsibilities

- **Obligation:** Provider / deployer duty mapping and responsibilities.
- **Current state:** The local project shows internal, authenticated use and model integrations, but the docs do not provide a formal provider/deployer matrix for production.
- **Required state:** A documented matrix specifying who is the provider, who is the deployer, who manages the external model provider, and what obligations each role owns.
- **Remediation:** Draft a one-page operational responsibility map for the production environment, including third-party model or image providers and the internal owner of the user journey.
- **Escalation needed?** Yes — legal or compliance review.

## Gap 4: No explicit privacy and retention policy tied to personal or private inspiration inputs

- **Obligation:** GDPR / privacy-by-design and lawful processing, separate from the AI Act classification.
- **Current state:** The source includes optional private inspiration and private-image features in earlier architecture, and the active staging docs call out separate privacy gating and consent boundaries.
- **Required state:** A documented privacy and retention policy covering what data is used, whether user uploads are stored, how long they are retained, and whether consent is required.
- **Remediation:** Establish a retention schedule, opt-in consent flow for private inspiration or image uploads, and explicit deletion procedures. Treat this as a privacy control, not as a substitute for AI Act transparency.
- **Escalation needed?** Yes — Data Protection Officer or legal/privacy counsel.

## Gap 5: No public or client-facing compliance review artifact

- **Obligation:** Product governance and documented compliance review.
- **Current state:** The project includes strong internal evidence and validation docs, but not a formal compliance pack or vendor responsibility document for client deployment.
- **Required state:** A concise compliance record showing risk tier, role map, main limitations, and required manual review steps.
- **Remediation:** Maintain a lightweight compliance review and operational onboarding checklist for each deployment.
- **Escalation needed?** No, unless used in a formal commercial rollout.

## Summary

The main operational gap is not a high-risk classification. It is the absence of user-facing transparency and documented governance for a deployed, AI-generated creative product. The practical fix is to add AI disclosure, a simple transparency notice, documented provider/deployer roles, and a privacy retention policy for any personal or private image input.
