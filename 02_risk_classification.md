# Phase 2: Risk Tier Classification

**System:** Fix My Process (Ironhack Project 3), as described in [01_system_brief.md](01_system_brief.md). This assessment uses only the facts in that brief.
**Legal basis checked:** Regulation (EU) 2024/1689 (AI Act), as amended by Regulation (EU) 2026/1744 (Digital Omnibus on AI, in force since 27 Jul 2026)
**Date:** 17 Nov 2026

## Classification table

| Question | Your answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | **No.** It does not manipulate or exploit anyone, score people socially, recognise emotions at work (Art. 5(1)(f), which covers inference from biometric data, not from typed text) or use biometrics. It reads a text description of a work process and recommends a tool. If an employee describes a monitoring use, the system only flags that request (for example as red); it does not perform it. |
| Does this system operate in any of the eight Annex III areas? | **No, on its intended purpose.** The closest area is **Annex III point 4(b), employment and workers management**: AI used to make decisions on terms of work, promotion or termination, to allocate tasks based on individual behaviour or traits, or to monitor and evaluate the performance and behaviour of workers. Fix My Process evaluates **processes and tools, not people**: it asks for no name or login, takes only the department, and its outputs are a fix report for the employee and a use-case summary. The other seven areas (biometrics, critical infrastructure, education, essential services, law enforcement, migration, justice and democracy) do not apply. |
| If Annex III: does it "significantly influence" decisions in that area, or is it narrow/preparatory? | **Not applicable, since it is not in Annex III.** If a reviewer argued that point 4(b) applies (see the ambiguity below), the Art. 6(3) filter would be the next test: the compliance label is a **preparatory** step, because the AI Governance Board makes the decision on red cases. But the filter can never be used if the system profiles people, so it would only hold if no individual can be identified. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | **Yes, on two counts.** **Art. 50(1):** employees use it directly through a web page and get answers back, so they must be told clearly that they are dealing with an AI, at the latest at the first interaction (Art. 50(5)). **Art. 50(2):** it generates text (the fix report and the use-case summary), so its outputs must be marked in a machine-readable way as AI-generated. Art. 50(3) (emotion recognition, biometric categorisation) and Art. 50(4) (deepfakes, text published to inform the public) do not apply: the reports are for internal use. Art. 50 has applied since 2 Aug 2026. |
| First-pass risk tier | **Limited risk (transparency obligations, Art. 50).** Not prohibited, not high-risk. Art. 4 (AI literacy) also applies, as it does to every AI system. |
| One-sentence justification citing the specific article or Annex entry | Fix My Process is not a prohibited practice under Art. 5 and not high-risk under Art. 6(2) and Annex III point 4(b), because it recommends approved tools for work processes and does not decide on, allocate tasks to, or monitor and evaluate individual workers, but it talks directly to employees and generates text, so the transparency duties of Art. 50(1) and 50(2) apply. |

## Ambiguity: limited risk or high-risk (Annex III 4(b))?

I am confident about "not prohibited". I am less sure about "not high-risk", for three reasons:

1. **Small departments.** Each case records the department. In a department of three people, a problem description plus a department can point to one person.
2. **Feedback per case.** Whether the employee will use the suggested tool, and why, is recorded next to the department. If managers later use it to judge which teams "adopt AI", the system starts to evaluate the behaviour of workers.
3. **Free text can contain names.** The only protection is an on-screen warning. If names get through, the stored data is about people, and profiling would also block the Art. 6(3) way out.

The code does not decide the tier here; **the use of the data does.** These facts would settle it:

- A written intended purpose and a list of uses that are not allowed ("not for evaluating individuals or teams"), signed off by the company.
- A minimum group size (for example 5 people) for any summary by department.
- Confirmation that nobody uses submissions or feedback in staff reviews, pay or task allocation.
- Personal details removed automatically before any AI step.

**In a real engagement I would flag this for legal review** (an AI Act specialist lawyer) before rollout. If it ended up classed as high-risk, the Annex III obligations would apply from **2 Dec 2027**, the date set by the Digital Omnibus.

## Phase 4 status

Because the first-pass tier is **limited risk**, the Phase 4 high-risk checklist (Art. 9 to 72) does not apply and is skipped, as the lab brief says. The transparency gaps and parallel legal issues go straight to [05_gap_analysis.md](05_gap_analysis.md).

## Cross-check with the EU AI Act Compliance Checker

The lab says to use the European Commission's Compliance Checker **after** the table above. It is an interactive web form (beta) on the AI Act Service Desk.

| Checker step | My answer |
|---|---|
| Entity type | Provider (and deployer, if the company builds it in-house) |
| Is it an AI system? | Yes (it infers outputs, recommendations and text, from inputs) |
| Placed on the EU market or used in the EU? | Yes, Germany |
| Prohibited practice? | No |
| Safety component or Annex I product? | No |
| Annex III area? | No (consider point 4, employment: answer No, not used for decisions on workers or to monitor them) |
| Interacts directly with people? | Yes |
| Generates synthetic text, image, audio or video? | Yes, text |
| Emotion recognition, biometric categorisation, deepfakes, public-interest text? | No |

**Expected result:** transparency obligations under Art. 50(1) and 50(2), plus Art. 4 AI literacy; no high-risk obligations.
My own assessment came first, as the lab asks; the checker is a cross-check, not the basis of the classification.

## Sources

- AI Act Compliance Checker: https://ai-act-service-desk.ec.europa.eu/en/eu-ai-act-compliance-checker
- Article 50 text: https://ai-act-law.eu/article/50/
- Bundesnetzagentur guidance on Art. 50(1): https://bundesnetzagentur.de/EN/Areas/Digitalisation/AI/04_Transparency/guidelines/start.html
- Annex III point 4 and the Commission's draft high-risk guidelines (workplace): https://www.faegredrinker.com/en/insights/publications/2026/6/draft-commission-guidelines-on-high-risk-ai-implications-for-the-workplace
- Digital Omnibus in force, Annex III deadline 2 Dec 2027: https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-high-risk-deadline-omnibus-20260/
- Art. 50 in force since 2 Aug 2026, grace period for Art. 50(2): https://www.potterclarkson.com/news/eu-ai-act-article-50-new-ai-transparency-rules
