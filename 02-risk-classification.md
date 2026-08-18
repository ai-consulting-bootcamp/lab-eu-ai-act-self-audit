# Risk Tier Classification

## CFU 1 — Recognize

| Question | Your answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | No. It does not do subliminal manipulation, exploit vulnerabilities, perform social scoring, do real-time remote biometric identification, biometric categorisation, emotion recognition in workplace/education, or predictive policing. It is a catalogue-matching and reply-generation tool for a commercial ordering process. |
| Does this system operate in any of the eight Annex III areas? | No. The closest candidate is "education and vocational training" (Annex III §3), which covers systems used to determine access/admission to institutions, evaluate learning outcomes, assess the appropriate level of education for a person, or monitor/detect prohibited behaviour during tests. This system does none of that — it does not touch students, grading, admissions, or assessment. It is a B2B order-processing tool between a bookshop and school administrative staff. |
| If Annex III: does it "significantly influence" decisions in that area, or is it narrow/preparatory? | N/A — not an Annex III system. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | Yes. It interacts directly with natural persons (school staff) via Telegram in natural language, using AI-generated replies. This is not obviously distinguishable from a human employee replying, so the Article 50(1) disclosure duty is engaged even though the system overall is minimal-risk. |
| **First-pass risk tier** | **Minimal risk**, with a **limited transparency obligation under Article 50(1)** because it is a conversational AI system interacting with natural persons. |
| **One-sentence justification** | The system falls outside Article 5's prohibited practices and outside every Annex III high-risk area — including education, which it superficially resembles but does not meet because it processes commercial orders rather than student access, evaluation, or assessment — so it defaults to minimal risk, but its direct AI-mediated interaction with people triggers Article 50(1)'s disclosure requirement. |

## Ambiguity flag
If the system's role ever expanded beyond order processing — for example, if it started deciding *which* schools or students get priority access to limited-stock books, or flagging schools as "risky" for credit/payment terms — it could start to brush against Annex III education or essential-services categories. As currently scoped (parse order → match catalogue → reply/log), it stays commercial and minimal-risk. Worth re-checking this classification if the feature set changes before licensing it to other book sellers.

## Note on scaling to other EU book sellers
Risk tier is assessed per *system*, not per deployer, so licensing the same workflow to other book sellers does not change the tier — but it does change **who carries which obligations** (see role map) and increases the practical importance of getting the Article 50 disclosure and data-handling basics right, since they'll need to be consistent across every business that deploys it, not just one shop you personally oversee.
