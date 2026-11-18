# Phase 5 — Gap analysis and remediation

The system is minimal risk, so there is no high-risk obligation to fail. The gaps below are of three kinds: documentation that does not match the system, parallel legal requirements the AI Act does not cover, and planned changes that would move the system into a different tier.

## Gap 1 — The README states something untrue about the system

- **Obligation:** not an AI Act obligation, but the foundation of every compliance claim that follows. Under the GDPR it is an accountability failure in its own right.
- **Current state:** the README reads "Public data only. Reviews and personal data are not collected." The code collects personal data in four places: contact details written to `lead.json`, the names of managing directors from register portals, named contacts in job advertisements, and names of founders and executives from About pages and news coverage.
- **Required state:** project documentation that describes what the system actually does, so that a reviewer relying on it is not misled.
- **Remediation:** rewrite that section to state which personal data arrives, from where, and what happens to it. Cost: twenty minutes.
- **Escalation needed?** No.

## Gap 2 — No written statement of intended purpose

- **Obligation:** Art. 6 classification depends on intended purpose, and Art. 4 expects those operating the system to understand it.
- **Current state:** the intended purpose exists in my head. The repository describes what the system does technically but never states who may use it for what — which is the fact the classification turns on.
- **Required state:** one paragraph fixing the intended purpose and, just as importantly, the uses that are out of scope.
- **Remediation:** add an "Intended purpose and boundaries" section to the README, stating that the system assesses company processes, is operated by a consultant, produces a hypothesis rather than a decision, and must not be used to evaluate, rank or select natural persons.
- **Escalation needed?** No. This is the single highest-value half hour in the whole list, because it is what makes the minimal-risk classification defensible later.

## Gap 3 — Three processors handle personal data with no agreement

- **Obligation:** Art. 28(3) GDPR. Outside the AI Act, but it is the most serious finding in the project.
- **Current state:** OpenAI receives website, register and job-advertisement text containing names in every run. Tavily returns it. Pinecone holds the use-case library only. No data processing agreement is in place with any of them, and no transfer mechanism is recorded for the two US flows.
- **Required state:** a written Art. 28 contract with each processor that handles personal data, plus a documented transfer mechanism.
- **Remediation:** accept OpenAI's Data Processing Addendum through account settings, which also incorporates the standard contractual clauses; do the same for Tavily; document why Pinecone needs none. Configure EU processing where available.
- **Escalation needed?** No for the agreements themselves. Yes for the transfer impact assessment if this ever runs on client data at volume.

## Gap 4 — Personal data is collected where the purpose does not require it

- **Obligation:** data minimisation, Art. 5(1)(c) GDPR, and the necessity limb of a legitimate interests assessment.
- **Current state:** the analysis needs roles, functions and process steps. It does not need the name of a managing director, the contact person in a job advertisement, or an executive's year of birth. All of it is collected and sent to the model anyway, and stored in `state.json` with no retention rule.
- **Required state:** collect and transmit only what the purpose requires, and delete the rest on a schedule.
- **Remediation:** strip or generalise personal names before text reaches the model, and set an expiry that deletes `state.json` and `lead.json` after a defined period. This single change also repairs the legitimate interests assessment, which currently fails on necessity.
- **Escalation needed?** No.

## Gap 5 — The generated image carries no marking

- **Obligation:** Art. 50(2) places the machine-readable marking duty on the model provider, not on me, so this is not strictly my gap. But a reader of the report cannot tell that the process map was generated rather than drawn.
- **Current state:** the process-map PNG appears in the report with no indication of its origin.
- **Required state:** nothing, under the Act as it applies to this system today. Good practice, and a requirement if the public version ships.
- **Remediation:** add a caption stating that the diagram is AI-generated and illustrative. One line in the report template.
- **Escalation needed?** No.

## Gap 6 — Two planned changes would change the tier

- **Obligation:** Art. 6 and Art. 50, prospectively.
- **Current state:** the roadmap describes a public lead magnet that publishes a report about a named company in exchange for an email address. Nothing currently stops a later variant being pointed at people rather than processes.
- **Required state:** a fresh classification before either ships, not after.
- **Remediation:** treat the classification in this audit as valid for the current intended purpose only, and re-run Phase 2 before the public version goes live. Write the boundary against person-evaluation into the intended-purpose section from Gap 2, so the constraint survives a change of hands.
- **Escalation needed?** Yes, for the public version — the questions about publishing statements concerning named individuals are reputational and potentially defamation matters rather than AI Act ones, and need advice.

---

## Reinforce — the design decision that created avoidable burden

The register search. I added `unternehmensregister.de`, `handelsregister.de`, `bundesanzeiger.de` and Northdata to the source list because they carry company size, revenue and founding data, which the business-model analysis genuinely uses. What they also carry — unavoidably, as a matter of what a commercial register is — are the names of managing directors and shareholders, sometimes with year of birth and place of residence.

So a decision made for a legitimate reason, about data I wanted, brought with it a category of data I never wanted and did not notice. That single choice is responsible for Gaps 3 and 4 and most of the GDPR exposure in the companion audit.

What I would do differently: extract the numbers from those sources and discard the rest at the point of retrieval, rather than passing whole snippets downstream. The analysis would be identical, the compliance picture would be dramatically simpler, and the change costs one function.

The wider lesson, which is the uncomfortable part of auditing your own work: the problem was not a shortcut I knowingly took. It was a reasonable decision whose side effects I never examined, because the data I wanted was all I was looking at.
