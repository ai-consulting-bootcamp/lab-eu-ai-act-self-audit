# Gap Analysis and Remediation Plan

The system is minimal risk, so the 11-obligation high-risk checklist (Phase 4) is skipped, per the lab instructions. The gaps below cover the Article 50 transparency obligation that *does* apply, plus the parallel legal issues (mainly GDPR) that Phase 5 asks to flag for non-high-risk systems.

## Gap 1 — AI-interaction disclosure (Article 50(1))
- **Obligation:** Providers/deployers of AI systems intended to interact directly with natural persons must inform those persons they are interacting with an AI system, unless this is obvious from the context to a reasonably well-informed person.
- **Current state:** The Telegram bot replies in natural conversational language with no statement that the reply is automated. A school employee texting in an order could reasonably believe they're messaging a person at the shop.
- **Required state:** A clear, unambiguous disclosure that the interaction is automated — either at first contact, in the bot's profile description, or both.
- **Remediation:** Add a one-line disclosure to the bot's welcome/first-contact message and to its Telegram profile description, e.g. "This is an automated ordering assistant for Shirdi Hicon Publications. A human reviews all stock orders before dispatch." This is a small change to the existing n8n flow (one static message node) — no redesign needed.
- **Escalation needed?** No.

## Gap 2 — Personal data handling / GDPR basics
- **Obligation:** Not an AI Act obligation at minimal risk, but GDPR applies in parallel — the system processes personal data (Telegram chat IDs, sender identity, order content, potentially photos containing handwriting) and sends some of it to a third party (OpenAI) for processing.
- **Current state:** No documented legal basis, privacy notice, or data-processing agreement referenced in the project. Retention isn't actively managed (the Orders sheet already has known leftover test rows).
- **Required state:** A documented basis for processing (legitimate interest / contract performance for order fulfilment), a short privacy notice given to schools, confirmation that OpenAI's API terms include a Data Processing Addendum covering this use, and a defined retention/cleanup policy for the order log.
- **Remediation:**
  1. Confirm and file OpenAI's standard API Data Processing Addendum.
  2. Draft a two-paragraph privacy notice, surfaced on first bot interaction or on the shop's ordering page.
  3. Set and apply a retention rule for the Orders sheet (e.g. archive/delete rows after N months), and use it to also clear the known test-row backlog.
- **Escalation needed?** Yes — recommend a lawyer or DPO review before licensing to other EU book sellers, since GDPR posture needs to be consistent and defensible across multiple, unrelated deployers in potentially different member states.

## Gap 3 — No system documentation for a to-be-licensed product
- **Obligation:** Not an AI Act obligation at this tier, but becomes practically important the moment you go from "tool I run for my dad" to "product I hand to other businesses" — each deployer needs to understand what they're taking on.
- **Current state:** Documentation exists only as internal build notes (n8n workflow structure, known bugs fixed). There's no user-facing description of what the system does, its limitations, or what data it touches.
- **Required state:** A short system card covering: what the bot does, known limitations (e.g. handwriting-photo parsing accuracy, current catalogue gaps for certain classes/stationery), what personal data it processes, and confirmation that the Article 50 disclosure is built in.
- **Remediation:** Write a one-page system card to ship alongside the workflow to any new licensee.
- **Escalation needed?** No, unless it gets folded into a formal licensing agreement — in which case a lawyer would review the agreement, not the card itself.

## Cross-border note
Rolling this out to book sellers in multiple EU countries raises two practical (not strictly AI Act) points worth flagging for later: the Article 50 disclosure and privacy notice will need to exist in each relevant language, and different national supervisory authorities may have slightly different expectations for the GDPR side — worth a lawyer's input once you have more than one or two pilot deployers outside your father's shop.
