# Role Map

## CFU 2 — Map roles

| Role | Entity | Key AI Act obligations |
|---|---|---|
| Provider | You (the developer of the workflow), *if* you distribute or license it to other book sellers under your own name/brand. Today, running it only for your father's shop, the provider/deployer distinction barely matters since it's the same household — but the moment a second, unrelated business starts using it, you are acting as the provider under Art. 3(3). | For a minimal-risk system: no formal AI Act provider obligations (those attach at high-risk). In practice, still responsible for the Article 50(1) transparency implementation being present and correct in every copy of the system you distribute, and for being honest about what the system does and doesn't do (general product-safety/consumer-protection law still applies regardless of AI Act tier). |
| Deployer | Each book seller who puts the system into use in their own professional context — starting with your father's shop, and later any other EU book seller who licenses it. | For minimal-risk systems: no specific AI Act deployer obligations. The deployer is still responsible under GDPR as the data controller for the personal data (school staff chat IDs, order data) their instance of the bot processes. |
| Vendor (third-party AI) | OpenAI, as provider of the GPT-4o / GPT-4o-mini models used for text and photo parsing. | OpenAI carries its own General-Purpose AI (GPAI) model provider obligations under Chapter V of the Act (technical documentation, copyright policy, transparency toward downstream deployers like you) — these sit with OpenAI, not with you. You, as a downstream user of the API, have no GPAI obligations yourself, but you do inherit responsibility for how you *use* their output (e.g. not misrepresenting AI-generated replies as human ones — see Article 50 gap). |

## Notes
- n8n and Google Sheets are infrastructure/orchestration tools, not AI systems in their own right, so they don't carry a separate AI Act role — they're just where the workflow and data live.
- This is a first-pass map for the purposes of this exercise, not a legal determination. If you move forward with licensing to other EU book sellers, a lawyer should confirm the provider/deployer split, especially around who is contractually responsible for the Article 50 disclosure once the product is white-labelled or resold.
