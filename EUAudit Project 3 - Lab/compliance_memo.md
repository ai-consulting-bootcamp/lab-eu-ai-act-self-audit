# Compliance Memo — Platform Risk Research Agent

**To:** Head of Product
**From:** AI Systems Review
**Re:** EU AI Act first-pass compliance assessment

## System classification

The Platform Risk Research Agent is classified as limited risk / transparency. It does not fall under any Annex III high-risk area and does not make a listed high-risk decision. It generates AI-produced content shown to a user, which triggers the Article 50 transparency duty.

## Role map

We act as the provider, since we designed and built the system. The company running the tool to evaluate a vendor acts as the deployer. Third-party model providers (DeepSeek, OpenAI embeddings) carry their own separate compliance duties as general-purpose AI providers.

## Key findings

1. The report does not currently disclose that it is AI-generated. This is required under Article 50 and is a simple fix.
2. The confidence tagging system, which separates vendor claims from verified evidence, is a real strength. It supports transparency beyond what the Act requires.
3. The recommendation engine, which ranks alternative vendors when a verdict is negative, sits close to the line of "significant influence" on a decision. This needs a legal opinion to confirm it does not raise the risk tier.

## Recommended next steps

1. Add a visible AI-generated content label to the report. Low effort, immediate.
2. Document the system briefly: what it does, what data it uses, how it scores.
3. Get a lawyer to review the recommendation engine's classification before this tool is used with real clients.

## Caveats

This memo is a first-pass assessment. It is not a legal opinion, not a formal conformity assessment, and not a certification. Final classification, especially around the recommendation engine, requires legal review.