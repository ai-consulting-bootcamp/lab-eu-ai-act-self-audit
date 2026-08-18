# W7D2_LAB_EU_AI_ACT_Audit_your_own_project
- Week 7 / Day 2
- Student: Andreas Papachristophorou
- Course: AI Consulting & Integration 2026-07
- Date: 2026-08-18
---

# Phase 1: Write the system brief

## System brief

The Proactive Incident Agent is an AI-assisted decision-support tool for cruise-company claims, legal, and risk & compliance teams. Its purpose is to help humans review passenger incident material faster and more consistently. It does not make final claims decisions, approve or reject claims, decide liability, or give legal advice. Instead, it prepares messy incident information into a clearer case file for a human reviewer.

The system takes an incident investigation report and, when relevant, an optional doctor report. In the MVP, these are usually PDF or text-based documents uploaded through a simple Streamlit demo interface. The reports may include information such as the incident date, vessel name, passenger name, location, injury details, medical information, evidence notes, and descriptions of what happened. Some of this can be personal data, and injury or medical details may be sensitive personal data. For the MVP, the project used pseudonymised sample data, not real production passenger records.

First, the system extracts structured fields from the reports, checks whether important required information is missing, and decides whether the case is complete enough to classify. If information is missing, the system logs the case as incomplete and generates follow-up questions for the vessel investigation officer or claims team. Up to this point, the process is purely internal, and no LLM is called.

If the case is complete, it classifies severity, claim risk, and customer impact as Low, Medium, High, or Critical (where relevant) and provides a short explanation for the classification. It can also flag higher-risk incidents and provide follow-up questions for the user to send back to the ship for clarification while the incident details and contemporaneous evidence are still available.

The system stores case records, missing fields, classifications, explanations, and audit information in Airtable. It can also use Pandas to generate a weekly risk report showing open cases, incomplete cases, classified incidents, and higher-risk matters. The weekly report can be published to Notion for stakeholders.

The system also stores, in a separate table, the LLM calls, the details sent to the LLM, and the tokens used for audit and cost control purposes.

The people affected by the output are mainly cruise passengers whose incidents are being reviewed, and indirectly claims officers, legal teams, risk teams, vessel staff, and company managers who use the structured information. Human review stays in the loop: the claims officer reviews the extracted information, missing-field list, risk flag, and explanation before taking any real action. The AI supports triage and preparation, but a human remains responsible for judgement, escalation, and claims decisions.

The system was built by Andreas Papachristophorou as an individual MVP project during the AI Consulting & Integration Bootcamp. In production, it would likely be used by a cruise company’s claims, legal, risk, compliance, guest services, or vessel operations teams.

# Phase 2: Risk tier classification

## Classification table

| Question | Your answer |
| --- | --- |
| Does this system fall under any prohibited category (Article 5)? | No. It does not manipulate people, exploit vulnerable groups, socially score individuals, use biometric identification, infer emotions, or make predictive policing decisions. It is designed as an internal decision-support tool for claims review, with human judgement remaining responsible for any action. |
| Does this system operate in any of the eight Annex III areas? | No for the MVP which is framed as an internal claims-support and triage tool and does not influence the final outcome of a claim rejection or approval. However, a future scale-up and deployment could potentially involve the assessment of essential private services, such as insurance, and may therefore require classification under Annex III. |
| If Annex III: does it “significantly influence” decisions in that area, or is it narrow/preparatory? | It appears narrow and preparatory in the MVP. The system structures incident reports, checks for missing information, generates follow-up questions, classifies severity/claim risk/customer impact, and flags cases for human review. It does not make final claims, liability, settlement, or legal decisions. However, if deployed so that its risk classifications strongly determine claim outcomes or escalation decisions, it could become more significant and would need legal review. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | No, not in the current MVP. The system is used only internally and does not interact with external people. However, AI involvement should be disclosed when communicating follow-up questions to the investigation officer, or when sharing classifications with the legal team, insurance company, or H&S team. |
| First-pass risk tier | **Limited risk / transparency,** with possible future high-risk classification if deployed in a way that materially influences insurance or claims outcomes. |
| One-sentence justification citing the specific article or Annex entry | The MVP is a limited-risk internal decision-support tool under Article 50, with possible future Annex III high-risk assessment if production use materially influences insurance or claims outcomes. |

## Ambiguity or uncertainty

The prototype and MVP are narrow in scope and provide only an internal decision-support function. They do not affect critical infrastructure or directly determine access to essential services. However, future scale-up and implementation with real cases could influence decisions in the claims-handling process and passengers’ access to essential private services, such as insurance. In that scenario, the system may need to be treated as high-risk under Annex III and would require further AI Act obligations to be assessed. GDPR should also be considered further, because the system may transmit sensitive personal and medical information to the LLM; this information would need to be anonymised or otherwise protected before processing.

## Information needed to resolve uncertainty

- Actual impact on final claims handling and decisions
- Review by subject-matter experts.
- Review and audit whether any sensitive information is transmitted to the LLM.
- Review and audit the compliance and conformity of the LLM, Airtable, and Notion with the EU AI Act and GDPR, since the system may potentially be used for EU residents.

---

# Phase 3: Role map

## Role map table

| Role | Entity | Key AI Act obligations | Notes |
| --- | --- | --- | --- |
| Provider | Consultant or system builder | Define the intended use, avoid prohibited uses, provide clear instructions, support transparency, keep technical documentation, test accuracy and reliability, and prepare stronger high-risk controls if the system later falls under Annex III. | The proposed system could be a standalone solution designed and sold by the consultant or vendor. However, if it is integrated into the end user’s systems, branded under their name, or significantly customised, the end user company may also become a provider. |
| Deployer | Cruise company or claims-handling services provider | Use the system only for its approved purpose, keep human review in the loop, train staff, monitor outputs, keep appropriate logs, disclose AI involvement where needed, and ensure GDPR-compliant handling of passenger and medical data. | The deployer is the end user organisation that uses the system in a professional context as a decision-support tool for claims triage, follow-up, escalation, and weekly risk reporting. |
| Vendor, if applicable | OpenAI or similar LLM provider; Airtable or other database provider; Notion or email/reporting provider | Provide reliable and secure services, make relevant documentation available, support data protection and security requirements, explain limits of the service, and help the provider/deployer assess model, storage, and integration risks. | Vendors supply important components of the system, but they do not usually decide the business purpose of the cruise-claims workflow. Their obligations depend on their role, contract, and whether their own AI system is general-purpose or used as part of a high-risk system. |

---

# Phase 4: Obligation checklist — high-risk only

## High-risk obligation checklist

This checklist is not required for the current MVP, because the system is not classified as high-risk at this stage. It would become relevant only if a future production version materially influenced claims-handling decisions or passengers’ access to essential private services, such as insurance. In that scenario, the system may need to be assessed as high-risk under Annex III.

| Obligation | Article | Status | Note |
| --- | --- | --- | --- |
| Risk management system | 9 | Not required for MVP | Required if scaled into a high-risk production system. |
| Data and data governance | 10 | Not required for MVP | Required if scaled; GDPR controls would also be needed for passenger and medical data. |
| Technical documentation | 11 | Not required for MVP | Required if scaled; documentation should describe system purpose, limits, data flows, and controls. |
| Record-keeping and logging | 12 | Partly in place | The MVP already logs LLM calls and outputs, but production use would require more formal audit logging. |
| Transparency and user information | 13 | Partly in place | Required if scaled, especially where follow-up questions, explanations, or classifications are shared with other parties. |
| Human oversight | 14 | Partly in place | The MVP keeps human review in the loop; production use would need a formal human oversight procedure. |
| Accuracy, robustness, cybersecurity | 15 | Not required for MVP | Required if scaled; the system would need testing, monitoring, and security controls. |
| Conformity assessment | 43 | Not required for MVP | Required only if the system is classified as high-risk in production. |
| EU declaration of conformity + CE marking | 47–48 | Not required for MVP | Required only if the system is classified as high-risk in production. |
| Registration | 49 | Not required for MVP | Required only if the system is classified as high-risk in production. |
| Post-market monitoring | 72 | Not required for MVP | Required if scaled; procedures would be needed to monitor performance, errors, and incidents. |


---

# Phase 5: Gap analysis and remediation plan

## Gap 1

- **Obligation:** Annex III obligations if the full-scale product is clarified as high-risk (e.g., risk management system; data and data governance; technical documentation; accuracy, robustness, and cybersecurity; conformity assessment; EU declaration of conformity + CE marking; registration; and post-market monitoring). These are not required for the MVP but need to be considered and implemented in the final product, with clear documentation and certification where necessary.
- **Current state:** Not required for MVP.
- **Required state:** Required.
- **Remediation:** Assess and implement during the Go-to-Market (GTM) sprints.
- **Escalation needed?** Yes — legal counsel, compliance teams, a GDPR expert, and software/AI/data engineers.

## Gap 2

- **Obligation:** Annex III obligations if the full-scale product is clarified as high-risk (Record-keeping and logging, Transparency and user information, Human oversight). These are partly present for the MVP but need to be considered and implemented fully in the final product, with clear documentation and certification where necessary.
- **Current state:** Partly in place for MVP.
- **Required state:** Required.
- **Remediation:** Assess and implement during the Go-to-Market (GTM) sprints.
- **Escalation needed?** Yes — legal counsel, compliance teams, a GDPR expert, and software/AI/data engineers.

## Gap 3

- **Obligation:** Training for the users and the point of contact at the cruise company or claims-handling company.
- **Current state:** Not in the MVP scope.
- **Required state:** Required.
- **Remediation:** Training plan agreed and approved during the GTM. Training session(s) before adoption.
- **Escalation needed?** Yes — consultant, company executives, end users, training provider.


---

# Phase 6: Compliance memo

**To: Head of Product, Insurance Manager, Claims Manager, Legal Counsel, DPO**

**From: AI Consultant**

**Subject:** First-pass EU AI Act compliance assessment for Proactive Incident Agent

1. System classification:

**High Risk** under the EU AI Act (Annex III), because a deployment version could involve the assessment of essential private services such as insurance and may therefore require classification under Annex III.


2. Role map

| Role | Entity | Notes |
| --- | --- | --- |
| Provider | Consultant or system builder
or
Your Company | The proposed system could be a standalone solution designed and sold by the consultant or vendor. However, if it is integrated into the end user’s systems, branded under their name, or significantly customised, the end user company may also become a provider. |
| Deployer | Your Company | The deployer is the end user organisation that uses the system in a professional context as a decision-support tool for claims triage, follow-up, escalation, and weekly risk reporting. |
| Vendor, if applicable | OpenAI or similar LLM provider; Airtable or other database provider; Notion or email/reporting provider | Vendors supply important components of the system, but they do not usually decide the business purpose of the cruise-claims workflow. Their obligations depend on their role, contract, and whether their own AI system is general-purpose or used as part of a high-risk system. |

3. Key findings

    - **Gap 1:** **Required obligation:** Annex III obligations, if the full-scale product is classified as high-risk, need to be considered and implemented in the final product, with clear documentation and certification where necessary.
    - **Gap 2:** Training for users and the point of contact at your company.

4. Recommended next steps

    - Require Annex III obligations to be implemented, documented, and certified where necessary, with the contribution and participation of subject-matter experts, legal counsel, compliance teams, a GDPR expert, and software/AI/data engineers. A clear process and procedure should be in place.
    - Training sessions should be organised before adoption with the assistance and participation of the consultant, company executives, end users, and a training provider.

5. Caveats

This memo is a first-pass compliance assessment for bootcamp learning purposes. It is not a legal opinion, conformity assessment, certification, or final regulatory determination.
