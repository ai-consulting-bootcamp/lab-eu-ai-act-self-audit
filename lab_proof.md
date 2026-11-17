# EU AI Act Self Audit

**Project:** VC Startup Screening Agent  
**Author:** Sandra Obregón

- [Code snapshot and saved Lawra report](./vc_screening_code_and_evidence.zip)
- [Original project and run instructions](https://github.com/Sobregonm/project3-vc-screening/tree/84afd71f9c2356ff038f84cbd59c9a83188a3161)

## Phase 1 · System brief

I designed and built a prototype to help an investment analyst at a venture capital fund review startups. The analyst enters a startup’s name and official website. The system collects public information and prepares an internal report. The report helps the analyst decide whether to invite the startup to a first meeting. I used Puente Ventures, a fictional fund, to define the investment criteria for the prototype.

The system uses Tavily to find public sources, Jina Reader to read the company’s website, and GDELT to look for recent news. It also reads the fund’s criteria from a local file. The OpenAI model receives the company name and short extracts from Tavily search results. It looks for evidence about where the company is based and what funding stage it has reached. Public sources may contain personal data, such as founders’ names. Whether the extracts sent to the model in the saved test contained personal data remains unverified.

The system checks that the quotes returned by the model appear in the search extracts. It saves a report with findings, source links, and questions for further review. The report can mark a criterion as “Meets,” “Does not meet,” or “Not verified.” For example, in the saved Lawra report, the headquarters and funding stage were marked “Not verified.” The system also recorded that the news search failed and saved the report using the other available sources.

The intended users are investment analysts and associates at a fund. The startups they review may be affected because the report can influence which companies are invited to a first meeting. In the planned workflow, the analyst runs the agent directly, checks the relevant sources, reviews missing or conflicting information, and makes the final decision about the meeting. The prototype stops after saving the report. It sends no invitations and makes no investment decisions. I tested it with Kalipso and Lawra. A pilot with a real investment team remains a future step.

## Phase 2 · First-pass risk classification

| Question | Assessment |
|---|---|
| Does Article 5 apply? | No prohibited use was identified. The agent checks company information against fund criteria. Its purpose is to screen startups, and it does not profile founders. |
| Does the system operate in an Annex III area? | No listed use was identified. The agent reviews companies for a first investment meeting. Annex III, point 5(b), refers to assessing the creditworthiness of natural persons or establishing their credit scores. |
| If Annex III applies, does the system significantly influence decisions? | Not applicable. The report may influence access to a meeting. The type of decision is outside the Annex III uses identified in this review. |
| Does Article 50 apply? | The analyst runs the agent and receives a tailored report. Under Article 50(1), the provider should inform the analyst by the first interaction unless the use of AI is obvious. Article 50(2) is open. The model extracts structured evidence and the program builds the report from a template, quotes and rule results. Confirm whether any model output in this setup is synthetic text subject to machine-readable marking. The planned report is internal. Article 50(4)'s public-interest publication condition for text is not met in that planned use. |
| First-pass risk tier | **Limited risk / transparency, provisional.** Confirm whether the use of AI is obvious at the analyst’s first interaction and resolve the marking question. |
| One-sentence justification | The agent screens companies for a first investment meeting and responds to the analyst’s query, so Article 50(1) is relevant if the use of AI is not obvious. |

The [European Commission Compliance Checker](https://ai-act-service-desk.ec.europa.eu/en/eu-ai-act-compliance-checker) cross-check is pending. This first-pass result comes from the [EU AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng), Articles 5 and 50 and Annex III.

## Phase 3 · Role map

| Role | Entity | Key obligations or checks |
|---|---|---|
| Provider of the screening system | Sandra built the prototype. For this audit, assume that she would put it into service under her own name. | Check Article 50(1) and provide a clear notice where required. Confirm if Article 50(2) applies to any output. |
| Deployer | The venture capital fund in the proposed pilot. Its analyst runs the agent and checks the evidence before deciding about a meeting. | Use the tool within the stated purpose and train analysts to interpret the report and check sources as an operational control. The planned internal use does not trigger the public-interest publication duty for AI-generated text under Article 50(4). |
| Third-party vendors and services | OpenAI provides the general-purpose model. Tavily, Jina Reader, and GDELT provide search, page extraction, and news results. | General-purpose model provider duties apply separately as relevant, including integration documentation under Article 53. For the other services, confirm the terms and any AI role component by component. Their use alone does not establish an AI Act risk tier for those services. |

## Phase 4 · High-risk checklist

Skipped because the first-pass review did not identify a high-risk use.

## Phase 5 · Gaps and remediation

| Gap | Obligation | Current state | Required state | Remediation | Escalation |
|---|---|---|---|---|---|
| 1. Notice at launch | EU AI Act Articles 50(1) and 50(5), if applicable | The command starts the research and prints progress. The entry point has no explicit notice. | Make the use of AI clear by the first interaction unless it is already obvious. | Put a short AI notice in the command help and at startup. Test what a first-time analyst sees. | **Yes.** Ask legal to confirm how the obligation applies to the planned interface. |
| 2. Output marking | EU AI Act Article 50(2), if applicable | The report uses a set format, source extracts and rule results. No machine-readable AI marking is documented. | Mark covered synthetic output in a machine-readable format and make it detectable, subject to the statutory exceptions. | Trace what the model returns and what reaches the analyst. If marking is required, agree with the vendor which component provides it and verify that it survives export. | **Yes.** Legal and the model vendor. |
| 3. Personal data in public extracts | GDPR Articles 5 and 6, if personal data are processed | The prototype sends public extracts to OpenAI. The saved run does not show whether they contained personal data. | Process only necessary personal data and identify a lawful basis where personal data are used. | Review representative inputs, remove irrelevant personal details before sending extracts, and document the purpose and lawful basis with the fund. | **Yes.** The fund’s privacy lead or data protection officer. |

## Phase 6 · Compliance memo

**To:** Head of Product, Puente Ventures  
**From:** Sandra Obregón  
**Subject:** AI screening prototype before pilot

The agent is provisionally classified as **limited risk / transparency**. It helps the fund review companies for a first meeting. The analyst uses it directly, so we should confirm what notice is needed during first use.

I built the prototype and would be the system provider if I put it into service under my own name. The fund would be the deployer. OpenAI supplies the model used to find evidence in search results. The analyst checks the evidence and makes the final decision.

Before the pilot, add a short notice where analysts start the tool and test it with a first-time user. Next, trace what text comes from the model and ask legal and the vendor whether any of it needs a machine-readable mark. Then ask the fund’s privacy lead to review the public extracts sent to the model. Remove personal details that are not needed and confirm the lawful basis if personal data are used.

This memo is a preliminary assessment. It is not a legal opinion, a conformity assessment, or a certification.

## Run evidence and final output

**Previously recorded test.** The command and input are documented in the project README.

```bash
python main.py "Lawra" "https://lawra.io/"
```

The original output is `vc-screening/reports/lawra-screening.md` inside the [code and evidence archive](./vc_screening_code_and_evidence.zip). The report cites Lawra’s official website for the product description and lists search results for review, including a page titled “Invest in Lawra — Seed Round.” The report marks headquarters and funding stage as **Not verified**. It does not treat the investment page as proof of a completed round. Its final recommendation is to review the evidence before deciding on a first meeting.

**Observed failure.** The saved report records `News search error: GDELT returned HTTP 429.` It marks recent news as **Not verified** and retains the other sources. There was a saved report despite the news failure. This audit uses the original saved output.
