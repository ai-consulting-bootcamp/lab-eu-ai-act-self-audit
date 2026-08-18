# Phase 1 — System brief

## What the system does

RegGuard-Mini is an assistant for car exterior designers. A designer uploads a 3D model of a
car body. The system measures the shape, compares those measurements against a set of written
rules — some of them legal requirements for road vehicles, some of them internal design
guidelines — and tells the designer which parts of the shape look like a problem. The designer
can then ask follow-up questions in plain language, such as "which rule applies to this
headlamp?" or "how would I fix this area?"

The point is timing. Today a designer usually finds out about a rule or aerodynamic problem
weeks later, after an engineer has run a full simulation. This system gives an early, rough
answer in seconds so the designer can change the shape before that expensive loop starts.

## What goes in

- A 3D geometry file of the vehicle exterior (STL or OBJ).
- A rule set: regulatory text and internal design guidelines, stored as documents the system
  searches through.
- The designer's typed questions.
- Session settings the designer picks: which programme they are working on, which earlier model
  is the baseline, which rule set version applies.

None of this is personal data about the vehicle's future users. It does contain two kinds of
sensitive material: highly confidential unreleased vehicle geometry, and personal data about the
people *using* the tool — their names, their typed questions, and, in the handoff step, the name
and address of the colleague they send a report to.

## What comes out

- A list of flagged areas on the model, each with a measurement and a confidence figure.
- A short written explanation of what rule was applied and why the area was flagged.
- Suggested changes to the shape, with an estimated effect and a confidence figure.
- A report the designer can send to an engineering colleague.

Everything is advisory. The system never changes the geometry by itself and never approves
anything.

## Who is affected

The designer using it, and the engineer who receives the report. Both are professionals doing
their job. No consumer, applicant, employee-under-assessment, or member of the public is
evaluated by this system. Indirectly, the shape of a future production car could be influenced
by its suggestions — which is why the tool must never be treated as proof that a design is
legally compliant.

## Human review

Yes, and it is the core of the design. The system proposes; the designer decides. A suggested
change is only previewed until the designer explicitly saves it as a new version. The report
sent to engineering is assembled by hand: the designer ticks which answers to include. There is
no path in the interface where the system writes geometry or sends anything on its own.

## Who built it and who would use it

I built it as an individual course project, using a commercial large language model through an
API for the language and reasoning layer, with the measurements done by separate code rather
than by the language model. In production it would be built and sold by Onyx Dynamics and used
inside a car manufacturer's design studio by exterior designers, with aerodynamics and homologation
engineers as the receiving audience.
