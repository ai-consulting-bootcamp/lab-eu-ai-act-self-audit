# Role map: AI Entrepreneur Coach

| Role | Entity | Key AI Act obligations |
|---|---|---|
| Provider | Zahra Moghaddasi (built and published the system) | Design the system so it tells users they are talking to an AI (Article 50(1)). Mark AI written report text as AI generated, in a way a machine can detect (Article 50(2)). Keep this true even though the code is free and open source, because Article 50 duties still apply to open source systems. |
| Deployer | Mostly nobody, for now | Anyone who clones the repo and runs it for themselves is using it for personal, non-professional reasons. The Act's deployer role does not cover that kind of personal use, so no separate deployer sits between me and the end user today. If an organisation (a bootcamp, a career center, a consulting firm) ever runs this for other people as part of their work, that organisation becomes the deployer and picks up its own duties at that point. |
| Vendor (if applicable) | OpenAI (report writing, profile reading), Cohere (turns text into vectors), Pinecone (stores and searches those vectors) | OpenAI and Cohere are providers of general purpose AI models. They carry their own duties under the Act, like keeping technical documentation and a summary of training data. Those are their responsibility, not mine, I only use their API. Pinecone stores vectors and does not do any AI reasoning itself, so it is closer to plain infrastructure, its main relevance here is data storage and security, not AI Act obligations. |

## Notes

I am the provider because I built the system and put it out for others to get and run, even though I do not host it myself.

There is no deployer standing between me and most users today, since people running their own copy for their own decision counts as personal use, which the Act does not treat as deployment. This could change if a company or institution starts running the tool for other people, that is the point where a real deployer would appear and this table would need a second row filled in for them.

For the vendors, the key thing to remember is that using OpenAI, Cohere, and Pinecone does not make me responsible for their compliance. Each of them has to meet their own obligations as a general purpose AI model provider (OpenAI, Cohere) or as a data processor (Pinecone, under GDPR rather than the AI Act). My responsibility as provider is limited to how I built and configured the system on top of their tools, not to their own model training or infrastructure.
