## Risk Tier Classification

---

### First-pass assessment

AI Entrepreneur Coach is not a prohibited AI system under Article 5 because it does not manipulate users, perform social scoring, exploit vulnerable individuals, or use prohibited biometric technologies. The system is also not currently classified as a high-risk AI system under Annex III. Although it analyses personal information, including CVs and personality questionnaire responses, it does not make or substantially influence decisions regarding employment, education, credit, insurance, or access to public services. Instead, it provides entrepreneurial recommendations intended to help users explore possible business opportunities.

The application directly interacts with users and generates AI-produced recommendations, explanations, and reports. Consequently, it is subject to the transparency obligations of Article 50, requiring users to be informed that they are interacting with an AI system and that the recommendations are AI-generated. Since the application processes personal data, particularly employment history and personality assessment results, GDPR obligations relating to transparency, lawful processing, and data protection would also apply alongside the AI Act.

**Does this system fall under any prohibited category (Article 5)?**	
No. The system does not perform prohibited AI practices such as manipulation, social scoring, or prohibited biometric identification.

**Does this system operate in any of the eight Annex III areas?**
No. It provides entrepreneurial recommendations for private individuals rather than supporting decisions in regulated high-risk sectors.

**If Annex III: does it significantly influence decisions?**
Not applicable. Recommendations are advisory only and users remain responsible for all business decisions.

**Does this system interact with end users or generate content requiring disclosure (Article 50)?**
Yes. Users interact directly with the AI system, which generates personalized recommendations, reports, and roadmaps.

**First-pass risk tier**
Limited Risk (Transparency Obligations)

**One-sentence justification**	
AI Entrepreneur Coach generates AI-produced recommendations for end users but does not fall within Article 5 prohibited practices or Annex III high-risk applications; therefore, Article 50 transparency obligations are the primary AI Act requirement.

Potential ambiguity: The application computes a "career best fit" percentage using personality traits and professional history. If future versions were used by employers, recruitment agencies, or educational institutions to assess individuals for employment or training opportunities, the system could potentially fall within Annex III (Employment and workers management) and require legal reassessment.

---

### Role Map

**Provider**	
Project developer (AI Entrepreneur Coach developer)	
Design the system responsibly, provide transparency to users, maintain technical documentation, and provide appropriate instructions for deployment. For the current limited-risk system, transparency obligations are the primary AI Act requirement.

**Deployer**	
Career coaches, entrepreneurship programmes, universities, incubators, or individuals deploying the application	
Use the system according to the provider's instructions, ensure appropriate human oversight where recommendations influence important decisions, and comply with GDPR when processing personal data.

**Third-party vendors**	
OpenAI (language generation and extraction), Cohere (embeddings), Pinecone (vector database), O*NET dataset	
Vendors remain responsible for their own AI services where applicable. The overall application provider remains responsible for the combined system delivered to end users.

---

### High-Risk Obligation Checklist

Not applicable.

Based on the current MVP, AI Entrepreneur Coach is classified as a Limited Risk AI system rather than a High-Risk AI system. Therefore, the provider obligations in Articles 9–72 relating to high-risk AI systems do not currently apply.
---

### Gap Analysis and Remediation

Gap 1 – **AI Transparency Notice**

Obligation: Article 50 – Transparency for AI systems interacting with users.

Current state: The application presents recommendations without explicitly informing users that they are generated using AI.

Required state: Users should be informed that they are interacting with an AI system and that recommendations are AI-generated.

Remediation: Add a permanent notice within the interface explaining that recommendations and reports are generated with AI assistance and are intended to support—not replace—human judgment.

Escalation needed? No.

Gap 2 – **Explanation of Recommendation Score**

Obligation: Article 50 transparency and good governance.

Current state: Users receive a "career best fit" percentage, but they may not fully understand how the score is calculated or what it represents.

Required state: Users should receive a clear explanation that the score is an estimate derived from predefined weighting of personality traits, skills, available time, and budget, rather than an objective prediction of success.

Remediation: Display a short explanation of the scoring methodology and provide a breakdown of the factors contributing to each recommendation.

Escalation needed? No.

Gap 3 – **Processing of Personal Data**

Obligation: GDPR (outside the AI Act).

Current state: Users upload CVs or LinkedIn profiles and complete a personality questionnaire, but the project documentation does not describe data retention, deletion, lawful basis for processing, or privacy rights.

Required state: Users should receive a privacy notice explaining what personal data is collected, how it is processed, which external AI providers receive it, how long it is retained, and how users can exercise their GDPR rights.

Remediation: Prepare a GDPR-compliant privacy notice, define a retention policy, and document how uploaded files and personality data are deleted after processing.

Escalation needed? Yes – Data Protection Officer or privacy specialist.

Gap 4 – **Appropriate Use Guidance**

Obligation: Consumer transparency and responsible AI use.

Current state: Users may interpret recommendations as predictions of entrepreneurial success.

Required state: Users should understand that the recommendations are intended to support reflection and planning rather than predict business success or guarantee outcomes.

Remediation: Add a disclaimer explaining that recommendations are advisory only and should be combined with independent research and professional advice before making financial or career decisions.

Escalation needed? No.

---

### Compliance Memo

To: Head of Product, AI Entrepreneur Coach

Subject: Initial EU AI Act Compliance Assessment
System Classification

AI Entrepreneur Coach is provisionally classified as a Limited Risk AI system because it generates AI-assisted entrepreneurial recommendations for users but does not perform prohibited AI practices or operate as a high-risk AI system under Annex III.

Role Map

The project developer acts as the provider of the AI system. Career coaches, incubators, universities, or other organisations using the application would act as deployers. OpenAI, Cohere, Pinecone, and the O*NET dataset are third-party technology and data providers supporting the application.

Key Findings

The review found no indication that the current system falls within the EU AI Act's prohibited or high-risk categories. However, three areas require attention before production deployment. First, users should receive a clear notice that they are interacting with an AI system. Second, the application should better explain how the "career best fit" score is calculated and emphasise that it is an estimate rather than a prediction. Third, because the application processes CVs and personality questionnaire responses, GDPR documentation covering privacy, data retention, and third-party processing should be prepared.

Recommended Next Steps

Add a visible AI transparency notice to the application.
Explain the methodology used to calculate recommendation scores.
Publish a GDPR-compliant privacy notice and establish data retention procedures.
Reassess the AI Act classification if future versions are integrated into employment, recruitment, education, or financial decision-making processes.
Caveats

This document provides a preliminary compliance assessment prepared for educational purposes. It is not a legal opinion, a formal conformity assessment, or evidence of regulatory certification. Any commercial deployment should undergo legal review, particularly if the scope of the application expands into regulated decision-making contexts.

---

## Reinforce
Reflection on the System Brief

Reviewing the system brief highlights one aspect that deserves greater attention: the role of the AI model in making personalised recommendations. Although the recommendations are grounded using a curated O*NET-derived dataset and retrieval pipeline, the system still relies on OpenAI to extract information from CVs, interpret personality questionnaire results, generate explanations, and produce the final 90-day roadmap. These are AI-generated inferences rather than simple data retrieval. In addition, the application processes personal information, including employment history, education, skills, and personality traits, making data governance more important than it initially appears.

Including these components does not change the first-pass AI Act classification. The system still does not make decisions within one of the Annex III high-risk domains, such as employment or education, because it recommends entrepreneurial opportunities for private individuals rather than determining access to jobs or services. However, the inclusion of personality assessment and personal profile analysis strengthens the need for transparency, explainability, and GDPR compliance. If a future version were adapted for recruitment, career counselling by employers, or educational admissions, the compliance picture could change significantly and would require legal reassessment.

Design Decision in Retrospect

One design decision that creates an additional compliance burden is the use of a calculated "career best fit" percentage based partly on personality assessment results. Although intended to make recommendations easier to compare, presenting a numerical score may give users the impression that the recommendation is objective or scientifically precise.

If redesigning the project today, greater emphasis would be placed on explainability rather than a single summary score. Instead of highlighting one overall percentage, the application would present the contribution of each factor—skills, personality, available budget, and available time—along with an explanation of the limitations of the model. This would help users understand that the recommendation is an aid to decision-making rather than a prediction of entrepreneurial success.

---

## Transparency Notice for End Users

AI Transparency Notice

AI Entrepreneur Coach uses artificial intelligence to analyse information that you provide, including your CV or LinkedIn profile, responses to a short personality questionnaire, your available budget, and the time you can dedicate to starting a business. Based on this information, the system generates personalised business recommendations and a suggested 90-day action plan.

The application combines AI-generated analysis with information retrieved from a curated database of business ideas derived from the O*NET occupational dataset. It also uses third-party AI services, including OpenAI for information extraction and report generation, Cohere for semantic search, and Pinecone for vector retrieval.

The recommendations and "career best fit" score are intended to support your decision-making. They are not predictions of future business success, guarantees of financial outcomes, or professional financial or legal advice. Final decisions remain entirely your responsibility.

Your uploaded documents and questionnaire responses contain personal information. They are processed only for the purpose of generating recommendations. Before relying on any recommendation, you should consider your own circumstances, conduct independent research, and seek professional advice where appropriate.

By using AI Entrepreneur Coach, you acknowledge that you are interacting with an AI system that is designed to assist your entrepreneurial planning, not to make decisions on your behalf.


