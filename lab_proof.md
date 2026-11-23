# Lab 2 Proof — Self-Audit of the Interview Prep Agent

**Student:** Roodabeh Seif  
**Project:** Interview Prep Agent  
**Purpose:** Help a job applicant prepare for an interview using a job advertisement and their CV.

## File map

- [Self-audit report](interview-prep-agent-audit.md)
- [n8n workflow](interview-prep-agent-workflow.json)
- [Test input](example-input.md)
- [Test output](example-output.pdf)
- [Evidence screenshot 1](evidence0.png)
- [Evidence screenshot 2](evidence1.png)

## System brief

The Interview Prep Agent takes a job advertisement and a candidate’s CV as input. It creates a short preparation report with company information and links, relevant experience from the CV, skill gaps to prepare for, likely interview questions with suggested STAR answers, and suggestions for similar companies in Germany.

The agent supports the job applicant. It does not rank or reject candidates for an employer. It uses an n8n workflow and AI services to process information and generate text. The CV and job advertisement may contain personal data. The applicant decides what to do with the recommendations.

The agent checks claims against sources and removes unsupported claims. The exact service providers, data-retention settings, and data flows should be checked in the workflow and audit report.

## First-pass classification

**Provisional tier: Limited risk / transparency obligations.**

The agent prepares interview materials for the applicant. Based on its intended use, it does not make or support an employer’s recruitment decision. Therefore, it does not appear to fall under the employment high-risk category in Annex III, point 4(a). Users should be told when AI has helped create the material.

This assessment applies only while the system is used by job applicants. Using it to score, rank, shortlist, or reject candidates would require a new assessment.

## Role map

| Role | Entity | First-pass responsibility |
|---|---|---|
| Provider | Roodabeh Seif, as the person configuring and presenting the agent | Explain the system’s purpose and limits, and check transparency and data handling. Confirm this role if the system is later commercialised or rebranded. |
| Deployer | The job applicant using the agent for interview preparation | Treat the report as support, verify facts and links, and decide what to use or share. |
| Third-party vendors | n8n and the connected AI, search, or data services | Confirm their roles and data responsibilities from the workflow settings and vendor terms. |

## Test run and evidence

The test input, workflow, output, and screenshots come from the same run.

- **Input:** [example-input.md](example-input.md)
- **Workflow:** [interview-prep-agent-workflow.json](interview-prep-agent-workflow.json)
- **Evidence:** [Screenshot 1](evidence0.png) and [Screenshot 2](evidence1.png)
- **Final output:** [example-output.pdf](example-output.pdf)
- **Validation result:** The agent removed one unsupported claim: “Strong project management skills.” It could not trace this claim to the CV, candidate information, or GitHub profile.

## Main gaps and remediation

1. **A link does not prove a claim.** A source may open but still fail to support the statement. Check that each company claim is supported by its source, and remove claims that cannot be verified.

2. **Personal data may go to connected services.** Map how CV and job-ad data move through the system. Minimise stored data, check data-retention and model-training settings, and tell users which services process their information.

3. **Keep the intended users clear.** The agent is for job applicants. Adding employer-facing scoring or ranking would require a new EU AI Act assessment.

4. **Suggested answers may sound too certain.** Mark STAR answers as drafts. Use only experience supported by the CV, and ask the applicant to check every detail before using it.

## Limitation observed

A source link can look valid without supporting the related claim. Source checking helps remove unsupported content, but it cannot guarantee that every remaining statement is correct. Applicants should verify important facts before relying on them.

## Submission check

- [ ] This file is named `lab_proof.md`.
- [ ] The n8n workflow JSON is included.
- [ ] The test input and matching output are included.
- [ ] Evidence from the same run is included.
- [ ] The validation result records the actual number of removed claims.
- [ ] The repository contains only Lab 2 materials.