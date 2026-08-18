# Compliance Memo: Intellectus

**To:** Head of Product, Intellectus client  
**From:** Project 3 provider team  
**Subject:** First-pass EU AI Act assessment of Intellectus  
**Date:** 18 August 2026

## Executive conclusion

Intellectus is provisionally classified as a **limited-risk/transparency system**, assuming its production version uses an AI component to generate substantive diagnostic text or recommendations. It is not designed for a prohibited Article 5 practice or a specific Annex III high-risk use. A threshold issue remains: the documented prototype contains substantial deterministic logic and does not identify a final AI-model provider, so counsel should confirm whether the deployed configuration meets the Article 3(1) definition of an AI system.

## Roles

The person or legal entity placing the custom Intellectus product into service under its own name would be the **provider**. The consulting organization and authorized consultants using it professionally would be **deployers**. n8n currently provides workflow infrastructure. Any future model, search, extraction, or RAG provider must be added to the role and vendor map before production. Upstream vendor obligations would not remove the Intellectus provider's responsibility for the integrated product.

## Key findings

First, the interface does not establish a clear and accessible notice, shown by the first interaction, explaining that AI may generate or transform parts of the diagnostic. This creates a potential Article 50(1) transparency gap.

Second, the output contract identifies evidence and review status but does not carry a machine-readable marker for AI-generated content. If the production system generates substantive text, Article 50(2) may require detectable output marking.

Third, human review exists as a product concept but is not yet an enforceable production control. The prototype has no authenticated reviewer, mandatory sign-off, durable correction history, or recorded override reason. This increases the risk that hypotheses or unverified recommendations could be presented as approved advice.

The project also lacks a completed production data-governance assessment. Public research can contain incidental personal data, and future document uploads could contain confidential or sensitive information.

## Recommended next steps

1. Freeze the intended purpose and complete an AI-system and vendor inventory. Ask AI Act counsel to confirm the Article 3 threshold, classification, and provider/deployer map.
2. Add the user-facing transparency notice and machine-readable content provenance before connecting a production generative model.
3. Implement a mandatory, authenticated human-review gate before export or client delivery, including evidence checks, corrections, approval identity, timestamps, and override reasons.
4. Complete a GDPR data-flow and DPIA screening with the Data Protection Officer before enabling document uploads or persistent histories.
5. Train consultants on evidence status, automation bias, appropriate-use boundaries, personal data, and escalation, and retain proof of completion.

## Caveats

This memo is an educational first-pass assessment. It is not a legal opinion, conformity assessment, certification, or guarantee of compliance. Classification depends on the final technical configuration, intended purpose, vendors, data sources, users, deployment geography, and actual use. Any repurposing for employment, education admission, essential services, credit, insurance, law enforcement, migration, justice, elections, biometrics, or critical infrastructure requires a new assessment before use.
