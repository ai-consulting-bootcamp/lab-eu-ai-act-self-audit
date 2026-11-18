# Fundamentals: System Brief
**Procurement Risk & Mitigation Agent.** Updated 18 November 2026.

**Intended production use:** a Raw Materials Procurement Manager at an industrial bakery in Spain uses the system to prepare a procurement risk report, with Procurement Director approval where company policy requires it.

This document describes how the system behaves as built. Where a point is an open question (for example whether something counts as personal data), it is marked **TO ASSESS**. Those marks are uncertainties, not legal conclusions.

Labels: **BUILT** = the code exists and automated tests pass. **RECORDED LIVE** = run with the real services (14 runs). **PLANNED** = not built. **NOT DEFINED** = no decision was made on this during the MVP build.

## Part 1. System brief

| # | Question | Answer |
|---|---|---|
| 1 | What does the system do? | Writes a report that helps a company's buying team understand the procurement risks of one raw material. Ordinary program code does the calculations. An AI model writes the text, and code then checks each claim against its source. Only sunflower oil is supported. The system never approves a supplier, places an order or changes a contract |
| 2 | What inputs does it take? | (a) A web form: product and number of months (1 to 6); no name or free-text field. (b) The company's contracts, forecasts, suppliers and policy documents, held in a database. (c) A public price series from the European Commission. (d) Web and news search results (Tavily and GDELT); may mention people (TO ASSESS) |
| 3 | What does it output? | A 17-section report and an 8-page PDF, marked `completed`, `partial` (some drafted items were removed) or `failed`. Every claim from outside sources carries a word-for-word quote. Claims that cannot be backed up are removed and listed. Potential suppliers identified through web searches are marked UNVERIFIED |
| 4 | Who is affected by the output? | **Organisations:** the company, its existing suppliers and the potential suppliers found through web searches.<br>**Individuals, directly:** none by design. No employee or private person is scored, ranked or assessed, and the system has no employment, pay or hiring use.<br>**Individuals, possibly (TO ASSESS):** a potential supplier could be a sole trader trading under their own name, and a quoted news passage could name a person.<br>**Automated decisions:** none. The system only produces recommendations; no action happens without a person |
| 5 | Does a human review the output before anything happens? | **BUILT (today):**<br>- The report is shown on screen with its status, warnings and a reminder that it needs human review.<br>- A completed or partial report is saved to Notion automatically, **before** anyone reviews it. The Notion copy is an unreviewed draft.<br>- E-mail is sent only on a click.<br>- The reviewer decides outside the system. There is no button to edit, reject or flag a report. If the reviewer finds a problem, they can ignore the report, start a new run, or delete the Notion page by hand.<br>**PLANNED (not built):** a recorded sign-off by a named approver before any action |
| 6 | Who built it? | One author, with an AI coding assistant. The author built the report logic, calculations, checks, web app and n8n workflows, and set up existing tools (OpenAI, Tavily, GDELT, Supabase, LangGraph, Gradio, n8n, Notion, Gmail) |
| 7 | Who would use it in production? (INTENDED) | **A Raw Materials Procurement Manager at an industrial bakery in Spain**, with Procurement Director approval where company policy requires it |

## Technical notes (not part of the brief)

- **AI model `gpt-5.4-mini`:** screens search results, may reword searches and writes the report text. **`text-embedding-3-small`:** turns policy text into numbers so the right passage can be found.
- **Plain code:** all arithmetic, database queries, ranking passages, checking quotes, removing unsupported claims, the status, the summary and the PDF.
- Tools: LangGraph (step control), Gradio (web page), fpdf2 (PDF), Supabase (database), n8n (automation).

---

## Note on the MVP
This is a portfolio prototype built by one author as an Ironhack bootcamp project. It runs on the author's computer and has no real client or users. Bakery Foods Inc. and its contracts, forecasts, suppliers, ingredient records and policy documents are **fictional (synthetic data)**. The price series, the web and news content and the search results are real. The 14 live runs were done by the author. Exposure figures are scenario results from those fictional inputs, not a company's real financial impact. Every statement about production use is intended, not real.
