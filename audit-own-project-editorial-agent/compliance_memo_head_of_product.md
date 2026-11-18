# Compliance Memo — Editorial Research Agent

**To:** Head of Product, La Insumisa (fictional) · **From:** Jaime Garate Marquerie · **Date:** 17 November 2026
**Subject:** First-pass EU AI Act review before any use with real bookshops

**1. Classification.** On a first pass, the agent is **minimal risk** under the EU AI Act. It is not a banned practice (Article 5). It is not used in any of the eight high-risk areas of Annex III, such as hiring, credit or education, so the heavy high-risk rules do not apply. One question remains open: the reports contain short texts written by AI, which may need to be marked as AI-generated (Article 50(2)).

**2. Who is responsible.** I am the **provider**, because I built the agent and would offer it under my name. A bookshop that uses it at work is the **deployer**. When I use it in my own bookshop, I hold both roles. Google supplies the AI model (Gemini) and has its own duties as a model provider; these do not replace mine. Tavily, Open Library and Google Books supply data only.

**3. Key findings**
1. **The AI service runs on Google's free tier.** Under its terms, Google may use what we send to improve its products, and those terms appear to allow only the paid service for applications used in the European Economic Area. What we send includes public information about authors.
2. **Some content looks more reliable than it is.** AI-written book summaries are displayed as if they were the publisher's text. A language check fails, so a Catalan edition was marked "Spanish edition verified".
3. **Data is kept and published without rules.** Each run stores web content about authors and copied publisher text, and these files are in our public code repository. There is no deletion rule.

**4. Recommended next steps, in order**
1. **Before any pilot:** stop using the free AI tier. Move to a paid plan, or another provider, once a lawyer has reviewed its terms.
2. **Fix what the reader sees:** label every AI-written field, add a machine-readable "AI-generated" tag, and fix and test the language check.
3. **Data hygiene:** send the AI model only book data, stop storing full web pages, set a deletion rule, and remove raw content from the public repository. A data-protection adviser should review this step.
4. **Before handing the tool to other shops:** write a one-page user guide (Article 4 AI literacy), add a "pending review" step and a record of the bookseller's decisions, and measure accuracy on five authors and two shop profiles.

**External review needed:** a lawyer on Article 50(2) and the Gemini terms; a data-protection adviser on GDPR (legal basis, deletion, transfers); an IP lawyer on storing publisher text.

**5. What this memo is not.** It is not a legal opinion, a conformity assessment or a certification. It reflects the code as of 13 November 2026 (commit `3939562`) and 20 test runs with one author. The classification could change if the product changes: for example, if it starts using customer data or publishing AI texts to the public. Please confirm these conclusions with a lawyer before any use on the EU market.
