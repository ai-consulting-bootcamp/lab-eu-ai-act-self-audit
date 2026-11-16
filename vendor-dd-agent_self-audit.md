# Self-audit: Vendor Due-Diligence Agent (Project 3)

**Author:** [Your Name] · **Date:** 16 November 2026 · **Framework:** EU AI Act (Reg. (EU) 2024/1689, as amended by the Digital Omnibus, Reg. (EU) 2026/1744)

---

## Phase 1 – System brief

**What it does.** The system pre-screens one company before it becomes a vendor and writes a due-diligence report for a compliance officer.
- It looks the company up in GLEIF and the Dutch KvK register to find its legal name, status, former names and parent companies.
- Code screens all those names against sanctions and PEP data. A hit sends the run to an enhanced review.
- In the review, an AI agent searches the news for adverse media and pulls in AML and sanctions guidance from a small library of official documents.
- The AI proposes a risk rating with red flags. Every flag needs a source. **Fixed code rules set a minimum rating that the AI can raise but never lower.**
- Before the report is saved, code checks that every amount appears in the sources and every cited guidance page was actually retrieved.

**Inputs.**
- A company name (optionally a KvK number), entered on the command line, in a Streamlit app or through an n8n form.
- Public data: GLEIF, KvK (**in the MVP its test environment, with fictitious data**), OpenSanctions sanctions and PEP data, news articles, and 5 guidance documents (FATF, DNB, European Commission).
- Personal data inside those sources: people on sanctions and PEP lists, and people named in news articles, sometimes in connection with alleged crimes. They don't know they are being screened.

**Outputs.** A report of up to 2 pages. It contains:
- the company's identity
- screening results
- red flags with evidence
- a rating (Low, Medium or High)
- a recommendation (Onboard, Onboard with conditions, Escalate or Do not onboard)
- a "Data limitations" section for every check that failed

It does **not** approve or reject the vendor.

**Who is affected.**
- Vendors, who may be delayed or turned down based on the report.
- People named in the report, whose reputation can suffer from a wrong match or a misread article.
- Indirectly, the compliance officer's firm, which relies on the report for its legal duties.

**Human review.** A compliance officer reads every report and makes the decision. In the MVP, nobody checks the report before the officer sees it. The fixed checks are code. The AI only researches the news, proposes the rating and writes the summary.

**Who built it.** I built it alone, in Python with LangGraph. Third-party services:
- OpenAI (gpt-4o-mini, a general-purpose language model)
- Tavily (news search)
- Pinecone (document library)
- GLEIF, KvK and OpenSanctions (data)
- LangSmith (tracing)
- n8n and Streamlit (front ends)

**Who would use it in production.** Compliance officers at Dutch regulated firms (law firms, notaries, payment companies) that must check new vendors before onboarding.

---

## Phase 2 – Risk tier classification

| Question | Answer |
|---|---|
| Does the system fall under any prohibited category (Art. 5)? | **No.** The closest candidates are social scoring (Art. 5(1)(c)) and crime-risk profiling (Art. 5(1)(d)), and neither fits. The system rates *companies* as vendors from verifiable facts (registry entries, list memberships, published news). It doesn't score people on their social behaviour, and it doesn't predict whether a person will commit a crime. |
| Does it operate in any of the eight Annex III areas? | **No, as designed.** It doesn't touch biometrics, critical infrastructure, education, migration or justice. It isn't used by or for law enforcement (6). It doesn't assess creditworthiness or access to essential services (5). **One edge case is employment (4):** if the "vendor" is a self-employed person (eenmanszaak or ZZP'er), screening them could arguably affect a work-related contractual relationship. *Flag for legal review.* |
| If Annex III: does it significantly influence decisions, or is it narrow/preparatory? | Not applicable as designed. If the employment edge case applied, the Art. 6(3) "preparatory task" exemption would likely *not* help, because the system profiles people (directors, PEPs). |
| Does it interact with end users or generate content requiring disclosure (Art. 50)? | **No specific duty.** Users are trained compliance officers using an internal tool they know is AI-based, so the Art. 50(1) exception for what is "obvious from the context" applies. The report is an internal document, not text published to inform the public (Art. 50(4)). |
| **First-pass risk tier** | **Minimal risk** |
| **One-sentence justification** | The system supports vendor onboarding decisions about legal entities. That matches no Art. 5 practice and no Annex III use case, and it is used internally by professionals who know it is AI, so no Art. 50 duty applies. |

**Evidence for "minimal", not just a default.** I tested each tier explicitly rather than assuming nothing applies. Three points could still move it, and the clarifying questions below would settle each:
1. Are self-employed individuals screened as vendors? That could bring in Annex III 4.
2. Will the client rebrand it and sell it as a screening service to third parties? That changes the roles, not the tier.
3. Will it ever be used to screen *customers* of a bank or payment company? Then it starts to influence access to financial services, and creditworthiness or profiling questions need a fresh look.

**Cross-check:** EU AI Act Compliance Checker result: *[fill in after running it]*.

---

## Phase 3 – Role map

| Role | Entity | Key AI Act obligations |
|---|---|---|
| **Provider** | Me (developer), or the client if it puts the system into service under its own name | No high-risk or Art. 50 obligations. Good practice: instructions for use, a documented known-limitations list, and staff AI literacy (Art. 4; check its scope after the Omnibus amendments). If the system is later put to an Annex III use, the provider carries the full Chapter III obligations. |
| **Deployer** | The regulated firm (its compliance team) | No specific AI Act obligations at minimal risk. Remains fully responsible for the onboarding decision and its sanctions-law duties. The tool doesn't shift that responsibility. |
| **GPAI model provider** | OpenAI (gpt-4o-mini) | Its own Chapter V obligations as a general-purpose AI model provider: technical documentation, information for downstream providers, copyright policy, and a training-data summary. I'm a downstream provider integrating its model. |
| **Data / tool vendors (not AI systems)** | GLEIF, KvK, OpenSanctions, Tavily, Pinecone, LangSmith, n8n | No AI Act role. Relevant instead under GDPR (as processors or independent controllers) and under licence terms. |

*Role mapping is first-pass; a lawyer should confirm it.*

---

## Phase 4 – Obligation checklist

**Not applicable.** The system isn't high-risk, so the Arts. 9–15, 43, 47–49 and 72 checklist doesn't apply. Several of those controls already exist voluntarily, which would make a future high-risk route easier:
- logging and tracing (LangSmith, an audit-trail section in each report)
- human oversight (the officer decides)
- robustness testing (failure tests, a 7-company regression set)

---

## Phase 5 – Gap analysis and remediation plan
*Since the tier is minimal, these are the parallel legal issues and the risks the design creates.*

**Gap 1 – Criminal-offence data about named people (GDPR Art. 10)**
- **Current state:** adverse media about directors, employees and PEPs is collected, stored in the report, and sent to OpenAI and LangSmith.
- **Required state:** personal data on criminal offences may only be processed under official authority or where EU or member-state law allows it (in NL, the UAVG). Vendor screening isn't Wwft customer due diligence, because the Wwft covers *clients*, not *suppliers*, so the legal basis is weaker than I assumed.
- **Remediation:**
  - Keep findings about individuals to what is needed for the sanctions and integrity check.
  - Summarise rather than copy allegations.
  - Exclude private individuals who are only "mentioned".
  - Run a DPIA.
- **Escalation:** Yes, to the client's DPO and a privacy lawyer, for the UAVG basis.

**Gap 2 – Accuracy and harm to third parties (GDPR Art. 5(1)(d); reputation)**
- **Current state:** the agent checks that an article names the company, but not the company's *role*. In testing, ASML and Heineken got "Medium" for crimes committed *against* them. Fuzzy sanctions matching can produce false hits (ING Bank vs. JSC Ingo Bank at 94.1).
- **Required state:** personal and company data used for decisions must be accurate, and errors must be correctable.
- **Remediation:**
  - Add a `company_role` field (perpetrator / victim / mentioned). In code, cap victim and mentioned findings at Low.
  - Keep "likely false positive" hits visible but clearly labelled.
  - Give the officer a way to record corrections.
- **Escalation:** No.

**Gap 3 – Transparency to the people screened (GDPR Art. 14)**
- **Current state:** the people screened aren't told.
- **Required state:** a privacy notice, unless an exemption applies, such as disproportionate effort (Art. 14(5)(b)).
- **Remediation:** the client adds a screening clause to its vendor onboarding terms and privacy notice ("we screen your company, its directors and owners against sanctions lists and public media").
- **Escalation:** Yes, to the DPO.

**Gap 4 – Transfers and retention via US services**
- **Current state:** company and person names, article snippets and the full prompts go to OpenAI, Tavily, Pinecone and LangSmith (US). LangSmith stores every prompt with no retention limit set.
- **Required state:** data processing agreements, a valid transfer mechanism (EU-US Data Privacy Framework or SCCs), and storage limitation.
- **Remediation:**
  - Sign DPAs.
  - Choose EU regions where they're offered.
  - Set LangSmith retention to 30 days or mask personal data in traces.
  - Write a logging policy.
- **Escalation:** Yes, to the DPO.

**Gap 5 – Automated decision in practice (GDPR Art. 22)**
- **Current state:** the report recommends "Do not onboard" or "Onboard". Nothing records whether the officer actually reviewed it.
- **Required state:** if the vendor is a natural person, a solely automated decision with significant effects isn't allowed without safeguards. More broadly, the firm must be able to show a human made the decision.
- **Remediation:** a human-oversight procedure (see Stretch). The officer's decision and reason are stored next to each report.
- **Escalation:** No.

**Gap 6 – Data licences (production blocker, not AI Act)**
- **Current state:** OpenSanctions bulk data is free for non-commercial use only, and KvK runs on the test environment.
- **Required state:** a commercial licence and live KvK access before any client use.
- **Remediation:** budget for an OpenSanctions commercial licence and a KvK live subscription, and state the data source date in every report (already done).
- **Escalation:** Yes, to the client's procurement and legal team.

---

## Reinforce

**What I glossed over:**
- **LangSmith** stores *every* prompt, including names and allegations about real people, on a US service. In my brief I described it only as "tracing". It doesn't change the AI Act tier, but it is the largest GDPR exposure in the design.
- **The AI also classifies.** It doesn't just "write prose": it decides which articles count as findings and whether a finding is about the company. That is an inference about real people. Again the tier stays the same, but the accuracy duty matters more.
- **My brief said the firm relies on the report for its Wwft duties.** That's only partly right. The Wwft covers clients, not vendors. Vendor screening rests on sanctions law and integrity and outsourcing expectations. That weakens the legal basis for processing criminal-offence data (Gap 1).

**A design decision that now creates a compliance burden.** Sending full adverse-media text to a US LLM and logging everything in LangSmith by default. With hindsight I would:
- minimise personal data before the LLM step (company-level snippets only)
- use EU-hosted services where possible
- set trace retention from day one

---

## Stretch – see `vendor-dd-agent_human-oversight-procedure.md`
