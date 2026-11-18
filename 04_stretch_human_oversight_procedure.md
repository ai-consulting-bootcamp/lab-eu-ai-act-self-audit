# Stretch – Human Oversight Procedure (closes Gap 3)

**Scope:** every RCSA run of the agent before ratings are accepted into the bank's RCSA record.

| Step | Who | What they check | Record |
|---|---|---|---|
| 1. Owner response | Process owner (1st line) | Answers every suggested risk; responds to each challenge flag (accept, or reject with evidence) | Answer + justification stored per risk |
| 2. Second-line review | Operational risk manager (2nd line), not the owner | (a) Every open challenge is resolved; (b) "not applicable" risks with a loss event are justified; (c) residual ratings are plausible against KRIs; (d) AI-suggested risks that were missed or hallucinated | Reviewer name, timestamp, decision per rating |
| 3. Override | Second-line reviewer | May change any AI rating; must choose a reason code (evidence missing / AI misread event / business context / other) plus free text | Original value, new value, reason, reviewer |
| 4. Approval | Second-line reviewer | Final sign-off; the system blocks export to the RCSA record without it | Approval event in the audit log |
| 5. Quality sample | Head of ORM, quarterly | 10% of runs re-checked; override rate and missed-risk rate tracked | QA log; override rate > 30% triggers prompt / model review |

**Rules:** the reviewer cannot be the process owner. Challenge results are never reported per person. Logs are kept for the RCSA cycle plus the bank's audit retention period.
