# Risk Tier Classification

## CFU 1 — Recognize

| Question | Your answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | No. No subliminal manipulation, social scoring, biometric ID/categorisation, emotion recognition, or predictive policing — it's a catalogue-matching and reply tool for commercial ordering. |
| Does this system operate in any of the eight Annex III areas? | No. Closest candidate is "education and vocational training" (Annex III §3), but that covers admission/access, evaluating learning outcomes, or test monitoring — this system touches none of that; it's B2B order processing with school admin staff, not students. See ambiguity note below. |
| If Annex III: does it "significantly influence" decisions in that area, or is it narrow/preparatory? | N/A — not an Annex III system. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | Yes. It interacts directly with natural persons via Telegram in natural language, using AI-generated replies not obviously distinguishable from a human reply — see justification below for the specific clause. |
| **First-pass risk tier** | **Minimal risk**, with a **limited transparency obligation under Article 50(1)** because it is a conversational AI system interacting with natural persons. |
| **One-sentence justification** | The system sits outside Article 5's prohibited practices and outside every Annex III high-risk area, so it defaults to minimal risk, but because it interacts directly with natural persons via a chat interface and they are not otherwise informed they're dealing with an AI system, **Article 50(1)** — the duty for providers to ensure such systems are designed so natural persons are informed they are interacting with an AI system, unless obvious from context — applies regardless of the minimal-risk tier. |

## Ambiguity flag
The education comparison is the main judgment call here: Annex III §3 covers systems that determine access/admission to institutions, evaluate learning outcomes, assess appropriate education level, or monitor/detect prohibited test behaviour. This system does none of those — it confirms and logs commercial orders, nothing about a student's standing or access to education. If the system's role ever expanded beyond order processing — for example, deciding *which* schools or students get priority access to limited-stock books, or flagging schools as "risky" for credit/payment terms — it could start to brush against Annex III education or essential-services categories, and this classification would need revisiting. As currently scoped, it stays commercial and minimal-risk.

## Note on scaling to other EU book sellers
Risk tier is assessed per *system*, not per deployer, so licensing the same workflow to other book sellers does not change the tier — but it does change **who carries which obligations** (see role map) and increases the practical importance of getting the Article 50 disclosure and data-handling basics right, since they'll need to be consistent across every business that deploys it, not just one shop you personally oversee.
