# Model Intake Brief EU AI Act assessment

**Assessment date** — 16 November 2026  
**Evidence base** — Code, documentation and saved reports at revision `e384f3a41b5c74119786f55865ebe4e7e6cfb73c`, plus an offline command-line run. The assessment assumes future EU professional use of the live workflow. The course demo, public availability of code, and any future placing on the market or putting into service are distinct events. Confirm the actual release arrangement and territorial scope under Article 2 before relying on this assessment. Article 2(8) excludes pre-market research, testing and development, with an exception for testing in real-world conditions. Public source availability alone does not establish a qualifying open-source licence or resolve Article 2(12), which retains coverage for qualifying releases in scope of Article 50.

## Phase 2. Risk tier

| Question | First-pass answer |
|---|---|
| Does the system fall under a prohibited practice (Article 5)? | No identified trigger. It reviews public documentation about models. It does not manipulate people, exploit vulnerabilities, score people, perform biometric analysis, or predict criminal behaviour. |
| Does the system operate in any of the eight Annex III areas? | No. The purpose is reviewing evidence for software procurement. The workflow does not perform biometric identification, operate critical infrastructure, evaluate learners or workers, decide eligibility for essential services, or support decisions in law enforcement, migration, justice, or elections. It also has no identified regulated-product safety function under Article 6(1) and Annex I. |
| If Annex III applies, does the system significantly influence a decision or perform a narrow or preparatory task? | Inapplicable to the documented purpose. The conclusion rests on the absence of a listed use, so the Article 6(3) exception is unnecessary. Reassess if the purpose changes or the workflow becomes a component of a listed decision system. |
| Does it interact with end users or generate content requiring transparency (Article 50)? | Staff directly submit a model identifier and receive a generated assessment through the web or command line. Apply the Article 50(1) notice as the conservative design choice and deliver it clearly and accessibly by first interaction under Article 50(5). Plan for machine-readable marking and detection of live-generated findings under Article 50(2). |
| First-pass risk tier | **Limited risk / transparency** for the proposed EU live deployment. |
| One-sentence justification | The system generates substantive findings about model documentation, so Article 50 is the operative tier for the proposed deployment, with no identified Article 5 prohibition or Article 6 high-risk purpose. |

**Why this tier.** A live run assigns evidence statuses and supplies gap explanations from several sources. These judgements go beyond standard editing or retaining the meaning of a text supplied by the user. Quoted passages and fixed headings have distinct origins and can be distinguished from generated findings in the report. User-facing disclosure and machine-readable detection require separate checks. The applicable technical solution should be effective, interoperable, robust and reliable as far as technically feasible.

Article 50(1) allows an exception where AI interaction would be obvious to a reasonably well-informed, observant and circumspect user in context. The live UI mentions OpenAI calls, while the CLI help describes live data sources. Confirm the exception with counsel if relying on it. The Commission's Article 50 guidance also describes a narrow route for certain controlled business-to-business deployments. Here the report is human-readable, downloadable and intended for governance follow-up, and the prototype provides no evidence of controls that would justify relying on that route. Counsel should check intended recipients, deployment controls and safeguards against foreseeable onward sharing. If an exception is supported, document its scope and recheck when the use or distribution changes. [AI Act, Articles 2, 3, 5, 6, and 50 and Annexes I and III](https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng) · [European Commission Article 50 guidelines and FAQs](https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems)

Article 50(3) is inapplicable because the system has no emotion recognition or biometric categorisation. Article 50(4) is inapplicable to internal model procurement because the tool produces neither deepfakes nor text published to inform the public on matters of public interest. If a deployer publishes such text for that purpose, assess disclosure at first exposure and the exception involving human review or editorial control and an accountable publisher. Article 50 has applied since 2 August 2026. The marking transition for eligible earlier systems runs to 2 December 2026. The documented November demo gives no basis for assuming the transition applies. [Article 50](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50) · [Commission transparency FAQ](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act)

The classification table was prepared independently and checked against the consolidated Act and Commission guidance. No questionnaire result was recorded from the optional [EU AI Act Compliance Checker](https://ai-act-service-desk.ec.europa.eu/en/eu-ai-act-compliance-checker).

## Phase 3. Role map

| Role | Entity | Key AI Act obligations and boundary |
|---|---|---|
| Provider of the finished AI system | Sergii Rostovskyi in the lab scenario, assuming he supplies the system under his own name | Accountable for the system's Article 50(1), (2) and (5) measures where applicable and for supporting AI literacy under amended Article 4. If the client commissions the system and puts it into service under its own name, reassess who is the provider under Article 3(3). |
| Deployer | Prospective EU client using the tool under its authority for professional model procurement | Supports AI literacy under amended Article 4. Article 50(4) would matter if the client used generated text for qualifying public-interest publication. The client owns its integration decision and should assign a human reviewer for the pilot. |
| Upstream model and API vendor | OpenAI, whose `gpt-5.4-mini` assesses evidence and whose `text-embedding-3-small` supports retrieval | The assessment model sits upstream. OpenAI owns the applicable GPAI model obligations at that layer, including Article 53 documentation and downstream information, subject to the model's scope and any applicable exceptions. Article 55 adds duties for GPAI models with systemic risk. This audit makes no finding on a particular model's systemic-risk designation or on the embedding model's separate status. Verify what provenance the API actually supplies and preserves. |
| Other services and researched model suppliers | Tavily, Jina Reader, Hugging Face Hub and Pinecone provide search, extraction, metadata or storage. The suppliers behind the researched models are evidence subjects. | Assess the services against their actual functions and terms. No evidence identifies them as providers of this finished system. A researched model may have its own GPAI duties, but this workflow reads its documentation without integrating it. |
| Importer / distributor | No entity identified for the assumed delivery route | Using a foreign model API does not by itself establish that an EU entity places a foreign-branded AI system on the EU market. Confirm the delivery chain if a reseller, importer or white-label partner is introduced. |

[AI Act, Articles 3, 4, 23–25 and 51–55](https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng) · [Commission guidance for GPAI providers](https://digital-strategy.ec.europa.eu/en/faqs/guidelines-obligations-general-purpose-ai-providers)

## Phase 4. High-risk checklist applicability

The 11-item checklist is inapplicable to the documented purpose under Article 6.

## Phase 5. Gaps and remediation

### Gap 1. Notice at first live interaction — Partial

- **Obligation** — Articles 50(1) and 50(5), subject to the obviousness exception.
- **Current state** — The live web screen mentions search, extraction and OpenAI calls. The CLI live help lists data-source tools. The general legal disclaimer and the model name shown in the results provide additional context without a consistent, explicit first-interaction notice. [Web interface](https://github.com/s-rostovskyi/model-intake-brief/blob/e384f3a41b5c74119786f55865ebe4e7e6cfb73c/app.py) · [CLI](https://github.com/s-rostovskyi/model-intake-brief/blob/e384f3a41b5c74119786f55865ebe4e7e6cfb73c/src/intake/cli.py)
- **Required state** — Clearly and accessibly tell people that they are interacting with AI by the first interaction when the exception does not apply.
- **Remediation and acceptance check** — The provider adds the [draft notice](model-intake-transparency-notice.md) beside the live run controls and to CLI help, with a live-mode message before the first outbound request. Use standard error for the CLI notice so redirects still produce clean Markdown. Test notice timing on both entry points and verify that it is readable with assistive technology where applicable.
- **Escalation needed?** Yes, to legal counsel if the provider plans to rely on obviousness. Product and engineering can add the notice directly.

### Gap 2. Machine-readable marking and detection — Gap

- **Obligation** — Article 50(2) for covered synthetic text.
- **Current state** — The app displays and exports Markdown built from fixed text, source excerpts and AI-generated assessments. The renderer includes a legal disclaimer and token counts. Review of the rendering paths and saved live output found no explicit machine-readable provenance marker or detection mechanism for generated findings. [Renderer and assessment request](https://github.com/s-rostovskyi/model-intake-brief/blob/e384f3a41b5c74119786f55865ebe4e7e6cfb73c/src/intake/assessment.py) · [Live sample report](https://github.com/s-rostovskyi/model-intake-brief/blob/e384f3a41b5c74119786f55865ebe4e7e6cfb73c/samples/gpt-5.2.md)
- **Required state** — Mark covered outputs in machine-readable form and make them detectable as artificially generated or manipulated. Validate the chosen method for the output format and foreseeable handling.
- **Remediation and acceptance check** — The provider identifies generated fields, verifies what upstream provenance survives parsing, and selects and documents a marking and detection method for mixed Markdown. Evaluate embedded provenance with a detector and test the web view, full download, CLI redirection and supported copying or conversion routes. Document what survives or is lost in each route and restrict unsupported exports if needed. The question-only export uses fixed templates chosen from finding statuses. Review its provenance separately if it later incorporates generated prose. Use a visible report notice alongside the technical control. [Commission Code of Practice on AI-generated content](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content)
- **Escalation needed?** Yes, to legal counsel for scope or any exception and to an engineering specialist for method selection and validation.

### Gap 3. Personal data in public sources — Verification gap

- **Obligation** — If the workflow processes personal data, GDPR Articles 5 and 6 require purpose limitation, minimisation, storage limitation and a lawful basis. Assess Articles 13–14 for transparency, Article 28 where a vendor acts as processor, and Chapter V for transfers where applicable. [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)
- **Current state** — The search receives model identifiers and Jina receives source URLs. The assessment request can include target details, snippets and selected source text. Reports can echo excerpts. The OpenAI request sets `store: false`. The repo does not establish actual vendor retention, transfers, or a pre-send personal-data filter. [Source adapters](https://github.com/s-rostovskyi/model-intake-brief/blob/e384f3a41b5c74119786f55865ebe4e7e6cfb73c/src/intake/adapters.py) · [OpenAI API data controls](https://developers.openai.com/api/docs/guides/your-data)
- **Required state** — Map the data and parties before live use. Limit personal data to what is necessary for the recorded purpose and document applicable processing terms, notices, transfer safeguards and deletion periods.
- **Remediation and acceptance check** — The client records what each service receives, where it is processed and for how long. Engineering tests with seeded names and contact addresses and removes unnecessary details before outbound assessment and export. Restrict live input to public model identifiers and apply documented retention controls to stored reports.
- **Escalation needed?** Yes, to privacy counsel or the data protection officer for the lawful basis, notices, processor terms, transfers and any DPIA screening.

### Gap 4. Reviewer literacy and release workflow — Verification gap

- **Obligation** — Amended Article 4 requires the provider and deployer to take measures supporting AI literacy. A recorded review is a proposed pilot control for the documented reliability risk.
- **Current state** — The user guide explains the statuses, and the UI shows sources and limitations. Downloads are available without recorded approval. A historical five-run Qwen check had consistent statuses on 6 of 15 core checks, before the latest assessment change. Staff training and a deployed approval workflow were not verified. [User guide](https://github.com/s-rostovskyi/model-intake-brief/blob/e384f3a41b5c74119786f55865ebe4e7e6cfb73c/USER_GUIDE.md) · [Stability check](https://github.com/s-rostovskyi/model-intake-brief/blob/e384f3a41b5c74119786f55865ebe4e7e6cfb73c/stability.md)
- **Required state** — Support literacy tailored to the people using the system and the decisions their work informs. For the pilot, keep unreviewed findings from becoming the basis for procurement decisions.
- **Remediation and acceptance check** — The provider supplies a short exercise on checking an exact model version, opening a citation and distinguishing missing evidence from an unchecked item. The client assigns a reviewer and records which sources they checked, changes they made and who approved the separate integration decision. Repeat the stability check on the pilot version and test the workflow with an ambiguous finding.
- **Escalation needed?** No external specialist for the exercise or workflow. The client's governance lead owns sign-off.

### Design reflection

Using a hosted model saved time building the evidence assessment, but added a data recipient and a provenance problem at export. I would have recorded the origin of each field from the start. That would also help reviewers distinguish a source quotation from the system's interpretation.
