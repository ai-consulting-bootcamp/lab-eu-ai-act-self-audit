# Model Intake Brief system brief

**Reviewed version** — Project 3 prototype, 16 November 2026

## Purpose and users

Model Intake Brief helps a company review a third-party AI model before deciding whether to integrate it. An AI governance lead, risk reviewer, or project management lead enters a model identifier and gets a brief describing the public evidence available for that model. The goal is to make it easier to see what the supplier has documented and what the company still needs to ask. Sergii Rostovskyi built the research workflow, command-line tool, and web interface for Project 3. The repo records a live course demo on 13 November 2026. This brief assumes a future professional deployment by an EU client.

## Information the system uses

The reviewer enters a public Hugging Face repository identifier or a provider name and exact hosted model identifier. A live run searches for public model cards, technical documentation, and related sources. It also consults a fixed 18-item checklist and retrieves relevant passages from the EU AI Act and the general-purpose AI Code of Practice. The workflow sends selected source text and the model details to an OpenAI model to assess the evidence. It examines documentation about the target model without running that model.

The intended inputs are model identifiers and public documents. They can still contain personal data. A repository identifier can include an individual's account name, and a source page can name a contributor or list a contact address. The workflow can pass extracts to an external service and include some of that text in the report. The offline preview uses sample data without external calls. The interface can also display previously saved reports.

## Output and human review

The tool produces a Markdown report on screen or through the command line. It labels each item as evidence found, partial, not found, or not checked, and gives source links and excerpts where available. It also suggests questions for the model supplier. The workflow checks the proposed quotes against the source text, checks whether they concern the right model, and tests cited links.

Report generation runs automatically once a reviewer starts it. The interface allows the reviewer to inspect the evidence and download the report at once. The prototype does not require sign-off. In the proposed client workflow, the governance reviewer would verify the sources, request missing information and record a separate integration decision. The buyer's product team and model suppliers can be affected by the follow-up. The workflow does not assess applicants, employees, or consumers, although people named in public sources could have their information reproduced.

**Project evidence** — [Reviewed repository snapshot](https://github.com/s-rostovskyi/model-intake-brief/tree/e384f3a41b5c74119786f55865ebe4e7e6cfb73c)
