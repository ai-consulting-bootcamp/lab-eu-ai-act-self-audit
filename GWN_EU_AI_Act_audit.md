# Green Warehouse Network — EU AI Act Self-Audit

**Audit subject:** Week 6 Project 3 / Green Warehouse Network  
**Audit date:** 24 November 2026  
**Scope:** First-pass compliance assessment of the MVP as designed

## Phase 1: System brief

Green Warehouse Network (GWN) is a warehouse-network planning tool for Germany. It helps logistics planners decide how many warehouses to open, where to open them, and which primary and backup warehouse should serve each customer. The user first confirms whether the network should minimize annual operating cost or carbon dioxide emissions. The system then creates a network that gives every customer one primary and one backup warehouse.

The MVP uses static data for 24 German customer locations and 12 candidate warehouse locations. Each record contains an identifier and name, latitude and longitude, annual demand, warehouse capacity, fixed cost, and fixed emissions. The model also uses road-distance data and emission factors for diesel and electric freight. Users can change the scenario by asking for actions such as closing a warehouse, increasing demand, changing to electric trucks, or limiting the maximum backup distance. They may also add customer records and override cost or emissions assumptions. The current release does not use live operational data.

The system outputs a recommended set of open warehouses, the primary and backup for every customer, predicted annual cost and carbon emissions, capacity and feasibility warnings, and scenario comparisons. It can show customer assignments on a map and calculate what would happen if one warehouse failed. An OpenAI model interprets chat requests and writes explanations or downloadable reports, but it does not calculate warehouse assignments. The PuLP/CBC optimization model performs the calculations and provides the final solver status.

The likely production users are supply-chain planners and logistics managers at a 3PL, retailer, or manufacturer. The likely affected parties are that organization's employees and customers or sites served by the network. The customer records in the demo contain business locations and demand estimates rather than clearly identified individuals, although future imports could contain commercially sensitive or personal data. A human supply-chain planner reviews and changes scenarios and can reject or ignore the result. However, the MVP does not require an approval step, record who approved a final decision, or prevent operational use until a person with authority has reviewed it.

GWN was custom-built from Python code and data assembled for the course project. The operator may use a Streamlit dashboard for direct use. OpenAI provides the language and report-writing service, while PuLP/CBC performs the optimization. OpenRouteService and Climatiq may provide distance and emission data. In production, the student's or client's organization could place the system on the market or operate it internally; the exact role depends on the commercial arrangement.

## Phase 2: Risk tier classification

| Question | First-pass answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | No identified prohibited practice. GWN does not appear to score or classify individuals for employment, use biometric categorization, infer sensitive traits, exploit vulnerabilities, or perform social scoring. |
| Does this system operate in an Annex III area? | No clear match. Logistics planning is not one of the enumerated employment, education, essential public services, law enforcement, migration, justice, or democratic-process areas. |
| If Annex III: does it significantly influence decisions, or is it narrow/preparatory? | Not applicable, but the system could influence a substantial business decision. That is not enough by itself to place it in Annex III. A legal review would be needed if used for a legally regulated or safety-critical network. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | Yes. It has a natural-language chat powered by OpenAI and creates LLM-written reports. It should disclose that the user is interacting with an AI system and label AI-generated narrative/report content. |
| First-pass risk tier | **Limited risk / transparency-focused**, with a possible minimal-risk classification for parts that do not generate human-facing content. |
| One-sentence justification citing the specific article or Annex entry | GWN is not prohibited and has no clear Annex III use, but its natural-language chat and AI-written reports trigger transparency considerations under Article 50. |

This is a first-pass classification, not a final legal determination. The tier could change if GWN is deployed to support decisions covered by an Annex III area, or if a future version directly executes decisions over workers or essential services. The current model may be high-impact in a particular organization, but the presence of a business impact does not by itself make it Annex III high-risk.

## Phase 3: Role map

| Role | Entity | Key AI Act obligations |
|---|---|---|
| Provider | The team or organization that built GWN and placed or intended to place it on the market under its own name | In a high-risk case, create and maintain risk management, data governance, documentation, logging, transparency, oversight, accuracy/robustness/cybersecurity, conformity, registration, and post-market monitoring controls. For limited-risk features, provide the required AI interaction and content disclosures and keep the relevant operational records. |
| Deployer | A logistics 3PL, retailer, manufacturer, or consulting client using GWN in a professional planning process | In a high-risk case, ensure competent human oversight, monitor operation, use the system in accordance with instructions, keep logs when available, perform a fundamental-rights impact assessment where applicable, and report serious incidents. Under the current limited-risk assessment, ensure staff-facing disclosure is retained and staff are not misled about whether the chat or report is AI-generated. |
| Vendor | OpenAI provides the language-model and report-generation component; OpenRouteService and Climatiq or fallback sources provide routing/emissions data | OpenAI is a provider of a general-purpose or application-model component depending on the final architecture and must meet its relevant role obligations. The GWN provider should verify model terms, system instructions, data handling, intellectual-property terms, and transfer arrangements. Data vendors should have suitable contracts and processing terms. |

Roles can overlap. If GWN is offered as a hosted or paid product by the creator, the creator is likely both provider and service operator. If a client simply configures an existing GWN product for its own team, the client is more clearly the deployer. Third-party model and data terms need legal review.

## Phase 4: Obligation checklist

The first-pass assessment is not high-risk, so the 11-item high-risk provider checklist is not mandatory in the MVP. The team should not treat this as a finding that compliance work is unnecessary. Article 50 disclosure obligations and applicable data protection and consumer laws still need to be assessed.

| Obligation | Article | Current status | Note |
|---|---|---|---|
| Natural-language AI interaction disclosure | 50(4) | **Gap** | The interface does not clearly state to users that the chat is an AI system. |
| Disclosure of AI-generated report content | 50(4) or related transparency rules | **Partial** | The download is clearly a report, but it does not clearly distinguish generated narrative from solver-produced findings. |
| GDPR and data governance | GDPR | **Partial** | Static demo data is limited, but future customer/location imports, access controls, retention, privacy notice, processor terms, and lawful basis are not defined. |
| High-risk obligations | 9–15, 43, 47–49, 72 | **Not applicable on current facts** | Recheck if GWN materially determines hiring, critical infrastructure, essential services, or another Annex III use. |

## Phase 5: Gap analysis and remediation plan

### Gap 1
- **Obligation:** Article 50 requires clear information when a person interacts with an AI system in the form of natural language.
- **Current state:** The dashboard presents a chat, but it does not visibly state that the chat uses an AI model.
- **Required state:** Before or at the start of the chat, the interface should identify the assistant as AI-powered and distinguish chat interpretation from the deterministic solver.
- **Remediation:** Add a persistent notice such as “This chat uses AI to interpret requests and explain results. Warehouse locations and metrics are produced by the deterministic optimization solver.” Add the notice to onboarding, reports, and error screens.
- **Escalation needed:** **No** for an initial product copy change; **Yes** for a final legal interpretation if GWN is offered to consumers or in a public-facing setting.

### Gap 2
- **Obligation:** Article 50 transparency rules require AI-generated content to be identifiable when that requirement applies.
- **Current state:** The HTML download contains LLM-written narrative and a solver-generated map, but there is no clear, persistent label that the prose was AI-generated.
- **Required state:** The report should identify AI-generated narrative, identify the underlying solver-produced data, and avoid presenting model-written text as independently verified advice.
- **Remediation:** Add a visible report label and methodology sentence: “Narrative generated with AI from the session data; assignments and metrics are generated by PuLP/CBC.” Include scenario IDs, timestamp, source data version, solver status, and a clear disclaimer that users must verify assumptions before implementation.
- **Escalation needed:** **Yes** to the organization's legal/data team if reports are externally shared, customer-facing, or used for regulated decisions.

### Gap 3
- **Obligation:** While Article 14's human-oversight regime is not established as applicable under this initial minimal/limited-risk classification, safe professional use requires a meaningful review and approval point before action.
- **Current state:** Users can view and download solver results, but the MVP has no mandatory review role, approval record, override reason, or operational handoff.
- **Required state:** A named planner should review the objective, assumptions, capacity, cost, emissions, distances, and backup plan, then record approve, reject, or amend before a decision is implemented.
- **Remediation:** Create a draft human-oversight procedure requiring a second review for any network opening or closure. Add a dashboard approval status and fields for reviewer, timestamp, decision, and override reason. Prevent a downstream integration from sending an approved plan to operations unless this record exists.
- **Escalation needed:** **Yes** to operations leadership and a lawyer or regulator-facing specialist if GWN is used for safety-critical or regulated infrastructure.

### Gap 4
- **Obligation:** GDPR principles, especially purpose limitation, minimization, security, transparency, and processor controls, apply to customer or employee data even though this first-pass AI risk is limited.
- **Current state:** GWN stores chat history, scenario state, scenario results, and session events in browser/session memory and may send chat text and scenario data to OpenAI. The repository does not include a complete privacy notice, retention schedule, access-control model, or processor review.
- **Required state:** The provider should define lawful basis and purpose, minimize fields sent to the model, configure retention and access, document encryption and deletion, and contract with all processors.
- **Remediation:** Before production: inventory all data sent to OpenAI and other vendors; minimize prompts and avoid unnecessary identifiers; publish a privacy notice; define user/session deletion and retention periods; review OpenAI and vendor subprocessor terms and data residency; enable least-privilege access and audit logs; and complete a transfer impact assessment if non-EU or cross-border processing is used.
- **Escalation needed:** **Yes** to the data protection officer or qualified privacy counsel.

### Gap 5
- **Obligation:** Data quality and deployer accountability are material to responsible use, but a complete Article 10 regime applies only if GWN is determined to be high-risk.
- **Current state:** Fixed cost and fixed emissions data are explicitly illustrative, and road data may be estimated with haversine × 1.3 when routing data is unavailable. The interface exposes warnings, but no formal data-owner sign-off or refresh schedule exists.
- **Required state:** Users should know which figures are estimates or placeholders and should not interpret them as measured commercial forecasts. Data sources and refresh dates should be part of every report.
- **Remediation:** Clearly label illustrative fields, record source and fetched date for distance/emissions data, require source/approval metadata for production customer imports, and prohibit making an operational decision until the source data passes a planner or data-owner review.
- **Escalation needed:** **Yes** to supply-chain operations and finance for valuation assumptions; **No** for initial UI labels and report metadata.

## Phase 6: Compliance memo

**To:** Head of Product, Green Warehouse Network client  
**Subject:** First-pass EU AI Act assessment

GWN should currently be classified as **limited risk / transparency-focused** because it uses a natural-language AI interface and can generate AI-written reports, rather than because it is an employment, public-service, justice, or other clearly Annex III system. The prohibited categories in Article 5 do not appear to apply.

The project team or organization placing GWN on the market would be the provider, the logistics planning client and its staff would be the deployer, and OpenAI would be the third-party AI vendor. OpenRouteService and Climatiq are data vendors, although they may become providers or processors depending on the exact production product and contracts.

The top findings are that GWN does not clearly disclose AI use in the chat or distinguish AI-generated report text from solver outputs; it has no mandatory human approval or override record before operational use; and it does not yet have a complete privacy, retention, access-control, and processor framework for production data. The fixed emissions/cost values and estimated routes also need to be visible and validated so planning users do not mistake illustrative inputs for measured facts.

We recommend: (1) add the AI interaction and report-labeling notices; (2) implement a named human review and approval procedure; (3) label every estimate, source, timestamp, and solver status in reports; (4) complete the data protection and vendor review, including retention, access, and transfer controls; and (5) have privacy counsel confirm Article 50 application and classify GWN again if it enters any of the Annex III sectors or directly controls regulated operations.

This memo is not a legal opinion, conformity assessment, certification, or guarantee that GWN complies with the EU AI Act or GDPR. A final conclusion requires commercial, technical, and legal facts that are not available in the MVP.

## Reinforce: hindsight on a design decision

The decision to give the OpenAI model a natural-language chat and downloadable report experience creates more disclosure work than a purely technical solver interface. It also makes the system look more autonomous than it is: the LLM parses requests and writes text, while PuLP/CBC performs the actual optimization. In hindsight, the interface should have included an explanation of this division from the start and a clear “AI assistant” label beside chat and report actions.

## Stretch: draft human-oversight procedure

1. The logistics planner verifies the objective, demand, capacity, cost/emissions sources, warehouse closures, and backup-radius assumptions.
2. The reviewer compares the recommended plan with the current network and recorded solver status; no result with an infeasible or time-limited status is sent as a final plan.
3. Before implementation, a second authorized reviewer approves or rejects the plan, documents any changed assumptions or overrides, and records the reviewer and date.
4. OpenAI-written explanations and reports support the review but do not replace the quantitative solver result or the recorded source data.