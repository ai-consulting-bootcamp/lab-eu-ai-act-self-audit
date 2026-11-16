# CompanyScope compliance memo

**To:** Head of Product, Alder Legal Operations (fictional pilot client)
**From:** Sean Langsdorf, Project 3 developer
**Date:** 16 November 2026
**Decision:** Keep the prototype in a controlled demonstration. Hold a professional pilot using real matters until the release gates below are met.

CompanyScope is a **transparency-tier tool** for its intended use. It generates draft corporate research under Article 50(2) of the EU AI Act. It does not decide outcomes for people or operate in an identified high-risk use. If the CompanyScope team supplies the complete system under its own name, it is the provider and Alder is the deployer. Confirm that allocation if Alder commissions and operates it under its own name.

Three issues matter before authorizing real use.

1. **The report needs more than a form notice.** The form says it uses AI, but we have not verified that the exported report carries a machine-readable mark and remains detectable as AI-generated. A visible “AI-assisted draft” label helps users, but it does not on its own meet the technical requirement.
2. **The prototype saves more data than a pilot needs.** n8n is configured to save full successful and failed executions. Reports are also written to disk. Even a company lookup can expose the subject of a client matter or include information about named people.
3. **A citation does not prove a claim.** A fresh offline replay accepted a deliberately false claim once it was attached to a real fixture source ID of the right type. The workflow checks citation structure. A researcher still needs to open the source and verify the statement.

First, assign an accountable product owner and restrict the demonstration to non-confidential test data. Next, have engineering implement output marking, minimize execution logs and put a reviewer in charge of every release. Have privacy counsel or the DPO review vendor terms, retention, data transfers and use of personal data. Have AI counsel verify the disclosure and marking approach for the intended deployment. Require a witnessed test of those controls before approving the pilot. Do not use the tool for individual scoring or publish a report under this approval.

This is a first-pass product audit. It is not a legal opinion, a conformity assessment or certification.
