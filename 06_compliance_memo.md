# Phase 6: Compliance Memo

**To:** Head of Product, Kleinanzeigen *(fictional recipient for a course exercise)*
**From:** Ayhan Demir, AI consultant
**Date:** 17 November 2026
**Subject:** EU AI Act check of "Fix My Process" before a pilot

## 1. Classification

Fix My Process is a **limited-risk** AI system under the EU AI Act: it is not a banned practice (Article 5) and not high-risk (Annex III point 4, employment), because it recommends tools for work processes and does not judge or manage employees, but it talks to staff and writes text, so the transparency rules of Article 50 apply.

## 2. Who is responsible

- **Provider:** whoever builds it and runs it under its own name. Today that is me, as the developer of the prototype. If Kleinanzeigen adopts it and runs it for its own staff, Kleinanzeigen becomes the provider.
- **Deployer:** Kleinanzeigen, as the employer whose staff use it.
- **Suppliers:** OpenAI and Cohere supply the AI models and carry their own duties as model providers. The data and platform services (search, database, Slack, Notion) have no AI Act role, but they process our data.

## 3. Key findings

1. **Staff must clearly see they are using AI, and the reports must carry an AI marker.** Today a small footer line says the report is AI-generated; the chat shows nothing up front, and the stored reports carry no marker.
2. **The employee data needs a privacy and works council framework before real use.** Problem descriptions can contain names, data goes to US-based services, nothing is deleted, and the app has no login. Because it logs department and feedback, the works council will likely see it as a tool that could be used to watch staff.
3. **The "not high-risk" result depends on how we use the data.** If anyone used submissions or feedback to rate individuals or teams, the system could become high-risk under the employment rules, with much heavier obligations from December 2027.

## 4. Recommended next steps, in order

1. **Write down the purpose** in one page: "process and tool improvement, never for evaluating individuals or teams", with a minimum group of 5 for any summary. *(Review: employment lawyer.)*
2. **Data protection set-up:** privacy notice, legal basis, retention period, contracts and transfer checks with each supplier, and automatic removal of personal details before any AI step. *(Review: data protection officer.)*
3. **Works council:** present the system and agree a short annex before the pilot. *(Review: works council.)*
4. **Product fixes,** about one sprint: an AI notice on the form and chat, an AI-generated marker on every stored report, company login, amber cases sent to the Board as our policy requires, and a check that the employee's report matches the Board's record.
5. **Short training** for users, the AI enablement team and the Board.
6. **Pilot with one or two teams,** then repeat this check before adding any report that summarises by department.

No external certification body is needed for a limited-risk system.

## 5. Caveats

This memo is a first-pass assessment for a course project. It is **not a legal opinion, not a conformity assessment and not a certification.** It uses fictional internal documents and the law as amended by the Digital Omnibus (in force since 27 July 2026). The classification should be confirmed by a lawyer before rollout, and checked again whenever the purpose, data or users change.
