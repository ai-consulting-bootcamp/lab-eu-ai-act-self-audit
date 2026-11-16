# Lab Proof — Audit Your Own Project (Project 3)

**Track:** Ironhack Module 7 — EU AI Act  
**Prepared by:** Martha  
**Date:** 16 November 2026  
**System:** AI Interview Preparation Agent (n8n prototype)  
**Status:** Audit deliverables documented; original workflow/run/output artifacts not attached to this proof

## 1. Reviewer entry point and supporting material

The full assessment is in **[EU_AI_Act_Project3_Interview_Agent_Compliance_Audit.md](./EU_AI_Act_Project3_Interview_Agent_Compliance_Audit.md)**. It covers: (1) system brief, (2) first-pass classification, (3) provider/deployer/vendor roles, (4) applicability of the high-risk checklist, (5) gap analysis and remediation, and (6) a Head of Product compliance memo.

## 2. Workflow / implementation

**Trigger:** An applicant submits an n8n web form with a hiring company, job description, PDF CV and privacy acknowledgement.

**Processing:** n8n validates the submission and extracts CV text; Tavily and NewsAPI support company research. For Microsoft and SAP, a Pinecone knowledge base contains passages from official 2025 annual reports. For other companies, the agent uses live company research. OpenAI GPT-4o-mini composes the personalised interview-preparation material.

**Output:** A seven-section interview-preparation report, including suggested STAR-style answers, rendered as HTML for printing or PDF saving and also created in Notion.

**Scope:** This is an applicant-facing preparation tool, **not** an employer-side screening, ranking, rejection or hiring system.

**Workflow export evidence:** The full audit states that an n8n workflow export exists, but the export itself was **not provided with these materials**. Therefore no JSON export is linked here. To satisfy the course's workflow-export evidence requirement, add a sanitised export and link it in this section. Do not include credentials or applicant data.

## 3. One run or query — inputs and evidence

The audit records testing of the **Microsoft/SAP Pinecone retrieval path** and the **Siemens live-research fallback**. It does not identify a single fully reproducible execution with its precise input values, execution ID, timestamp or screenshots.

| Input / evidence | What is established |
|---|---|
| Hiring company | Microsoft/SAP retrieval and Siemens fallback were tested, according to the audit |
| Job description | Required form input; exact test text not available in the audit |
| CV PDF | Required form input; exact test CV not available and should not be published if personal |
| Privacy acknowledgement | Required form input; exact test submission state not documented |
| Run result | The system has been tested and generates interview-preparation reports; an individual run artifact is not attached |

**Evidence status:** No execution screenshot, redacted test payload or complete example run is included in the provided audit. A screenshot or synthetic/redacted test record would be needed to meet the course's explicit **one run/query with input and evidence** requirement. Disabling saved production executions does **not** require re-enabling them; evidence can be collected using a safe synthetic test without retaining personal data.

## 4. Final output and audit result

**System output:** The documented output is a seven-section interview-preparation report with company research and draft STAR-style interview examples, delivered in HTML and Notion. The report can be printed or saved as a PDF. A particular redacted report file or screenshot is **not attached** to the supplied audit, so this proof does not claim one is available.

**Audit output:** The assessment finds no identified prohibited Article 5 practice and no Annex III recruitment-selection use under the present intended purpose. The provisional lab classification is **limited risk / transparency**, with Article 50(1) applicability requiring confirmation. The recommendation is a **conditional go-ahead after basic controls**, not an unconditional production launch.

## 5. One concrete limitation and recommended action

**Limitation:** OpenAI-generated STAR examples may sound credible but describe achievements not actually supported by the applicant's CV. The workflow does not enforce a human approval step before generating or storing a report; the applicant reviews it afterwards.

**Impact:** An applicant could unintentionally repeat an invented claim during an interview.

**Recommended fix:** Mark STAR examples as editable drafts, ground claims in the supplied CV, flag unsupported details, and ask users to confirm accuracy before using the examples.

**Separate data-retention limitation:** n8n was configured not to save successful/failed **production** executions. This reduces future stored execution data but does not establish that historic n8n records, Notion pages or vendor-held data have been deleted. Verify those stores separately.

## 6. Compliance findings and next actions

| Finding | First-pass result | Next action |
|---|---|---|
| Prohibited practices | None identified for current intended purpose | Reassess if purpose changes |
| Annex III high-risk | Not identified for applicant-only interview preparation | Reclassify before employer-facing candidate scoring or selection |
| AI transparency | Article 50 applicability needs checking | Display clear AI-use notice on form and report |
| GDPR and vendor data flows | CVs and reports contain personal data; safeguards not fully verified | Review privacy notice, lawful basis, vendors and transfers |
| Retention and access | Production execution saving disabled; other stores unverified | Check historic executions, Notion permissions and deletion |
| Reliability | STAR claims may be unsupported | Ground examples and test edge cases |

