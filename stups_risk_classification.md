# Stups: Risk Classification, Role Map and Obligation Checklist

Reference text: Regulation (EU) 2024/1689 (AI Act), as amended by Regulation (EU) 2026/1744 (Digital Omnibus on AI, in force 27 July 2026).

---

## 1. Risk tier classification

| Question | Answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | No. No subliminal, manipulative or deceptive technique. No exploitation of vulnerability. No biometric categorisation, no emotion inference, no social scoring. Behavioural nudging is the system's stated purpose, which brushes against Article 5(1)(a) conceptually, but it fails that test on both limbs: there is no deceptive technique, and no significant harm. |
| Does this system operate in any of the eight Annex III areas? | No. Not biometrics, critical infrastructure, education, employment, essential private or public services, law enforcement, migration and border control, or administration of justice and democratic processes. Output is a non binding leisure suggestion. |
| If Annex III: does it significantly influence decisions, or is it narrow or preparatory? | Not applicable. Annex III is not engaged. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | Yes. The system generates text with an LLM and delivers it to a natural person. |
| First pass risk tier | **Limited risk (Article 50 transparency).** |
| One sentence justification | Stups generates synthetic text and delivers it directly to a human user, which engages the Article 50 transparency regime, while touching no Article 5 prohibition and no Annex III domain. |

### Ambiguity to flag

The classification holds only while Stups remains a single user personal tool. Two scope provisions currently keep obligations off the developer, and both are fragile:

- **Article 2(10)** disapplies deployer obligations for natural persons using AI in a purely personal, non professional activity. Stups was built inside a paid vocational course as part of a documented career pivot, and a go to market plan exists. Whether "purely personal, non professional" survives that is arguable.
- **Article 2(8)** disapplies the Regulation to research, testing and development prior to placing on the market. It expressly does **not** cover testing in real world conditions. Stups runs live on a schedule against live data and delivers real output daily, which is closer to real world operation than to sandbox testing.

Resolving this would require legal review. What would settle it: whether a course project with a commercialisation plan counts as professional activity, and whether daily live self use counts as real world testing.

### Note on timing

Article 50 transparency obligations applied from 2 August 2026 and were **not** deferred by the Digital Omnibus. High risk obligations under Chapter III were deferred to 2 December 2027 (Annex III) and 2 August 2028 (Annex I).

---

## 2. Role map

| Role | Entity | Status and key obligations |
|---|---|---|
| Provider | The developer (Gordan Skopljak) | **Not currently.** Article 3(3) requires developing a system *and* placing it on the market or putting it into service under one's own name. Stups is unpublished and available to nobody. On deployment this changes and full Article 50 provider duties attach. |
| Deployer | The developer | **Outside the definition.** Article 3(4) excludes use in the course of a personal non professional activity, reinforced by Article 2(10). See the ambiguity flagged above. |
| Affected person | The developer | Sole data subject and sole recipient of output. Developer, user and affected person are the same natural person. |
| Vendor: LLM | OpenAI, DeepSeek | Providers of general purpose AI models. Their own obligations sit under Chapter V (Articles 53 to 55), applicable since 2 August 2025. Not the developer's obligations, but the developer inherits the consequences of their behaviour. |
| Vendor: runtime | n8n | Infrastructure and orchestration. No AI Act role of its own in this configuration. |
| Vendor: data | OpenWeatherMap, Ticketmaster, four scraped sites | No AI Act role. The scraped sources raise separate terms of service and database rights questions outside this Regulation. |

**Summary line:** developer and user are the same natural person, which means no regulated role currently attaches, and this is the sole reason obligations do not bite.

---

## 3. Obligation checklist

Stups is not high risk, so the eleven provider obligations under Articles 9 to 15, 43, 47 to 49 and 72 are not assessed. The checklist below covers what actually applies, split into current state and deployment state.

### 3a. Applicable today

| Obligation | Basis | Status | Note |
|---|---|---|---|
| Transparency: user knows they are dealing with AI | Article 50(1) | Partial | Satisfied only by the obviousness exemption, since the sole recipient built the system. No design feature carries the disclosure. |
| Marking of synthetic content as machine readable | Article 50(2) | Gap | The Telegram message carries no marking or provenance signal. Arguably out of scope while never placed on the market, but the design does not satisfy it. |
| Lawful processing of personal data | GDPR | Partial | Taste profile and chat ID are personal data of one subject who is also the controller, so exposure is minimal. The profile is nonetheless transmitted to a third party model provider on every run, with no stated legal basis, retention rule, or processing agreement. |
| AI literacy | Article 4 | Not applicable | Binds providers and deployers. The developer is currently neither. |
| Risk management, data governance, technical documentation, record keeping, human oversight, accuracy and robustness, conformity assessment, CE marking, registration, post market monitoring | Articles 9 to 15, 43, 47 to 49, 72 | Not applicable | High risk obligations. Annex III not engaged. Deferred to 2 December 2027 in any case. |

### 3b. Applicable on deployment to real users

| Obligation | Basis | What changes |
|---|---|---|
| Provider status | Article 3(3) | The developer places a system into service under their own name. Article 2(10) no longer shields the activity. |
| AI disclosure | Article 50(1) | The obviousness exemption dies the moment a stranger receives the message. Explicit in product disclosure required at onboarding and, arguably, on each delivery. |
| Synthetic content marking | Article 50(2) | Machine readable marking of generated text becomes a live provider duty. |
| AI literacy | Article 4 | Engages for the provider and any staff or contractors operating the system. |
| Lawful basis and data subject rights | GDPR Articles 6, 5, 15 to 17 | Each user's taste profile needs a lawful basis, purpose limitation, a defined retention period, and working access, rectification and erasure mechanisms. The current stateless design cannot service any of these, because it stores nothing and therefore cannot locate, correct or delete anything either. |
| Special category data | GDPR Article 9 | The Sprint 2 smartwatch integration introduces sleep and stress data, which is health data. Explicit consent required. |
| Emotion inference | Article 5(1)(f), Annex III | Daily mood capture infers emotional state. This remains **outside** both the Article 5 prohibition (which is limited to workplace and education) and Annex III (leisure is not a listed domain), but it materially increases data protection exposure and should be re examined before build. |

---

## 4. Caveat

This is a first pass self assessment, not a legal opinion, not a conformity assessment, and not a certification. The scope questions under Articles 2(8) and 2(10) in particular require confirmation by a qualified lawyer.