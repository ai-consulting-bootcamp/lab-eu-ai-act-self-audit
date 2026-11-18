# Phase 2: Risk tier classification

**Assessment date:** 18 November 2026  
**System assessed:** Procurement Risk & Mitigation Agent, for its stated intended use by an industrial bakery's procurement team in Spain.

| Question | Your answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | **No apparent Article 5 category applies** to the described intended use. It analyses procurement and market information; the brief gives no indication of a prohibited manipulation, exploitation, social scoring, biometric, or other prohibited use. This is based on the current brief and should be revisited if the purpose or inputs change. |
| Does this system operate in any of the eight Annex III areas? | **No, on the stated intended purpose.** The system is intended to help a company's procurement team understand raw-material supply risks. It does not make or determine decisions in one of Annex III's listed contexts. A system can influence a company's business decisions without thereby becoming Annex III high-risk; the relevant question is whether its intended purpose falls within a listed area. A supply-chain topic alone does not make it a critical-infrastructure safety component under Annex III point 2, which covers systems intended as safety components in specified infrastructure. |
| If Annex III: does it “significantly influence” decisions in that area, or is it narrow/preparatory? | **Not applicable on the current facts:** no Annex III area appears to apply. The report is advisory and does not approve suppliers, place orders, or change contracts. The user still reviews it and decides outside the system. If its intended purpose expands into a listed area, reassess both the Annex III match and Article 6(3)'s conditions for any narrow/procedural or preparatory-task exception; do not assume human review alone removes high-risk status. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | **Yes, Article 50 needs to be addressed.** A natural-person procurement user submits a request and receives a report containing AI-generated text, so assess the Article 50(1) notice that the user is interacting with an AI system (unless that is already obvious in context). The first notice should appear on the **web request form**, before submission, and remain visible on the **report view**; the report/PDF and any Notion or email copy should also be checked. Article 50(2) requires providers of systems generating synthetic text to ensure outputs are machine-readably marked as AI-generated, insofar as technically feasible; check whether an exception applies and whether the current outputs meet the requirement. The brief does not describe either notice or machine-readable marking, so record these as potential gaps for later phases. |
| First-pass risk tier | **Limited risk / transparency obligations (Article 50), not high-risk under Annex III on the stated intended use.** “Limited risk” is the lab's shorthand for an AI system outside the prohibited and high-risk categories that has applicable transparency duties. The Act's legal obligations should be stated specifically rather than relying on that label. |
| One-sentence justification citing the specific article or Annex entry | **The system's intended purpose is procurement risk analysis, not a use listed in Annex III, and its general influence on business purchasing decisions does not alone make it high-risk; because it presents AI-generated reports to a natural-person user, its provider should address Article 50(1) and (2) transparency measures.** |

### Ambiguity and information to resolve

The brief says reports go to a human reviewer and that users are reminded to review them, but does not say whether the interface explicitly tells users they are interacting with an AI system or whether outputs carry machine-readable provenance. Confirm the actual UI and inspect the report/PDF and any content sent to Notion or by email. For Article 50(2), document the technical feasibility and any claimed exception. Also confirm the system will remain limited to organizational supplier/procurement analysis: if it starts profiling or scoring identifiable sole traders or people, or supports decisions in an Annex III context, reassess the classification and the Article 6(3) conditions. The brief identifies sole-trader suppliers as possible, but says people are not scored or ranked.

### Sources

- [Regulation (EU) 2024/1689, consolidated text on EUR-Lex (Articles 5 and 50; Annex III)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R1689-20260727)
- [European Commission: Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act) — classification follows intended purpose and the high-risk use cases in Annex III.

## Phase 3: Role map

**Scope:** This maps the intended production arrangement described in the system brief. The MVP currently runs on its author's computer, has no client or production users, and uses fictional company data. The production roles below are therefore a first-pass map of a hypothetical deployment, not a claim that the system has already been placed on the market or put into service for the bakery.

| Role | Entity | Key AI Act obligations |
|---|---|---|
| Provider — integrated Procurement Risk & Mitigation Agent | **Likely the author/developer**, if the agent is placed on the market or put into service under the author's name. | **Current:** AI literacy measures (Article 4); assess user notice (Article 50(1)); machine-readable marking of generated text where Article 50(2) applies. **If later classified high-risk:** assess the applicable high-risk provider duties in Phase 4. |
| Deployer | **Likely the bakery**, through its Raw Materials Procurement Manager and other staff using it professionally. | **Current:** AI literacy measures for staff who use or operate it (Article 4). No additional high-risk deployer duties are identified under the current classification. |
| Vendor — general-purpose AI model | **OpenAI** is identified in the brief as the supplier of `gpt-5.4-mini` and `text-embedding-3-small`; confirm the contracting/API entity and model status. | Model-provider obligations are a separate GPAI track (including Article 53, and Article 55 if a model has systemic risk). They are contextual to this system review and do not replace the integrated agent provider's own assessment. The integrated provider should obtain and consider model capabilities/limitations documentation. |
| Vendors — other services | Tavily and GDELT (search/news); Supabase (database); LangGraph and Gradio (frameworks); n8n (automation); Notion and Gmail (storage/communications); and the European Commission price-data source. | No separate AI Act provider/deployer role for this agent is established by their vendor status alone. If a service supplies an AI feature used by the agent, map that feature and its provider separately. |

### Role boundary and facts to confirm

The provider/deployer assignments are **likely, not final**. Article 3(3) defines a provider as the person that develops an AI system (or has it developed) and places it on the market or puts it into service under its own name or trademark. Confirm whose name or brand is used, who sets the intended purpose, and who operates the system. If the bakery commissions and puts it into service under its own name, or changes its purpose in a way that affects the classification, the provider analysis may change and needs legal review. The bakery's staff are not providers merely because they review outputs.

The brief says reports are saved to Notion before review; the bakery should treat these as unreviewed drafts. Confirm the API contracting entity, which data each vendor receives, and whether the deployer gets operating instructions and the AI notices discussed in Phase 5.

### Sources

- [Regulation (EU) 2024/1689, consolidated text on EUR-Lex (Articles 3, 4, 25, 50, 53 and 55)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R1689-20260727)
- [European Commission: Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act)

## Phase 4: Obligation checklist (high-risk only)

**Not applicable.** Phase 2 found no apparent Annex III high-risk use for the system's stated procurement purpose, so the high-risk provider checklist (Articles 9–15, 43, 47–49 and 72) is skipped as directed by the lab instructions. This is a first-pass conclusion based on the current intended purpose; revisit it if the system begins supporting decisions in an Annex III area or its intended purpose changes.

## Phase 5: Gap analysis and remediation plan

Because the current assessment is not high-risk, this analysis covers the Article 50 transparency issues identified in Phase 2 and the potential personal-data issue raised by the brief. The MVP is a prototype with no production client or users, so the findings below are **unverified implementation gaps to close before production**, not findings that a production deployment is already in breach.

### Priority 1 — Gap 1: Machine-readable marking of generated report text

- **Obligation:** Article 50(2), AI Act — providers of systems generating synthetic text must ensure outputs are marked in a machine-readable format and detectable as artificially generated, as far as technically feasible and subject to the provision's exceptions.
- **Current state:** The brief says the AI writes report text and code checks claims against sources. It does not mention machine-readable AI marking in the report, PDF, or copies saved to Notion or sent by email. A visible user notice (covered in Priority 2) and claim citations do not, by themselves, meet this separate output-marking requirement.
- **Required state:** **User notice and output marking are separate controls.** Article 50(1) concerns informing the person interacting with the system; Article 50(2) concerns machine-readable marking on generated text outputs, where applicable. Determine technical feasibility and any Article 50(2) exception, and ensure marked outputs can be detected as AI-generated.
- **Remediation:** Developer: (1) identify which report fields contain synthetic text; (2) select and implement a machine-readable marker or metadata approach; (3) test detectability after PDF export and after saving/sending through Notion and email; and (4) document technical limitations and the exception analysis. The consolidated Act says systems generating synthetic text placed on the market before 2 August 2026 must take necessary steps to comply by **2 December 2026**. First confirm whether that transition applies to this local prototype, which the brief says has no production deployment.
- **Escalation needed?** **Yes — technical review** for a feasible marking method, then legal review of feasibility, exceptions, and the transition date.

### Priority 2 — Gap 2: Tell users they are interacting with an AI system

- **Obligation:** Article 50(1), AI Act — providers must ensure people are informed that they are interacting with an AI system unless that is obvious in the circumstances.
- **Current state:** The brief says the screen reminds reviewers to review reports, but does not say it identifies the system as AI-powered. Whether the interaction makes this obvious is not established.
- **Required state:** Ensure the natural-person procurement user is informed that the system uses AI, unless a documented assessment supports the “obvious” exception.
- **Remediation:** Add a short, persistent notice on the request form and report view, for example: “This report is generated with AI assistance. Review its sources and warnings before relying on it.” Verify it is also present wherever the report is opened from Notion or email, or that the user is otherwise clearly informed before interacting with the AI output.
- **Escalation needed?** **Yes — limited legal/privacy review** to confirm the notice is adequate and whether the exception could apply in the actual user context.

### Priority 3 — Gap 3: Establish whether personal data reaches the system or vendors

- **Obligation:** Potential parallel GDPR issue, not an AI Act risk-tier obligation. For example, a web result could identify an individual sole trader, or a supplier record could include a named sales contact's email address. If the person is identifiable, those details may be personal data. GDPR principles and a lawful basis apply to personal-data processing; processor terms and international-transfer safeguards may also be required depending on the actual data flows and vendors (GDPR Articles 5, 6, 28 and 44 onward).
- **Current state:** The brief marks this as “TO ASSESS.” It does not establish whether such details are collected, sent to OpenAI/Tavily or other vendors, included in generated or stored reports, retained, or transferred outside the EEA.
- **Required state:** Before production, identify the data and purposes; determine whether any data relates to identifiable natural persons; establish and document the controller/processor roles, lawful basis, minimisation, transparency, retention, security, processor terms, and any international-transfer mechanism that applies.
- **Remediation:** Draw a data-flow inventory from search/API inputs through model calls, database, report, Notion and email. Test with sole-trader and named-person examples; remove or redact personal details that are not necessary before external API calls; document retention/deletion behavior and vendor locations/terms. Have the bakery's privacy lead or DPO confirm the GDPR analysis before real personal data is used.
- **Escalation needed?** **Yes — the bakery's DPO/privacy counsel**, with vendor-contract review as needed.

### Priority 4 — Gap 4: Prepare users to operate the system responsibly

- **Obligation:** Article 4, AI Act — providers and deployers must take measures to support AI literacy for staff and other people who operate or use AI systems on their behalf.
- **Current state:** The brief describes a human-review reminder and a review process, but does not document user training or other AI-literacy measures. The prototype has no production users.
- **Required state:** Provider and deployer each take proportionate measures to support AI literacy for their relevant staff, taking account of the system and the users' context.
- **Remediation:** Create a short onboarding note and walkthrough covering what the AI generates, known limits, how to check citations and warnings, and that an automatically saved report is an unreviewed draft. Keep a simple record that relevant staff received it.
- **Escalation needed?** **No specialist review required to draft.** The provider and bakery should confirm the measures are suitable for their staff and workflow.

### Sources

- [AI Act, consolidated EUR-Lex text (Articles 4 and 50; Article 111(4) transition for Article 50(2))](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R1689-20260727)
- [GDPR, Regulation (EU) 2016/679 on EUR-Lex (Articles 5, 6, 28 and 44 onward)](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng/)

## Phase 6: Compliance memo

**To:** Head of Product, Bakery Foods Inc. *(fictional client)*  
**From:** Project team  
**Date:** 18 November 2026  
**Subject:** First-pass EU AI Act review — Procurement Risk & Mitigation Agent

**Classification.** For its stated purpose of helping an industrial bakery assess sunflower-oil supply risks, the system appears outside the Article 5 prohibited practices and Annex III high-risk categories. Article 50 transparency requirements should be assessed for the AI-generated reports and user interaction.

**Roles.** The developer is the likely provider of the integrated agent; the bakery would likely be its deployer through procurement staff. OpenAI supplies the integrated models, with separate model-provider obligations. This is a first-pass role map; legal confirmation may be needed if the bakery puts the system into service under its own name or the deployment model changes.

**Key findings.**

- **AI Act — Article 50:** The interface's human-review reminder does not establish that users are told they are interacting with AI. The report, PDF, Notion and email outputs also have no documented machine-readable marking of AI-generated text. Confirm the technical and legal requirements, including whether the 2 December 2026 transition applies.
- **Parallel privacy issue — GDPR:** Search results may identify individual sole traders, and supplier records may contain named contacts. Data flows to vendors, storage, retention, and GDPR roles and safeguards have not been established.

**Recommended next steps.**

1. **Developer — confirm Article 50(2) applicability and marking.** Check whether the 2 December 2026 transition applies; select and test machine-readable marking in the report, PDF, Notion and email outputs.
2. **Developer — add an AI notice.** Place it on the web form and report view, then verify it remains clear in downstream report copies.
3. **Bakery privacy lead/DPO — map personal-data flows before production.** Identify data sent to each vendor and retained in reports; confirm GDPR roles, lawful basis, minimisation, retention and transfer safeguards.
4. **Developer and bakery — prepare users.** Provide short onboarding on AI-generated content, source checks, warnings, and the fact that the automatically saved Notion report is an unreviewed draft.

**Caveats.** This is a first-pass educational assessment, not legal advice, a legal opinion, an AI Act conformity assessment, or a certification. The MVP is a local portfolio prototype with no real client or production users; Bakery Foods Inc. and its company data are fictional. A qualified lawyer and the deployer's privacy lead should confirm the classification, roles, and data-protection analysis before production deployment.

