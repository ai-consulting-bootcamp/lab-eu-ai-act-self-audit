# Phases 4–5: Obligations, gap analysis and remediation - Menohelp

The first-pass tier is **limited risk**, so the lab-required part is section A: transparency duties and parallel EU law. Section B is a **contingent** high-risk checklist. It shows what the medical-device route (Art 6(1) + Annex I) would cost, so the client can weigh the wording decision in Gap 1.

## A. Obligations that apply now (limited risk)

| Obligation | Source | Status | What the current design does |
|---|---|---|---|
| Machine-readable marking of AI-generated text | AI Act Art 50(2) | **Gap** | Report is plain Markdown on screen and HTML by email; no metadata, no marking. |
| Clear disclosure that the report is AI-written, at first interaction | Art 50(1) (borderline) + 50(5) | **Partial** | The footer says "generated from your logged cycle data… not medical advice". It doesn't say an AI wrote the text. Only the blood-test and symptom captions mention OpenAI. The emailed copy, which a doctor may read, has no AI label. |
| AI literacy of the people operating it | Art 4 | **Gap** | No training or guidance for the coaches who would run it. |
| Lawful basis for health data | GDPR Art 9(2)(a) | **Gap** | No consent step at all. |
| Accurate privacy information | GDPR Art 13; UCPD | **Gap** | The UI says "Nothing is stored". That is true for my server, but the inputs go to OpenAI and Resend, which keep logs. |
| DPIA | GDPR Art 35 | **Gap** | None written. Health data + new technology + potentially vulnerable users. |
| Security of sending health reports | GDPR Art 5(1)(f), 32 | **Gap** | The report is emailed to any typed address, unverified. |
| Medical-device qualification decision | MDR Art 2(1), Rule 11 / IVDR | **Open ⚖️** | Intended purpose is implied by the disclaimer but not written down; some outputs and copy point towards diagnosis. |

## B. Contingent high-risk checklist (only if MDR/IVDR qualification is confirmed)

| Obligation | Article | Status | Note |
|---|---|---|---|
| Risk management system | 9 | **Partial** | A risk table exists (project draft §9) and the guardrails address the known risks. There is no lifecycle process, no clinical-risk analysis (ISO 14971) and no residual-risk sign-off. |
| Data and data governance | 10 | **Partial** | Coaching sources are curated and cited by page, and stats are tested against hand-computed values. Reference norms are undocumented (NHS 21–35 days, AMH age norms). Test data is Kaggle + synthetic + one real person. Nothing has been examined for bias by age or contraception use. |
| Technical documentation | 11 | **Partial** | README, architecture, graph, RAG design and 112 tests exist, but not in Annex IV structure (intended purpose, validation, change log). |
| Record-keeping and logging | 12 | **Gap** | No logging at all, by design. A harmful report can't be traced afterwards. |
| Transparency and user information | 13 | **Partial** | Disclaimers and captions exist. There are no instructions for use telling a coach the intended purpose, accuracy, limits, or when not to rely on the report. |
| Human oversight | 14 | **Partial** | The user confirms the extracted lab values. Everything after that is automatic, and no qualified human sees a report before the reader. |
| Accuracy, robustness, cybersecurity | 15 | **Partial** | The number check and wording guardrail loop back on failure, and PDFs are parsed in code with an allow-list. The free-text "What bothers you most?" field reaches the model and the search unfiltered: an untested prompt-injection path. There is no measured accuracy of the *interpretation*. The password gate is the only access control. |
| Conformity assessment | 43 | **Gap** | None. For Annex I, it runs through the MDR notified body (Art 43(3)). |
| EU declaration of conformity + CE marking | 47–48 | **Gap** | None. |
| Registration | 49 | **N/A** | Art 49 database registration covers Annex III systems. Annex I devices register in EUDAMED under the MDR instead. |
| Post-market monitoring | 72 | **Gap** | No feedback channel, no incident process, no monitoring of what reports say in the field. |

**Reading of B:** Every row is Gap or Partial. The route would need a notified body, a QMS and clinical evaluation, which is months of work and a large cost. That is why Gap 1, deciding the intended purpose, comes first.

## Phase 5: Gap entries

**Gap 1 - Intended purpose drifts towards diagnosis (MDR/IVDR → possible AI Act high-risk)**
- **Obligation:** Under MDR Art 2(1) and Rule 11, software intended to give information for diagnostic decisions is a medical device of class IIa or higher. That would make Menohelp high-risk under AI Act Art 6(1) + Annex I §A (from 2 Aug 2028).
- **Current state:** No written intended-purpose statement. Several features point towards diagnosis:
  - **Condition names:** for women under 40 whose signals align, the report names "early menopause or premature ovarian insufficiency".
  - **Lab flags:** blood values are flagged against reference ranges.
  - **Signal counting:** an "alignment" count of signals pointing to the transition.
  - **Tagline:** "understand any symptoms you might have".
- **Required state:** The intended purpose is stated in writing and matches the UI, the reports and the marketing, *or* the client accepts the medical-device route.
- **Remediation:**
  1. Write an intended-purpose statement: "helps a woman organise and understand her own tracking data and prepare questions for a doctor; it does not detect, diagnose or monitor any condition" (see `05-…` stretch).
  2. Replace condition naming with "this combination is worth showing a gynaecologist soon". The fixed text in code already does this.
  3. Rewrite the tagline and the GTM copy.
  4. Keep a qualification memo on file.
- **Escalation needed?** **Yes:** a medical-device regulatory specialist, possibly a notified-body pre-consultation. The IVDR angle (software interpreting IVD lab results) needs specific advice.

**Gap 2 - No machine-readable marking of AI-generated reports (Art 50(2))**
- **Obligation:** Providers of AI systems that generate text must mark the output in a machine-readable, detectable format.
- **Current state:** Plain Markdown on screen. The HTML email and any copy the user forwards carry no marker.
- **Required state:** Every report carries a marking that survives being emailed or forwarded, and its technique follows the Commission's code of practice on marking AI-generated content.
- **Remediation:**
  1. Add HTML `<meta>` tags and an `X-AI-Generated` email header with model, version and date.
  2. If a PDF export is added, embed metadata (C2PA-style manifest).
  3. Add a visible label as well (Gap 3).
  4. Keep it as a single function in `app/email.py` and the renderer.
- **Escalation needed?** **Yes, light:** legal confirms that the technique is adequate for text, where robust methods are still immature.

**Gap 3 - Report doesn't say an AI wrote it (Art 50(1)/(5), consumer law)**
- **Obligation:** People must know they are dealing with AI, clearly and at first interaction. Not misleading consumers about what a product is (UCPD Art 6) points the same way.
- **Current state:**
  - **Footer:** says "generated from your logged cycle data", which most readers will take to mean calculated, not AI-written.
  - **Captions:** "sent to OpenAI" appears only in the optional sections.
  - **Email:** the copy a doctor may read carries no AI label at all.
- **Required state:** A visible statement on the start screen, at the top of every report and in the email: what is AI-written, what is calculated by code, and that no human reviewed it.
- **Remediation:**
  1. Add a one-line banner above the report: "Written by an AI model (OpenAI) from figures calculated by our code. Numbers are checked automatically; no person reviewed this report."
  2. Show the same line in the email header block.
- **Escalation needed?** No.

**Gap 4 - No lawful basis for processing health data (GDPR Art 9)**
- **Obligation:** Cycle data, blood values and symptoms are special-category data. A consumer service needs explicit consent (Art 9(2)(a)).
- **Current state:** Upload starts processing immediately, with no consent step. This was acceptable for the demo with my own and synthetic data, and the GTM plan flags it.
- **Required state:** Explicit, specific, freely given consent before upload, including consent to sending data to OpenAI in the US. It must be as easy to withdraw.
- **Remediation:** Add an unticked consent checkbox, plus a privacy notice link, before the upload widget is enabled. For coach use, the coach collects consent from the client, and a template is provided.
- **Escalation needed?** **Yes:** a data protection officer or privacy counsel signs off the consent wording and the transfer basis.

**Gap 5 - "Nothing is stored" isn't accurate (GDPR Art 13, Art 28, Chapter V; UCPD)**
- **Obligation:** Privacy information must be accurate, processors need Art 28 agreements, and transfers to the US need a basis.
- **Current state:** My API keeps uploads in memory for up to an hour, and the UI promises "Nothing is stored". But:
  - **OpenAI:** the API keeps inputs and outputs for up to 30 days for abuse monitoring unless zero-data-retention is approved.
  - **Resend:** keeps sent-email logs.
  - **Hosting:** logs requests.
  - **Overstated design principle:** "the LLM never sees raw data" is too strong, because lab values, symptom ratings, age and the free-text answer are sent to OpenAI.
- **Required state:** Wording that matches the real data flows, DPAs with each processor, and a documented transfer mechanism (EU–US DPF or SCCs).
- **Remediation:**
  1. Replace the wording with "We don't save your data. To write the report, your figures are sent to OpenAI, which may keep them for up to 30 days for safety checks."
  2. Request zero-data-retention or EU data residency.
  3. Sign DPAs.
  4. Set Resend log retention to the minimum.
- **Escalation needed?** **Yes:** a DPO for the transfer assessment.

**Gap 6 - No DPIA (GDPR Art 35)**
- **Current state:** Risks are listed informally in the project draft.
- **Required state:** A DPIA before any third party's data is processed (GTM Sprint 1).
- **Remediation:** A DPIA covering health data, OpenAI transfer, email, misinterpretation harm and the vulnerable-user angle. Reuse the risk table and the Section B notes.
- **Escalation needed?** **Yes:** the DPO.

**Gap 7 - Health report emailed to an unverified address (GDPR Art 32)**
- **Current state:** Any typed address receives the full report, rate-limited per session. A typo means a health-data breach (Art 33 notification).
- **Required state:** Appropriate security for special-category data.
- **Remediation:**
  - **Preferred:** replace the email with a download, or send only to an address verified by a one-time code.
  - **Content:** strip lab values from the email body and link to an expiring page instead.
- **Escalation needed?** No.

**Gap 8 - No record of what a report said (accountability; Art 12 if high-risk)**
- **Current state:** No logs, by design. If a user complains that a report told her something harmful, I can't reconstruct which sources, prompt version or guardrail outcome produced it.
- **Required state:** Enough traceability to investigate incidents, without keeping health data. This is GDPR Art 5(2) accountability, and a hard requirement under Art 12 if the high-risk route applies.
- **Remediation:** Metadata-only run log, which keeps traceability without creating a new store of health data:
  - **Kept:** run id, timestamp, model and prompt-template versions, retrieved chunk ids, check and guardrail results, retry count and red-flag texts added.
  - **Not kept:** no health values and no report text.
  - **Retention:** 6 months.
- **Escalation needed?** No, but the DPO should confirm the log holds no personal data.

**Gap 9 - Coaches have no AI-literacy guidance (Art 4)**
- **Current state:** Nothing exists for the deployer's staff.
- **Required state:** Staff using AI systems have sufficient AI literacy (in force since 2 Feb 2025).
- **Remediation:** A 1-page guide plus a 30-minute onboarding, covering:
  - what the report can and can't say;
  - that "alignment" is not a probability;
  - never to present it as a diagnosis;
  - what to do with red-flag texts.
- **Escalation needed?** No.
