# Phase 6 – Compliance Memo

**To:** Head of Product, CareerBridge
**From:** Nicolò
**Date:** 16 November 2026
**Re:** EU AI Act first-pass assessment – Job Application Prep Agent

**Classification.** The Job Application Prep Agent is a **limited-risk system under the EU AI Act**. Its only AI Act duty is transparency for AI-generated text (Article 50(2)). It isn't a high-risk recruitment system, because it helps candidates prepare their own applications and doesn't evaluate or select candidates for employers.

**Who is responsible for what.**
- **I am the provider:** I built the system and would supply it.
- **CareerBridge is the deployer:** you use it with your coaches and candidates.
- **The AI model vendor** carries its own obligations as provider of the underlying general-purpose model.
- **n8n** is the automation platform. It stores data on our behalf.

**Key findings.**
1. **The tool doesn't yet label its output as AI-generated.** Cover letters are delivered as plain text. The Act expects machine-readable marking, and candidates should see a clear "AI-drafted, review before sending" note.
2. **It sends more personal data than it needs, to a vendor outside the EU.** The full CV, including date of birth, photo content and address, goes to the AI model, and CV data is also kept in workflow logs. This is mainly a GDPR issue, and it's the most important one to fix.
3. **Nothing stops the tool being used for the wrong purpose.** If anyone used it to compare or rank candidates for a vacancy, it would become a high-risk recruitment system, with much heavier obligations.

**Recommended next steps, in order.**
1. **This month:** strip unnecessary personal data before the AI step, and switch off long-term storage of CVs in the workflow logs.
2. **Before launch:** sign a data-processing agreement with the AI vendor and select EU data residency or zero data retention. Add an AI notice to the input form and a visible label on all outputs.
3. **Before launch:** add an intended-use clause to your terms ("for candidates' own applications only"), and keep the tool to one CV per run with no scores.
4. **Within the first quarter:** add an automatic fact-check that flags cover-letter statements not supported by the CV.
5. **External review:** your data protection officer should sign off on steps 1–2. A lawyer should confirm how the text-marking duty applies to us and from when, and should draft the use restriction.

**Caveats.** This memo is a first-pass consulting assessment based on the system as built in November 2026. It isn't a legal opinion, a conformity assessment or a certification. It should be reviewed again if the tool's purpose, users or AI vendor change.
