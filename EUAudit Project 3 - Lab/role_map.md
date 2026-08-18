step3: Role Map for Platform Risk Research Agent
# Role Map — Platform Risk Research Agent

## Provider

**Entity:** Nelly Pourmehr (solo build)

I designed the system, defined the risk scoring logic, wrote the RAG corpus, and built the pipeline. I am the provider under the AI Act's terms, since I developed the system and would place it on the market.

**Key obligations:**
- Article 50 transparency: label the report as AI-generated
- Basic technical documentation of how the system works
- Keep the confidence tagging and evidence sourcing intact, since this is my main transparency safeguard
- No conformity assessment or CE marking needed, since the system is not high-risk

## Deployer

**Entity:** The buyer company running the tool

The buyer company uses the report to decide on a vendor. They run the system in a professional context, in-house.

**Key obligations:**
- Tell their own staff or stakeholders that the report is AI-generated, if they pass it along internally or to a client
- Use the report as one input, not as a final decision on its own
- No high-risk deployer duties apply, since the system is not Annex III

## Vendor (third-party AI components)

| Vendor | Role | Own AI Act tier |
|---|---|---|
| DeepSeek (via Vercel AI Gateway) | Reasoning calls | Minimal risk as a general-purpose model provider; their own obligations do not transfer to you directly |
| OpenAI (text-embedding-3-small) | Embeddings | Same as above |
| Tavily | Web search tool | Not an AI decision-maker, low relevance to AI Act |

**Key obligations:**
- These vendors carry their own compliance duties as model providers, separate from yours
- Your obligation is limited to using their models responsibly and not misrepresenting what they do
- If you build on top of a general-purpose AI model, check if any transparency duties for GPAI apply to you as a downstream provider

## Note

Role mapping here is a first-pass. Confirm with a lawyer if this agent is ever offered as a commercial product to real clients.