# EU AI Act Audit — Should-Cost Benchmarking Agent
**Auditor:** Jay Ramamoorthi
**Subject system:** Autonomous Should-Cost Benchmarking Agent (Project 3 capstone)

## Phase 1: System Brief

**What the system does:** Given a plain-language description of a manufacturing part (e.g., "a cylindrical steel shaft with a threaded end"), the system estimates what that part *should* cost to make — independent of any supplier's quote — so a procurement buyer can negotiate from a defensible number rather than trusting the supplier's price. It grounds each estimate in real material pricing, a plausible manufacturing process sequence, physics-based machining time, and real freight logistics, then delivers a fully cited report.

**Inputs:** A part description (free text), material description (free text, e.g. "Aluminum 6061"), part weight, stock utilization fraction, source and destination addresses (for freight), annual production quantity, and a set of yes/no feature flags (holes, threads, heat treatment, surface finish, welding) plus an optional explicit manufacturing route (casting/forging/machined-from-stock). None of this is personal data — it is part specifications, material specifications, and business locations (factory/plant addresses), not information about any individual person.

**What it outputs:** A markdown cost report with full line-item breakdown (material, per-process labor/machine/energy cost, freight legs, overhead), a total should-cost per unit and annualized total, and a live editable Google Sheet with real formulas. The same report is also pushed into a Notion page. The system also returns structured JSON via its API for programmatic use.

**Who is affected by the output:** No individual person is scored, evaluated, or subject to a decision by this system. The output is a cost estimate about a physical part. Indirectly, a supplier's negotiating position could be affected if a buyer uses the estimate to push back on a quote — but the system does not identify, score, or make any determination about the supplier as an entity or about any person.

**Human review:** The system is fully automated end-to-end — it takes an input, runs deterministic math and LLM-assisted classification steps, and produces a finished report with no human checkpoint before the report is generated or delivered. However, no automated action is taken *on* anyone based on this output — a human (the consultant or the client's procurement buyer) reads the report and decides whether/how to use it in an actual supplier negotiation. The system's output is advisory information, not an automated decision.

**Who built it:** Built solely by the author (Jay), as an individual capstone project — no team, and no third-party AI product was configured; the LLM (OpenAI gpt-4o-mini) and vector database (Pinecone) are foundational components integrated into custom-built orchestration logic (LangGraph), not an off-the-shelf AI tool.

**Who would use it in production:** Per the documented go-to-market plan, this is not intended as self-serve software in its current form. It's the working core of a paid, hands-on consulting engagement: the author operates it directly, on behalf of procurement teams at automotive/manufacturing client companies, as part of a billed advisory engagement. Clients receive the output (the report/sheet); they do not operate the system themselves.

---

## Phase 2: Risk Tier Classification

| Question | Answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | No. Nothing in the pipeline scores, manipulates, or performs biometric/emotional inference on a person. |
| Does this system operate in any of the eight Annex III areas? | No. Considered specifically against "essential services" (the closest candidate, given the procurement context) — ruled out because the system is a B2B pricing/procurement tool, not a determination of credit, insurance, or public-benefits eligibility. |
| If Annex III: does it "significantly influence" decisions in that area, or is it narrow/preparatory? | N/A — no Annex III area applies. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | Examined and resolved as a non-issue. No chatbot or live conversational interaction exists anywhere in the pipeline (input → output is one-shot, no back-and-forth). The report does include LLM-generated narrative alongside deterministic tables, but the report already self-discloses its automated origin in its own footer, and the engagement context (an AI consulting service) means there is no reasonable basis for a reader to believe a human wrote it undisclosed. |
| **First-pass risk tier** | **Minimal risk** |
| **One-sentence justification citing the specific article or Annex entry** | The system evaluates a physical part, not a person, and does not fall within any Annex III high-risk domain (specifically ruled out against "essential services") or trigger Article 5 or Article 50 obligations. |

**Ambiguity flagged:** the Article 50 narrative-content question is the one genuinely close call in this classification — a stricter reading could argue any AI-generated prose delivered to a third party warrants an explicit disclosure regardless of context. This is addressed proactively in the Stretch artifact below rather than left as an open risk.

---

## Phase 3: Role Map

| Role | Entity | Key AI Act obligations |
|---|---|---|
| **Provider** | Jay, as the AI consultant who designed, built, and operates the system | Since the system is minimal risk, no Annex III provider obligations (risk management system, conformity assessment, etc.) apply. General AI Act principles (no prohibited practices, transparency where triggered) still apply regardless of risk tier. |
| **Deployer** | Jay — personally operates the system on the client's behalf under the current Sprint 1–2 engagement model; the client receives the output but does not operate the system themselves | Same as above — no high-risk deployer obligations triggered at minimal risk. |
| **Vendor — AI component** | OpenAI (LLM: six distinct classification/generation calls per request — shape, material, manufacturing route fallback, machine size, labor cost-region, electricity cost-region, plus narrative generation) | Carries its own general-purpose AI model obligations under the Act, separate from this system's classification — a dependency outside direct control, worth naming in client-facing documentation. |
| **Vendor — infrastructure (non-AI)** | Pinecone (vector storage/retrieval — no reasoning of its own), CommodityPriceAPI, OpenCage, Google Sheets API, Notion API | No AI Act obligations — these store, look up, or move data exactly as instructed; none interpret, decide, or generate. |

**Forward-looking note:** if the engagement model shifts toward the Sprint 3 self-serve product (client operates the system independently), the role map changes — the client becomes deployer, and Jay becomes closer to a pure provider/maintenance vendor. Not a current gap; worth revisiting before that transition.

*(Phase 4 — high-risk obligation checklist — is skipped per the lab's own instruction, since the system is not high-risk.)*

---

## Phase 5: Gap Analysis

**No gaps identified.** The system is minimal risk (no Annex III domain touched, no person evaluated or scored), and the one candidate transparency question (AI-generated narrative content) resolves to a confirmed non-issue — the report already self-discloses its automated origin, and there is no undisclosed AI-to-human interaction anywhere in the pipeline.

**Parallel legal note:** no personal data is processed anywhere in this system — inputs are part specs and business addresses, not data about individuals — so GDPR exposure is minimal. Worth re-confirming if the system ever expands to include named supplier contacts or buyer information tied to a record.
