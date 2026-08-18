# Stretch — Draft transparency notice

Closes **Gap 1** (Article 50(1) disclosure) and part of **Gap 2** (provenance on exports). Chosen
because it is the binding obligation, and because the exported report reaches a person who never
saw the interface.

Draft only. Not reviewed by counsel.

---

## A. In-product — assistant panel header, always visible

> **Aero assistant — AI system**
> Answers only when asked. Never changes your geometry.

Persists in the collapsed state as a labelled icon with the same tooltip. The point is that the
disclosure survives the interaction pattern instead of appearing once at session start.

## B. In-product — first-run panel, replacing current "How I work" copy

> **What this is.** An AI system that measures your model and compares it against the rule set
> shown in this session. Measurements are computed by our own tools. Explanations and suggestions
> are written by an AI language model.
>
> **What it is not.** Not a compliance check. A flag here means something is worth looking at
> early — it is not a legal assessment, and a clean result is not approval. Homologation sign-off
> is unchanged.
>
> **What it will not do.** It will not edit your geometry, and it will not send anything to anyone
> without you choosing what goes in.

## C. On every exported report — header block

> Prepared with AI assistance · Onyx RegGuard [version]
> Rule set [id] · Solver [id] · Run log attached
> Values in tables are computed. Text in commentary blocks is AI-generated.
> Advisory only — not a compliance assessment.

Plus embedded machine-readable metadata: per-block generated/computed flag, model and rule-set
versions, run identifiers, geometry version anchor per statement, timestamp.

## D. Where staleness appears

Any included answer anchored to an earlier geometry version than the report's head version is
marked in place:

> Computed on v5. Geometry has changed since (current: v9). Not re-checked.

Rule-flag items cannot be sent stale without an explicit override, and the override is recorded in
the run log.

---

## Notes for review

- The wording deliberately avoids "certified," "validated," "compliant," and "approved."
- Section C's generated-versus-computed distinction is one we already draw internally; this
  surfaces it to the recipient, which is where it matters.
- Section D is not required by Article 50. It is included because the transparency obligation is
  pointless if the disclosed content is out of date.
- Open question for counsel: whether the machine-readable marking in section C is legally required
  here or is voluntary good practice. We should do it either way, but we should know which it is.
