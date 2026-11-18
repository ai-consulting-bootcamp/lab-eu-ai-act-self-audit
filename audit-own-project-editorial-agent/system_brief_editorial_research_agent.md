# System Brief — Editorial Research Agent for Independent Bookshops

*Project 3 prototype · checked against repository commit `3939562` (13 Nov 2026)*

**What it does.** The system helps an independent bookseller decide which books by a given author might suit her shop. She types a request (e.g. "books written by Leila Guerriero"). The system searches the web and two book catalogues, finds a recent edition of each work published in Spain, and asks an AI model whether each book fits the shop's profile. It writes a report with a source link for each key fact. It does not order books, publish anything to customers or decide what the shop buys.

**Inputs.** The request and, optionally, the author's name, typed at a command line; a profile file with the shop's values, sections and exclusions (the only one is a demo for "La Insumisa", a bookshop not yet open, with no customer or sales data); and public data retrieved during each run: web results and publisher pages (Tavily), edition records (Open Library) and book descriptions (Google Books). Personal data involved: authors' names, public web content about them and descriptions of real people who appear in books. Nothing is collected about customers or the bookseller, but her typed request is not filtered.

**What leaves the system.** Search terms go to Tavily; author names and ISBNs to Open Library and Google Books. Google's Gemini model, on its free tier, receives book data, publisher text, web snippets, the request and the profile's values. Under the free-tier terms, Google may use this content to improve its products.

**Outputs.** A Markdown report and a JSON log of every call, result and error. For each book: edition, ISBN, publisher, pages and catalogue discrepancies; a synopsis and genre written by Gemini from a retrieved source (only the genre is checked word for word); themes and a fit judgement labelled "agent's interpretation"; and rejected books with the reason. Missing data shows as "not verified". If the AI judge fails, the report is marked "NOT FINAL".

**Automated vs. human decisions.** The system alone chooses the searches, the five works to review and the edition shown, labels each book "useful" or not, and may rewrite the query and search once more. The bookseller is meant to check sources and take every buying decision, but the software neither requires nor records that review.

**Who is affected.** The bookseller; indirectly, authors and publishers whose books are included or left out, and the shop's customers.

**Who built it.** Jaime Garate Marquerie, as a bootcamp project. Codex wrote most of the code from his instructions; Claude reviewed it.

**Future users.** The founder's own bookshop, then a planned free pilot with Madrid bookshops. No pilot has started.

**Known limits.** Tested with one author and one profile (20 recorded runs) and 49 automated tests with simulated services; accuracy has not been measured. The judge accepted every book in 6 of 7 runs. A language check fails on real data, so a Catalan edition was labelled "Spanish edition verified". Results vary between runs and depend on often-overloaded free services.
