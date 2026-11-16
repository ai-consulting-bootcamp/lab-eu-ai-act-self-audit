# Audit Your Own Project — EU AI Act

**Track:** Ironhack Module 7 — EU AI Act  
**Project:** Project 3 — AI Interview Preparation Agent  
**Prepared by:** Martha  
**Date:** 16 November 2026  
**Status:** First-pass educational audit completed; production controls and some submission evidence remain unverified

## Start here

**[lab_proof.md](./lab_proof.md)** is the reviewer's entry point. It documents the use case, implemented n8n workflow, test coverage described in the audit, expected report output, audit findings, one concrete limitation, and the distinction between documented work and evidence not attached.

## Project overview

The AI Interview Preparation Agent helps applicants prepare for interviews. Users submit a hiring-company name, job description, PDF CV and privacy acknowledgement. An n8n workflow extracts CV text, researches the company using Tavily and NewsAPI, optionally retrieves official Microsoft/SAP annual-report passages from Pinecone, and uses OpenAI GPT-4o-mini to draft a seven-section preparation report. The result is displayed as HTML for printing or PDF saving and is also written to Notion.

The agent **does not rank, reject or recommend applicants to employers**. Its first-pass EU AI Act classification is **limited risk / transparency (provisional)** in the lab's terminology, subject to checking whether Article 50 applies to the actual user interaction. It is not classified as an Annex III recruitment decision system for its current applicant-support purpose.

## Files

| File | Purpose |
|---|---|
| [lab_proof.md](./lab_proof.md) | Main reviewer entry point, test description, findings, evidence status and limitations |
| [EU_AI_Act_Project3_Interview_Agent_Compliance_Audit.md](./EU_AI_Act_Project3_Interview_Agent_Compliance_Audit.md) | Full six-phase audit, risk and role mapping, remediation plan and compliance memo |

## Main findings

- **Transparency:** Confirm a prominent AI-use notice on the form and report.
- **Privacy and retention:** Production execution saving was disabled in n8n, but older executions, Notion pages and third-party retention require separate review.
- **Accuracy:** Generated STAR examples may include unsupported achievements; users should verify and edit them.
- **Access:** Notion report permissions and sharing defaults have not been independently confirmed.
- **Deployment:** Broader public launch is conditional on completing basic transparency, privacy, security and reliability controls.


This audit is an educational assessment, **not legal advice or formal EU AI Act certification**.
