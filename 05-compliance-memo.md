# Compliance Memo

**To:** Head of Product
**From:** Anand Narasipuram
**Re:** EU AI Act first-pass compliance assessment — School Book Order Bot
**Date:** 18.08.2026

## System classification
The School Book Order Bot is classified as **minimal risk** under the EU AI Act: it does not fall into any Article 5 prohibited category or any Annex III high-risk area (including education, which it superficially resembles but doesn't meet, since it processes commercial orders rather than student access or assessment). It does, however, trigger the **Article 50(1) transparency obligation**, because it interacts directly with people through natural-language chat.

## Role map
- **Provider:** us, if and when this workflow is licensed or distributed to book sellers beyond our own shop.
- **Deployer:** each individual book seller who runs the system in their own business, including our own shop as the first deployer.
- **Vendor:** OpenAI, as provider of the underlying language models we call via API; their compliance obligations are separate from ours.

## Key findings
1. **Missing AI-disclosure statement.** The bot currently doesn't tell customers they're talking to an automated system — a small fix, required before any wider rollout.
2. **No documented data-handling basis.** We process personal data (Telegram identity, order details, occasionally photos) and share some of it with OpenAI, without a privacy notice or confirmed data-processing agreement in place.
3. **No product-level documentation.** Once other, unrelated book sellers start using this, they'll need a plain description of what it does and its known limitations — this doesn't exist yet in a shareable form.

## Recommended next steps
1. Add the AI-interaction disclosure to the bot (low effort, do first).
2. Confirm OpenAI's Data Processing Addendum and draft a short privacy notice.
3. Write a one-page system card for future licensees.
4. Before onboarding book sellers outside our own shop, get a lawyer or DPO to review the GDPR posture and, if relevant, translate the disclosure/privacy notice for each target market.

## Caveats
This memo is a first-pass, non-expert compliance assessment produced as part of an internal audit exercise. It is **not** a legal opinion, not a formal conformity assessment, and not a certification of compliance. Final sign-off before any commercial rollout should involve a qualified lawyer, particularly for the GDPR and cross-border elements.
