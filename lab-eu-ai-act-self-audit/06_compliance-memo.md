# Compliance memo

**To:** Head of Product, Onyx Dynamics
**From:** Kimia Sharifi Rad, Product Design
**Subject:** EU AI Act — first-pass assessment of RegGuard-Mini
**Status:** Internal. Not a legal opinion.

---

## 1. Classification

RegGuard-Mini falls in the **limited-risk (transparency) tier** of the EU AI Act. It is not a
prohibited practice, and it does not operate in any of the eight high-risk areas listed in Annex III
— industrial design and engineering tooling simply is not on that list. It lands in the
transparency tier for one reason: it talks directly to a person and produces written text that gets
sent on to a second person.

The good news is that this is the light end of the regulation. The important news is in section 3.

## 2. Who is responsible for what

**We are the provider** — we build the system and would place it on the market. **The customer's
design studio is the deployer.** **The language model vendor is a separate provider** of a
general-purpose model, with its own obligations to us, which we should be collecting and are not.

Our architectural decision to let the language model orchestrate while our own tools do all the
computation is not just good engineering. It cleanly separates what we are answerable for from
what the model vendor is answerable for, and it is the most persuasive answer we have to the
procurement question every OEM will ask: does the AI invent the numbers?

## 3. Key findings

**Finding 1 — our biggest regulatory risk is a marketing decision, not a technical one.** The
classification above holds because the product advises. One screen in our own materials shows
"Regulation 95% — Compliant." If we sell the tool as *proving* a design is legal rather than
*warning* that something may be wrong, we move into far heavier territory and into automotive
type-approval law. This costs nothing to fix today and a great deal to discover later.

**Finding 2 — a claim in our interface does not match our architecture.** The session panel tells
the designer the system runs on the OEM network. Part of it does not; the language layer calls an
external service. Customers are trusting us with unreleased vehicle geometry, which is among the
most confidential material they own. This must be corrected before any pilot, and it forces the
cloud-versus-on-premise decision we have been deferring.

**Finding 3 — we can send an out-of-date regulatory answer as if it were current.** A rule check
run on an earlier version of the model can be included in a report labelled with the latest
version, after an edit the system recorded but never re-checked. This is not an AI Act breach at
our tier. It is the thing most likely to cause real damage and the thing an engineer would never
forgive.

Two smaller items are genuinely required of us and both are quick: the interface must state that
the user is interacting with an AI system in a way that persists rather than appearing once, and
we need basic AI-literacy onboarding, which applies to us regardless of risk tier.

## 4. Recommended next steps

1. **This week.** Agree and write down what the product may claim. Remove any wording that reads
   as a compliance verdict.
2. **Before any customer pilot.** Correct the deployment claim in the interface and decide the
   data-residency question properly.
3. **Next design cycle.** Persistent AI disclosure; provenance marking on exported reports;
   version-anchored answers with staleness blocking on rule flags.
4. **Alongside.** Onboarding material; GDPR data map and processor terms.
5. **External review needed** on three points: the intended-purpose statement and its interaction
   with automotive type-approval law; whether the synthetic-content marking duty legally applies to
   our exported reports; and the data-protection arrangements. The first should go to a lawyer with
   automotive experience — not a generalist.

## 5. What this memo is not

Not a legal opinion, a conformity assessment, or a certification. It is a first-pass
self-assessment by the system's own designer, which means it carries the blind spots of someone
who made the original design decisions. Where I was uncertain about a legal interpretation, the
supporting documents say so rather than resolving it in our favour. Several conclusions need a
qualified lawyer to confirm, and the application dates for parts of the Act should be re-checked
against the current text before anyone acts on this.
