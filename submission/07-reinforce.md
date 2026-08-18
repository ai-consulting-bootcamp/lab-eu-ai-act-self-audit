# Reinforce

## Revisiting Minimized or Glossed-Over Components

Reviewing the system brief again with a specifically critical eye: the component most likely to have been under-weighted in the initial classification is **OpenAI's role in the pipeline**. The system brief and role map correctly identify OpenAI as "AI reasoning," but it's worth being precise about *how many distinct AI-driven decisions* actually run through it in a single request, since each one is a separate point where the classification logic could have gone differently:

1. Shape classification (`classify_shape`)
2. Material classification (`classify_material`)
3. Manufacturing route inference, when not explicitly given (`classify_manufacturing_route_fallback`)
4. Machine size classification (`classify_machine_size`)
5. Cost-region classification, run twice — once for labor, once separately for electricity (`classify_cost_region`, `classify_electricity_region`)
6. Report narrative generation (`generate_report`'s LLM call)

That's six separate LLM calls per request, not one. Including them all does not change the minimal-risk classification — none of these six decisions are made *about a person*, they're all judgments about a physical part or its manufacturing context (material type, machine size, regional cost tier). But it does sharpen an honest answer to "how autonomous is this system really," which matters for a client conversation: this is a genuinely multi-step agentic pipeline with several independent AI judgment calls chained together, each with a bounded/validated output and a documented fallback — not a single LLM call wrapped in some deterministic math. Naming this precisely, rather than treating "uses AI" as one undifferentiated fact, is exactly the kind of detail a real audit should surface even when it doesn't change the bottom-line classification.

## One Design Decision That, in Hindsight, Creates a Compliance Burden

The clearest candidate is the **`classify_cost_region` and `classify_electricity_region` functions**, which ask the LLM to classify a country or location as "high-cost" or "low-cost," with the documented example prompt explicitly stating: *"Western Europe and North America are generally high-cost; Asia, Africa, Oceania, and Latin America are generally low-cost."*

This does not touch AI Act obligations — it is not evaluating a person, and stays correctly outside Annex III. But in hindsight, hardcoding a geography-to-cost-tier heuristic along those lines creates a **different kind of exposure worth naming honestly**: it risks encoding a real-world economic stereotype into a business tool, even though the tool never touches individual people. If this system were ever extended to make *any* determination that touched people (e.g., differential service quality or pricing recommendations by region for individual customers, not just parts), this exact pattern — geography-based cost-tier classification — is precisely the kind of input that could tip a future feature into discriminatory-impact territory under other EU non-discrimination law, even without AI Act involvement.

What would be done differently: replace the region-based heuristic with actual published labor-cost and electricity-rate data by country (the roadmap in `gtm_future_sprints.md` already lists "live government wage/energy data (BLS, EIA)" as a planned precision improvement) — not framed as a compliance fix, since none is currently required, but as a good practice that removes a stereotype-shaped assumption before it could ever matter, rather than after.
