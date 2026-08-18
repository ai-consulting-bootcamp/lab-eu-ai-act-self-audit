### Purpose of the system

DrugDev-AI is an AI-powered assistant designed to help people learn about pharmaceutical drug development and regulatory science. It combines three functions within a single application. The Ask mode answers questions using official regulatory documents. The Learn mode provides a structured learning path, generates lessons, and creates quizzes to help users build knowledge over time. The Monitor mode retrieves recent updates from official regulatory sources such as ClinicalTrials.gov, the European Medicines Agency (EMA), and openFDA, allowing users to follow new developments in the field. The project is intended to improve access to reliable regulatory information rather than replace professional expertise or make regulatory decisions.

### Inputs

The system accepts natural-language questions entered by the user, onboarding information such as educational background, career goals, prior experience, available study time, and preferred learning style, as well as optional keywords and source filters for monitoring regulatory updates. It retrieves information from a curated knowledge base built from publicly available regulatory documents issued by organizations including the EMA, FDA, ICH, WHO, and the European Commission. The Monitor mode additionally queries live public APIs and RSS feeds from ClinicalTrials.gov, openFDA, and the EMA. The application is not designed to process sensitive personal data or special categories of personal data. User inputs are limited to information voluntarily entered to personalize learning and search results.

### Outputs

DrugDev-AI produces explanatory text, grounded answers with citations to official documents, AI-generated educational lessons, automatically generated quizzes with feedback, recommended learning modules, and summaries of recent regulatory developments. The system does not produce scores about people, approve or reject applications, rank individuals, or make automated decisions that directly affect legal rights or access to services. Its outputs are recommendations and educational content intended to support human understanding.

### People affected

The intended users are pharmaceutical professionals, regulatory affairs specialists, clinical research professionals, medical affairs teams, quality assurance staff, consultants, researchers, students, and scientists transitioning into the pharmaceutical industry. Any outputs are intended to assist these users in learning, understanding regulations, and staying informed about regulatory developments. The system is not intended for direct use by patients or the general public when making healthcare decisions.

### Human review

All outputs produced by DrugDev-AI are reviewed by the user before any action is taken. The system functions as a decision-support and educational tool rather than an autonomous decision-maker. Users remain responsible for interpreting the information, consulting the cited regulatory sources, and deciding whether and how to apply the information in their work. The application provides source citations to support verification and encourage users to consult the original documents.

### Development and deployment

DrugDev-AI was designed and implemented by a single developer as an autonomous AI project for the Ironhack AI Consulting Bootcamp. It integrates third-party AI services, including OpenAI for language generation and embeddings, Cohere for neural reranking, and Pinecone for vector search, together with public regulatory data sources. In a production environment, the system would typically be deployed by a pharmaceutical company, contract research organization (CRO), consultancy, university, or training provider for use by their employees or learners as an internal knowledge and learning assistant.

