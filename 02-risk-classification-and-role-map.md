# Phases 2–3: Risk tier classification and role map - Menohelp

Assessment date: 26 Nov 2026. Timelines are as amended by the Digital Omnibus on AI (published in the OJ on 24 Jul 2026). Items marked ⚖️ need legal or regulatory confirmation.

## CFU 1 - Recognize (first-pass paragraph)

Menohelp is **not prohibited**. It does no manipulation and does not exploit vulnerability to distort behaviour (Art 5(1)(a)–(b)). It does no social scoring, uses no biometrics and does no emotion recognition at work. It is **not in any Annex III area**: it does not decide access to essential private or public services, healthcare benefits or emergency triage (§5), and it has nothing to do with employment, education or credit. It **generates text** that is shown to and emailed to consumers. So the first-pass tier is **limited risk / transparency**:
- Art 50(2): as provider, I must mark the AI-generated report in a machine-readable way.
- The visible "this was written by AI" disclosure is borderline under Art 50(1), but I add it anyway.

The **ambiguity** that matters is not inside the AI Act at all. If Menohelp counts as **medical-device software** under the MDR (Reg. 2017/745) or the IVDR (Reg. 2017/746), the picture changes. Rule 11 software that gives information used for diagnostic decisions is class IIa or higher, which needs a notified body. That would make Menohelp **high-risk through Art 6(1) + Annex I, Section A**, with obligations from **2 Aug 2028**. The answer depends on the *intended purpose* that I, as manufacturer, communicate. Today that communication is mixed:
- **Pulls it out of medical-device scope:** "not a diagnosis".
- **Pulls it in:** naming premature ovarian insufficiency, flagging blood values against reference ranges, and the tagline "understand any symptoms you might have".

## Phase 2 - Classification table

| Question | Your answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | **No.** There is no subliminal or manipulative technique (5(1)(a)), and no exploitation of age or health vulnerability to distort behaviour (5(1)(b)). Advice is framed as "can help", and the guardrail blocks outcome promises. There is no social scoring, biometric categorisation or emotion recognition (5(1)(c), (f), (g)). |
| Does this system operate in any of the eight Annex III areas? | **No.** The closest is §5 (access to essential services): §5(a) is public assistance and healthcare *benefits* eligibility, and §5(d) is emergency triage. Menohelp decides neither. It gives information to an individual. |
| If Annex III: does it "significantly influence" decisions in that area, or is it narrow/preparatory? | Not applicable. **But the Annex I route is open ⚖️:** if it qualifies as MDR/IVDR software of class IIa or higher (needing a notified body), it is high-risk under Art 6(1) whatever its influence. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | **Yes.** **Art 50(2):** it generates synthetic text (the report), so the provider must mark it machine-readably. No exemption applies: the AI writes substantial new text rather than doing "standard editing". This applies from launch, because any system placed on the market after 2 Aug 2026 must comply at once. **Art 50(1):** borderline. The flow is form → report, not a chat, but the user does interact with the system directly, so I disclose anyway. **Art 50(3)/(4):** not applicable (no emotion recognition, no deepfakes, no text published to inform the public). |
| First-pass risk tier | **Limited risk (transparency)**, with an open **high-risk (Annex I / MDR)** question for regulatory review. |
| One-sentence justification citing the specific article or Annex entry | Menohelp is a consumer text-generation system outside Art 5 and Annex III, so Art 50(2) marking (and, by good practice, Art 50(1)-style disclosure) applies; it becomes high-risk under Art 6(1) + Annex I §A only if its intended purpose makes it a class IIa+ medical device. |

**What would resolve the ambiguity:**
1. A written intended-purpose statement, checked against MDCG 2019-11 (qualification and classification of medical-device software).
2. A review of all user-facing text, because MDR reads intended purpose from labelling, instructions *and* promotional material.
3. A decision on whether the under-40 "early menopause / POI" wording stays.

**Escalate to:** a medical-device regulatory specialist ⚖️.

**Cross-check:** I filled in the table first, as the lab asks. The Commission's [EU AI Act Compliance Checker](https://ai-act-service-desk.ec.europa.eu/en/eu-ai-act-compliance-checker) is the next step. Expected path: "AI system → provider → not prohibited → not Annex III → Annex I product? *unsure* → generates synthetic text → Art 50". The "unsure" answer is exactly the MDR question above.

## Phase 3 - Role map

| Role | Entity | Key AI Act obligations |
|---|---|---|
| **Provider** | **Me (Ben Mayer)**: I developed Menohelp and would place it on the market under the Menohelp name. ⚖️ If Wechselweise launches it **under its own brand**, Wechselweise becomes the provider, and I am a development contractor. | **Art 50(2):** machine-readable marking of generated reports, built in by design. **Art 50(5):** disclosure that is clear and given at the latest at first interaction. **Art 4:** AI literacy. *If high-risk via MDR (from 2 Aug 2028):* Arts 9–15, QMS (17), conformity assessment through the MDR notified body (43(3)), declaration of conformity and CE marking (47–48), post-market monitoring (72) and serious-incident reporting (73). |
| **Deployer** | **Wechselweise Coaching GmbH** (fictional client), when its coaches use Menohelp professionally with clients (Sprint 2). **Individual women using it for themselves are *not* deployers:** Art 3(4) excludes personal, non-professional use. They are the affected persons. | **Art 4:** AI literacy for coaches, in force since 2 Feb 2025. Use within the stated intended purpose: no diagnostic use in consultations. Art 50(3)/(4) don't apply. *If high-risk:* Art 26 duties, namely use per the instructions, human oversight by trained staff, monitoring, keeping logs ≥ 6 months, and informing clients. |
| **Vendor - GPAI model** | **OpenAI** (`gpt-5.4-mini` for text, an embeddings model for search). | **GPAI model provider (Art 53):** technical documentation and information for downstream providers, a copyright policy and a training-data summary. Art 55 applies only if the model is designated systemic-risk. OpenAI does **not** take on my Art 50 duties: I build the system, so I mark its output. |
| **Vendor - non-AI** | **Supabase** (coaching-material vector store), **Resend** (email), hosting (Render / Streamlit Cloud, planned). | **No AI Act role.** They are **GDPR processors**: they need Art 28 data-processing agreements and a Chapter V transfer basis, because they are US providers. |
| **Content licensor** | Coaching-material author (licensed for the demo only). | No AI Act role. This is a contract and copyright issue: a licence is needed before paid use. |

**Component view.** I built the custom pipeline: stats, guardrails and orchestration, so I am the provider of the *AI system*. OpenAI supplies only the *model* inside it. This matches the provider/GPAI-model split from the classification lab. Integrating a third-party model does not move the system-level duties to the model vendor.
