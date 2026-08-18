# Stups: Gap Analysis and Remediation Plan

Five gaps identified. Each is rated twice: severity today (single user, developer is sole data subject) and severity on deployment (multi user product per the go to market plan). The second rating is the one that matters, because every gap below is low risk today for the same single reason.

---

## Summary table

| # | Gap | Basis | Today | On deployment | Escalation |
|---|---|---|---|---|---|
| 1 | No output review or content validation | Good practice; Article 14 on deployment | Low | High | No |
| 2 | No AI disclosure or synthetic content marking | Article 50(1), 50(2) | Low | High | No |
| 3 | No logging of runs | Good practice; Article 12 if ever high risk | Low | Medium | No |
| 4 | Undocumented transfer of personal data to LLM vendor | GDPR Articles 6, 28, 5(1)(e) | Low | High | Yes |
| 5 | Scraped sources with no terms of service review | Contract law, Database Directive 96/9/EC | Low | High | Yes |

---

## Gap 1: No output review or content validation

**Obligation.** No AI Act duty applies at limited risk. Article 14 human oversight would apply only if the system became high risk, which it does not. This is therefore a good practice gap, not a breach.

**Current state.** Generated text passes from the model directly to Telegram with no validation. A separate error workflow alerts on technical failure only. A run that succeeds and produces a hallucinated venue, a past dated event, or an unsafe suggestion triggers nothing.

**Required state.** A check between generation and delivery, and a feedback channel so that bad output is detectable after the fact.

**Remediation.** A validation node before the Telegram send, checking that the two option format holds and that any named venue appears in the retrieved event data. Add a thumbs up or down reply that records whether the suggestion landed. Roughly half a day in n8n.

**Escalation needed.** No.

---

## Gap 2: No AI disclosure or synthetic content marking

**Obligation.** Article 50(1) requires that a natural person interacting with an AI system be informed of that fact, unless it is obvious to a reasonably well informed person. Article 50(2) separately requires that providers mark synthetic content in a machine readable format. Both applied from 2 August 2026 and were not deferred by the Digital Omnibus.

**Current state.** The delivered message carries no label and no provenance signal. The prose is deliberately warm and personal, reading like a message from a friend. Compliance rests entirely on the obviousness exemption, which holds only because the sole recipient wrote the system.

**Required state.** Explicit disclosure at the point of interaction once any third party receives output, plus machine readable marking of the generated text.

**Remediation.** Two separate fixes, because these are two separate obligations.

- Article 50(1): a persistent "powered by AI" statement at onboarding and a one line footer on each delivered message. Cheap, roughly two hours.
- Article 50(2): a machine readable provenance signal on the generated text. A branding line does not satisfy this subsection. Requires investigation of what marking is practical for short text delivered over a messaging API, since watermarking standards for plain text are weak.

**Escalation needed.** No for 50(1). 50(2) may need specialist input on what constitutes adequate marking for short form text.

---

## Gap 3: No logging of runs

**Obligation.** Article 12 record keeping binds high risk systems only, so no legal duty applies here. Listed because the absence blocks any later investigation and because it blocks the memory feature already on the roadmap.

**Current state.** Nothing persists between runs. No record of the weather retrieved, the events found, the prompt sent, or the message returned. A bad suggestion cannot be reconstructed or explained.

**Required state.** A durable record of each run sufficient to reconstruct why a given suggestion was made.

**Remediation.** Append one row per run to a Data Table or Google Sheet: timestamp, temperature, weather condition, event count, model used, and final message text. Roughly one hour in n8n. Worth doing immediately regardless of compliance, since it is the same data the memory feature needs.

**Escalation needed.** No.

---

## Gap 4: Undocumented transfer of personal data to LLM vendor

**Obligation.** GDPR Article 6 (lawful basis), Article 28 (processor arrangements), Article 5(1)(e) (storage limitation).

**Current state.** The taste profile is personal data describing an identifiable individual. It is transmitted to OpenAI or DeepSeek on every run. There is no data processing agreement, no stated retention period, no record of which provider received which data, and no check on whether the vendor's terms permit training on submitted inputs. Exposure today is minimal because the GDPR household exemption covers purely personal activity, and because the data subject and the controller are the same person.

Note that the household exemption, not consent, is what covers this today. Self consent is not a meaningful lawful basis, and in any case a data subject's agreement does not by itself regularise a third party's processing.

**Required state.** On deployment, a documented lawful basis for processing each user's preference data, a signed processor agreement with the model vendor, a defined retention period, and working access, rectification and erasure mechanisms.

**Remediation.** Select a single LLM vendor rather than two. Execute their data processing addendum. Confirm in writing that submitted content is excluded from training. Define retention. Note that the current stateless design cuts both ways: storing nothing looks privacy preserving, but it also means there is no record to locate, correct or delete when a data subject exercises their rights, and the moment preferences are stored those mechanisms must exist.

**Escalation needed.** Yes. Data protection officer or privacy counsel before first external user.

---

## Gap 5: Scraped sources with no terms of service review

**Obligation.** Outside the AI Act. Contract law via website terms, and sui generis database rights under Directive 96/9/EC.

**Current state.** Four sources (hamburg.com, Stadtpark Open Air, Filmraum, Abaton, Kinopolis) are scraped by Code nodes. No terms of service review has been carried out and no permission sought. The project README already identifies these as the most fragile component, on reliability grounds rather than legal ones.

**Required state.** A documented basis for accessing each source, whether that is permissive terms, an API agreement, or explicit permission.

**Remediation.** Read the terms for all four sources and record the finding for each. Replace scraped sources with official APIs or licensed feeds where available. Where no API exists, seek written permission or drop the source. Commercially this is not optional: a cease and desist would remove most of the event pipeline at once.

**Escalation needed.** Yes. Legal review before commercial launch.

---

## What is not a gap

Stated explicitly, because a first pass audit that finds only problems is not a credible audit.

- **Emotion inference.** Daily mood capture is not caught by the Article 5(1)(f) prohibition, which is limited to workplace and education contexts, and leisure is not an Annex III domain. It raises data protection exposure, not AI Act exposure.
- **High risk obligations.** Articles 9 to 15, 43, 47 to 49 and 72 do not apply and would not apply on deployment either. The system remains outside Annex III whether it has one user or one hundred thousand.
- **Prohibited practices.** Article 5 is not engaged on any limb.
