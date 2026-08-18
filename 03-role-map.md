# Role Map

## CFU 2 — Map roles

| Role | Entity | Key AI Act obligations |
|---|---|---|
| Provider — today | You, as developer, and your father's shop, as the sole user, are effectively the same household — the provider/deployer split doesn't do meaningful work yet since there's no second party involved. | Same as below (minimal-risk system, no formal provider obligations attach). |
| Provider — if licensed to other book sellers | You, once a second, unrelated business starts running a copy you distributed under your name — this makes you a provider under Art. 3(3). | No formal AI Act provider obligations at minimal risk. In practice, you're responsible for the Article 50(1) disclosure being present and correct in every copy you distribute, and for accurate claims about what the system does (general product-safety/consumer-protection law applies regardless of AI Act tier). |
| Deployer | Each book seller who puts the system into use in their own professional context — starting with your father's shop, and later any other EU book seller who licenses it. | No specific AI Act deployer obligations at minimal risk. The deployer is the GDPR data controller for the personal data (school staff chat IDs, order data) their instance of the bot processes. |
| Vendor (third-party AI) | OpenAI, as provider of the GPT-4o / GPT-4o-mini models used for text and photo parsing. | **Stays with OpenAI:** GPAI model provider obligations under Chapter V (technical documentation, copyright policy, transparency toward downstream users like you). **Falls to you instead:** none of OpenAI's GPAI obligations transfer to you as an API user, but you're responsible for how you use their output — specifically, not letting an AI-generated reply pass as a human one, which is the Article 50 disclosure gap. |

## Notes
- n8n and Google Sheets are infrastructure/orchestration tools, not AI systems in their own right, so they don't carry a separate AI Act role — they're just where the workflow and data live.
- This is a first-pass map for the purposes of this exercise, not a legal determination. If you move forward with licensing to other EU book sellers, a lawyer should confirm the provider/deployer split, especially around who is contractually responsible for the Article 50 disclosure once the product is white-labelled or resold.
