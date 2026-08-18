# Reinforce

## What I glossed over in my own brief

Writing the brief, I described the system as "an assistant that checks geometry against rules."
That sentence hid three things, and all three change the compliance picture.

**The third-party model that makes inferences.** My first draft treated the language model as
plumbing. It is not. It decides which rule is relevant to a question, decides how to phrase a
regulatory statement, and decides what to say when it is uncertain. Those are inferences with
consequences, and they come from a system I do not control and cannot fully inspect. Naming it
properly added an entire row to the role map and revealed that I have never collected the
downstream-provider information the model vendor owes me.

**The personal data I told myself was not there.** I initially wrote that the system handles no
personal data — the subject is car geometry, after all. Then I looked at the handoff screen, which
has a recipient's name on it, and at the threads, which store a named designer's typed questions
over months. Not sensitive-category data, but personal data plainly, with no retention policy and
no processor terms. The framing "our data is geometry, not people" was comfortable and wrong.

**The report leaving the system.** I audited the tool as an interface. But the artefact that
actually travels is the report, and it reaches someone who never saw the interface, never saw the
confidence figures in context, and cannot tell which sentences a machine wrote. Almost every
transparency obligation bites hardest at that boundary, and it was the last place I looked.

The pattern behind all three: I audited the parts I designed, and skipped the parts I integrated
or exported. That is exactly the blind spot the lab warned about.

## The design decision I would change

**Displaying a compliance percentage.**

Showing "Regulation 95% — Compliant" felt obviously right at the time. It is legible, it fits
alongside the aero score, and it makes the value of the tool visible in one glance. Users respond
to it.

It is also the most expensive line in the product. A percentage next to the word "compliant" is a
verdict, and a verdict is a claim about legal conformity — which is not something an early-stage
advisory tool can responsibly make, and which pulls the product toward a regulatory framing we do
not want and cannot yet support. Every other transparency choice we made — certainty badges,
what-was-run disclosure, honest declining — was designed to *avoid* implying more authority than we
have. This one quietly does the opposite, and it was in the pitch deck before anyone noticed the
tension.

What I would do instead: show what was checked and what was flagged, never a compliance score.
"3 of 47 rules flagged for review, rule set v2026-06" carries the same information density without
the claim. The demo is marginally less impressive. The product is defensible.

The general lesson is one I did not expect from a compliance lab: the highest-risk decisions in an
AI product are often not in the model or the architecture. They are in the copy.
