# Phase 1 — System Brief

**System:** Career Intelligence Agent  
**Project:** Ironhack AI Consulting Bootcamp — Project 3  
**Industry:** HR Technology / Recruitment & Career Development  
**Development status:** Functional prototype (MVP)

## 1. Purpose and Functionality

The Career Intelligence Agent is an AI-assisted career guidance system designed to help individual job seekers identify relevant employment opportunities and make better-informed career decisions.

Instead of simply listing available jobs, the system compares job advertisements with a candidate's professional background and preferences. It identifies promising opportunities, explains why they may be suitable, and highlights important qualifications that require further verification.

The system supports personal career decisions. It does not make hiring decisions, submit applications, or automatically accept or reject candidates on behalf of employers.

## 2. Inputs and Data Sources

Users provide and review a structured candidate profile containing information such as professional experience, education, skills, preferred job roles, career level, location, and working arrangements.

In a real-world application, this information would constitute personal data because it describes an identifiable individual's professional background and preferences. The prototype has been demonstrated using synthetic candidate profiles.

The system retrieves current job advertisements from Arbeitnow and Himalayas. Additional information may come from ESCO occupational references, Tavily company research, and selected labour-market publications from organizations including the European Commission, Cedefop, and the International Labour Organization.

OpenAI is used for optional AI-generated analysis, while Pinecone supports retrieval of relevant passages from the collected research documents.

## 3. Outputs and Decisions

For each evaluated job, the system produces an indicative matching score between 0 and 100, accompanied by explanations of supporting evidence and potential gaps.

Results are separated into recommended opportunities and positions requiring further review. A higher score does not automatically result in a recommendation: important job requirements must also be supported by sufficient candidate information.

The final report may include job recommendations, qualifications to verify, relevant labour-market insights, and source references. Reports can be downloaded in PDF, Markdown, and JSON formats.

Scores are advisory indicators, not hiring probabilities or confirmed assessments of professional qualifications.

## 4. Affected Individuals and Human Oversight

The primary affected individuals are job seekers whose career choices may be influenced by the system's recommendations.

Before starting the automated analysis, users can review and correct their candidate profiles. Once the analysis is complete, users can inspect the results, follow source links, and decide independently whether to pursue an opportunity.

There is no automated employment decision or application submission. However, the prototype does not require an independent human reviewer to approve each report before it is shown to the user.

## 5. Development and Intended Users

The system was developed as an individual bootcamp project using Python, LangGraph, and Streamlit, integrating several external data and AI services.

Its intended production users would be individual job seekers seeking personalized career guidance. A future commercial provider could offer the application directly to these users.

The current system is a prototype, not a deployed recruitment or applicant-screening solution.



## Phase 2: Risk Tier Classification

| Question | Your answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | **No.** The system does not perform any of the prohibited AI practices listed in Article 5. |
| Does this system operate in any of the eight Annex III areas? | **No, for its current intended purpose.** Although it relates to employment, it provides private career recommendations directly to jobseekers and is not used by employers to recruit, screen, rank, or select applicants. |
| If Annex III: does it "significantly influence" decisions in that area, or is it narrow/preparatory? | **N/A.** The current use case falls outside Annex III, point 4(a), rather than relying on an exception for preparatory tasks. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | **Potentially yes.** It generates AI-written career intelligence reports, making Article 50(2) relevant. Article 50(1) depends on whether its user interaction qualifies as direct AI interaction. |
| First-pass risk tier | **Limited Risk / Transparency (provisional).** |
| One-sentence justification citing the specific article or Annex entry | The system falls outside **Annex III, point 4(a)** because it provides candidate-controlled career recommendations rather than employer-led recruitment or selection, while its AI-generated career reports require further assessment under **Article 50(2)**. |


## Phase 3: Role Map

| Role | Entity | Key AI Act obligations |
|---|---|---|
| **Provider** | Me / my future company, as the developer and prospective commercial provider of the Career Intelligence Agent. | Assess the system's intended purpose and risk classification; comply with applicable Article 50 transparency requirements; ensure appropriate AI literacy (Article 4). Maintain documentation, testing, bias checks, and user guidance as good practices. Assess GDPR obligations separately. |
| **Deployer** | No separate professional deployer is identified for the current B2C use case. Individual jobseekers using the tool for personal career planning are generally excluded from the deployer definition under Article 3(4). My company could also be a deployer if it uses the system professionally under its own authority. | Where a professional deployer exists: ensure appropriate AI literacy and comply with any applicable AI Act obligations. Human review, appropriate data handling, and monitoring are recommended safeguards. |
| **Third-party AI provider** | OpenAI, providing the general-purpose AI model integrated into the system. | Comply with applicable general-purpose AI model provider obligations, including documentation and information for downstream providers under Article 53, as applicable. Our company remains responsible for its own AI system. |
| **Other service and data vendors** | Pinecone, Tavily, ESCO, Arbeitnow, and Himalayas. | Their roles depend on the services supplied. Assess data protection, contractual terms, API usage rights, and any AI Act obligations that apply to their specific components. |


## Phase 5: Gap Analysis and Remediation Plan

**Scope:** The Career Intelligence Agent is currently an MVP using synthetic candidate profiles. The following gaps are identified for potential production deployment. Not all represent confirmed legal violations.

| Gap | Obligation / Concern | Current State | Required State | Remediation | Escalation Needed? |
|---|---|---|---|---|---|
| **1. AI Transparency** | EU AI Act, Article 50 | The system is presented as an AI tool and explains the limitations of its matching scores. However, technical marking of AI-generated report content has not been verified. | Applicable transparency requirements must be satisfied, including machine-readable marking of AI-generated content where required under Article 50(2). | Review the applicability of Article 50(1) and 50(2). Add clear AI disclosures and implement appropriate technical marking for generated reports where required. | **Yes** — Legal / AI Act compliance specialist. |
| **2. Personal Data Protection** | GDPR, Articles 5, 6, 13 and 32 | The MVP uses synthetic candidate profiles. Production use would involve real CVs, employment histories, skills and career preferences, potentially processed by external AI services. | Personal data must be processed lawfully, transparently and securely, with appropriate safeguards and retention limits. | Establish a lawful basis, publish a privacy notice, minimize collected data, define retention and deletion procedures, review vendor data processing agreements and implement security controls. | **Yes** — Data Protection Officer / privacy lawyer. |
| **3. Third-Party Data and Usage Rights** | Copyright, licensing and contractual obligations | The system retrieves job advertisements through external APIs and uses labour-market publications for RAG. Commercial reuse permissions have not been fully verified. | All external content must be accessed, stored, processed and redistributed within the applicable usage rights and contractual conditions. | Review API terms, publication licences and commercial usage restrictions. Document approved sources and adjust data storage or report excerpts where necessary. | **Yes** — Legal / licensing specialist. |
| **4. Matching Fairness and Reliability** | Responsible AI risk management; potential GDPR fairness considerations | The system uses explainable weighted matching, evidence checks and automated software tests. However, systematic evaluation across diverse candidate groups and job types remains limited. | Matching results should be reliable, understandable and assessed for systematic disadvantages before production deployment. | Expand evaluation datasets, test different professional backgrounds and career levels, monitor false recommendations and review outcomes, and document known limitations. | **Partial** — Technical evaluation team; legal or DPO review if personal data or discrimination concerns arise. |

### Additional Risk: Change of Intended Purpose

The current system provides career recommendations directly to jobseekers and does not support employer-led applicant selection.

If the product is later used by employers to screen, rank or select applicants, its classification must be reassessed under **Annex III, point 4(a)** of the EU AI Act. Such a change could trigger high-risk AI system obligations.

**Recommended action:** Clearly document and restrict the intended purpose of the current product. Reassess the regulatory classification before introducing employer-facing recruitment features.

**Escalation needed:** Yes — AI Act legal specialist.


# Phase 6: EU AI Act Compliance Memo

**To:** Head of Product, Career Intelligence Agent  
**From:** AI Compliance Consultant  
**Subject:** First-Pass EU AI Act Compliance Assessment  
**Date:** 17 November 2026

## 1. System Classification

The Career Intelligence Agent is provisionally classified as **Limited Risk / Transparency**. Its current purpose falls outside **Annex III, point 4(a)** because it provides career recommendations directly to jobseekers rather than supporting employer-led recruitment or candidate selection. However, its AI-generated career reports require further assessment under **Article 50**, particularly the transparency requirements of Article 50(2).

## 2. Role Map

The company developing and offering the Career Intelligence Agent would act as the **AI system provider**.

Individual jobseekers using the application for personal career planning would generally not qualify as deployers under the EU AI Act. A professional organization using the system under its own authority could become a deployer.

**OpenAI** acts as an external AI model provider. Other services, including Pinecone, Tavily, ESCO, Arbeitnow, and Himalayas, supply infrastructure, research capabilities, or data. Their contractual and regulatory responsibilities must be assessed separately.

## 3. Key Compliance Findings

The current MVP demonstrates several positive safeguards, including explainable matching scores, evidence-based recommendations, human review of candidate inputs, and automated testing.

Nevertheless, three areas require attention before commercial deployment:

**AI Transparency:** The system identifies itself as AI-assisted and explains the limitations of its scores. However, compliance with applicable disclosure and technical marking requirements for AI-generated reports has not been fully verified.

**Personal Data Protection:** The prototype uses synthetic candidate profiles. Processing real CVs and career information would require GDPR-compliant data handling, including transparency notices, lawful processing, appropriate security measures, and defined retention policies.

**Third-Party Usage Rights:** The system retrieves external job advertisements and labour-market research. Commercial usage, storage, and redistribution rights have not yet been comprehensively verified.

Additionally, systematic testing for potential matching bias across different candidate groups remains limited.

## 4. Recommended Next Steps

**Priority 1 — Legal and data protection review:** Confirm the applicable Article 50 obligations, establish a GDPR compliance framework, and assess agreements with external service providers.

**Priority 2 — Data licensing review:** Verify commercial usage permissions for job APIs and research publications. Restrict or replace sources where necessary.

**Priority 3 — Technical improvements:** Implement any required AI-content disclosures or markings, strengthen personal data safeguards, and expand matching fairness and reliability testing.

**Priority 4 — Ongoing monitoring:** Establish procedures to document system limitations, evaluate recommendations, and review compliance when functionality changes.

Any future use for employer-led applicant screening must trigger a new risk assessment under Annex III, point 4(a).

## 5. Caveats

This memo is a preliminary compliance assessment based on the current MVP and its intended use.

It is **not a legal opinion, formal conformity assessment, or certification of compliance**. Final regulatory interpretation and production readiness should be confirmed by qualified legal and data protection professionals.