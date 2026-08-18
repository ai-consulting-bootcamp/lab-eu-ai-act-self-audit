## Risk Tier Classification
---

### First-pass assessment

DrugDev-AI is not a prohibited AI practice under Article 5. It does not manipulate users, exploit vulnerable groups, perform social scoring, or use prohibited forms of biometric identification. The system is also not currently a high-risk AI system under Annex III because it does not make or substantially influence decisions in areas such as employment, education, law enforcement, migration, or access to essential public services. Although it is intended for professionals working in the pharmaceutical sector, it provides educational content, grounded explanations, and regulatory information rather than making regulatory, clinical, or employment decisions. Users remain responsible for interpreting the information and making any subsequent decisions.

The system does interact directly with users and generates AI-created educational content and explanatory text. Therefore, it is likely to trigger the transparency obligations of Article 50, requiring users to be informed that they are interacting with an AI system and that generated content is AI-produced. The current interface identifies the application as an AI assistant but does not yet contain an explicit transparency notice explaining the role and limitations of AI-generated responses.

**Does this system fall under any prohibited category (Article 5)?**

No. The system does not perform prohibited AI practices such as manipulation, social scoring, or prohibited biometric identification.

**Does this system operate in any of the eight Annex III areas?**

No. It supports learning and information retrieval for pharmaceutical professionals but does not operate within a regulated high-risk decision-making process.

**If Annex III: does it significantly influence decisions?**

Not applicable. The system provides recommendations and explanations only; final decisions remain entirely with the user.

**Does this system interact with end users or generate content requiring disclosure (Article 50)?**

Yes. Users interact directly with the AI, which generates educational text, explanations, quizzes, and summaries.

**First-pass risk tier**

Limited Risk (Transparency Obligations)

**One-sentence justification**

DrugDev-AI is a general-purpose AI application that generates content for end users but does not fall under Article 5 prohibited practices or Annex III high-risk systems; therefore, Article 50 transparency obligations are the primary AI Act requirement.

Potential ambiguity: If a future version were integrated into regulatory submission workflows and used to make or substantially influence regulatory compliance decisions, the classification could require further legal assessment. For the current MVP, this threshold is not reached.

---

### Role Map

**Provider**
Nevena Milenkovic Zujko (developer of DrugDev-AI)	

Design the system responsibly, provide transparency to users, maintain technical documentation, and ensure appropriate information is supplied to deployers. If the system remains limited risk, transparency obligations are the primary AI Act requirement.

**Deployer**
Pharmaceutical company, CRO, university, consultancy, or training provider using DrugDev-AI internally	

Use the system according to the provider's instructions, maintain appropriate human oversight, comply with GDPR where personal data is processed, and ensure AI outputs are not relied upon without professional judgment.

**Third-party vendors**
OpenAI (language model and embeddings), Cohere (reranking), Pinecone (vector database), public APIs such as ClinicalTrials.gov, openFDA, EMA

Each vendor remains responsible for obligations relating to its own AI services where applicable. DrugDev-AI integrates these services but does not transfer provider responsibility for the overall application.

---

### High-Risk Obligation Checklist

Not applicable.

DrugDev-AI is classified as a Limited Risk AI system rather than a High-Risk AI system. Consequently, the provider obligations listed in Articles 9–72 for high-risk AI systems do not apply to the current MVP.

---

### Gap Analysis and Remediation

Although the system is not high-risk, several improvements should be made to strengthen compliance and user trust.

Gap 1 – **Transparency Notice**

Obligation: Article 50 – Transparency for AI systems interacting with users.

Current state: Users interact directly with the AI, but the interface does not explicitly state that responses are AI-generated or explain the limitations of the system.

Required state: Users should be clearly informed that they are interacting with an AI system and that generated explanations should not replace professional or regulatory judgment.

Remediation: Add a permanent notice in the application (e.g., in the sidebar or footer) stating that DrugDev-AI generates AI-assisted responses based on retrieved regulatory documents and should be used as a decision-support and learning tool.

Escalation needed? No.

Gap 2 – **User Guidance**

Obligation: Article 50 transparency and general good practice.

Current state: Answers include citations to official documents, but the application does not explicitly instruct users to verify important information against the original regulatory sources.

Required state: Users should understand that official regulatory documents remain the authoritative source for compliance decisions.

Remediation: Add a short disclaimer near generated answers encouraging users to consult the cited official documents before making regulatory or business decisions.

Escalation needed? No.

Gap 3 – **Privacy Documentation**

Obligation: Outside the AI Act (GDPR).

Current state: The system stores conversation history within the current session and communicates with external AI providers, but there is no published privacy notice describing data processing.

Required state: Users should be informed about what information is processed, which third-party services receive requests, and how long data is retained.

Remediation: Prepare a privacy notice describing data processing, API providers, session storage, and retention policies.

Escalation needed? Yes – Data Protection Officer or privacy specialist.

---

### Compliance Memo

Subject: **Initial EU AI Act Compliance Assessment**
System Classification

DrugDev-AI is provisionally classified as a Limited Risk AI system under the EU AI Act. It generates AI-assisted educational content and regulatory explanations but does not perform prohibited AI practices or operate as a high-risk AI system under Annex III.

Role Map

The provider is the developer of DrugDev-AI, while pharmaceutical companies, universities, or other organizations deploying the application would act as deployers. OpenAI, Cohere, Pinecone, and the public regulatory data providers are third-party technology or data vendors supporting the application.

Key Findings

The review identified no evidence that the current MVP falls within the AI Act's prohibited or high-risk categories. The primary compliance considerations relate to transparency and user information. Specifically, the application should more clearly disclose that users are interacting with an AI system, explain that responses are AI-generated, and reinforce that official regulatory documents remain the authoritative source for regulatory decision-making. In addition, although not an AI Act requirement, GDPR-related privacy documentation should be prepared before production deployment.

Recommended Next Steps

Add an AI transparency notice to the user interface.
Add guidance encouraging users to verify important information using the cited official documents.
Prepare a privacy notice and document data processing involving third-party AI providers.
Reassess the AI Act classification if future versions introduce autonomous regulatory decision support, automated compliance assessments, or enterprise workflow integration.
Caveats

This memo provides a preliminary compliance assessment for educational purposes. It is not a legal opinion, a formal conformity assessment, or evidence of compliance certification. Any commercial deployment should include legal review, particularly if the scope of the system expands or additional regulatory obligations become applicable.

---


## Reinforce

### Reflection on the System Brief

Reviewing the system brief highlights one component that was initially understated: the role of third-party AI services. Although DrugDev-AI is presented as a single application, it relies on multiple external providers, including OpenAI for language generation and embeddings, Cohere for neural reranking, Pinecone for vector retrieval, and public APIs from ClinicalTrials.gov, openFDA, and the EMA. These services contribute to the system's outputs and therefore form part of the overall AI supply chain. Including them does not change the overall AI Act classification of the current MVP. DrugDev-AI still functions as a decision-support and educational assistant rather than a system that makes or substantially influences decisions in one of the Annex III high-risk areas. However, it does reinforce the importance of transparency, documentation, and clearly identifying the roles of the provider, deployer, and third-party vendors.

A second observation concerns future development. Planned features such as AI-generated monitoring summaries, enterprise watchlists, automated notifications, and collaboration workflows increase the operational importance of the system but do not automatically move it into the high-risk category. If future versions were integrated directly into regulatory decision-making or compliance workflows, the classification would need to be reassessed with legal input.

Design Decision in Retrospect

One design decision that creates an additional compliance burden is the use of multiple external AI providers without an explicit user-facing transparency or privacy notice. During development, the focus was on functionality, retrieval quality, and user experience rather than governance documentation. In hindsight, transparency should have been considered from the beginning.

If redesigning the project today, transparency requirements would be incorporated into the initial architecture rather than added later. The application would include a permanent notice explaining that users are interacting with an AI system, identifying the external AI providers involved, clarifying that responses are AI-generated from retrieved regulatory documents, and emphasizing that the application supports—but does not replace—professional judgment. Designing these governance elements early would simplify future compliance efforts and reduce the need for retrospective documentation.

---

## Transparency Notice for End Users

### AI Transparency Notice

DrugDev-AI is an AI-assisted learning and regulatory intelligence application. The answers, lessons, quizzes, and summaries displayed in this application are generated using artificial intelligence together with information retrieved from official regulatory documents.

The system uses external AI services, including OpenAI for language generation, Cohere for document reranking, and Pinecone for semantic retrieval. Live regulatory information is obtained from official public sources such as the European Medicines Agency (EMA), ClinicalTrials.gov, and openFDA.

DrugDev-AI is intended to support learning, research, and regulatory understanding. It does not make decisions on behalf of users, approve regulatory actions, or provide legal or clinical advice. Users remain responsible for reviewing the cited official documents and exercising professional judgment before making regulatory, scientific, clinical, or business decisions.

Where available, responses include citations to the original regulatory sources so that information can be verified. If no supporting evidence is available, users should treat the generated response as informational only and consult the relevant official guidance directly.

By using DrugDev-AI, you acknowledge that you are interacting with an AI system designed to assist—not replace—human expertise.

