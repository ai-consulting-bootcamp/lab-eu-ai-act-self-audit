# Phase 2: Risk tier classification

**Assessment date:** 18 November 2026  
**System assessed:** Procurement Risk & Mitigation Agent, for its stated intended use by an industrial bakery's procurement team in Spain.

| Question | Your answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | **No apparent Article 5 category applies** to the described intended use. It analyses procurement and market information; the brief gives no indication of a prohibited manipulation, exploitation, social scoring, biometric, or other prohibited use. This is based on the current brief and should be revisited if the purpose or inputs change. |
| Does this system operate in any of the eight Annex III areas? | **No, on the stated intended use.** The system supports a company's purchasing analysis of sunflower oil. It is not intended for a listed use such as employment, education, essential services, law enforcement, migration, justice, or democratic processes, nor is it a safety component in critical infrastructure. The fact that the subject is a supply chain does not by itself make it Annex III critical infrastructure: point 2 concerns systems intended as safety components in specified infrastructure. |
| If Annex III: does it “significantly influence” decisions in that area, or is it narrow/preparatory? | **Not applicable on the current facts:** no Annex III area appears to apply. The report is advisory and does not approve suppliers, place orders, or change contracts. The user still reviews it and decides outside the system. If its intended purpose expands into a listed area, reassess both the Annex III match and Article 6(3)'s conditions for any narrow/procedural or preparatory-task exception; do not assume human review alone removes high-risk status. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | **Yes, Article 50 needs to be addressed.** A natural-person procurement user submits a request and receives a report containing AI-generated text, so assess the Article 50(1) notice that the user is interacting with an AI system (unless that is already obvious in context). Article 50(2) requires providers of systems generating synthetic text to ensure outputs are machine-readably marked as AI-generated, insofar as technically feasible; check whether an exception applies and whether the current report/PDF and any downstream copy meet the requirement. The brief does not describe either notice or machine-readable marking, so record these as potential gaps for later phases. |
| First-pass risk tier | **Limited risk / transparency obligations (Article 50), not high-risk under Annex III on the stated intended use.** “Limited risk” is the lab's shorthand for an AI system outside the prohibited and high-risk categories that has applicable transparency duties. The Act's legal obligations should be stated specifically rather than relying on that label. |
| One-sentence justification citing the specific article or Annex entry | **On the current intended purpose, this procurement-analysis assistant does not appear to fall within Article 5 or an Annex III high-risk use; because it presents AI-generated report text to a natural-person user, its provider should assess and implement the applicable transparency measures in Article 50(1) and (2).** |

### Ambiguity and information to resolve

The brief says reports go to a human reviewer and that users are reminded to review them, but does not say whether the interface explicitly tells users they are interacting with an AI system or whether outputs carry machine-readable provenance. Confirm the actual UI and inspect the report/PDF and any content sent to Notion or by email. For Article 50(2), document the technical feasibility and any claimed exception. Also confirm the system will remain limited to organizational supplier/procurement analysis: if it starts profiling or scoring identifiable sole traders or people, or supports decisions in an Annex III context, reassess the classification and the Article 6(3) conditions. The brief identifies sole-trader suppliers as possible, but says people are not scored or ranked.

### Sources

- [Regulation (EU) 2024/1689, consolidated text on EUR-Lex (Articles 5 and 50; Annex III)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R1689-20260727)
- [European Commission: Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act) — classification follows intended purpose and the high-risk use cases in Annex III.

## Phase 3: Role map

**Scope:** This maps the intended production arrangement described in the system brief. The MVP currently runs on its author's computer, has no client or production users, and uses fictional company data. The production roles below are therefore a first-pass map of a hypothetical deployment, not a claim that the system has already been placed on the market or put into service for the bakery.

| Role | Entity | Key AI Act obligations |
|---|---|---|
| Provider (integrated Procurement Risk & Mitigation Agent) | **Likely the author/developer** if they make the custom-built system available under their own name or put it into service for the bakery. They developed the report logic and integrate the AI model into a combined application. The provider definition in Article 3(3) covers a person that develops a system, or has it developed, and places it on the market or puts it into service under their name/trademark. | For this system's current non-high-risk intended use: take measures to support AI literacy for staff involved in operation/use (Article 4); assess the user-facing AI interaction notice (Article 50(1)); and ensure synthetic text output is machine-readably marked as AI-generated where Article 50(2) applies and technically feasible, subject to its stated exceptions. High-risk provider duties do not follow from the current Phase 2 classification. |
| Deployer | **The bakery**, acting through its Raw Materials Procurement Manager and any other staff using the system in a professional context. The manager is the human user; the bakery is the likely deploying entity. | Support AI literacy for staff who operate or use the system (Article 4). No special high-risk deployer duties are identified on the current classification. The brief says the report is automatically saved to Notion before review, so the bakery should treat that copy as an unreviewed draft and ensure staff do not rely on it as an approved decision. |
| Vendor: general-purpose AI model | **OpenAI**, as the supplier of `gpt-5.4-mini` and `text-embedding-3-small`, subject to confirmation of the contracting/API entity and the applicable model-specific status. The author integrates these services into the agent. | The model supplier's role is distinct from the integrated-system provider. A general-purpose AI model provider has applicable obligations under the GPAI provisions, including Article 53 documentation and downstream-provider information, copyright policy, and training-content summary obligations; Article 55 adds duties for models designated as having systemic risk. The integrated system provider should obtain and use model documentation and limitations information. A model is not assigned the same Annex III “risk tier” as the agent. |
| Vendors: other services | Tavily and GDELT (search/news); Supabase (database); LangGraph and Gradio (software frameworks); n8n (workflow automation); Notion and Gmail (destination/communications services); and the European Commission price data source. | Their involvement alone does not make them providers or deployers of this agent, and the brief does not establish that these services themselves provide embedded AI systems for this use. If a service includes a separate AI feature that the agent relies on, identify that feature and its provider separately. Contractual and data-protection duties may also apply, but are outside this AI Act role map. |

### Role boundary and facts to confirm

The author's provider role is **likely, not final**: confirm whose name or brand the system is supplied under, who decides its intended purpose, and who technically operates it. If the bakery commissions and puts the system into service under its own name, or materially changes its purpose, the provider analysis may change and needs legal review. OpenAI supplies models rather than the complete procurement agent; the author remains the likely downstream provider of the integrated system in the proposed arrangement. The bakery's procurement staff are not automatically providers merely because they review outputs.

The brief does not identify the API contracting entity, the exact data sent to each vendor, or whether the deployer will receive operational instructions and user-facing AI notices. Confirm those facts for the later transparency and gap-analysis phases.

### Sources

- [Regulation (EU) 2024/1689, consolidated text on EUR-Lex (Articles 3, 4, 25, 50, 53 and 55)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02024R1689-20260727)
- [European Commission: Navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act)

## Phase 4: Obligation checklist (high-risk only)

**Not applicable.** Phase 2 found no apparent Annex III high-risk use for the system's stated procurement purpose, so the high-risk provider checklist (Articles 9–15, 43, 47–49 and 72) is skipped as directed by the lab instructions. This is a first-pass conclusion based on the current intended purpose; revisit it if the system begins supporting decisions in an Annex III area or its intended purpose changes.

## Phase 5: Gap analysis and remediation plan

Because the current assessment is not high-risk, this analysis covers the Article 50 transparency issues identified in Phase 2 and the potential personal-data issue raised by the brief. The MVP is a prototype with no production client or users, so the findings below are **unverified implementation gaps to close before production**, not findings that a production deployment is already in breach.

### Gap 1 — Tell users they are interacting with an AI system

- **Obligation:** Article 50(1), AI Act — providers must ensure people are informed that they are interacting with an AI system unless that is obvious in the circumstances.
- **Current state:** The brief says the screen reminds reviewers to review reports, but does not say it identifies the system as AI-powered. Whether the interaction makes this obvious is not established.
- **Required state:** Ensure the natural-person procurement user is informed that the system uses AI, unless a documented assessment supports the “obvious” exception.
- **Remediation:** Add a short, persistent notice on the request form and report view, for example: “This report is generated with AI assistance. Review its sources and warnings before relying on it.” Verify it is also present wherever the report is opened from Notion or email, or that the user is otherwise clearly informed before interacting with the AI output.
- **Escalation needed?** **Yes — limited legal/privacy review** to confirm the notice is adequate and whether the exception could apply in the actual user context.

### Gap 2 — Machine-readable marking of generated report text

- **Obligation:** Article 50(2), AI Act — providers of systems generating synthetic text must ensure outputs are marked in a machine-readable format and detectable as artificially generated, as far as technically feasible and subject to the provision's exceptions.
- **Current state:** The brief says the AI writes report text and the code checks claims against sources. It does not mention machine-readable AI marking in the report, PDF, or copies saved to Notion or sent by email. Claim citations and a human-review reminder are not, by themselves, machine-readable provenance.
- **Required state:** Determine and document technical feasibility and any applicable exception; where the rule applies, mark the generated text/output so that it can be detected as AI-generated. The stated report-generation function does not appear to be merely standard editing, but the exception analysis should be confirmed.
- **Remediation:** Have the developer test a provenance mechanism for each output format and destination (for example, machine-readable metadata or a detectable marker that survives PDF export and Notion/email copying). Record the test results, limitations, and exception analysis. The consolidated Act says systems generating synthetic text placed on the market before 2 August 2026 must take the necessary steps to comply by **2 December 2026**; confirm whether that transition applies to this system, which the brief describes as a local prototype with no production deployment.
- **Escalation needed?** **Yes — technical review** for a feasible interoperable marking method, followed by legal review of feasibility, exceptions, and the transition date.

### Gap 3 — Establish whether personal data reaches the system or vendors

- **Obligation:** Potential parallel GDPR issue, not an AI Act risk-tier obligation. The brief says web/news results can mention people and that a potential supplier could be a sole trader. If a person is identifiable, those details may be personal data. GDPR principles and a lawful basis apply to personal-data processing; processor terms and international-transfer safeguards may also be required depending on the actual data flows and vendors (GDPR Articles 5, 6, 28 and 44 onward).
- **Current state:** The brief marks this as “TO ASSESS.” It does not establish whether personal data is collected, sent to OpenAI/Tavily or other vendors, included in generated or stored reports, retained, or transferred outside the EEA.
- **Required state:** Before production, identify the data and purposes; determine whether any data relates to identifiable natural persons; establish and document the controller/processor roles, lawful basis, minimisation, transparency, retention, security, processor terms, and any international-transfer mechanism that applies.
- **Remediation:** Draw a data-flow inventory from search/API inputs through model calls, database, report, Notion and email. Test with sole-trader and named-person examples; remove or redact personal details that are not necessary before external API calls; document retention/deletion behavior and vendor locations/terms. Have the bakery's privacy lead or DPO confirm the GDPR analysis before real personal data is used.
- **Escalation needed?** **Yes — the bakery's DPO/privacy counsel**, with vendor-contract review as needed.

### Gap 4 — Prepare users to operate the system responsibly

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

### System classification

For the stated purpose of helping an industrial bakery's procurement team assess sunflower-oil supply risks, the system appears outside the Article 5 prohibited practices and Annex III high-risk categories; Article 50 transparency requirements should be assessed for its AI-generated reports and user interaction.

### Roles

The developer is the likely provider of the integrated agent if it is supplied or put into service under the developer's name. Bakery Foods Inc. would likely be the deployer through its procurement staff. OpenAI supplies the integrated AI models and has a separate model-provider role; the other listed software, data and workflow services are vendors, but the brief does not establish that they are providers of AI components used by this agent.

### Key findings

1. The current screen's human-review reminder does not establish that users are told they are interacting with AI. The interface and report destinations need review against Article 50(1).
2. The report, PDF and copies saved to Notion or sent by email have no documented machine-readable marking of AI-generated text. Confirm technical feasibility, exceptions and the applicable compliance date under Article 50(2).
3. Web/news results may identify people, and a potential supplier may be a sole trader. The data flows to AI and other vendors, storage locations, retention, and GDPR roles and safeguards have not been established.

### Recommended next steps

Before any production use, first map the data from search and company records through model calls, the database, generated reports and downstream tools. Have the bakery's privacy lead confirm whether personal data is involved and what GDPR safeguards are needed. In parallel, add a clear AI-use notice and test machine-readable marking across the screen, PDF, Notion and email outputs; document the legal and technical assessment, including whether the 2 December 2026 transition date applies. Then prepare a short staff onboarding guide on generated content, source checks, warnings and the unreviewed Notion draft. Revisit provider/deployer roles if the bakery supplies the system under its own name or changes its purpose.

### Caveats

This is a first-pass educational assessment based on the stated intended use and the project brief. The MVP is a local portfolio prototype with no real client or production users; Bakery Foods Inc. and its company data are fictional. This memo is not legal advice, a legal opinion, an AI Act conformity assessment, or a certification. A qualified lawyer and the deployer's privacy lead should confirm the classification, roles, and data-protection analysis before production deployment.
