# Compliance memo

**To:** Head of Product
**From:** Friedrich Tschoepke
**Date:** 18 November 2026
**Re:** AI Use Case Identifier — EU AI Act assessment

## Classification

The system is **minimal risk** under the EU AI Act: it assesses company processes rather than people, which keeps it outside all eight high-risk areas, and it neither interacts with a person nor presents generated content as authentic.

That is the good news, and it is worth saying plainly what it means: no conformity assessment, no CE marking, no registration, no risk management file. The Act asks almost nothing of us here.

## Roles

Today we are both **provider and deployer** — we built it and we are the only ones who run it. OpenAI supplies the underlying models and carries its own obligations as a model provider. Tavily and Pinecone sit outside the Act for our purposes.

The moment a client runs this themselves, those two roles separate and the obligations land on different parties. That should be settled in writing before it happens.

## Key findings

**Our documentation says something untrue about the system.** The README states that no personal data is collected. The system collects names of company directors from public registers, named contacts from job advertisements, and contact details we enter ourselves. Nothing here is unlawful in principle, but a document that misdescribes the system is the worst possible starting point for any later review — it is the artefact a regulator or a client would rely on.

**Three suppliers process personal data for us with no contract.** OpenAI, Tavily and our hosting all receive personal data in the course of a normal run. The GDPR requires a written agreement in each case. This is a form to accept, not a negotiation, and it is currently not done.

**Our intended purpose exists only in our heads.** The minimal-risk classification depends entirely on the system assessing processes rather than people. Nothing written down says so. If a future version were pointed at candidates or employees instead, it would become high-risk with the full obligation set — and nobody reading the repository today would know that line existed.

## Recommended next steps

1. **This week.** Correct the README and add a short "intended purpose and boundaries" statement: processes not people, consultant-operated, hypothesis not decision. Half an hour, and it is what makes everything above defensible.
2. **Before the next client run.** Accept the data processing agreements with OpenAI and Tavily, confirm where each service processes, and add a deletion rule for stored outputs. Strip personal names before text reaches the model — the analysis does not need them.
3. **Before the public version ships.** Re-run the classification. Publishing generated reports about named companies raises questions this assessment does not cover, and the statements we would be making about named individuals need external advice.

## Caveats

This memo is a first-pass assessment, not a legal opinion, not a conformity assessment and not a certification. It was written by the person who built the system, which means it should be read as an honest inventory rather than an independent review — the companion peer audit exists for that reason. Obtain legal review before relying on any of it for a decision that matters.
