# LAB | Audit your own project

## System Brief: Interview Prep Report

*Julia Antunes - 18 Nov 2026*

### What does the system do?

This workflow helps a job seeker prepare for an interview. It researches a company and its recent news, compares a job description with information about the candidate, and creates a report with relevant experience to discuss, possible skill gaps, and likely interview questions. It is a preparation aid, not a hiring tool.

### What inputs does it take?

The user provides a company name, a job description, and a PDF CV, a GitHub profile, or both. The workflow extracts information from the CV and/or gathers repository information from the supplied GitHub profile. It also researches the company and recent news using online sources. A CV can contain personal data such as a person's name, contact details, employment history, education, and skills. A GitHub profile may contain identifying information and public work history. The job description and company research may identify people, depending on their contents.

### What does it output?

The workflow generates and displays an HTML report. The report summarizes role requirements and candidate evidence, suggests projects or experience to highlight, identifies potential skill gaps, and lists five likely interview questions. It does not produce a candidate score, hiring decision, or notification.

### Who is affected, and how is the output reviewed?

The job seeker whose CV or profile is submitted is the person most directly affected: the report may shape how they prepare and present their experience. The workflow does not make decisions or take action on the user's behalf. The user reads the report, checks its claims and links, and decides what advice to use. There is no separate or mandatory human-review step built into the workflow. Unsupported claims and unverified links are removed during validation, but the user should still verify the report before relying on it.

### Who built it, and who would use it?

Julia Antunes built the workflow by configuring n8n and integrating OpenAI and online research sources. In production, the intended users would be job seekers preparing for their own interviews. No employer or hiring team is intended to use the report to assess or select candidates. This work is part of a lab project in an Ironhack bootcamp.

### Data handling

The workflow processes submitted materials, research results, and the generated report. n8n execution history may retain sensitive data, and invalid submissions may also be logged to Notion if that integration is configured. Generated reports are not stored in persistent project storage.

Further information:

- [Project repository](https://github.com/antunesjulia/project-3-interview-prep-report)
- [README](https://github.com/antunesjulia/project-3-interview-prep-report/blob/main/README.md)

---

## Phase 2: Risk tier classification

| Question | Your answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | No. It does not infer emotions, exploit vulnerabilities, enable social scoring, undertake untargeted scraping for facial-recognition databases, or perform another Article 5 prohibited practice. |
| Does this system operate in any of the eight Annex III areas? | Not in its intended use. The report relates to interview preparation, not employment selection or decisions by an employer. It does not rank candidates or influence an employer's hiring decision. |
| If Annex III: does it "significantly influence" decisions in that area, or is it narrow/preparatory? | Annex III is not triggered. Even if a job seeker uses the report to prepare, the system is only an advisory preparation aid. The user decides what to use and no employer decision is made or influenced by the workflow. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | Yes. It is a direct interaction between a person and an AI-enabled workflow, and it generates a text report. The report is private rather than publicly posted to inform the public on a matter of public interest. |
| First-pass risk tier | Limited risk / transparency obligations |
| One-sentence justification citing the specific article or Annex entry | Article 50 is the applicable first-pass tier because the system directly interacts with a user and uses generative AI to create text, while it does not place a person into an Annex III employment-decision system or engage in a prohibited practice under Article 5. |

This classification depends mainly on intended use. It should be reconsidered if the report is offered to employers or recruiters, used to rank candidates, or presented as an employer-facing hiring tool. That change could trigger Annex III employment rules and would require legal review.

---

## Phase 3: Role map

| Role | Entity | Key AI Act obligations |
|---|---|---|
| Provider | Julia Antunes, as developer of the configured workflow and report service | First-pass duties include making clear that a person is interacting with an AI system where applicable under Article 50(1), marking generative text output in a machine-readable way and making it detectable where Article 50(2) applies, and maintaining accurate information about the system's capabilities and limitations. If the service is placed on the market or put into service for professional use, provider obligations must be reassessed. |
| Deployer | A job seeker using the form for personal interview preparation; an employer or recruiter could only be a deployer if the intended use was deliberately expanded | Article 50 transparency duties may apply to the deployer where the workflow creates generated text or interacts with people. Before professional deployment, the deployer would need to ensure truthful AI disclosure, control access and usage, and monitor the service against its stated purpose. Employment use could create additional provider and deployer duties. |
| Vendor | n8n; OpenAI; Tavily; GNews; GitHub; optional Notion | Each vendor's role depends on its contractual and technical function. OpenAI acts as a provider or provider of a general-purpose model component and must meet its own applicable provider duties. n8n and the research/logging services support orchestration or data processing rather than making hiring decisions. Their terms, model documentation, and data-processing arrangements should be reviewed before deployment. |

This is a first-pass role map, not a legal determination. Contracts and the final production deployment model should be reviewed by a lawyer or compliance specialist.

---

## Phase 4: Transparency obligations and parallel legal issues

The system is not classified as high-risk, so the Article 9-15 and conformity checklist in the Core is not triggered. The following transparency obligations are relevant:

| Obligation | Article | Status | Note |
|---|---|---|---|
| Inform a natural person that they are interacting with an AI system | 50(1) | Gap | The form/report does not clearly state, in every relevant view, that the report is generated by AI. |
| Mark synthetic text so it is machine-readable and detectable | 50(2) | Gap | The HTML report is generated text, but no machine-readable provenance or AI-generation marker is visibly or technically included. The precise scope may depend on the final production format and exemptions for assistive editing. |
| Disclose synthetic text concerning public-interest matters | 50(4) | Not applicable in current use | The report is private interview-preparation material, not public content on a matter of public interest. Reassessment is needed if reports are published. |
| GDPR lawful basis, purpose, transparency, retention, and deletion | GDPR, Articles 5, 6, 13/14, 17 | Partial | The system processes CV and GitHub personal data, but it does not document a complete production privacy notice, retention period, deletion process, or data-subject handling instructions. It avoids persistent report storage but n8n execution history and optional Notion logging may retain information. |
| Accuracy and fair use of public and candidate information | GDPR and general consumer/product duties | Partial | Candidate claims and links are validated against supplied evidence, but the workflow can still generate misleading summaries and the report does not distinguish verified facts, inferred advice, or unverifiable claims. |

---

## Phase 5: Gap analysis and remediation plan

**Gap 1**
- **Obligation:** Article 50(1) requires clear disclosure when a person is interacting with an AI system.
- **Current state:** The form collects candidate and company information and displays an AI-generated report. The README explains that OpenAI generates the report, but the user-facing form does not clearly and consistently identify the service as AI-enabled.
- **Required state:** Before submission or when the report is displayed, the user should receive a clear notice that OpenAI and automation are generating the report and that the report is not human-written or an employment decision.
- **Remediation:** Add concise AI disclosure text to the form and report header. State that the report is automated, advisory, and should be checked; retain and date the notice for the current production version.
- **Escalation needed?** No for the first implementation. External legal review is recommended if the notice is expanded to employment or public-facing use.

**Gap 2**
- **Obligation:** Article 50(2) may require AI-generated text to carry machine-readable marking and be detectable. This should be confirmed for private report use and for any final hosting format.
- **Current state:** The report is returned as HTML text without provenance metadata or an AI-content marker.
- **Required state:** The production output should include an appropriate machine-readable indicator or provenance metadata and a user-facing statement that the text is AI-generated. If an exemption applies, the team should record the basis rather than assume it.
- **Remediation:** Add structured metadata to the HTML output, for example an AI-generated declaration in the document metadata or response metadata, and preserve it when the report is exported or copied. Keep a short compliance note describing the marker and any approved exemption.
- **Escalation needed?** Yes - confirm technical marking requirements and applicable exemptions with legal or compliance specialists familiar with Article 50.

**Gap 3**
- **Obligation:** GDPR principles require a lawful, transparent, data-minimizing process with defined retention and deletion practices.
- **Current state:** The workflow processes CV text and public GitHub profile data, stores execution data in n8n depending on configuration, and may log invalid submissions to Notion. There is no complete privacy notice or production deletion and retention procedure.
- **Required state:** Users should receive a privacy notice identifying purposes and recipients, a defined lawful basis and retention period should be documented, and users should have a workable deletion/contact process. n8n execution history and optional Notion logging should be minimized or disabled.
- **Remediation:** Add a production privacy notice, minimize the fields collected, configure n8n execution retention, disable or restrict Notion logging for real data, document deletion and access procedures, and define data-processing terms with OpenAI and research vendors.
- **Escalation needed?** Yes - a data protection officer or lawyer should confirm the lawful basis, privacy notice, processor agreements, and whether a data protection impact assessment is needed.

**Gap 4**
- **Obligation:** The report should not present generated summaries or inferences as unverified facts, and user-facing limitations should be clear.
- **Current state:** The validation removes unsupported candidate claims and unverified links, but the report does not clearly label inferred advice or source limitations, and failed validation can still end the execution without a fallback.
- **Required state:** Users should be able to distinguish candidate evidence, research findings, and generated advice. The report should state that results should be checked and should handle provider failures safely.
- **Remediation:** Add evidence labels and a limitations note to each report, retain source-attribution data separately, and implement a clear error state that tells the user the report was not generated rather than returning an incomplete or misleading result.
- **Escalation needed?** No for the initial product change. Seek legal or specialist review if the report is later repurposed for employment decisions or public recommendations.

---

## Phase 6: Compliance memo

**To:** Head of Product, Interview Prep Report

**Subject:** First-pass EU AI Act compliance assessment

**System classification.** The Interview Prep Report should be treated as a limited-risk / transparency system under the EU AI Act because it is an AI-enabled interview-preparation tool that interacts with users and generates text. It is not an employer-side Annex III candidate-screening system in its current purpose, and it does not use a prohibited practice under Article 5.

**Role map.** Julia Antunes is the first-pass provider of the configured workflow. Job seekers are intended users/deployers in a personal preparation context. OpenAI provides the generative model, while n8n, Tavily, GNews, GitHub, and optional Notion provide orchestration, research, source, or logging functions. The role allocation must be confirmed again if the service is hosted, sold, or made available to employers.

**Key findings.** The form and report do not clearly disclose that the report is AI-generated, and the HTML has no confirmed machine-readable AI-content marker. The workflow also processes CV and profile personal data but lacks a complete privacy notice and a documented retention, deletion, and vendor-processing arrangement. Execution history and optional Notion logging could retain candidate data.

**Recommended next steps.** First, add a clear AI disclosure to the form and report and label generated advice versus checked evidence. Second, define and implement data minimization, n8n retention, optional-logging controls, deletion, and a privacy notice. Third, obtain legal confirmation of Article 50 marking obligations and the final role map. Finally, reassess the classification before any employer or recruiter use.

**Caveats.** This memo is a first-pass design assessment, not a legal opinion, a GDPR assessment, a conformity assessment, or a certification. It does not replace legal advice or a third-party conformity body assessment.
