# Phase 6: Compliance Memo

**To:** Head of Product, Kleinanzeigen *(fictional recipient for a course exercise)*
**From:** Ayhan Demir, AI consultant
**Date:** 19 November 2026
**Subject:** EU AI Act check of "Fix My Process" before a pilot

## 1. Classification

Fix My Process is a **limited-risk** AI system under the EU AI Act: it is not a banned practice (Article 5) and not high-risk under the employment rules (Annex III point 4), because it recommends tools for work processes and does not monitor, judge or manage employees, but it talks to staff and writes text, so the transparency rules of Article 50 apply.

## 2. Who is responsible

- **Provider:** whoever builds it and runs it under its own name. Today that is me, as developer of the prototype. If Kleinanzeigen adopts it and runs it for its own staff, Kleinanzeigen becomes the provider.
- **Deployer:** Kleinanzeigen, as the employer whose staff use it.
- **AI model suppliers:** OpenAI and Cohere carry their own duties as model providers and must give us information about their models. The other services (search, database, Slack, Notion) have no AI Act role.

## 3. Key findings

1. **Staff must be told up front that they are using AI, and stored reports must carry an AI marker.** The report itself is labelled as AI-generated, but there is no notice before people start, and the stored records carry no machine-readable marker. Both duties have applied since August 2026.
2. **The "not high-risk" result depends on how we use the data.** Each case records the department and the employee's feedback. If anyone used this to monitor or rate individuals or teams, the system would become high-risk under the employment rules, with much heavier duties from December 2027, and Kleinanzeigen would carry them as provider.
3. **AI literacy is not yet covered.** Employees, the AI enablement team and the AI Governance Board need short, recorded guidance on what the system can and cannot do, and in particular that the green, amber or red flag is guidance, not a legal clearance.

## 4. Recommended next steps, in order

1. **Write down the purpose** in one page: "process and tool improvement, never for monitoring or evaluating individuals or teams", with a minimum group of 5 for any department figures. *(Review: AI Act specialist.)*
2. **Product fixes,** about one sprint: an AI notice at the start, a machine-readable AI marker on every stored report and summary, amber cases sent to the Board for a decision, and a "guidance, not legal advice" line on the flag. *(Review of the marking method: AI Act specialist.)*
3. **Model documentation:** keep OpenAI's and Cohere's model information and the model versions on file.
4. **Short training** for users, the AI enablement team, the Board and the workflow owner, with a record of who completed it.
5. **Pilot with one or two teams,** then repeat this check before adding any report that summarises by department.

No conformity assessment or external certification is needed for a limited-risk system. Data protection and works council questions are outside this memo and need their own review before real employee data is used.

## 5. Caveats

This memo is a first-pass EU AI Act assessment for a course project. It is **not a legal opinion, not a conformity assessment and not a certification.** It is based on the system brief, uses fictional internal documents, and applies the AI Act as amended by the Digital Omnibus (in force since 27 July 2026). The classification should be confirmed by a lawyer before rollout and checked again whenever the purpose, data or users change.
