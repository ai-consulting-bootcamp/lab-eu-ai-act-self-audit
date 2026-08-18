# Intellectus EU AI Act Assessment

## Assessment boundary and important ambiguity

This first-pass assessment covers the Project 3 prototype documented in the Intellectus repository and its intended production use as consultant decision support. The committed system uses deterministic workflow logic in several places and leaves the final AI-model, search, extraction, and RAG vendors unconfigured. Under Article 3(1), an AI system must infer from inputs how to generate outputs. If the deployed system remains entirely deterministic and does not perform that inference, specialist legal review may conclude that it is outside the AI Act definition. The classification below assumes that the intended production version uses an AI component to generate substantive findings, hypotheses, recommendations, or text.

## Phase 2: Risk-tier classification

| Question | Your answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | **No.** Its intended purpose does not involve manipulative or subliminal techniques, exploitation of vulnerabilities, social scoring, criminal-risk prediction, untargeted facial-image scraping, emotion recognition, biometric categorisation, or prohibited biometric identification. Deployment beyond this stated purpose would require reassessment. |
| Does this system operate in any of the eight Annex III areas? | **No for the documented intended purpose.** It supports organizational consulting and does not determine access to education, employment, essential services, credit, insurance, law enforcement, migration, justice, elections, biometrics, or critical infrastructure. |
| If Annex III: does it significantly influence decisions in that area, or is it narrow/preparatory? | **Not applicable.** If a client later repurposes the output for an Annex III decision—for example, hiring or eligibility for essential services—the classification must be repeated. Human review alone would not automatically remove that use from high-risk treatment. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | **Potentially yes.** The consultant interacts with the system and receives generated diagnostic text. Article 50(1) may require notice that the interaction is with AI unless that fact is obvious. Article 50(2) may require machine-readable marking of synthetic text if an AI component generates substantive content. Article 50(4) would become relevant if generated text were published to inform the public on a matter of public interest, subject to its human-review/editorial-responsibility exception. |
| First-pass risk tier | **Limited risk / transparency, conditional on the intended AI component being deployed.** The current deterministic prototype may instead be outside the Article 3(1) definition. |
| One-sentence justification citing the specific article or Annex entry | Intellectus does not perform a listed Article 5 or Annex III use, but an AI-enabled production version would generate recommendations and text for professional users, making the transparency analysis under Article 50(1)–(2) the most relevant first-pass classification. |

### Classification justification

Intellectus is not prohibited and is not high-risk on its documented intended purpose because it prepares non-binding consulting material about organizations rather than making or materially influencing decisions in any specific Annex III use case. Its output is expressly subject to consultant and client validation. The most plausible AI Act category is therefore limited risk/transparency: an AI-enabled version would interact with a consultant and generate substantive text. A clear AI notice and output provenance should be implemented even if the branding arguably makes the use of AI obvious. This conclusion must be revisited if Intellectus is used to assess natural persons, decide employment or access to services, publish unreviewed public-interest content, or incorporate a production model whose function changes the system's intended purpose.

## Phase 3: Role map

| Role | Entity | Key AI Act obligations |
|---|---|---|
| Provider | Paola Hintze and the Project 3 team, or the legal entity that places Intellectus into service under the Intellectus name | Confirm whether the product meets Article 3(1); define and document intended purpose; implement applicable Article 50 provider transparency and content-marking controls; provide suitable instructions; support AI literacy under Article 4; reassess after substantial changes or new use cases. The final legal entity must be confirmed before production. |
| Deployer | The consulting organization and its authorized consultants using Intellectus professionally | Use the system within its intended purpose; train staff sufficiently under Article 4; follow review instructions; protect input data; retain human responsibility for advice; provide any Article 50(4) public disclosure if generated text is published without qualifying human editorial review. |
| Vendor: n8n | n8n, as workflow-orchestration infrastructure | Primarily a technical processor/platform in the documented architecture, not necessarily the provider of the AI inference component. Contract, security, hosting, logging, and data-processing responsibilities require review. |
| Vendor: future model/research providers | Not yet selected in the repository | Their roles cannot be finalized. A general-purpose AI model provider would retain its own Chapter V duties, while the Intellectus provider remains responsible for the downstream system and integration. Vendor documentation, data-use terms, locations, retention, security, and output-marking support must be assessed before selection. |

No importer is presently identified. That role should be reassessed if a system bearing a non-EU provider's name or trademark is placed on the EU market.

## Phase 4: Applicable transparency obligations

The 11-item high-risk provider checklist is intentionally omitted because the documented intended use is not high-risk.

| Requirement | Article | Status | Current assessment |
|---|---:|---|---|
| Inform natural persons that they are interacting with AI, unless obvious | 50(1), 50(5) | **Partial** | The product name refers to “intelligence,” and the UI separates evidence from hypotheses, but the repository does not establish a clear, accessible AI notice shown no later than first interaction. |
| Mark AI-generated text in a machine-readable and detectable format | 50(2) | **Gap / conditional** | No output provenance field or machine-readable AI-generation marker is documented. This applies if a production AI component generates substantive text and no exception applies. |
| Disclose AI-generated public-interest text | 50(4), 50(5) | **Conditional** | Current briefs are intended for private consultant review, not direct public publication. A deployer publishing the text may need disclosure unless it has undergone human review/editorial control and an identified person or entity accepts editorial responsibility. |
| Ensure sufficient AI literacy | 4 | **Partial** | The repository documents evidence labels and limitations but does not define role-based training or proof that operators understand appropriate use, uncertainty, and escalation. |

## Phase 5: Gap analysis and remediation plan

### Gap 1 — system qualification and intended-purpose record

- **Obligation:** Articles 3(1), 6 and 50 depend on the actual technical function and intended purpose.
- **Current state:** The repository describes an AI consulting system, but several workflows are deterministic and the production model and research vendors are unconfigured.
- **Required state:** The provider must be able to explain which component performs inference, what it generates, its intended and prohibited uses, and why the selected risk tier applies.
- **Remediation:** Create a versioned AI-system inventory and intended-purpose statement naming each model/API, its function, data flow, output, owner, deployment region, and applicable legal role. Repeat the classification before production and after substantial changes.
- **Escalation needed?** **Yes — AI Act counsel**, to confirm the Article 3 threshold and final provider/deployer roles.

### Gap 2 — first-interaction transparency

- **Obligation:** Article 50(1) and (5).
- **Current state:** The interface does not document a mandatory, accessible notice stating that AI may generate or transform parts of the diagnostic.
- **Required state:** The affected natural person must be informed clearly and accessibly by the first interaction unless the AI nature is obvious in context.
- **Remediation:** Display the notice drafted in `intellectus-transparency-notice.md` during onboarding and beside every diagnostic. Record the notice version in the run metadata and test keyboard and screen-reader access.
- **Escalation needed?** **No** for implementation; **legal review recommended** for final wording and exceptions.

### Gap 3 — machine-readable output provenance

- **Obligation:** Article 50(2), if a production AI component generates substantive text.
- **Current state:** The output schema distinguishes evidence status and human-review status but contains no standard provenance marker showing that content was AI-generated or manipulated.
- **Required state:** Applicable outputs must be marked in a machine-readable format and be detectable as artificially generated or manipulated, using effective and interoperable measures where technically feasible.
- **Remediation:** Add fields such as `content_origin`, `generator_component`, `model_version`, `generated_at`, and `human_review_status` to the export envelope; preserve provider-supported provenance metadata; and test that exports retain it.
- **Escalation needed?** **Yes — legal and technical specialists**, because the applicable standard and technically feasible marking method depend on the final model and export formats.

### Gap 4 — enforceable human-review procedure

- **Obligation:** Supports accurate Article 50 disclosure decisions, AI literacy under Article 4, and responsible use under GDPR and consumer-protection principles; Article 14 is not directly applicable because the system is not classified as high-risk.
- **Current state:** The interface supports review states and allows a consultant to mark a brief ready, but it has no authentication, mandatory approval gate, reviewer identity, durable override reason, or audit history.
- **Required state:** Production users should be able to verify evidence, reject unsupported content, record corrections, and prevent unreviewed recommendations from being delivered as approved advice.
- **Remediation:** Require named sign-off before export; block approval while unsupported public-evidence claims or unresolved contradictions remain; record reviewer, timestamp, decision, corrections, and override reason; define escalation for sensitive or person-level findings.
- **Escalation needed?** **No** for workflow design; **yes — product owner and compliance lead** for approval criteria.

### Gap 5 — personal-data and confidentiality controls

- **Obligation:** GDPR principles and controller/processor duties may apply even though the intended AI Act tier is not high-risk.
- **Current state:** Inputs are mainly organizational and public, and browser-selected files are not currently transmitted. Public sources can contain incidental personal data, while future uploads could contain personal or confidential material. No production lawful-basis, retention, deletion, access-control, or data-subject-rights process is documented.
- **Required state:** Personal data must be processed lawfully, fairly, transparently, and only as necessary, with defined retention, security, data-subject handling, and vendor arrangements.
- **Remediation:** Complete a data inventory and data-flow map; prohibit sensitive/person-level uploads until a secure upload boundary exists; define lawful basis, minimization, retention, deletion, access controls, and processor agreements; conduct a DPIA screening before production.
- **Escalation needed?** **Yes — Data Protection Officer or privacy counsel.**

### Gap 6 — operator AI literacy and use restrictions

- **Obligation:** Article 4.
- **Current state:** Technical documentation explains epistemic labels and prototype limitations, but no training requirement, competency check, or acknowledgement of prohibited use is recorded.
- **Required state:** Staff operating the system should have training proportionate to their knowledge, responsibilities, context, and the people potentially affected.
- **Remediation:** Introduce short mandatory training covering evidence versus inference, automation bias, personal data, prohibited and Annex III repurposing, human review, incident escalation, and public disclosure. Record completion and refresh it after material system changes.
- **Escalation needed?** **No**, with legal/compliance review of the training content.

## Reinforce reflection

The design decision that creates the largest compliance burden is combining public research, generated analysis, and a polished client-ready brief in one automated chain. Even with epistemic labels, presentation quality can make uncertain output appear authoritative. In hindsight, the system should have been designed around a mandatory evidence-review gate and explicit content provenance before adding recommendation and roadmap generation. That would make human responsibility visible in the architecture rather than relying mainly on interface copy.

## Sources and caveat

- [Regulation (EU) 2024/1689, Article 3 — definitions](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-3)
- [Regulation (EU) 2024/1689, Article 4 — AI literacy](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-4)
- [Regulation (EU) 2024/1689, Annex III — high-risk systems](https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3)
- [Regulation (EU) 2024/1689, Article 50 — transparency](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50)

This is a first-pass educational assessment, not legal advice. The course exercise and this assessment use Regulation (EU) 2024/1689 as their baseline. Any subsequent amendment, implementing act, code of practice, harmonised standard, or final production design must be checked before deployment.
