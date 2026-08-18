### Purpose of the system

AI Entrepreneur Coach is an AI-assisted application that helps people identify business ideas that match their personal profile. Rather than recommending generic business opportunities, the system combines information about a person's work experience, personality, available budget, and available time to suggest business ideas that are more likely to fit their circumstances. The recommendations are based on a curated knowledge base derived from O*NET occupation data instead of being generated entirely by the language model. In addition to recommending business ideas, the application explains why each recommendation matches the user's profile and provides a simple 90-day action plan for the selected idea.

### Inputs

The system accepts several types of user input. Users upload either a LinkedIn profile exported as a PDF or a curriculum vitae (CV), complete a short ten-question Big Five (TIPI) personality questionnaire, and provide information about their available budget and the amount of time they can dedicate to a business. The uploaded document contains personal information such as employment history, education, skills, certifications, and professional experience. The personality questionnaire also contains personal information because it describes individual behavioural characteristics. These inputs are combined with a curated database of approximately 463 business ideas derived from publicly available O*NET occupational information.

### Outputs

The application produces a ranked list of three to five business ideas together with a calculated "career best fit" percentage based on budget, available time, skills, and personality traits. For each recommendation, the system provides a written explanation that links the recommendation to retrieved knowledge sources. After the user selects one recommendation, the application generates a 90-day roadmap describing practical next steps for launching the business. The system does not automatically approve, reject, or make legally binding decisions. Instead, it provides recommendations intended to support the user's own decision-making.

### People affected

The primary users are individuals considering starting a business, including career changers, students, first-time founders, and people seeking a side business. The recommendations directly affect these users because they may influence career planning and business decisions, although the final decision always remains with the individual. The system is not designed for employers, financial institutions, or public authorities.

### Human review

Every recommendation is reviewed by the user before any action is taken. The system does not automatically create a business, apply for funding, or make decisions on behalf of the user. Users are expected to review the recommended business ideas, consider the accompanying explanations and roadmap, and decide independently whether any recommendation is suitable for their own circumstances. The recommendations are intended as guidance rather than instructions.

### Development and deployment

The system was developed as an individual Project 3 for the Ironhack AI Consulting Bootcamp. It combines several third-party AI services, including OpenAI for language generation and information extraction, Cohere for embeddings, and Pinecone as the vector database for semantic retrieval. In a production environment, the application could be deployed directly to individual users, or offered through career coaches, entrepreneurship programs, universities, business incubators, or outplacement services to support people exploring entrepreneurial career paths.