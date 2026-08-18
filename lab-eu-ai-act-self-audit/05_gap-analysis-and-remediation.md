# Phase 5 — Gap analysis and remediation plan

Seven gaps. The first three are AI Act obligations. Gaps 4–6 are parallel legal exposure that a
tier-only reading would miss. Gap 7 is the one that could change the classification itself.

---

## Gap 1 — No persistent disclosure that the user is interacting with an AI system

- **Obligation:** Article 50(1).
- **Current state:** The assistant panel is titled "Aero assistant" and opens with a "How I work"
  note about its behaviour. Neither says "AI system." When the panel is collapsed to a single
  "ask" control, no AI indication remains anywhere on screen. The engineer who receives the
  exported report never sees the panel at all.
- **Required state:** Users must be informed they are interacting with an AI system, in a way that
  survives the actual interaction pattern rather than appearing once at session start.
- **Remediation:** Add a persistent AI label in the assistant panel header that remains visible in
  the collapsed state; restate it in one line at the top of the exported report; revise the "How I
  work" copy to open with what the system *is* before describing what it *does*. Roughly a
  half-day of design and front-end work.
- **Escalation needed?** No.

---

## Gap 2 — AI-generated text leaves the system unmarked

- **Obligation:** Article 50(2), with the legal uncertainty recorded below.
- **Current state:** The handoff report incorporates assistant-written prose — our own comparison
  screen labels a block "assistant text, not a figure" — and is sent to an engineering colleague
  with geometry and a run log attached. Nothing carries machine-readable provenance.
- **Required state:** Where the obligation applies, generated output must be marked in a
  machine-readable format and detectable as artificially generated.
- **Remediation:** Embed provenance metadata in the export (which blocks are generated, which are
  tool-computed, model and rule-set versions, run IDs, timestamp), plus a human-visible line at the
  top of the report. Apply the same distinction visibly in the report body, since we already draw
  it internally.
- **Escalation needed?** **Yes — lawyer.** I am not certain Article 50(2) legally covers an
  internal engineering document rather than published synthetic media, and the assistive-function
  exemption may apply. The remediation is cheap enough to do regardless, but the *reason* we do it
  should be settled rather than assumed.

---

## Gap 3 — No AI literacy measures

- **Obligation:** Article 4.
- **Current state:** Nothing. No onboarding, no training material, no stated competence
  expectation for either our staff or the deployer's designers.
- **Required state:** Measures ensuring a sufficient level of AI literacy among staff and others
  operating the system, proportionate to their technical background and the use context.
- **Remediation:** A short onboarding module covering what the system computes versus generates,
  what the confidence figures do and do not mean, and the explicit statement that the tool is not
  a compliance verdict. Attach a competence acknowledgement to deployer contracts. This doubles as
  product onboarding, so it is not pure compliance overhead.
- **Escalation needed?** No.

---

## Gap 4 — Confidentiality claim contradicts the technical architecture

- **Obligation:** Not the AI Act. Contractual confidentiality, trade-secret protection, GDPR
  Chapter V if personal data crosses borders, and honest-marketing exposure.
- **Current state:** The session panel states "Runs on: OEM network." The built system calls a
  commercial LLM API over the public internet. Unreleased vehicle geometry and the designer's
  typed questions are the most confidential material a car company holds; a designer reading that
  label will reasonably conclude nothing leaves their network.
- **Required state:** The deployment claim shown in the interface must match where data actually
  goes, at the granularity of each component.
- **Remediation:** Split the claim per component — where geometry is processed, where measurement
  runs, where language inference runs, what is retained and for how long. Where the LLM call is
  external, say so in the interface, not only in a contract. This also forces the cloud versus
  on-premise decision that is currently unresolved between interview evidence and team notes.
- **Escalation needed?** **Yes — lawyer and, if OEM staff data is involved, a data protection
  officer.**

---

## Gap 5 — Stale answers can be sent as current

- **Obligation:** Not an AI Act duty at limited risk. It is the single largest real-world safety
  and liability exposure in the product, and it is what Article 14 would demand if the tier moved.
- **Current state:** The handoff screen lets a rule-limit answer computed at version 5 be included
  in a report about version 9, after an intervening hand edit the system explicitly recorded but
  never analysed. The report is labelled with the current version. Run identifiers are reused
  across versions, so the log cannot disambiguate.
- **Required state:** A recipient must be able to tell which model state each statement describes,
  and a regulatory statement must not be presentable as current when the geometry has moved on.
- **Remediation:** Give every answer an immutable version anchor; mark any selected item whose
  anchor is older than the head version; block sending stale *rule-flag* items without an explicit,
  logged override. A staleness marker is a label, not the assistant volunteering analysis, so this
  does not contaminate the silent-until-asked condition in the study design.
- **Escalation needed?** No for the fix; yes for the liability question of what our report is
  warranted to mean.

---

## Gap 6 — No GDPR basis mapped for usage and thread data

- **Obligation:** GDPR, not the AI Act.
- **Current state:** Threads store the designer's typed questions, their name, and the name of the
  colleague they send reports to. No retention period, no lawful-basis analysis, no processor
  terms with the model vendor recorded, no transfer assessment.
- **Required state:** Controller/processor roles established between Onyx and the OEM, lawful
  basis identified, retention defined, processor agreements in place, transfers assessed.
- **Remediation:** Data map, retention schedule, processor agreements, and standard data
  processing terms in the OEM contract template.
- **Escalation needed?** **Yes — data protection officer or privacy counsel.**

---

## Gap 7 — Classification is one marketing sentence away from changing

- **Obligation:** The classification itself, plus automotive sectoral law.
- **Current state:** The product is advisory in design. The pitch materials describe regulation
  scoring — one screen shows "Regulation 95% — Compliant." That phrasing reads as a compliance
  verdict, not an early indicator. There is no internal rule governing what the product may claim.
- **Required state:** A written, stable statement of intended purpose, consistent across product,
  sales, and marketing, because intended purpose is what the classification is assessed against.
- **Remediation:** Adopt a positioning rule: RegGuard-Mini indicates *possible* rule conflicts
  early and never certifies compliance. Enforce it in UI copy — replace "Compliant" with wording
  that cannot be read as a verdict — in sales decks, and in contract language. Re-run this
  classification whenever the intended purpose changes.
- **Escalation needed?** **Yes — lawyer with automotive type-approval experience.** This is the
  highest-value escalation in the audit: it is the cheapest to fix now and the most expensive to
  discover later.

---

## Priority order

1. Gap 7 — costs nothing today, changes everything if left.
2. Gap 4 — an active, visible inaccuracy in the product.
3. Gaps 1 and 2 — the binding Article 50 duties; both small.
4. Gap 5 — the real-world risk, and it is already on the design backlog.
5. Gaps 3 and 6 — necessary, schedulable, not urgent.
