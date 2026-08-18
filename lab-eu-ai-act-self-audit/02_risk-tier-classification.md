# Phase 2 — Risk tier classification

## Screening table

| Question | Answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | No. It does not use subliminal or manipulative techniques, does not exploit vulnerabilities, does not perform social scoring, does not do biometric identification or categorisation, does not infer emotions in a workplace or educational setting, and is not used for predictive policing. The system's subject matter is vehicle geometry, not people. |
| Does this system operate in any of the eight Annex III areas? | No. Screened against all eight: biometrics; critical infrastructure; education and vocational training; employment and worker management; access to essential private and public services; law enforcement; migration, asylum and border control; administration of justice and democratic processes. Industrial product design and engineering is not among them. The nearest candidate, critical infrastructure (Annex III(2)), covers safety components in the management and operation of road traffic and utility supply — not tools used to design a vehicle. |
| If Annex III: does it "significantly influence" decisions, or is it narrow/preparatory? | Not applicable, as Annex III does not engage. Recorded for completeness: were it to engage, the Article 6(3) filter would be arguable, since the system is preparatory to a human design decision and does not replace a human assessment. Claiming that filter would still require documented assessment and registration under Article 49. |
| Is it a safety component of a product covered by Annex I (Article 6(1))? | Not as currently built. Motor vehicles are covered by Annex I Section B via Regulation (EU) 2018/858 on vehicle type-approval, but that route captures AI that is a safety component *of the vehicle placed on the market*, or is itself such a product. RegGuard-Mini is a design-office tool; no part of it ships inside the car. **This is the classification's weakest joint — see the ambiguity note below.** |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | **Yes.** It is a conversational assistant that interacts directly with a natural person (the designer), and it generates written explanatory text that is exported and sent to a second person (the engineer). |
| First-pass risk tier | **Limited risk — transparency obligations under Article 50.** Plus the tier-independent obligations in Article 4 (AI literacy) and Article 5 (prohibitions, screened and cleared). |
| One-sentence justification | RegGuard-Mini is neither a prohibited practice under Article 5 nor within any Annex III area or Annex I safety-component route, but because it is designed to interact directly with natural persons and to produce generated text that leaves the tool inside an engineering handoff document, it falls into the Article 50 transparency tier. |

## Ambiguity I am flagging for legal review

I am not fully certain the limited-risk conclusion is stable, and I would rather record the
instability than present a clean answer. Two things could move it:

**1. Product positioning drift.** Today the system is advisory: it says "this area looks like it
may breach rule X." If Onyx Dynamics ever markets it as *assurance* — a check that a design is
compliant, relied on in place of homologation verification — the analysis changes. The tool would
then be functionally embedded in a regulated type-approval pathway. My reading is that this would
still not automatically make it an Annex I Section B safety component, because the tool remains
outside the vehicle, but the sectoral automotive framework and product-liability exposure become
live, and I am not confident enough in that reading to rely on it. This is the single most
important escalation in the whole audit, because it is a *marketing* decision that silently
changes a *regulatory* status.

**2. Customer modification.** If an OEM deployer substantially modifies the system, changes its
intended purpose, or puts its own name on it, Article 25 can make that OEM a provider in its own
right — and the tier is then assessed against *their* intended purpose, not ours.

What would resolve the ambiguity: a written, contractually binding statement of intended purpose,
reviewed by a lawyer with automotive type-approval experience, plus a decision on whether the
product ever claims compliance assurance.

## Note on timing

I am not certain of the current application status of every provision. The Act entered into force
on 1 August 2024; the Article 5 prohibitions and the Article 4 AI-literacy duty applied from
2 February 2025; general-purpose model obligations from 2 August 2025; and the bulk of the
remaining regime, including Article 50, from 2 August 2026. There were subsequent EU proposals to
adjust some of these dates, and I have not verified where those landed. Before this memo is acted
on, the applicable dates should be confirmed against the current consolidated text.

## Cross-check

Formed independently first, then cross-checked against the European Commission's EU AI Act
Compliance Checker (`https://ai-act-service-desk.ec.europa.eu/en/eu-ai-act-compliance-checker`).

> *[Record here what the checker returned and whether it agreed. If it disagreed, the disagreement
> is more interesting than the agreement — write down which question caused the divergence.]*
