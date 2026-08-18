# Audit your own project

**Track:** Module 7 — EU AI Act · **When:** Week 7, Day 2 · **Status:** Required

This repository contains everything you need for this lab.

## Files

- [`instructions.md`](./instructions.md) — the lab instructions
- [`rubric.md`](./rubric.md) — how your submission is graded; this is what the AI reviewer checks your PR against

## How to complete this lab

1. **Fork** this repository.
2. Do the work described in `instructions.md`, committing to your fork.
3. Open a **pull request** back into this repository.
4. You'll receive **AI feedback** on your PR based on `rubric.md`. Address any blocking feedback and push updates to the same PR.

## Audit Deliverables

This fork contains the compliance audit for the Virtual Coffee Chat Bot (Project 3). The system is classified as **limited risk under Article 50** of the EU AI Act.

### Files in this audit

| File | Purpose |
|---|---|
| `01_system_brief.md` | System description: what it does, inputs/outputs, who is affected, how it's built |
| `02_risk_tier_classification.md` | Risk tier classification (Article 50 limited risk) with justification |
| `03_role_map.md` | Role mapping (provider, deployer, vendor) and obligations |
| `04_gap_analysis_and_remediation.md` | Gap analysis: Article 50 disclosure missing, GDPR privacy notice needed |
| `05_compliance_memo.md` | One-page compliance memo with key findings and next steps |

### Key Findings

- **Classification:** Limited risk / Transparency (Article 50)
- **Gap 1:** Missing explicit disclosure that an AI is generating chatbot responses
- **Gap 2:** GDPR privacy notice needed for recruiter data collection
- **Liability:** Custom system integration shifts responsibility from OpenAI to the provider (John)

For detailed analysis, see the individual files listed above.

## Submission hygiene

- Keep this repository scoped to this lab only — no unrelated projects or personal files.
- Use clear, descriptive filenames.
- Remove secrets, API keys, and tokens before committing.
