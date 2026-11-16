# CompanyScope | EU AI Act audit lab

**Sean Langsdorf · Ironhack Project 3 · 16 November 2026**

**Finding:** Limited risk / transparency for the intended use. CompanyScope drafts professional company research, so Article 50(2) is the main AI Act obligation identified. Keep the prototype in a controlled demo and hold a real-client pilot until the output marking, privacy and human-review controls are verified.

## Reviewer map

| File | Purpose |
| --- | --- |
| [System brief](companyscope_system_brief.md) | What was built, who uses it and where people can be affected. |
| [Classification, role map and remediation](companyscope_classification_and_gaps.md) | First-pass classification, applicable rules, exact gaps and proposed owners. |
| [Compliance memo](companyscope_compliance_memo.md) | One-page recommendation for the fictional client’s Head of Product. |
| [Proposed report review procedure](companyscope_review_procedure.md) | Practical instructions and draft notice for a future pilot. |
| [Sanitized n8n workflow](companyscope_workflow.json) | Unmodified 34-node export from the pinned Project 3 source. |
| [Saved successful output](evidence/companyscope_someform_saved_report.md) | Redacted Project 3 report from an earlier successful run. |
| [Replay script](replay_validator.js), [input](evidence/validator_input.json), [output](evidence/validator_output.json) | Fresh offline run of the actual workflow’s validator with synthetic data. |
| [Offline regression log](evidence/offline_tests.txt) | 34 CompanyScope source tests passed in this audit. |

## Run evidence

**Saved Project 3 run.** The research target was **someform Studio GmbH**. The original form request metadata is not in the public export, so the original optional register-number field cannot be verified. The resulting report identifies **HRB 235811, Berlin (Charlottenburg)** and records registry source `REGISTRY-1` and five public-web leads, with retrieval timestamps on 12 November 2026. The saved Markdown is the final output. Its claims from web sources are not presented here as independently verified. No live provider calls were made for the lab.

**Fresh offline audit run.** From this repository root with Node.js 18 or newer:

```sh
node replay_validator.js evidence/validator_input.json
```

The replay runs the embedded **Validate & Render Report** node from the published export. It supplies two synthetic source records: a registry entry and a website excerpt saying that Audit Fixture GmbH makes ceramic tiles in Berlin. It passes a mock model response to the validator without calling any API.

| Case | Input change | Observed output |
| --- | --- | --- |
| Supported claim | Tile-making claim cites `WEB-1`. | Accepted. Full rendered Markdown in the output JSON. |
| Wrong source type | The same public finding cites `REGISTRY-1`. | Rejected with `public_finding_source_invalid` at `public_findings[0].source_id`. |
| Non-supporting source | A statement about opening a branch on Mars cites the valid `WEB-1`. | Accepted. Output explicitly states `semantic_entailment: not_automatically_verified`. |

**Limitation observed.** The source type and ID checks catch malformed citations, not a claim that the cited page fails to support. That is why the remediation requires a professional reviewer to open sources before relying on or releasing a report. This test does not establish end-to-end runtime behavior, provider retention or compliance.

**Baseline:** [CompanyScope source commit 542665b](https://github.com/sean173-lang/CompanyScope/tree/542665b0a4c6c5c18a8ac59896b87d5bd0eb39f6). The regression log was generated using `python3 -m unittest discover -s tests -v` from that checkout.
