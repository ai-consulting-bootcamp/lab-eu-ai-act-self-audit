# Phase 3: Role Map

**Tier from Phase 2:** limited risk (Art. 50). Obligations below are those that flow from that tier. High-risk duties (Art. 16 for providers, Art. 26 for deployers) are listed only where they would switch on if the system were reclassified.

## Who is who

```
                 ┌──────────────────────────────────────────┐
                 │ PROVIDER: builds the system and puts it  │
                 │ into service under its own name          │
                 │ Prototype: Ayhan Demir (developer)       │
                 │ Real rollout: Kleinanzeigen (in-house)   │
                 └──────────────┬───────────────────────────┘
          uses as components    │    delivers the system to
 ┌──────────────────────────┐   │   ┌──────────────────────────────────┐
 │ VENDORS                  │◄──┴──►│ DEPLOYER: Kleinanzeigen           │
 │ AI models: OpenAI,Cohere │       │ Users: employees, OEE team,       │
 │ Data/search: Tavily,     │       │ AI enablement team, AI Governance │
 │ GNews, OpenAlex, Pinecone│       │ Board, workflow owner             │
 │ Platforms: n8n, Airtable,│       │ Affected: employees whose cases   │
 │ Notion, Slack, Render    │       │ and departments are stored        │
 └──────────────────────────┘       └──────────────────────────────────┘
```

**Why the provider changes.** A provider is whoever develops an AI system and places it on the market or puts it into service **under its own name** (Art. 3(3)). Today the prototype is my course project, so I am the developer acting as provider. If Kleinanzeigen built or adopted it and ran it under its own name for its own staff, Kleinanzeigen would be the provider **and** the deployer. If I sold it as a consultant's product under my name, I would stay the provider and Kleinanzeigen would only be the deployer.

## Role table

| Role | Entity | Key AI Act obligations |
|---|---|---|
| **Provider** | Prototype: Ayhan Demir. Real rollout: Kleinanzeigen (in-house build under its name) | **Art. 50(1):** design the web page so employees are told clearly they are using an AI, at the latest at first use (Art. 50(5)). **Art. 50(2):** mark the fix report and the use-case summary in a machine-readable way as AI-generated; the Commission's Code of Practice on Transparency of AI-Generated Content (June 2026) is the reference for how. **Art. 4:** take measures to support AI literacy of the people who build and run it. **Good practice:** keep a written record of why the system is not high-risk (Annex III 4(b) assessment in Phase 2). *If reclassified high-risk:* Art. 16 duties (risk management, documentation, logging, human oversight, conformity assessment, registration) from 2 Dec 2027. |
| **Deployer** | Kleinanzeigen (the employer), using it under its authority for its staff (Art. 3(4)) | **Art. 4:** take measures to support AI literacy of employees, the AI enablement team and the Board who use it. **Use within the intended purpose:** not for evaluating individuals or teams; using it that way could move it into Annex III 4(b). Art. 50(3) and 50(4) do not apply (no emotion recognition, no deepfakes, no public-interest text). *If reclassified high-risk:* Art. 26 (use per instructions, human oversight by trained staff, keep logs, **inform workers' representatives and affected workers before use**, Art. 26(7)). |
| **Vendor: OpenAI** (gpt-4o-mini, text-embedding-3-small) | General-purpose AI (GPAI) model provider | **Chapter V, Art. 53** (applies since 2 Aug 2025): technical documentation, information for downstream providers such as Fix My Process, a copyright policy and a public summary of training content. **Art. 55** extra duties only if the model is classed as a GPAI model with systemic risk (not confirmed for gpt-4o-mini). OpenAI is a signatory of the GPAI Code of Practice. Fix My Process can ask OpenAI for the Art. 53(1)(b) information. |
| **Vendor: Cohere** (rerank-v3.5) | AI model provider | The rerank model does one narrow task (scoring relevance), so it is unlikely to be a GPAI model; if it were, Art. 53 would apply. Cohere is a GPAI Code of Practice signatory for its general models. **Check** with Cohere. |
| **Vendor: Tavily, GNews, OpenAlex** | Web search, news and research-paper services | No AI Act role in this system: they supply search results, not the AI that produces the outputs. |
| **Vendor: Pinecone** | Document search (holds the four internal documents) | No AI Act role: it stores and retrieves documents; the AI models doing the work are OpenAI's and Cohere's. |
| **Vendor: n8n, Airtable, Notion, Slack, Render** | Runs the steps, case records, summaries, Board review and alerts, web page hosting | No AI Act role: they run, store and deliver the steps but do not provide the AI. |

## Sources

- Provider and deployer definitions, Art. 3(3) and 3(4); Art. 50 text: https://ai-act-law.eu/article/50/
- GPAI Code of Practice signatories (OpenAI, Cohere): https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai
- Code of Practice on Transparency of AI-Generated Content: https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
- Art. 4 as amended by the Digital Omnibus: https://www.lewissilkin.com/insights/2026/07/27/the-digital-omnibus-on-ai-enters-into-force-today-102nedo
