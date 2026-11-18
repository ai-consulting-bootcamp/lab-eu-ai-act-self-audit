# Gap Analysis and Remediation Plan (Phase 5)

**System:** Editorial Research Agent · **Code verified at:** commit `3939562`
The system is **not high-risk**, so this plan covers the issues the lab asks about for non-high-risk systems: transparency gaps, parallel legal issues, and the reliability and oversight weaknesses found in the code.

Each gap is labelled by type, so that legal duties and good practice are not confused:
- **AI Act** — legal duty under the AI Act.
- **AI Act (open)** — may be a legal duty; needs confirmation.
- **Other EU law / contract** — GDPR, copyright, vendor terms.
- **Good practice** — not legally required for a minimal-risk system.

"Current state" describes what is **implemented today**. Everything under "Remediation" is a **proposal, not yet implemented**.

## Summary

| # | Gap | Type | Priority | Escalation |
|---|---|---|---|---|
| 1 | Free tier of the Gemini API used with personal data | Contract + GDPR | **High: blocks real use** | Yes: lawyer / DPO |
| 2 | AI-written text not identified, no machine-readable marking | AI Act (open) + trust | **High** | Yes: lawyer (Art. 50(2) scope) |
| 3 | "Verified" label shown for an unverified language | Good practice (accuracy) | **High** | No |
| 4 | Personal data: no minimisation, retention or publication rule | Other EU law (GDPR) | Medium | Yes: DPO / lawyer |
| 5 | Copyrighted text stored and published in a public repository | Other EU law (copyright) + vendor terms | Medium | Yes: IP lawyer |
| 6 | Human review intended but not built in | Good practice | Medium | No |
| 7 | Accuracy not measured; lenient judge; prompt-injection guard untested | Good practice | Medium | No |
| 8 | No user guide or training (AI literacy) | AI Act (Art. 4) | Low | No |

Owner of every gap is **Jaime (provider)**, with Codex for code changes, unless stated otherwise.

---

### Gap 1 — Free tier of the Gemini API used with personal data
- **Obligation:**
  - Vendor contract (Gemini API Additional Terms).
  - GDPR: legal basis and safeguards for sending personal data to Google, and international transfers.
- **Current state:** every Gemini call uses a free-tier key (`README.md` §1 and §5). Google receives:
  - book data;
  - publisher text;
  - web snippets about the author;
  - the request and the profile's values (`graph.py` lines 895–931, 1103–1185, 1414–1427).
- **Evidence:**
  - Google's current terms state that, on unpaid services, submitted content and responses are used to improve Google's products.
  - The same terms say only paid services may be used when making applications available to users in the EEA. This was read in a translated copy of the page and still needs confirmation.
- **Required state:** a paid or enterprise plan with data-processing terms suitable for an EU business, before any real use.
- **Remediation:**
  1. No use at La Insumisa or with pilot bookshops on the free tier.
  2. Move to a paid Gemini plan, or another provider with EU data terms, and keep a copy of the applicable terms.
  3. Reduce what is sent (Gap 4).
- **Escalation:** **Yes.** A lawyer or data protection adviser should confirm the terms, the processor role and transfer safeguards.

### Gap 2 — AI-written text not identified; no machine-readable marking
- **Obligation:**
  - Possibly AI Act Article 50(2), which applies since 2 Aug 2026 once the system is in service. It requires machine-readable marking of AI-generated text unless an exception applies.
  - Even without that legal duty, a reader must be able to tell source text from AI text.
- **Current state:**
  - The synopsis is a summary written by Gemini ("Resume o cita…", `graph.py` line 916). The dossier shows it as `ficha editorial: <text> — Fuente: <url>` (lines 1631–1633), as if it were the publisher's text.
  - Only the URL is checked, not the wording (lines 1030–1047).
  - Themes and fit reasons *are* labelled "interpretación del agente".
  - Neither the Markdown nor the JSON has a machine-readable marker.
- **Evidence:** `samples/dossier_20261113_433af978.md` ("Sinopsis: ficha editorial: Selección de columnas…").
- **Required state:**
  - Every AI-written field is visibly identified.
  - If Article 50(2) applies, outputs are also marked in a machine-readable way.
- **Remediation:**
  1. Rename the field to "Sinopsis (resumen generado por IA a partir de: <source>)", or show a short **verbatim** excerpt instead of a summary.
  2. Add per-field metadata in the JSON (`"ai_generated": true, "model": …, "created_at": …`) and a front-matter or comment marker in the Markdown.
  3. Add a test asserting that each AI field carries the label.
  4. Print a one-line notice when the tool starts and at the top of each dossier: "This report was prepared with AI (Gemini). Check the sources before buying." (This was suggested in the peer review by Sandra Obregón, 17 Nov 2026.)
- **Escalation:** **Yes.** A lawyer should confirm whether Article 50(2) applies, given the standard-editing exception and the narrow B2B / internal-output exemption in the Commission Guidelines C(2026) 5054.

### Gap 3 — "Verified" label shown for an unverified language
- **Obligation:** accuracy of claims labelled "verified". This is good practice; Article 15 accuracy duties apply only to high-risk systems.
- **Current state:**
  - The language filter accepts only plain strings (`graph.py` lines 476–485).
  - Open Library returns objects such as `{'key': '/languages/cat'}`, so explicit Catalan editions are accepted.
  - The flag `language_note: "idioma no verificado"` is saved in the JSON (line 514) but never shown in the dossier.
  - The tests use string fixtures (`tests/test_graph.py` line 1414), so they pass.
- **Evidence:** *Els suïcides de la fi del món* (ISBN 9788419571274, Catalan) is shown as "edición española verificada" in 5 real runs, from `evidence/editorial_20261111_160344_*.json` to `evidence/editorial_20261113_093326_*.json`.
- **Required state:** a field labelled "verified" is actually verified, and any uncertainty is visible to the bookseller.
- **Remediation:**
  1. Parse both formats of the language field.
  2. Add a regression test using a real-format fixture copied from the evidence.
  3. Print the language and "idioma no verificado" in the dossier.
  4. Rename "edición española" to "edición publicada en España (ISBN 978‑84)".
- **Escalation:** No.

### Gap 4 — Personal data: no minimisation, retention or publication rule
- **Obligation:** GDPR principles (data minimisation, storage limitation, transparency towards people whose data is collected indirectly), and a legal basis such as legitimate interest.
- **Current state:**
  - Web snippets about the author are sent to Gemini. On 13 Nov these included an El País biography and her X (Twitter) profile.
  - Book descriptions about real third parties are also sent (for example, a survivor of the dictatorship in *La llamada*).
  - Everything is stored in the evidence JSON. 20 evidence files are public on GitHub.
  - There is no retention rule, and the free-text request is not filtered.
- **Evidence:** `evidence/editorial_20261113_093326_829f47ae.json` (`results`, `books[4]`); public repository.
- **Required state:** process only what the purpose needs, keep it only as long as needed, and document the legal basis.
- **Remediation:**
  1. Exclude social-media domains from searches (Tavily `exclude_domains`).
  2. Send the judge bibliographic fields, not raw web snippets.
  3. Set a retention rule (for example, delete or strip raw content after 30 days).
  4. Keep only redacted examples in the public repository.
  5. Write a one-page record of processing and a legitimate-interest note.
- **Escalation:** **Yes.** A DPO or lawyer should review the legal basis, the information duty under Article 14 GDPR and transfers.

### Gap 5 — Copyrighted text stored and published
- **Obligation:** copyright and database rights; terms of Tavily and Google Books.
- **Current state:**
  - Publisher pages are fetched with `include_raw_content` and up to 4,000 characters are kept (`graph.py` lines 760 and 829).
  - Google Books descriptions are kept as well.
  - Both are saved in the evidence JSON and published in the public repository.
- **Evidence:** `books[*].publisher_page.content` in the evidence files.
- **Required state:** store only what is needed (URL, short quotation) and respect each source's terms.
- **Remediation:**
  1. Store the URL and an excerpt of up to about 300 characters.
  2. Stop committing raw content.
  3. Decide with legal advice whether to remove past files from the repository history.
  4. Check the API terms of Tavily and Google Books.
- **Escalation:** **Yes.** An IP lawyer.

### Gap 6 — Human review intended but not built in
- **Obligation:** good practice. Article 14 human oversight is a legal duty only for high-risk systems.
- **Current state:** the dossier ends with "El librero decide." (`graph.py` line 1800). There is no review status, no checklist and no record of what the bookseller accepted or corrected.
- **Evidence:** code and every sample dossier.
- **Required state:** the report is visibly provisional until a person has reviewed it, and the review is recorded.
- **Remediation:**
  1. Add a status `PENDIENTE DE REVISIÓN` to each dossier.
  2. Add a short checklist: edition, language, price and availability, synopsis source.
  3. Add a per-title field for the bookseller's decision and corrections, which also feeds Gap 7.
- **Escalation:** No.

### Gap 7 — Accuracy not measured; lenient judge; untested prompt-injection guard
- **Obligation:** good practice. It also supports honest instructions for use (Gap 8).
- **Current state:**
  - 49 automated tests use simulated services. Real testing covers one author and one profile.
  - The judge accepted every book in 6 of 7 runs.
  - The prompt-injection guard is only an instruction to the model; no test uses a malicious page.
- **Evidence:** `pytest` (49 passed, re-run 17 Nov); the 20 evidence files; `graph.py` lines 913–915 and 1161–1164.
- **Required state:** known error rates before pilot users rely on the reports.
- **Remediation:**
  1. Build an evaluation set of 5 authors × 2 profiles, labelled by the bookseller.
  2. Measure the precision of "useful" and the percentage of correct editions and ISBNs.
  3. Add one test page that contains an injected instruction.
  4. Consider ranking instead of a yes/no judgement.
- **Escalation:** No.

### Gap 8 — No user guide or training (AI literacy)
- **Obligation:** AI Act Article 4. Providers and deployers must take measures to support the AI literacy of the people operating the system. This applies from putting into service (amended wording since 27 Jul 2026).
- **Current state:** the README is written for developers. There is no user-facing guide and no training record.
- **Evidence:** `README.md` §7 (known limitations).
- **Required state:** users understand what the tool does, what it does not do and what to check.
- **Remediation:**
  1. Write a one-page user guide covering purpose, limits, known errors and what to verify.
  2. Give a 30-minute briefing to each pilot shop and keep a dated record.
- **Escalation:** No.
