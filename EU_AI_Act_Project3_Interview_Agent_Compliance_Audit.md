# EU AI Act Compliance Audit — AI Interview Preparation Agent

**Lab:** Audit Your Own Project (Project 3)  
**Prepared by:** Martha  
**Date:** 16 November 2026  
**Status:** First-pass consulting assessment; not a legal opinion

## Phase 1 — System brief (external reviewer handover)

The AI Interview Preparation Agent is a web-form-based assistant that helps job applicants prepare for interviews. A user provides the name of a hiring company, a job description, a PDF CV and consent to process the submitted information. The agent uses these materials to prepare a tailored interview-preparation report. Its purpose is to support the applicant's learning and preparation; it does **not** assess candidates on behalf of an employer, rank applicants for hiring, make recruitment decisions or send recommendations to hiring managers.

The workflow was built in **n8n** as an Ironhack Project 3 prototype. After the form is submitted, it checks the inputs and extracts text from the PDF CV. The CV and job description may contain personal data, including a person's name, employment history, qualifications and other information voluntarily included in the CV. The workflow also researches the named company using **Tavily** and **NewsAPI**. For Microsoft and SAP, it can retrieve information from a **Pinecone** knowledge base populated with their official 2025 annual reports. For other companies, it relies on live research rather than that company-specific knowledge base. The agent uses **OpenAI GPT-4o-mini** to combine the supplied information and research into a structured interview-preparation report.

The output is generated text: a seven-section preparation report, including interview guidance and suggested STAR-style examples. The user can view the formatted HTML report, print it or save it as a PDF. The workflow also creates a formatted report in **Notion**. The system does not generate a candidate suitability score or an employment decision. AI-generated STAR examples may sound plausible but must be checked against the user's actual experience; the agent cannot verify whether a suggested personal achievement really happened.

The people directly affected are the applicants who submit their CVs and receive the report. The user can read and edit their preparation material before using it in an interview, but the existing workflow does not establish a mandatory human approval checkpoint before generating or storing the report. Human oversight is therefore primarily **user review after generation**, not formal review of each output by an operator.

The prototype was designed and configured by the project builder using n8n and third-party services. In a production deployment, the organisation offering the interview-preparation service would operate the workflow, while individual applicants would use the form. The legal roles of provider and deployer depend on who offers the system under their name and the contractual arrangements. The live form has been tested; a production-grade privacy, retention and compliance review has **not** been established by the project evidence available for this audit.

## Phase 2 — First-pass risk classification

| Question | Your answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | **No identified Article 5 practice.** The workflow does not perform workplace emotion recognition, prohibited social scoring or the other prohibited activities described in the lab. |
| Does this system operate in any of the eight Annex III areas? | **Not under its current intended purpose.** Although it concerns job interviews, it supports applicants rather than employers' recruitment or selection decisions. |
| If Annex III: does it significantly influence decisions, or is it narrow/preparatory? | **Not applicable to the present use.** If repurposed to score, shortlist or reject candidates for an employer, Annex III employment/recruitment analysis would be required. |
| Does it interact with end users or generate content requiring disclosure (Article 50)? | **Potentially yes.** Users interact with an AI-based report-generation service. Assess whether users are already clearly aware that they are interacting with AI; provide an explicit AI notice as a practical safeguard. The report is not automatically subject to every AI-generated-content labelling rule simply because it is generated text. |
| First-pass risk tier | **Limited risk / transparency**, using the lab's categories; precise Article 50 applicability requires confirmation against the user experience and deployment. |
| One-sentence justification | The system prepares user-facing AI-generated interview guidance, but does not make Annex III employment decisions; Article 50(1) transparency for direct AI interaction is the principal AI Act issue to assess. |

**Boundary condition:** This conclusion depends on the agent remaining a **candidate-support tool**. Selling its outputs to employers as applicant assessments, adding automated suitability scores or using it for selection would materially change the classification. EU AI Act applicability and implementation dates should be confirmed with legal counsel for the actual launch date and jurisdiction.

## Phase 3 — Provider, deployer and vendor role map

| Role | Entity / component | Key AI Act responsibilities or review points |
|---|---|---|
| Provider (provisional) | Project builder / organisation offering the custom Interview Preparation Agent under its name | Define intended purpose, document design, determine classification, ensure applicable transparency and instructions; role depends on commercial deployment arrangements. |
| Deployer (provisional) | Organisation operating the n8n service for applicants | Use the system as intended, present notices, control access, maintain appropriate human processes and handle personal data lawfully. |
| End user | Job applicant using the form | Supplies CV and job details; reviews output before relying on it. Not necessarily an AI Act deployer merely by using a consumer-facing service. |
| Third-party AI vendor | OpenAI — GPT-4o-mini API | Provides the underlying general-purpose AI model/service; its separate provider obligations do not automatically make the whole interview agent high-risk. |
| Integration platform | n8n | Workflow orchestration; verify hosting, access permissions, logging and processor arrangements. |
| Research services | Tavily and NewsAPI | External company/news data sources; verify which user inputs are sent and contractual/data handling arrangements. |
| Retrieval service | Pinecone | Stores and retrieves annual-report knowledge-base content; confirm whether personal CV content is ever stored there (not established). |
| Output storage | Notion | Stores generated reports; access controls, data location, sharing and deletion arrangements need review. |

**Role caveat:** A custom integration can involve several providers and deployers. Contracts, branding and control over the system must be checked before assigning final legal roles. No importer role is established from the information reviewed.

## Phase 4 — High-risk obligation checklist

**Not applicable under the current first-pass classification.** The 11-item high-risk provider checklist (Articles 9–15, 43, 47–49 and 72) is not completed because the agent is not currently intended to evaluate or select applicants for employers. If the intended purpose changes, reassess and complete that checklist before deployment.

## Phase 5 — Gap analysis and remediation plan

These are **first-pass gaps or verification items**, not claims that a specific legal violation has been proven.

| ID | Obligation / concern | Current state and gap | Required or safer state | Practical remediation | Escalation |
|---|---|---|---|---|---|
| G1 | AI transparency — Article 50(1) assessment | The form is an AI interview agent, but evidence of a clear, prominent AI interaction notice at the point of use has not been confirmed. | Users should understand they are interacting with AI where disclosure is legally required; avoid ambiguity. | Add a notice above the submit button and on the report: “This report is generated by AI. Verify facts and adapt examples to your own experience.” | Legal review of precise Article 50 application. |
| G2 | Personal-data transparency and lawful processing — GDPR | CVs and generated reports may contain personal data. Consent is collected, but the privacy notice, legal basis for each processing activity and vendor disclosures have not been fully verified. | Clear purpose, lawful basis, privacy information and suitable processor/vendor arrangements. | Document the data flow; provide a privacy notice identifying processing purposes, recipients, rights and retention; review vendor contracts and international transfers. | Data protection officer / privacy counsel. |
| G3 | Retention and deletion | Successful/failed production execution saving was set to “Do not save”; this does not remove historic executions, Notion reports or third-party retained data. | Documented retention periods and effective deletion across relevant stores. | Review old n8n executions; define Notion report retention and deletion procedure; verify vendor retention and access. | Privacy/security owner. |
| G4 | Human review and factual accuracy | Reports are generated automatically; STAR examples may imply achievements not supported by the CV. No mandatory pre-delivery approval exists. | Users should be able to distinguish factual CV evidence from suggested language and correct errors. | Label STAR content as **draft examples**, ground achievements in supplied CV evidence, show source/uncertainty notes, and add a user confirmation checklist before use. | Product owner; optional legal review for claims. |
| G5 | Access control and external sharing | Notion delivery is implemented, but report visibility, permissions and sharing defaults have not been independently verified. | Reports containing personal information accessible only to authorised recipients. | Test Notion page permissions; restrict access; avoid public links; document account ownership and incident response. | Security/privacy owner. |
| G6 | Reliability, source quality and monitoring | Microsoft/SAP RAG and Siemens live-research fallback were tested. Some forced-failure scenarios and exhaustive source/STAR evidence checks were not completed. | Reliable, traceable outputs with clear limitations and controlled failures. | Add source citations and freshness checks; test vendor outages, hallucinations and unsupported STAR claims; log minimal non-sensitive operational metrics. | Engineering/product owner. |
| G7 | Production governance | The prototype has an exported n8n workflow and documentation, but a formal deployment owner, change approval and incident procedure are not established. | Clear accountability and repeatable release checks. | Create an owner checklist, risk register, versioned workflow release process and periodic review schedule. | Product/security owner. |

### Recommended implementation order

1. **Before public production use:** Confirm intended purpose and AI Act classification; publish an AI-use notice and privacy information; restrict Notion access; review vendor data transfers and retention.
2. **Next sprint:** Add factual-evidence checks for STAR examples, user verification instructions, source traceability and a report deletion process.
3. **Before scaling:** Test outages and edge cases, document security controls and monitor quality without storing unnecessary CV content.
4. **On any feature change:** Reclassify before adding employer-facing candidate scores, automated shortlisting or hiring recommendations.

## Phase 6 — Compliance memo (Head of Product)

**To:** Head of Product, AI Interview Preparation Agent  
**From:** Project 3 AI Compliance Reviewer  
**Date:** 16 November 2026  
**Subject:** First-pass EU AI Act launch assessment

### Recommendation: Conditional go-ahead after basic controls

The AI Interview Preparation Agent is provisionally classified as **limited risk / transparency** for the lab. Its intended function is to help applicants prepare for interviews, not to evaluate or select them for employment. On that basis, the recruitment-related high-risk category in Annex III does not appear to apply. We should nevertheless verify Article 50(1) user-transparency requirements for the actual interface and deployment.

The project builder or organisation marketing the integrated agent may be its **provider**, depending on the deployment arrangements. The organisation operating the service is the likely **deployer**. OpenAI supplies the underlying AI model; n8n, Tavily, NewsAPI, Pinecone and Notion provide workflow, research, retrieval and output services. Legal counsel should confirm the final role map.

**Three priority findings:** First, the user-facing AI disclosure and full privacy notice have not been verified. Second, personal CV information and generated reports may pass through multiple services, while retention, deletion and Notion sharing controls need confirmation. Third, automatically generated STAR examples could include unsupported achievements, and the present workflow relies on users to check them.

**Recommended action:** Before a broader public launch, add a prominent AI disclosure and clear privacy information, verify vendor/data-sharing arrangements, restrict report access and implement a deletion policy. Next, strengthen evidence checks and clearly mark STAR examples as editable suggestions. Finally, document release ownership and complete failure-mode and accuracy testing. Any future employer-facing scoring or selection feature must trigger a new Annex III risk assessment.

**Limitations:** This is a first-pass educational audit based on the known Project 3 design and tests. It is **not** legal advice, a conformity assessment, certification or proof of GDPR compliance. Controls described as unverified require direct inspection before final sign-off.

## Optional stretch artifact — Draft user transparency notice

> **AI-assisted interview preparation:** This service uses artificial intelligence to analyse the CV and job description you submit, research the selected company and generate interview-preparation guidance. Its suggestions may contain errors or invented details. Check all facts and use only examples that accurately reflect your own experience. Your CV and generated report may be processed by third-party service providers as explained in our privacy notice. This tool does not make hiring decisions.


## Lab-only GitHub repository structure

```text
project3-ai-act-audit/
├── README.md
└── EU_AI_Act_Project3_Interview_Agent_Compliance_Audit.md
```

