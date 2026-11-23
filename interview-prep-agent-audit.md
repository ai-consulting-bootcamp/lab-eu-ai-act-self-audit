# Project 3 Self-Audit: Interview Prep Agent

## Phase 1: System brief

The Interview Prep Agent helps a job seeker prepare for an interview. The user provides a job advertisement and a CV or a GitHub profile. The agent creates a short preparation report, intended to take about four minutes to read.

The report may include information about the company with links to sources, relevant experience quoted from the CV, skills the user may want to prepare, likely interview questions with draft STAR answers, and suggestions for similar companies in Germany. Similar-company suggestions are ideas for the user to explore; the system does not apply for jobs or contact employers.

The agent uses the job advertisement and the user's career information as input. It may also use connected AI and information-retrieval services, depending on the workflow configuration. The exact providers, data storage settings, and retention periods must be confirmed against my own version of the n8n workflow.

The output is generated text and recommendations for the job seeker. It does not score applicants for an employer, rank candidates, decide who gets an interview, or submit an application. The job seeker reviews the report and decides what to use. The user is affected by the advice; employers do not receive the report through the intended workflow.

I built my version of the agent in n8n. Any external AI model, search service, or hosting platform is a third-party component. The agent is intended for the job seeker who provides the input. It should not be treated as a substitute for checking the original job advertisement, company sources, or the user's own experience.

## Phase 2: First-pass risk classification

| Question | Assessment |
|---|---|
| Does it fall under an Article 5 prohibited practice? | No, based on the described purpose and workflow. |
| Does it operate in an Annex III high-risk area? | It relates to job seeking, but it is not used by an employer to recruit, filter, rank, or evaluate applicants. |
| Does it significantly influence an employment decision? | No. It helps the applicant prepare; it does not decide whether someone gets a job or interview. |
| Does it generate text or interact with a person? | Yes. It generates interview-preparation text for the user. |
| First-pass tier | Limited risk / transparency obligations. |
| One-sentence reason | The agent privately generates job-preparation advice for an applicant rather than making recruitment decisions; transparency about AI use and generated content should still be checked under Article 50. |

## Phase 3: Role map

| Role | Entity | Main responsibility in this exercise |
|---|---|---|
| Provider | Me, for the custom n8n agent I built | Describe the system accurately, design clear user information, and check the obligations that apply to my system. |
| Deployer | The person or organization using the workflow in a professional setting | Use it for the stated purpose, review outputs, and handle personal data responsibly. |
| Third-party vendors | The AI model, n8n hosting, and any connected search or file services actually used | Their roles and data handling depend on the services and settings in my workflow; I must verify them. |

## Phase 4: High-risk checklist

This system is not classified as high risk in this first-pass assessment, so the 11-item high-risk provider checklist is not completed.

## Phase 5: Gaps and remediation

### Gap 1: CV privacy and data retention

**Current state:** The workflow accepts a CV or GitHub profile, but the exact data sent to each connected service, storage location, and retention period need to be confirmed.

**Required state:** The user should know what personal data is processed, which services receive it, and how long it is kept.

**Remediation:** Map the n8n workflow node by node. Minimize personal data, avoid retaining uploaded CVs longer than necessary, and document the AI and hosting vendors. Check GDPR requirements and vendor terms.

### Gap 2: AI and generated-text transparency

**Current state:** The agent produces AI-generated advice. The interface should make that clear at the first interaction.

**Required state:** Users should be clearly informed when they are interacting with an AI system. Confirm whether the system or its underlying provider must also mark generated text in a machine-readable way under Article 50.

**Remediation:** Add a short notice before the user submits a CV: “This tool uses AI to generate interview-preparation suggestions. Please check important details yourself.”

### Gap 3: Source accuracy and unsupported claims

**Current state:** The agent checks claims, removes unsupported claims, and reports how many were removed. A source link can still be wrong or fail to support the claim.

**Required state:** Company facts and job requirements should be traceable to reliable sources. Personal experience should match the CV or GitHub evidence.

**Remediation:** Keep source links beside company claims, label suggestions as suggestions, and ask the user to verify important details against the original source. Keep the unsupported-claim check and removal count in the final report.

### Human review

Before using a STAR answer or a company fact in an interview, the job seeker should check that it is accurate and sounds like their real experience. The agent must not invent achievements or submit job applications automatically.

## One-page compliance memo

**To:** Head of Product  
**Subject:** First-pass EU AI Act review of the Interview Prep Agent

The Interview Prep Agent takes a job advertisement and a user's CV or GitHub profile and creates a private interview-preparation report. It suggests relevant experience, skills to prepare, possible interview questions, draft STAR answers, and company information with links. It does not rank applicants for an employer, decide who receives an interview, or apply for jobs.

**Classification:** First-pass assessment: limited risk / transparency obligations. Although the tool concerns employment, its intended user is the job seeker. It does not perform recruitment or candidate evaluation for an employer. It does generate text and interact with the user, so AI transparency should be clear. This is a first-pass learning assessment, not a legal opinion.

**Roles:** I built the custom n8n workflow and am treated as its provider for this exercise. The person or organization using it in a professional setting is the deployer. The AI model, hosting service, and any connected search or file tools are third-party components; their exact roles and data practices must be checked against the workflow.

**Main findings:** The main unresolved issues are how CV data moves through the workflow and how long it is retained; whether the user receives a clear AI notice; and how the agent verifies company facts and generated interview answers.

**Recommended next steps:** Map the workflow and its vendors, minimize and protect CV data, add an AI-use notice, preserve source links, test for unsupported claims, and require the user to review the report before relying on it. Get privacy or legal review for the actual data flow and vendor terms.

**Caveat:** This memo is a first-pass class exercise. It is not a legal opinion, conformity assessment, or certification.