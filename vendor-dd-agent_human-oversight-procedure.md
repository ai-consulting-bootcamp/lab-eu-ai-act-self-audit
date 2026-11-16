# Human oversight procedure – Vendor Due-Diligence Agent (draft)
*Stretch artifact. Closes Gap 5 (automated decision in practice) and supports Gap 2 (accuracy).*

**Who reviews.** A compliance officer who has completed a 1-hour briefing on the tool's limitations. Topics:
- fuzzy-match false positives
- the victim-vs-perpetrator gap
- that "no findings" doesn't mean "no risk"

A **High** rating or a **Do not onboard** recommendation needs a second reviewer (four-eyes principle).

**What they check, every report:**
1. **Identity.** Is the resolved legal entity (name, LEI, country) the company we actually want to contract?
2. **Data limitations.** Did any check fail? If screening is incomplete, nobody onboards the vendor.
3. **Sanctions hits.** For each hit, compare secondary identifiers (country, registration number, address) and decide: confirmed or false positive.
4. **Red flags.** Open at least the source of every Medium or High flag. Is the company the wrongdoer, a victim, or only mentioned? Is the event still relevant?
5. **Recommendation.** Agree, or override.

**How decisions and overrides are recorded.** A decision record is stored next to each report, `reports/<company>_<timestamp>_decision.json`, with these fields:
- reviewer name and date
- final decision (onboard / conditions / escalate / reject)
- whether it matches the agent's recommendation
- an override reason (mandatory if it differs)
- corrected flags, such as "victim, not perpetrator"

Records are kept for 5 years, in line with the firm's compliance record-keeping. Reports with no decision record can't be used as onboarding evidence.

**Monitoring.** Each quarter, compliance reviews the override rate and corrected flags. More than 20% of reports corrected on the same issue triggers a fix in the agent and a rerun of the regression test set.

*Owner: Head of Compliance (process); developer (decision-record feature). Target: before the first production pilot.*
