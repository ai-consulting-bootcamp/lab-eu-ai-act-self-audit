# EU AI Act Compliance Audit --- TestVet

**Project:** TestVet  
**Author:** Parisa Dehghani  
**Project 3:** Autonomous Research and Report Generation Agent  
**Assessment:** First-pass EU AI Act compliance audit

> **Scope note:** This is a product and compliance assessment for the lab. It is not legal advice, a conformity assessment, or certification.

---

## Phase 1 --- System brief

**TestVet** is a QA tool-evaluation assistant. It helps QA leads, automation engineers and engineering managers decide whether a test-automation tool is suitable for their team. The user provides the tool name, a description of the intended use case, and optionally a GitHub repository URL or `owner/repository` identifier. The context may include required browsers, application types, CI environment, team skills, security constraints and adoption goals.

After the user starts an evaluation, the system follows a seven-node LangGraph workflow. It validates the input, identifies the relevant GitHub repository, gathers repository and release information through the GitHub REST API, searches recent coverage through NewsAPI, and retrieves Hacker News discussions through Algolia. It then loads a local QA evaluation corpus and applies deterministic scoring and mandatory adoption gates. The final node renders the result as a structured report.

The current MVP does not call a large language model or train a model from user data. Its recommendations are produced using retrieval, keyword matching, repository signals, encoded QA guidance, weighted criteria and rules written by the developer. The seven criteria are technical fit, reliability, maintainability and diagnostics, CI/CD and scalability, security and governance, project or vendor health, and team fit and total cost.

The system processes public repository metadata, release information, news titles and Hacker News posts. These sources may contain personal data such as GitHub owner identifiers or Hacker News usernames. The required user inputs are not intended to contain personal data. However, the free-text context could include names, internal project details, secrets or other personal or confidential information if a user enters them. Parts of that context are currently included in external search queries.

The output is a recommendation of **Adopt**, **Pilot**, **Reject**, or **More evidence needed**, together with a confidence level, weighted score, criterion-level results, positive and negative signals, missing evidence, warnings and source details. TestVet evaluates software, not people. It does not make recruitment, performance, education, credit, insurance, law-enforcement or public-service decisions.

A human is expected to review the report before acting. In practice, a QA lead or engineering manager should verify primary sources, confirm mandatory requirements and run a representative pilot where necessary. TestVet does not purchase, install or deploy a tool automatically. I designed and built the prototype using Python, LangGraph, Gradio and third-party data APIs. In production, the organisation operating TestVet would make it available to its QA or engineering staff.

---

## Phase 2 --- Risk tier classification

| Question | Answer |
|---|---|
| Does this system fall under any prohibited category in Article 5? | **No.** Its intended purpose does not involve prohibited manipulation, exploitation, social scoring, criminal-risk prediction, biometric categorisation, emotion recognition, facial-image scraping or prohibited real-time biometric identification. |
| Does this system operate in any of the eight Annex III areas? | **No.** QA software evaluation is outside the listed high-risk areas such as biometrics, critical infrastructure, education, employment, essential services, law enforcement, migration and justice or democratic processes. |
| If Annex III: does it significantly influence decisions, or is it narrow or preparatory? | **Not applicable.** TestVet influences a software-adoption decision, not a decision in an Annex III area or a decision about a natural person. |
| Does it interact with end users or generate content requiring Article 50 disclosure? | **Potentially yes.** A user supplies contextual input and receives a responsive automated recommendation. If TestVet qualifies as an AI system under Article 3(1), Article 50(1) should be assessed conservatively. |
| **First-pass risk tier** | **Limited risk / transparency, conditional on Article 3(1) scope.** |
| **One-sentence justification** | TestVet is neither prohibited under Article 5 nor high-risk under Annex III, but, if its logic-based recommendation workflow qualifies as an AI system, its direct user interaction supports an Article 50 transparency assessment. |

### Classification ambiguity

The main uncertainty is whether the current TestVet implementation meets the AI system definition in Article 3(1). The system has autonomy in the sense that it performs research and returns a recommendation without a person controlling each step. It also applies encoded QA knowledge, matching, search and weighted rules to new inputs.

However, the current version is deterministic. It does not use machine learning, an LLM or a model that changes through training. Its decision rules were defined by a natural person. Commission guidance distinguishes logic- and knowledge-based inference systems from simpler traditional software that only executes human-defined rules. TestVet sits close to that boundary, so a production classification should be confirmed by legal counsel.

For this lab, I use the conservative **limited risk / transparency** classification. If legal review determines that TestVet is only traditional rule-based software, it may fall outside the AI Act definition rather than belong to a regulated risk tier.

The output is assembled programmatically rather than produced by a generative model. Therefore, Article 50(2) machine-readable marking of synthetic content is not the main obligation considered here. If an LLM is added later, this conclusion must be reviewed.

**Phase 4 high-risk checklist:** skipped because TestVet is not classified as high-risk.

---

## Phase 3 --- Role map

| Role | Entity | Key AI Act obligations / first-pass interpretation |
|---|---|---|
| **Provider** | **Parisa / future entity releasing TestVet** | For this exercise, I am the provider because I designed the system. If TestVet is placed on the market or put into service under my name, the provider is responsible for confirming the intended purpose and classification, implementing Article 50 transparency where applicable, providing operating limitations, and supporting appropriate AI literacy. |
| **Deployer** | **The company or QA/engineering team using TestVet** | The deployer uses the system professionally. It should keep TestVet within its intended software-evaluation purpose, train staff to interpret its output, preserve meaningful human review, protect input data and monitor errors or misuse. Provider and deployer functions could belong to the same organisation. |
| **Search and data vendors** | **GitHub, NewsAPI and Algolia** | These services provide repository, news and discussion data. Based on the reviewed implementation, they are not embedded AI-model providers for the TestVet recommendation system. Privacy, contracts, API terms and data-location questions remain relevant. |
| **Software component vendors** | **LangGraph and Gradio** | These are workflow and interface components. They do not provide the scoring intelligence or become the provider of the end system merely because TestVet uses their software. |

**Role-mapping caveat:** A real deployment should confirm the provider and deployer allocation based on branding, contracts, hosting and control over the system. If TestVet later integrates OpenAI or another LLM provider, that vendor must be added to the role map and the downstream provider obligations must be reassessed.

---

## Phase 4 --- Applicable obligations

The high-risk provider checklist covering Articles 9 to 15, conformity assessment, CE marking, registration and post-market monitoring is not applicable to TestVet's assessed purpose.

The following non-high-risk obligations and parallel legal issues are relevant:

- **Article 50 transparency:** if TestVet qualifies as an AI system, the user should be clearly informed that the recommendation comes from an automated system. The notice should be clear, distinguishable and accessible at the latest at the first interaction.
- **Article 4 AI literacy:** the provider and deployer should ensure that people operating the system understand its intended purpose, evidence limitations, scoring logic, privacy risks and the need for human review.
- **GDPR:** free-text inputs and public online identifiers may be personal data. Lawfulness, transparency, data minimisation, storage limitation, security and vendor relationships need review before production use.
- **Consumer and professional-use transparency:** the interface should not overstate the accuracy, completeness or independence of a recommendation based partly on proxy signals and public discussions.

---

## Phase 5 --- Gap analysis and remediation plan

### Gap 1 --- User-facing automation transparency

- **Obligation:** Article 50(1) and Article 50(5), if TestVet qualifies as an AI system.
- **Current state:** The interface describes TestVet as an “autonomous QA vetting agent,” but it does not provide a dedicated first-interaction notice explaining that the recommendation is automated, may be incomplete and requires human review.
- **Required state:** The user should clearly understand the artificial or automated nature of the interaction before or at first use. The information should be prominent and accessible.
- **Remediation:** Add a notice above the input form and repeat a shorter version in the generated report: **“TestVet uses an automated, rule-based workflow. Its recommendation may be incomplete or incorrect and must be verified by a qualified person.”**
- **Escalation needed?** **Yes --- EU AI Act legal review** to confirm whether the deterministic implementation is within Article 3(1) and validate the Article 50 wording.

### Gap 2 --- Personal or confidential information in search queries

- **Obligation / parallel law:** GDPR lawfulness, transparency, purpose limitation, data minimisation, storage limitation and security.
- **Current state:** The evaluation context is free text. The workflow can combine this text with the tool name and send it to NewsAPI and Hacker News search. A user could accidentally include a person's name, an internal system name, a customer detail, a secret or confidential project information.
- **Required state:** A production system should process and disclose only information necessary for the QA-tool research purpose. Users should understand what is sent to external services and for how long data is retained.
- **Remediation:** Warn users not to enter personal data, credentials, secrets or confidential details. Generate external queries from a controlled list of capability terms rather than the full context. Remove names, email addresses, tokens and unnecessary URLs before API calls. Publish a privacy notice and define retention and deletion rules.
- **Escalation needed?** **Yes --- Data Protection Officer or privacy counsel** before production use.

### Gap 3 --- Human review is expected but not enforced

- **Obligation / control:** Responsible decision support and protection against automation bias. This is not a high-risk Article 14 obligation for the assessed use.
- **Current state:** TestVet displays evidence, confidence, missing information and risks, but the interface does not require a reviewer to verify the evidence or record the final decision. There is no reviewer identity, acknowledgement or override reason.
- **Required state:** An authorised QA lead or engineering manager should own the adoption decision, be able to reject the recommendation and record why.
- **Remediation:** Add a review checklist requiring the reviewer to open primary sources, confirm mandatory requirements, resolve important unknowns and run a pilot where recommended. Record whether the reviewer accepted or overrode the result and the reason. Do not allow integrations to purchase or deploy a tool automatically from the TestVet recommendation.
- **Escalation needed?** **No** for the current software-adoption use. Reassess if TestVet is repurposed for decisions about workers or other people.

### Gap 4 --- Scoring assurance and evidence quality

- **Obligation / control:** Accurate and non-misleading professional use. The high-risk Article 15 requirement does not apply to the assessed use.
- **Current state:** The report exposes criterion results and missing evidence, which supports explainability. However, the scoring uses repository metadata, keyword matches, release activity and sampled community discussions as proxies. There is no supplied benchmark showing that the weights, confidence labels and decision thresholds produce reliable recommendations.
- **Required state:** Users should understand the scoring limits, and the product team should have evidence that the rules behave consistently across representative tools and contexts.
- **Remediation:** Publish the criterion weights and decision rules. Create a versioned benchmark containing known tools, contexts, expected mandatory outcomes and difficult edge cases. Measure false passes, false rejections and inappropriate confidence. Require measured pilot evidence before making strong reliability claims, and review the scoring rules after incidents and at planned intervals.
- **Escalation needed?** **No**, but the QA lead and product owner should approve the test set and thresholds.

### Gap 5 --- No formal AI-literacy process

- **Obligation:** Article 4, if TestVet qualifies as an AI system.
- **Current state:** The local corpus explains QA evaluation criteria, but there is no user training covering automation bias, appropriate use, evidence hierarchy, privacy, limitations or escalation.
- **Required state:** People developing, operating and using the system should have sufficient understanding for their role and the context in which TestVet is used.
- **Remediation:** Add a short onboarding module covering intended use, prohibited repurposing, scoring and confidence, verification of primary sources, treatment of unknown evidence, personal-data handling, pilot decisions and incident reporting. Record completion for production users.
- **Escalation needed?** **No** unless the intended use changes materially.

### Gap 6 --- Traceability and correction process

- **Obligation / control:** Governance and accountability. Articles 12 and 72 do not apply because TestVet is not high-risk.
- **Current state:** Warnings and evidence are held in workflow state and displayed in the report, but there is no durable, versioned record of how a recommendation was produced. There is also no correction or incident-reporting process.
- **Required state:** A production operator should be able to reconstruct an important recommendation, investigate mistakes and improve repeated failure patterns without keeping unnecessary personal data.
- **Remediation:** Store a privacy-minimised record containing the run date, TestVet version, rubric version, sanitised requirements, search queries, source links and dates, criterion statuses, recommendation, reviewer decision and override reason. Define access controls, retention and deletion. Add a route for users to report incorrect evidence or recommendations.
- **Escalation needed?** **No**, with DPO input on the retention period and access model.

---

## Reinforce --- Design decision I would change

One design choice I would make differently is sending the user's free-text context into external search services. I originally treated the context as a useful way to improve search relevance. From a compliance-by-design perspective, I should have separated **what the team requires** from **what an external research API needs to know**.

In a production version, I would use structured fields for application type, browsers, test level, CI environment and major constraints. TestVet would convert only those selected capability terms into sanitised search queries. Names, internal project descriptions, customer details and credentials would never be needed for public tool research and should not leave the application.

I would also have designed human review into the first version. The report would remain “pending review” until a named reviewer confirmed the mandatory evidence and recorded whether the final decision agreed with TestVet. These changes would reduce privacy exposure and make the system's advisory role clearer without reducing its usefulness.

---

## Phase 6 --- Compliance memo

**To:** Head of Product, TestVet  
**From:** Parisa Dehghani  
**Subject:** First-pass EU AI Act compliance assessment --- TestVet

### Classification

TestVet is best classified as a **limited-risk / transparency system** for this first-pass exercise, subject to legal confirmation that its deterministic logic-based workflow meets the Article 3(1) definition of an AI system. Its intended QA software-evaluation purpose does not fall within Article 5 prohibited practices or the Annex III high-risk areas. If it is an AI system, the direct user-facing recommendation workflow requires an Article 50 transparency analysis.

### Role map

For this exercise, I am the **provider** because I designed TestVet. An organisation using it for professional QA-tool selection is the **deployer**. GitHub, NewsAPI and Algolia provide external data, while LangGraph and Gradio provide workflow and UI components. They do not replace the TestVet provider's responsibility for the end system. The role map must be reviewed if a hosted LLM or other AI model is added.

### Key findings

The first gap is transparency. The interface uses autonomous-agent branding, but it should explicitly state that the recommendation is automated, may be incomplete and requires qualified human review.

The second gap concerns data handling. Free-text context can contain personal or confidential information and is currently used in some external search queries. The system needs query sanitisation, an input warning, a privacy notice and documented retention.

The third gap is production governance. TestVet provides explainable report sections, but it does not require human approval, record overrides, maintain a versioned decision trail or demonstrate the scoring logic against a benchmark.

The current design also has positive controls. Requirements are kept separate from evidence, missing evidence is shown rather than converted into a pass, mandatory criteria can block adoption, and a Pilot recommendation is available when measured validation can resolve uncertainty.

### Recommended next steps

1. **Confirm the legal scope:** obtain advice on whether the present rule-based system falls within Article 3(1).
2. **Add the transparency layer:** show an accessible automation and limitation notice before the first evaluation and in every report.
3. **Minimise external queries:** stop sending unrestricted context to research APIs and complete a privacy and vendor review.
4. **Operationalise human review:** require source verification, final reviewer ownership and an override reason.
5. **Validate and monitor scoring:** test a versioned benchmark, record privacy-minimised decision evidence and review errors during the pilot.
6. **Repeat the assessment after material changes**, especially an LLM integration, automatic deployment actions or any use affecting natural persons.

### Caveats

This memo is a first-pass product compliance assessment for a course project. It is **not legal advice, a formal conformity assessment, or certification**. It is based on the reviewed MVP and intended purpose. Changes to the model, workflow, data, users or decision context could change the classification and obligations.

---

## Stretch artifact --- Draft end-user transparency notice

### About this evaluation

**TestVet is an automated decision-support tool.**

TestVet researches public information and applies a rule-based QA evaluation rubric to produce an advisory recommendation. It can return **Adopt**, **Pilot**, **Reject**, or **More evidence needed**.

The available sources may be incomplete, outdated or incorrect. TestVet's score does not prove that a tool is suitable for your team. A qualified person must check mandatory requirements, inspect the original sources and complete a representative pilot where necessary before making the final adoption decision.

Do not enter personal data, passwords, API keys, customer details or confidential project information. Parts of the evaluation context may be used to create queries for external research services.

TestVet must not be used to score or make decisions about employees, job applicants, students, customers or other natural persons.

---

## Evidence and legal references

- **TestVet implementation reviewed:** `architecture.md`, `graph.py`, `nodes.py`, `tools.py`, `cli.py` and `qa_evaluation_guidelines.md` supplied for this audit.
- **Regulation (EU) 2024/1689 — AI Act:** [official text](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng), including Article 3, Article 4, Article 5, Article 6, Annex III and Article 50.
- **European Commission AI Act Service Desk:** [Article 50 transparency obligations](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50).
- **European Commission guidance:** [Guidelines on the definition of an AI system](https://ai-act-service-desk.ec.europa.eu/sites/default/files/2025-08/commission_guidelines_on_the_definition_of_an_artificial_intelligence_system_established_by_regulation_eu_20241689_ai_actenglish_nf2skcqfrtjdfggjavcodopcwz4_112455.PDF).
- **European Commission implementation information:** [EU AI Act implementation timeline](https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act).
- **GDPR — Regulation (EU) 2016/679:** relevant if TestVet processes personal data through free-text inputs, public account identifiers, logs or production user information.
