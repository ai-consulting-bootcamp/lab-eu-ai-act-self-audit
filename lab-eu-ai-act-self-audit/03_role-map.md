# Phase 3 — Role map

## Summary

RegGuard-Mini is not a single-role picture. It is an AI *system* I assembled, built on top of a
general-purpose AI *model* supplied by a third party, intended to be used by a car manufacturer.
Three distinct sets of duties sit on three distinct parties, and they do not overlap.

## Role table

| Role | Entity | Key AI Act obligations |
|---|---|---|
| **Provider** (of the AI system) | Me as course author today; **Onyx Dynamics** if placed on the market under its own name | Because the system sits in the limited-risk tier, the binding duty is **Article 50(1)**: design the system so a person is informed they are interacting with AI, unless that is obvious to a reasonably well-informed user. If the generated text is treated as synthetic content, **Article 50(2)** adds machine-readable marking of outputs. **Article 4** requires ensuring an adequate level of AI literacy among our own staff who operate the system. **Article 5** prohibitions apply regardless of tier — screened and cleared. If the classification ever moved to high-risk, the full Article 9–15 / 43 / 47–49 / 72 stack would attach to this row, which is why Gap 7 matters. |
| **Deployer** | The OEM design studio (e.g. the Rimac-style PoC partner named in our roadmap) using it professionally in-house | **Article 50** deployer-side disclosure duties where applicable; **Article 4** AI literacy for their designers and engineers; use the system in accordance with the instructions for use we provide. Deployer obligations at limited risk are light — but their **GDPR** duties as controller over their own staff's usage data are not, and neither are their internal type-approval responsibilities, which our tool must never appear to discharge. |
| **Vendor — GPAI model** | The commercial LLM API provider (OpenAI in the built version) | They are a **provider of a general-purpose AI model** under Chapter V: technical documentation, information to downstream providers, copyright policy, training-content summary; plus systemic-risk obligations if the model crosses that threshold. Their duties are theirs, not mine — but I depend on them for the downstream information I need, and I have not yet actually collected it. |
| **Vendor — other components** | Geometry/measurement libraries, vector store, hosting | Not AI systems in their own right for our purposes. Ordinary supplier due diligence and, where the hosting touches personal data, GDPR processor terms. |

## The boundary that makes this map work

Our architecture keeps the language model in an orchestration and retrieval role and does all
numerical computation in Onyx-owned tools. Every number the user sees traces to a tool call, never
to a model generation.

This is worth stating in regulatory terms rather than only as engineering hygiene, because it does
three things at once:

1. It narrows what the GPAI vendor is responsible for in our output — they supply language, not
   measurements.
2. It makes Article 50(2) tractable, because there is a clean line between *generated text* (mark
   it) and *computed values* (not synthetic content in the ordinary sense; they are measurements).
3. It gives us something concrete to show an OEM procurement team asking "does the AI make up the
   numbers?" — the answer is architectural, not a promise.

## Where a lawyer is needed

- Confirming that Onyx Dynamics, not the OEM, is provider under the intended commercial model.
- Article 25 drafting: what a deployer may configure before they become a provider themselves.
  Custom customer rule sets are the obvious pressure point — an OEM loading its own internal
  guidelines may be closer to modification than we assume.
- Whether the downstream-provider information we are entitled to receive from the GPAI vendor has
  actually been obtained and retained.
