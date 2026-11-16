# Compliance memo

**To:** Head of Product, [Client – a mid-size Dutch payment institution]
**From:** [Your Name], AI consultant
**Date:** 16 November 2026
**Subject:** EU AI Act first-pass assessment of the Vendor Due-Diligence Agent

**1. Classification.** The agent is **minimal risk** under the EU AI Act. It helps your compliance team check *companies* before they become suppliers. That isn't a prohibited practice, isn't one of the high-risk uses listed in Annex III, and isn't a public-facing chatbot that needs an AI disclosure.

**2. Who is who.**
- **Provider:** we are, as the developers. You become the provider if you run it under your own name.
- **Deployer:** your compliance team uses it and stays responsible for every onboarding decision.
- **Model provider:** OpenAI supplies the language model and has its own obligations.

**3. Key findings.** The AI Act itself asks little of this system. The real risks are elsewhere:
- **Information about people.** The reports can contain news about named directors and employees, sometimes about alleged crimes. Privacy law (GDPR) restricts this kind of data, and the people concerned aren't told they are screened.
- **Accuracy.** In testing, two well-known companies were flagged for crimes committed *against* them. A compliance officer spots this quickly, but a wrong flag can still delay a supplier or damage a reputation.
- **Data leaving the EU.** Names and article text are sent to US services, including a tracing tool that currently keeps everything.

**4. Recommended next steps, in order:**
1. **Before any pilot:** a DPIA with your data protection officer, including the legal basis for processing information about crimes. *(External review: privacy lawyer.)*
2. **Before go-live:** sign data processing agreements with the US vendors, set data retention limits, and add a screening clause to your supplier terms and privacy notice.
3. **Product changes:**
   - The agent records whether a company was the *perpetrator or the victim* in a news story.
   - Officers record their decision and reason for every report.
4. **Commercial:** buy commercial licences for the sanctions data and live access to the Chamber of Commerce (KvK) register. The MVP uses free, non-commercial sources.
5. **Re-assess if the scope changes:** for example, screening self-employed individuals or your own *customers*. That could make the system high-risk.

**5. Caveats.** This memo is a first-pass consulting assessment. It isn't a legal opinion, a conformity assessment or a certification. Conclusions should be confirmed by legal counsel before the system is used in production.
