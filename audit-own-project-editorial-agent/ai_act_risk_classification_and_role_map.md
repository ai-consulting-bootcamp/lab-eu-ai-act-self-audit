# EU AI Act — Risk Classification and Role Map (first pass)

**System:** Editorial Research Agent for Independent Bookshops (Project 3 prototype)
**Evidence base:** [`system_brief_editorial_research_agent.md`](system_brief_editorial_research_agent.md); code verified at commit [`3939562`](https://github.com/jaimegmarquerie-ui/proyecto3-agente-editorial/tree/3939562); Week 7 course materials.
**Legal sources:**
- Regulation (EU) 2024/1689 (AI Act), as amended by Regulation (EU) 2026/1744 (Digital Omnibus, in force 27 July 2026).
- Commission Guidelines on Article 50, C(2026) 5054 (non-binding).

**Status:** consulting first pass. Not a legal opinion.

Each statement is marked:
- **[Code]** — verified in the code or the run evidence.
- **[Law]** — taken from the legal text.
- **[Assumption]** — depends on how the product will be used.

---

## 0. Is it an AI system? (Article 3(1))
**Yes.**
- The Gemini component infers outputs from its inputs. It labels each book as useful or not for the shop, proposes the synopsis, genre and themes, and rewrites the search query **[Code]**.
- Other parts follow rules written by the developer: the report template, the routing rule and the ISBN checks. One inferring component is enough to make the whole system an AI system **[Law]**.

## 1. First-pass classification (CFU 1)

The system is **minimal risk on a first pass, with one open transparency question.**

- **Article 5.** None of the prohibited practices applies. The system does not manipulate or exploit people, does not score or profile individuals, uses no biometric data and generates no images **[Code]**. It assesses *books* against a bookshop profile.
- **Annex III.** The system is outside all eight areas. Choosing stock for a bookshop is a commercial decision about products. It is not a decision about a person's access to work, education, credit, essential services, justice or democratic processes **[Code / Law]**.
- **Annex I.** It is not a safety component of a regulated product (Article 6(1)) **[Law]**.
- **Article 50(1)** is unlikely to apply. The bookseller launches a research tool and receives a report; there is no conversation, and the AI nature is obvious from the context **[Assumption]**.
- **Article 50(2) is the open point.** The reports contain short texts written by Gemini: synopses, themes and fit reasons **[Code]**. Two exemptions might apply, and only a lawyer can confirm which, if any:
  - the standard-editing exception;
  - the narrow exemption for business-to-business outputs that stay inside the organisation, described in the Commission's Article 50 Guidelines.

  If neither applies, these texts would need machine-readable marking.

"Minimal risk" is therefore a conclusion drawn from the checks above, not a default.

## 2. Classification table (Phase 2)

| Question | Answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | **No.** None of the nine practices applies, including the ban on non-consensual intimate imagery and CSAM (applies from 2 Dec 2026). There is no manipulation, social scoring, crime prediction, facial scraping, emotion recognition, biometric categorisation or image generation. Inputs are book data and a shop profile; outputs are book reports **[Code]**. |
| Does this system operate in any of the eight Annex III areas? | **No.** (1) Biometrics: no biometric data. (2) Critical infrastructure: no. (3) Education: no. (4) Employment: it does not assess workers or candidates. (5) Essential services and credit: no. (6) Law enforcement: no. (7) Migration: no. (8) Justice and democratic processes: no. It is also not an Annex I safety component (Article 6(1)). |
| If Annex III: does it significantly influence decisions, or is it narrow/preparatory? | **Not applicable**, because no Annex III area applies. For context: the system influences which *books* a shop considers stocking. That is a commercial decision about products, taken by a human, with no profiling of natural persons **[Code]**. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | **50(1) chatbot disclosure:** unlikely. It is not a conversational system and its AI nature is obvious **[Assumption]**. **50(2) machine-readable marking: open.** Internal reports contain Gemini-written synopses, themes and reasons **[Code]**; an exception may apply (standard editing, or the narrow B2B / internal-use exemption in the Guidelines). **50(3)** emotion or biometric disclosure: no. **50(4)** labelling of deepfakes and published public-interest text: no, because reports are internal and not published **[Assumption]**. |
| First-pass risk tier | **Minimal risk**, with a **possible Article 50(2) transparency obligation** (limited-risk tier) pending legal review. |
| One-sentence justification citing the specific article or Annex entry | The system matches no Article 5 practice and falls outside Annex I and all eight Annex III areas (Article 6(1)–(2)), so no high-risk obligations apply; the AI Act duties in play are Article 4 (AI literacy) and possibly Article 50(2) (marking of AI-generated text). |

**Ambiguity: minimal or limited risk?** Three pieces of information would resolve it:
1. A legal reading of whether Article 50(2) covers short AI-written texts inside internal B2B reports, and whether the standard-editing exception or the B2B exemption applies.
2. Whether the bookshop will **republish** report text: on a website, in a newsletter or on shelf cards. That would raise Article 50(4) and copyright questions.
3. The deployment model: own use only, or a pilot offered to other bookshops.

**Cross-check:** the European Commission's [AI Act Compliance Checker](https://ai-act-service-desk.ec.europa.eu/en/eu-ai-act-compliance-checker) is to be run by the student *after* completing this table. Result: **pending** (to be recorded in `lab_proof.md`).

## 3. What is demonstrated and what depends on future use

| Demonstrated (code or evidence) | Depends on future use |
|---|---|
| Inputs are a request, a shop profile and public book and web data. There is no customer or bookseller data | Whether customer or sales data will be added (GTM Sprint 2 plans a stock CSV import; Sprint 3 plans sales data) |
| The system does not order, publish or decide anything. It writes a report | Whether report text will be shown to customers or the public |
| Some report fields are written by Gemini (synopsis, themes, fit reasons) | Whether an Article 50(2) exception applies |
| There is no review step and no record of the human decision | How the bookseller will actually use the reports |
| It has not been placed on the market or put into service | Own use at La Insumisa, a pilot with other shops, or a paid service |

**When obligations become enforceable** (classifying is not the same as applying):
- The AI Act does not apply to research, testing or development **before** a system is placed on the market or put into service (Article 2(8)) **[Law]**.
- Today this is a student prototype, so no AI Act obligation is currently enforceable against its author.
- Obligations start when either of these happens **[Law]**:
  - the founder **puts it into service for his own use** at La Insumisa ("putting into service" includes own use, Article 3(11)); or
  - he **makes it available** to pilot bookshops, even free of charge (Article 3(9)–(10)).
- From that moment:
  - Article 4 applies (since 2 Feb 2025; amended 27 Jul 2026 to "take measures to support" AI literacy);
  - Article 50 applies (since 2 Aug 2026).
- High-risk dates (2 Dec 2027 for Annex III; 2 Aug 2028 for Annex I) are irrelevant unless the intended use changes.

## 4. Role map (Phase 3)

| Role | Entity | Key AI Act obligations (for a non-high-risk system) |
|---|---|---|
| **Provider** | **Jaime Garate Marquerie.** He developed the system and would put it into service or offer it under his own name **[Assumption: no company yet]** | Article 4: take measures to support AI literacy of the people operating the system. Article 50(2): machine-readable marking of AI-generated text, *if* no exception applies. Good practice, not legally required here: instructions for use and a record of this classification. No conformity assessment, CE marking or EU registration, because it is not high-risk. |
| **Deployer** | **Scenario A:** La Insumisa, the founder's own future bookshop. **Jaime is then provider *and* deployer**, because he puts the system into service for his own use. **Scenario B:** pilot bookshops in Madrid, each a separate deployer | Article 4 for staff who use the tool. Article 50(4) only if AI-generated text informing the public on matters of public interest is published (not foreseen). Outside the AI Act: GDPR controller duties for the personal data processed. |
| **GPAI model provider** | **Google** (Gemini 3.5 Flash; fallback Gemini 3 Flash preview) | Article 53: technical documentation; information for downstream providers; a copyright policy; a public summary of training data. Article 55 applies if the model is classified as systemic-risk (not verified here). In force since 2 Aug 2025; the AI Office can enforce since 2 Aug 2026. "Powered by Gemini" does not move Jaime's product-level duties to Google. |
| **Other vendors (data and tools)** | **Tavily** (web search API), **Open Library** (Internet Archive catalogue), **Google Books API** | No AI Act role inside this system: they supply data, not the AI system. If a vendor uses AI internally, it is the provider of *its own* system. Their relevance is contractual (terms of service, quotas), GDPR (they receive search terms such as author names) and copyright (stored content). |
| Importer / distributor | Not applicable | The provider is established in the EU, and nobody resells a non-EU system under another name. |
| Build tools | Codex (OpenAI) and Claude (Anthropic) | Used to write and review the code. They are not part of the running system and have no AI Act role here. |

**Assumptions behind the map:**
1. Jaime acts as a natural person or through his own future business. No consultancy or client owns the code.
2. The pilot would be offered under Jaime's name, which makes him the provider. If a client commissioned the system, owned the code and used it under its own name, *the client* would become the provider (the "hardest case" from the course).
3. No customer data enters the system.

## 5. Obligations (Phase 4)

**The 11-obligation high-risk checklist is not applicable and is intentionally not completed**, because the system is not high-risk (lab instructions: "If your system is not high-risk, skip this table").

| Obligation | Applies? | Current design |
|---|---|---|
| Article 4, AI literacy (provider and deployer) | **Yes**, from putting into service | **Partial.** The README explains limits for developers. There is no user-facing guide and no training record. |
| Article 50(1), AI interaction disclosure | Unlikely | Not needed on the current design (confirm). |
| Article 50(2), machine-readable marking of AI text | **Open** (legal review) | **Not met if it applies.** There is no marker. The Gemini-written synopsis is shown as "ficha editorial: …" without saying that AI wrote it. Themes and reasons are labelled "interpretación del agente". |
| Article 50(3) and 50(4) | No (current design) | Not applicable. |
| **Other EU law** | | |
| GDPR | **Yes.** Personal data of authors and third parties (press bios, a social-media profile, real people described in books) is processed, sent to Google and stored | Not assessed by the developer; no retention rule (see gaps). |
| Copyright / database rights | **Likely relevant** | Publisher page text (up to 4,000 characters) and Google Books descriptions are stored in the evidence files and published in the public repository. |
| Vendor terms (Gemini API) | **Yes** | Uses the free tier. Google's current terms say free-tier content is used to improve Google's products, and appear to reserve applications for EEA users to paid services. |
| Consumer protection / product liability | Low today | The tool is business-to-business and the bookseller is a professional. This becomes relevant if outputs reach consumers or the software is commercialised (confirm with a lawyer). |
