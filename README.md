# EU AI Act Compliance Lab — Project 3 Audit (`Mobile Game Competitor Snapshot mk.III`)

**Author:** Jędrzej Czarnota  
**Subject System:** Mobile Game Competitor Snapshot Agent (n8n + OpenAI `gpt-4o-mini` + Pinecone RAG + Tavily/GNews/Apple iTunes Telemetry)

This repository contains the complete first-pass EU AI Act (Regulation (EU) 2024/1689, as amended by the July 2026 Digital Omnibus Regulation (EU) 2026/1744) and parallel GDPR/confidentiality compliance audit for Project 3.

## Reviewer Entry Point

Start with **[`lab_proof.md`](./lab_proof.md)**, which consolidates the workflow evidence, live execution trace, failure/limitation analysis, Check for Understanding (CFU) checkpoints, and hindsight design reflection.

## Repository File Map

| Filename | Purpose |
| :--- | :--- |
| [`lab_proof.md`](./lab_proof.md) | **Reviewer Entry Point:** Workflow summary, live run trace (`Kolibri` & `Patrianna`), failure analysis, CFU 1–5 checkpoints, and Reinforce reflection |
| [`01_project3_system_brief.md`](./01_project3_system_brief.md) | **Phase 1:** Plain-language one-page system description written for an external reviewer |
| [`02_eu_ai_act_risk_and_role_map.md`](./02_eu_ai_act_risk_and_role_map.md) | **Phases 2–4:** Risk tier classification table, Provider/Deployer/Vendor role map, and High-Risk obligation checklist |
| [`03_gap_analysis_and_remediation_plan.md`](./03_gap_analysis_and_remediation_plan.md) | **Phase 5:** Specific node-level compliance gaps and practical engineering remediation steps |
| [`04_client_compliance_memo_head_of_product.md`](./04_client_compliance_memo_head_of_product.md) | **Phase 6:** One-page executive compliance memo addressed to the fictional Head of Product at Northstar Nova Games |
| [`Mobile Game Competitor Snapshot mk.III.json`](./Mobile%20Game%20Competitor%20Snapshot%20mk.III.json) | Exported 24-node n8n workflow artifact from Project 3 |
| [`Live flow screenshot on 2026-11-13 at 11.01.54.jpg`](./Live%20flow%20screenshot%20on%202026-11-13%20at%2011.01.54.jpg) | Execution log and input/output proof from the n8n editor |
