# Compliance memo

**To:** Head of Product, Wechselweise Coaching GmbH *(fictional client)*
**From:** Ben Mayer
**Date:** 26 November 2026
**Re:** EU AI Act first-pass assessment of Menohelp, before the pilot

**1. Classification.**
- **Current tier:** Menohelp is a **limited-risk** AI system under the EU AI Act. It isn't a banned practice and isn't on the high-risk list (Annex III). Because it uses AI to write text, Article 50 requires us to label its reports as AI-generated.
- **Open question:** it could become **high-risk** if regulators treat it as **medical-device software**. That depends mainly on how we describe and word the product, and it is the main open question.

**2. Who is responsible.**
- **Ben Mayer** is the **provider**: built the system and is responsible for its labelling and design. If you launch it under your own brand, that responsibility moves to you.
- **Your company** is the **deployer** when your coaches use it with clients.
- **OpenAI** supplies the language model inside it and has its own separate duties.
- **Women using it privately** are the people affected, not deployers.

**3. Key findings.**
- **The product sometimes sounds diagnostic.** For younger women, a report can name "premature ovarian insufficiency". It flags blood values against reference ranges, and our tagline promises to help "understand any symptoms". Regulators judge a product by what it says it does. If Menohelp counts as a medical device, it needs a notified-body certification and the full high-risk compliance package, which takes months and costs a lot.
- **Reports don't say they were written by AI.** On screen and in email, nothing tells the reader, or a doctor they forward it to, that an AI wrote the text, and there is no machine-readable label. This is a legal requirement and an easy fix.
- **The health-data handling isn't ready for real users.** There is no consent step. "Nothing is stored" isn't accurate, because OpenAI can keep inputs for up to 30 days. Reports can be emailed to any unverified address. These are GDPR issues rather than AI Act issues, but they block the pilot.

**4. Recommended next steps, in order.**
1. **Now:** agree a written intended purpose ("helps women organise their own data and prepare for a doctor's visit; does not diagnose"), and remove condition names and diagnostic-sounding copy.
2. **Before the pilot:**
   - add an AI-written banner and a machine-readable label to every report;
   - add a consent checkbox and correct the privacy wording;
   - replace open email sending with downloads or verified addresses.
3. **Before the pilot, with external help:** a DPIA and processor agreements (OpenAI, Resend, hosting), reviewed by a **data protection officer**.
4. **Before scaling:** a qualification opinion from a **medical-device regulatory specialist**. Add a metadata-only usage log, and give a short AI-literacy briefing to coaches.

**5. Caveats.** This is a first-pass consulting assessment, not a legal opinion, a conformity assessment or a certification. It reflects the AI Act as amended by the 2026 Digital Omnibus and the prototype as built on 13 November 2026. Medical-device qualification and GDPR transfer questions need qualified specialists. Any change to features or marketing means repeating this assessment.
