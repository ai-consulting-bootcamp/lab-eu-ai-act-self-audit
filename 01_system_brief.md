# System Brief: Virtual Coffee Chat Bot

## What it does

To stand out in a competitive hiring landscape, I built an AI chatbot that lets recruiters and hiring managers learn about my work history, skills, and projects through conversation. Rather than sending a resume, they can ask follow-up questions, get nuanced answers, and if interested, book a call with me or send me a message directly from the chat interface.

## Inputs

The system takes three types of input. First, chat messages: plain text questions from recruiters accessing the chatbot. Second, a knowledge base of documents: markdown files stored in the system containing my career history (job titles, dates, key responsibilities), technical skills, project details, strengths assessments (CliftonStrengths), and cover letter narrative about my professional identity. Third, backend integrations: the system checks my Calendly calendar for availability and uses email (Resend) to send messages on my behalf. The knowledge base contains personal data about me, including my work experience, skills, achievements, and contact information.

## Outputs

The chatbot produces four types of output. First, conversational responses: AI-generated text answers to recruiter questions, streamed live in the chat. Second, booking confirmations: when a recruiter asks to schedule, the system automatically books a time slot into my calendar and confirms it. Third, email messages: sent directly from my email address to the recruiter, on my behalf. Fourth, logs: every conversation is recorded (who asked what, what the bot answered, thumbs-up/down ratings) in a data table, along with any errors or failures. Future roadmap items (not yet built) include surfacing relevant case studies and metrics next to the conversation when a topic is discussed.

## Who is affected

Recruiters and hiring managers are the primary users. They interact with the bot, get answers about my background, and may base hiring decisions on what the bot tells them. I am affected as the subject and operator: my calendar is accessed, emails are sent in my name, and my professional brand and reputation live in how the bot represents me. If the bot says something wrong or misleading, it directly reflects on me.

## Human review

There is no human review before the bot acts. When a recruiter asks a question, the bot answers immediately. When they ask to book a call, it goes straight into my calendar. When they ask me to send a message, it's sent right away. However, I review the logs after the fact (conversations, errors, misstatements) so I can identify gaps in what the bot knows, update the knowledge base, and potentially set up automated safeguards if critical errors occur.

## Who built it and who uses it

I designed and built the workflows, the retrieval system, and the orchestration logic using n8n (a workflow automation platform) and custom configurations. The foundational AI tools are third-party: OpenAI provides the language model and embeddings, Pinecone stores the knowledge base vectors, Cohere ranks search results, and Calendly and Resend handle scheduling and email. In production, recruiters on my personal website access the chatbot, and I operate and maintain it.
