# Phase 2 and 3 — Risk classification and role map

## Phase 2: Risk tier classification

| Question | Answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | No. None of the eight practices applies. It does not infer emotions, does not score people's social behaviour, does not use subliminal or manipulative techniques, does not scrape facial images, does not predict criminal offences, and does not categorise people biometrically. The one that needs checking rather than dismissing is social scoring: the system assigns a 0–10 rating, but to a process step belonging to a company, not to a natural person's behaviour or characteristics. |
| Does this system operate in any of the eight Annex III areas? | No. Taken one by one: not biometrics; not critical infrastructure; not education or vocational training; not essential services or creditworthiness; not law enforcement; not migration; not justice or democratic processes. The area that requires real argument is employment and worker management (no. 4), addressed below. |
| If Annex III: does it significantly influence decisions in that area, or is it narrow or preparatory? | Not reached, because the system does not fall within Annex III in the first place. Annex III no. 4 covers recruitment and selection, and decisions on promotion, termination, task allocation, and monitoring or evaluating the performance of natural persons. This system evaluates **process steps**, not people. It never sees an employee record, names no worker and produces no per-person output. A recommendation that an ordering process could be automated is not an evaluation of the people who currently perform it, even though it bears on their work. Where the client later decides what to do about staffing, that is a human decision taken outside the system and on other information. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | No, on the system as built. There is no interaction with a natural person: the consultant runs a command-line tool and reads a file. The process-map image is AI-generated, but the machine-readable marking duty under Article 50(2) falls on the provider of the generative model — OpenAI — and the image is a schematic diagram, not a deepfake, so Article 50(4) does not apply. The generated report is not published to inform the public on a matter of public interest. |
| **First-pass risk tier** | **Minimal risk** |
| One-sentence justification | No Article 5 practice is present, the intended purpose falls outside all eight Annex III areas because the system assesses company processes rather than natural persons, and Article 50 is not engaged because there is no interaction with a person and no synthetic content presented as authentic. |

### Why "minimal risk" is a conclusion and not a default

Three things could have put this system in a higher tier, and each was checked rather than assumed.

It produces a numeric rating, which sounds like scoring — but the subject of the rating is a process, and the Act regulates systems by the subject they assess, not by whether they output a number.

It touches employment in substance, since every automation recommendation concerns work people do. But Annex III no. 4 is written around decisions about identified natural persons, and this system never resolves to one.

It generates an image. That brings Article 50 into view, but the marking duty for synthetic content sits with the model provider, and a diagram of an order process is not a deepfake.

### Ambiguity flagged for legal review

Two planned changes would alter this assessment, and both are in the project's own roadmap.

**The public lead magnet.** Publishing a generated report about a named company changes the Article 50 picture, because generated text published to inform the public can carry a disclosure duty. It also raises questions about accuracy and statements made about named individuals that have nothing to do with the AI Act. Resolving this needs a decision on what the public version actually publishes.

**A recruiter-facing or coach-facing variant.** If the same analysis were ever applied to evaluate people rather than processes, the system would fall squarely within Annex III no. 4 and become high-risk, with the full provider obligation set attaching. Nothing in the current codebase does this, and nothing should be added that does without a fresh classification.

The additional information that would resolve both: a written statement of the intended purpose for each deployment. Intended purpose is what the classification turns on, and it is currently implicit.

## Phase 3: Role map

| Role | Entity | Key AI Act obligations |
|---|---|---|
| Provider | Friedrich Tschoepke — developed the system and would place it on the market under his own name | For a minimal-risk system: ensure a sufficient level of AI literacy among those operating it (Art. 4, as recast by Regulation (EU) 2026/1744). Voluntary codes of conduct under Art. 95 are available but not required. No conformity assessment, no registration, no CE marking. |
| Deployer | Friedrich Tschoepke today; a consultancy or a client organisation in a production deployment | Same literacy expectation. If a client ever becomes the deployer, the intended purpose must be documented so the client can confirm the classification for their own use. |
| Vendor | OpenAI — supplies the text, embedding and image models | OpenAI is the provider of a general-purpose AI model and carries its own obligations under Arts. 53–55, including technical documentation and the machine-readable marking of synthetic output under Art. 50(2). These are OpenAI's duties, not mine, but I rely on them being met. |
| Vendor | Tavily (web search), Pinecone (vector index) | Neither is an AI system in the Act's sense for this purpose: one returns search results, the other performs similarity lookup over a library I wrote. No AI Act obligations flow to or from them here. |

Provider and deployer are the same person today, which hides the distinction rather than removing it. The moment someone else runs this — a client, a colleague, a hosted version — the roles separate and the obligations attach to different parties. That separation should be settled in writing before it happens, not after.

## Phase 4: Obligation checklist

Not applicable. The system is not high-risk, so Articles 9 to 15, 43, 47–49 and 72 do not apply. The checklist is deliberately left empty rather than filled with "n/a" rows, and this paragraph records why.
