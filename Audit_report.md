# EU AI Act Self-Audit: Board Game Concierge

**Project:** [Board Game Concierge](https://github.com/zuzubes/Board-game-concierge)
**Author:** Mudit Airan
**Assessment type:** First-pass EU AI Act compliance audit
**Date:** 2026-08-18

This is a first-pass classification, not a legal opinion. Anything flagged "escalation needed" requires review by a lawyer, DPO, or conformity body before being treated as final.

---

## Phase 1: System brief

Board Game Concierge is a Telegram bot for a private board game group. It explains rules from pre-loaded rulebook PDFs, answers one follow-up rules question per session, gives strategy tips pulled from live web search, and recommends games from a local catalog by player count, playtime, and complexity. It only produces conversational text — never a score, ranking, or automated action. The only people it affects are the members of one private Telegram chat. No review step sits between the backend generating a reply and Telegram sending it. Mudit built it solo, combining custom Python with OpenAI, Pinecone, the Telegram Bot API, and three search providers (SerpApi, Serper.dev, Tavily), orchestrated through n8n. There is no client: Mudit is both provider and end user.

---

## Phase 2: Risk tier classification

| Question | Answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | No. It does not use subliminal or manipulative techniques, exploit vulnerabilities of a specific group, perform social scoring, categorize people by biometric or protected-attribute inference, do real-time remote biometric identification, infer emotion in a workplace or education setting, or support predictive policing or facial-recognition database scraping. It recommends board games and explains rules. |
| Does this system operate in any of the eight Annex III areas? | No. It does not touch biometrics, critical infrastructure, education/vocational training, employment or worker management, access to essential public or private services, law enforcement, migration/asylum/border control, or the administration of justice or democratic processes. |
| If Annex III: does it "significantly influence" decisions in that area, or is it narrow/preparatory? | Not applicable — the system does not fall under Annex III. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | Yes. It is a conversational system that talks directly with natural persons in a Telegram chat, which is exactly the case Article 50(1) covers: a provider must ensure that natural persons are informed they are interacting with an AI system, unless this is obvious from context. |
| First-pass risk tier | **Limited risk / transparency obligation (Article 50)** |
| One-sentence justification citing the specific article or Annex entry | The system falls outside Article 5 and Annex III, but its direct conversational interaction with users triggers the Article 50(1) disclosure obligation regardless of tier, so it cannot be classified as minimal risk without first confirming that obligation is met. |

**Ambiguity to flag:** Article 50(1) has an exemption when it is "obvious from the circumstances and context of use" that the user is talking to an AI. Telegram's own interface labels bot accounts, which arguably supports the exemption. But `app/persona.py` explicitly instructs the model to "NEVER end with a disclaimer, sign-off, or note about being automated, AI-generated, or sent via a bot/workflow tool," and the n8n workflow explicitly disables n8n's default "This message was sent automatically" footer (`appendAttribution: false`). The system is deliberately designed to sound human in the actual conversation, which cuts against relying on the exemption. Resolving this needs a legal read on how much weight the platform-level bot label carries versus the in-message persona design — flagged for legal review in Phase 5.

A second, more basic ambiguity: Article 2(10) excludes deployer obligations for a natural person using an AI system "in the course of a purely personal non-professional activity." This system is currently run by Mudit for his own friend group with no commercial or professional context, which may place the deployer side of this system outside the Regulation's scope entirely. This does not resolve the provider-side question, since Mudit built and would place the system on the market if he ever shared or hosted it for others. Confirming where the personal-use boundary sits also needs legal review.

---

## Phase 3: Role map

| Role | Entity | Key AI Act obligations |
|---|---|---|
| Provider | Mudit Airan — designed, built, and would place the system on the market if operated beyond personal use. | If in scope: Article 50(1) transparency design duty. Not subject to Articles 9–15 (high-risk obligations), since the system is not high-risk. |
| Deployer | Mudit Airan, using the system for his own private board game group. | Likely excluded from deployer obligations under Article 2(10)'s personal/non-professional activity exemption — to be confirmed, not assumed (see Phase 2 ambiguity). |
| Vendor — OpenAI | Supplies the chat model (`gpt-4o-mini` by default) and embedding model (`text-embedding-3-small`), called via the OpenAI API. | OpenAI is the provider of a general-purpose AI model and carries its own Article 53+ obligations (documentation, copyright policy, etc.). Those obligations sit with OpenAI, not with this project. |
| Vendor — Pinecone | Vector database storing rulebook chunk embeddings. | Infrastructure/storage only — it does not generate or infer content, so it does not carry AI Act provider obligations in this context. Relevant to GDPR data-processor status only if personal data passed through it, which the ingested content (rulebook text) does not. |
| Vendor — SerpApi (Brave AI Mode) | First-choice source for `/tips`. | Uses Brave's "AI Mode," which appears to be an AI-generated search/summarization layer. Its own AI Act status was not verified in this repo and should be checked before relying on it further. |
| Vendor — Serper.dev, Tavily | Fallback search sources for `/tips`. | Standard search APIs. Whether their responses involve AI-generated summarization was not confirmed by reading this repo — flagged, not assumed either way. |
| Vendor — Telegram Bot API | Message delivery and bot account identity. | Messaging platform, not an AI component. |
| Vendor — n8n | Orchestrates routing between Telegram and the FastAPI backend. | Workflow automation tool, not an AI component itself. |

---

## Phase 4: Obligation checklist (high-risk only)

Not applicable. The system was classified as limited risk in Phase 2, not high-risk, so the Article 9–15 / 43 / 47–49 / 72 obligation checklist does not apply.

---

## Phase 5: Gap analysis and remediation plan

**Gap 1**
- **Obligation:** Article 50(1) — inform natural persons they are interacting with an AI system.
- **Current state:** `app/persona.py` explicitly instructs the model never to mention being automated, AI-generated, or bot/workflow-driven, and the n8n workflow explicitly turns off n8n's default automation footer. No message in the current flow — including the `/start`/`/greeting` onboarding message — states plainly that the user is talking to an AI system.
- **Required state:** Unless it is obvious from context that the user is interacting with an AI, the system must inform them of that fact.
- **Remediation:** Add one clear, plain-language line to the onboarding/greeting message (e.g., "I'm an AI assistant, not a real person") and to the Telegram bot's profile bio, without requiring it in every reply. This satisfies the obligation once per relationship rather than breaking the concierge tone in each message.
- **Escalation needed?** Yes — legal review to confirm whether the Telegram bot-account label alone would have satisfied the "obvious from context" exemption, and whether the remediation above is sufficient or excessive.

**Gap 2**
- **Obligation:** Parallel GDPR issue, not an AI Act obligation — lawful basis and transparency for processing Telegram chat IDs and free-text messages.
- **Current state:** The backend sends chat_id-linked message text to OpenAI, and free-text questions and preferences to OpenAI, SerpApi, Serper.dev, and Tavily, with no privacy notice describing this, no documented retention period for what OpenAI/SerpApi/Serper/Tavily do with the data on their end, and no data processing agreement referenced in the repo. In-app state is not persisted (session data lives in a process-memory dict and is lost on restart), but that is a separate fact from what happens to data once it leaves the backend to a third party.
- **Required state:** GDPR requires a lawful basis for processing personal data (a Telegram chat_id and free-text messages can qualify as personal data) and transparency about what is collected, why, and for how long, especially if this system is ever operated for people other than Mudit's own household.
- **Remediation:** Write a short data-flow note listing what is sent to each third party and why, and revisit the legal basis and any notice requirement before extending this beyond purely personal use.
- **Escalation needed?** Yes — DPO or privacy counsel, specifically if the system moves beyond the current single private group.

---

## Phase 6: Compliance memo

**To:** Project Owner, Board Game Concierge
**From:** Mudit Airan
**Re:** First-pass EU AI Act compliance assessment
**Date:** 2026-08-18

There is no external client on this project — Mudit built it and uses it himself with his own board game group. This memo is written as the internal decision record he would want before ever operating the system for anyone outside that group.

**1. Classification.** Board Game Concierge is limited-risk under the EU AI Act: it doesn't fall under a prohibited use (Article 5) or a high-risk area (Annex III), but because it talks directly with users in a Telegram chat, it triggers the Article 50(1) obligation to disclose that they're talking to an AI.

**2. Roles.** Mudit is the provider — he designed and built the system. He is also the deployer, but likely falls outside deployer obligations under Article 2(10)'s exemption for purely personal, non-professional use. That exemption needs confirming before anyone treats it as settled, especially if the system is ever shared with people outside this one private group.

**3. Key findings.**
- The system actively avoids disclosing that it's an AI — the persona prompt bans any mention of being automated, and the n8n workflow explicitly turns off the platform's default "sent automatically" footer. That works against the Article 50(1) disclosure duty.
- No privacy notice or data-flow documentation exists for what gets sent to OpenAI, SerpApi, Serper.dev, and Tavily, even though a Telegram chat_id and free-text messages can count as personal data under GDPR.

**4. Recommended next steps.** Add a one-time AI disclosure to the onboarding message and bot profile first — it's the smallest change that closes the clearest gap. Then write a short data-flow note for the third-party calls before considering any use of the system beyond the current private group. Both of these need legal or DPO review before being treated as closed, not just implemented and assumed sufficient.

**5. Caveats.** This memo is a first-pass self-audit, not a legal opinion, a conformity assessment, or a certification. It does not confirm the Article 2(10) personal-use exemption, does not resolve the Article 50(1) "obvious from context" question, and does not constitute a GDPR lawful-basis determination. All three need review by qualified counsel before this system is operated beyond Mudit's own private use.
