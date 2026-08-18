# Phase 4 — Obligations

The system is limited risk, so the eleven high-risk provider obligations do not apply and the
Phase 4 high-risk table is formally out of scope. What follows is (A) the obligations that *do*
apply, assessed honestly, and (B) a voluntary readiness table, clearly marked as voluntary.

---

## A. Obligations that actually apply

### Article 50(1) — disclosure that the user is interacting with AI

**Required:** the system must be designed so that a natural person interacting with it is informed
they are interacting with an AI system, unless this is obvious to a reasonably well-informed,
observant and circumspect person in the circumstances.

**Current design:** **Partial.** The panel opens with a "How I work" note describing the assistant's
behaviour ("I speak only when you ask"), and the panel is titled "Aero assistant." Neither states
that it is an AI system. More importantly, the disclosure is transient — once the assistant panel
is collapsed to a single "ask" affordance, nothing on screen indicates an AI system is present at
all, and the exported report reaches a second person who never saw the panel.

**Honest counter-argument:** one could argue AI status is obvious for a product sold as an AI
assistant. I do not want to lean on that. "Obvious" is doing a lot of work, the exemption is
judged from the user's position rather than ours, and the cost of a persistent label is close to
zero. Relying on obviousness to avoid a one-line change is the kind of reasoning that looks bad in
hindsight.

### Article 50(2) — marking of synthetic content

**Required:** providers of AI systems generating synthetic text (among other media) must ensure
outputs are marked in a machine-readable format and detectable as artificially generated or
manipulated, with exemptions including where the AI performs an assistive function for standard
editing or does not substantially alter the input data.

**Current design:** **Gap, with legal uncertainty.** The handoff report explicitly incorporates
assistant-generated prose — our own comparison screen labels a block as "assistant text, not a
figure" — and that document leaves the tool. Nothing in it is machine-readable as AI-generated.

I am not certain this obligation legally bites here. Article 50(2) is aimed principally at
synthetic media and deceptive content, and an engineering explanation may fall within the
assistive-function exemption. But the report is exported, forwarded, and may end up in a programme
archive read years later by someone with no context. Marking it is cheap and correct regardless of
whether it is strictly required, so I am treating it as a gap rather than arguing it away.

### Article 4 — AI literacy

**Required:** providers and deployers must take measures to ensure a sufficient level of AI
literacy among their staff and others operating the system on their behalf, considering their
technical knowledge, training, and the context of use.

**Current design:** **Gap.** No onboarding, training material, or competence expectation exists.
This one is easy to miss precisely because it is not tied to a risk tier — it applies to us at
minimal and limited risk just as much as it would at high risk.

### Article 5 — prohibited practices

**Status: Met by construction.** Screened against all categories; none engage. Recorded rather
than skipped, because the lab is right that "nothing applies" is a conclusion needing evidence.

---

## B. Voluntary high-risk readiness table

**Not required.** Completed for two reasons: OEM procurement and supplier-qualification
questionnaires increasingly ask these questions regardless of legal tier, and if the product
positioning drifts (see Gap 7) we want to know how far we would be from the line.

| Obligation | Article | Voluntary status | Note |
|---|---|---|---|
| Risk management system | 9 | Gap | No documented, iterative risk process across the lifecycle. Risk thinking exists in design conversations but is not recorded. |
| Data and data governance | 10 | Partial | Rule-set provenance is versioned and displayed; the training/reference data behind aero estimates has no documented coverage statement, and the interface already admits "benchmark library not connected." |
| Technical documentation | 11 | Gap | No Annex IV-shaped documentation pack exists. |
| Record-keeping and logging | 12 | Partial | Run identifiers exist and are surfaced in the UI, which is more than most prototypes have. But run IDs are reused across geometry versions in the current wireframes, so the log does not reliably reconstruct which model state produced which number. |
| Transparency and user information | 13 | Partial | Unusually strong on the user-facing side: what-was-run disclosure, confidence figures, an explicit "where this is weakest" statement, and honest declining with a feature ticket when no tool matches. Weak on formal instructions for use. |
| Human oversight | 14 | **Met in substance** | The strongest area. The system cannot write geometry; suggestions are previews until explicitly saved; report contents are hand-selected. Oversight is architectural, not procedural. |
| Accuracy, robustness, cybersecurity | 15 | Gap | No declared accuracy metrics, no adversarial or robustness testing, no documented failure behaviour. The interface has no failure states at all. |
| Conformity assessment | 43 | N/A | Not high-risk. |
| EU declaration of conformity + CE marking | 47–48 | N/A | Not high-risk. |
| Registration | 49 | N/A | Not high-risk. |
| Post-market monitoring | 72 | Gap | No plan for monitoring real-world performance, and no route for a customer to report that the tool gave bad regulatory advice. |

The pattern is worth naming: we are strong exactly where the product's differentiation lies
(oversight, transparency, traceability) and weak in the paperwork layer. That is a good problem to
have — the hard architectural work is done, the missing pieces are documentation.
