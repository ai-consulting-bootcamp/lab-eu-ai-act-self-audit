# lab_proof — Audit your own project (EU AI Act self-audit)

**Student:** Jaime Garate Marquerie · **System audited:** Project 3, Editorial Research Agent for Independent Bookshops
**Status:** prepared locally on 17 Nov 2026. **Not published, not submitted, not accepted.**
**Lab repository:** `ai-consulting-bootcamp/lab-eu-ai-act-self-audit`. The AI reviewer grades against its `rubric.md`; the mapping is in [`README.md`](README.md).

This is the entry point for the reviewer. Each deliverable is linked below.

| Lab phase | File |
|---|---|
| Phase 1 · System brief (488 words) | [`system_brief_editorial_research_agent.md`](system_brief_editorial_research_agent.md) |
| Phase 2–4 · Classification table, role map, obligations | [`ai_act_risk_classification_and_role_map.md`](ai_act_risk_classification_and_role_map.md) |
| Phase 5 · Gap analysis and remediation | [`gap_analysis_and_remediation_plan.md`](gap_analysis_and_remediation_plan.md) |
| Phase 6 · Compliance memo (one page) | [`compliance_memo_head_of_product.md`](compliance_memo_head_of_product.md) |

## 1. Code / workflow
- **Repository:** <https://github.com/jaimegmarquerie-ui/proyecto3-agente-editorial>, audited at commit [`3939562`](https://github.com/jaimegmarquerie-ui/proyecto3-agente-editorial/tree/3939562) (13 Nov 2026).
- **Workflow:** a LangGraph graph with 10 nodes and one conditional edge ([`editorial_agent/graph.py`](https://github.com/jaimegmarquerie-ui/proyecto3-agente-editorial/blob/3939562/editorial_agent/graph.py), lines 1855–1883). A diagram is in [`docs/architecture.md`](https://github.com/jaimegmarquerie-ui/proyecto3-agente-editorial/blob/3939562/docs/architecture.md).

  `read_profile → search_tavily → fetch_books (Open Library) → fetch_google_books → fetch_publisher_pages (Tavily) → describe_books (Gemini) → judge_results (Gemini) → [enough useful books? → write_dossier | otherwise reformulate_query (Gemini) → search_tavily, max 2 attempts] → save_result`

## 2. One real run (used as audit evidence)
- **Who and when:** run by the student on **13 Nov 2026, 09:33 UTC**, with `run_demo.py`. It was **not** re-run during the audit: the audit inspected the saved evidence.
- **Input:**
  ```
  python main.py --profile profiles/moscardo.json --query "libros escritos por Leila Guerriero" --author "Leila Guerriero" --max-works 5
  ```
- **Evidence:** [`evidence/editorial_20261113_093326_829f47ae.json`](https://github.com/jaimegmarquerie-ui/proyecto3-agente-editorial/blob/3939562/evidence/editorial_20261113_093326_829f47ae.json). Key fields:
  - 1 search attempt, `research_status: suficiente`;
  - 5 Tavily results, including the author's El País page and her X profile;
  - 5 works from Open Library, all cross-checked with Google Books;
  - 3 of 5 publisher pages found on official domains;
  - judge `gemini-3.5-flash`, which needed 3 attempts;
  - 5 of 5 books judged "useful".
- **Final output:** [`samples/dossier_20261113_433af978.md`](https://github.com/jaimegmarquerie-ui/proyecto3-agente-editorial/blob/3939562/samples/dossier_20261113_433af978.md). It is a Markdown dossier: per book it shows the edition, ISBN, publisher, discrepancies, synopsis, genre with a literal quotation, themes and the judge's reason, ending with "El librero decide."

**Checks carried out during the audit (17 Nov 2026):**
- Code read line by line for the data sent to each external service (see the classification and gap documents for line references).
- `pytest` on a clean clone at commit `3939562`, in an isolated environment with the pinned `requirements.txt`: **`49 passed in 2.67s`**. All external services are simulated in these tests.
- All 20 evidence files summarised. Every run used the same author and the same profile. The judge accepted every book in 6 of the 7 runs that judged books.

## 3. Failure / limitation found
**A Catalan edition is reported as "edición española verificada".**
- In the run above, book 3 is *Els suïcides de la fi del món* (ISBN 9788419571274, publisher Saldonar).
- The evidence records `languages: [{'key': '/languages/cat'}]` and `language_note: "idioma no verificado"`, yet the dossier shows `Estado de edición: edición española verificada` and never shows the language note.
- **Cause:**
  - The language filter only reads plain strings (`graph.py` lines 476–485), while Open Library returns objects.
  - The tests use string fixtures (`tests/test_graph.py` line 1414), so they pass.
  - The same error appears in 5 real runs (11–13 Nov).
- **Why it matters for the audit:**
  - A "verified" label that is not verified undermines the reliability of the report.
  - Passing tests did not prove real behaviour.
  - See Gap 3 in the remediation plan. The code has not been changed.

## 4. Compliance Checker cross-check
- Not run. The lab lists it as an optional cross-check ("can help").

## 5. Who did what
- **The student:**
  - built Project 3 with Codex writing most of the code;
  - ran every real run;
  - directed this audit and reviewed its conclusions.
- **Claude** (AI tutor):
  - inspected the public repository and re-ran the tests on a clone;
  - drafted these documents for the student's review.
- **Codex:** not used in this audit.
- **No code was modified** during the audit.
