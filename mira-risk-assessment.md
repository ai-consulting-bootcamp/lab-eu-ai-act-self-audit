# MIRA risk assessment

## Final classification

**Final classification: Limited risk / transparency**

## Why this is not prohibited or high-risk

The local MIRA source does not show an AI system that falls under Article 5 prohibited practices. It is not a workplace emotion-recognition system, it does not infer sensitive employee states, and it does not target protected biometric classification. It also does not appear to be a high-risk AI system under Annex III because it does not materially influence access to employment, education, credit, essential public services, law enforcement, or similar consequential decisions.

The project is a creative brand-world and moodboard generation system. The documentation and code show a user-driven creative process that generates concept directions and editorial images. The outputs are creative suggestions and visual generation, not decisions that determine access to significant opportunities or rights. This is a materially different risk profile than recruitment scoring, credit decisions, biometric categorisation, or public-affect systems.

## Article 50 and transparency

The better legal fit is therefore limited risk / transparency rather than minimal risk. The reason is that the system interacts directly with users and generates AI-created visual output. If deployed beyond private staging, MIRA should make the AI nature of the system clear to the end user and provide a clear explanation that generated images or directions are AI-assisted outputs. This is especially relevant when the generated visuals may be mistaken for human-created work or when users are receiving AI-generated design recommendations as if they were authored by a human team.

## GDPR is separate from AI Act classification

The AI Act classification does not depend on GDPR alone. The project may also involve personal data or sensitive creative context, but that is a separate compliance question from the AI Act risk tier. In other words, the system could still be a limited-risk AI system while also needing separate privacy controls for any personal data processed, especially if personal inspiration, owner profiles, private images, or brand context are used. GDPR, consent, retention, and minimisation remain separate issues and should be tracked independently.

## Risk-tier check table

| Question | Answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | No, not as implemented in the current source. |
| Does this system operate in any Annex III area? | No. It is a creative tool, not an employment, credit, education, public-benefit, or law-enforcement decision system. |
| If Annex III: does it significantly influence decisions? | Not applicable. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | Yes, likely. It is user-facing and generates AI-produced visual concepts. |
| First-pass risk tier | Limited risk / transparency |
| One-sentence justification | MIRA is a user-facing generative creative system that does not determine protected rights, but it does generate AI-assisted outputs and therefore requires transparency and clear end-user disclosure. |

## Relevant evidence used

- `MiraV4.tsx` shows an authenticated, user-facing brand-world journey and a final moodboard flow.
- `docs/MIRA_V4_CURRENT_STATE.md` describes V4 as a five-image editorial moodboard system and confirms the system is not a public product.
- `MIRA_V3_STAGING_STATUS.md` confirms the system is private, authenticated, feature-gated, and not public.
- The V3/V4 docs show human review, owner-scoped journeys, and bounded generation with explicit selection/refinement steps.

## Decision

This should not be treated as a high-risk AI system and should not trigger the high-risk checklist. The main compliance issue is user transparency and clear disclosure of AI-generated outputs, alongside separate privacy review if personal data is in scope.
