# Compliance Memo — Intellectus

**To:** Head of Product  
**Subject:** First-pass EU AI Act assessment of Intellectus

## Executive conclusion

Intellectus is provisionally classified as a **limited-risk / transparency AI system** for its documented intended purpose.

The system supports consultants in preparing evidence-based organizational diagnostics. It does not make binding decisions about individuals and is not currently used for employment, education, credit, essential services or another Annex III high-risk purpose. Its main AI Act exposure is therefore transparency and governance around AI-assisted analysis and generated content rather than the high-risk compliance regime.

This conclusion should be reviewed again once the final production AI model, vendors, hosting arrangement and legal provider are fixed.

## Role map

The legal entity placing Intellectus into service under its own name would most likely act as the **provider** of the integrated system.

The consulting organization and consultants using Intellectus professionally would act as **deployers**.

n8n currently provides workflow orchestration, while any production language-model, research or extraction provider would retain obligations associated with its own service. Their involvement does not remove the responsibility of the Intellectus provider for the downstream product and its intended use.

## Key findings

Three issues should be resolved before production.

**1. Transparency and provenance**

The current product does not yet provide a formal, versioned user notice explaining where AI is used in the diagnostic process. The output structure also distinguishes evidence and review status, but does not yet provide complete provenance for substantive AI-generated content.

**2. Human review is designed in, but not yet production-grade**

Consultant review is already part of the product flow. However, the current prototype does not persist reviewer identity, corrections, override reasons or final approval history across sessions. A client-facing brief should be traceable to a named human reviewer.

**3. Production data and security controls are incomplete**

The system mainly uses organizational and public information, but public evidence and future document uploads may contain personal or confidential data. Authentication, durable persistence, retention, access control, redacted logging and other production safeguards also remain to be completed.

## Recommended next steps

1. **Freeze the intended purpose and production architecture.**  
   Document each AI component, vendor, input, output and legal role, and confirm the final risk classification with AI Act counsel.

2. **Add transparency and content provenance.**  
   Introduce a short AI notice in the user journey and retain generation metadata for AI-assisted output where required.

3. **Make human review auditable.**  
   Require named consultant approval before client delivery and record corrections, unresolved evidence, overrides and timestamps.

4. **Complete privacy and security readiness.**  
   Map data flows, define permitted inputs, retention and deletion rules, review vendor terms and complete a DPIA screening before enabling persistent uploads.

5. **Define appropriate-use guidance for consultants.**  
   Train users to distinguish evidence, inference, hypotheses and unknowns, recognise automation bias and identify when a use case requires escalation or reassessment.

## Caveats

This is a first-pass compliance assessment prepared for a course exercise.

It is **not** a legal opinion, conformity assessment, certification or guarantee of compliance.

The final classification depends on the production system's actual intended purpose, technical components, vendors, data sources and deployment context. Any future use of Intellectus to assess individuals or materially influence decisions in a high-risk area should trigger a new EU AI Act assessment before deployment.