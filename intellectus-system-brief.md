# Intellectus — System Brief

Intellectus is a consulting support system designed to help consultants prepare an evidence-based first diagnostic of a social-impact organization before a deeper client engagement.

The system takes a consultant from an initial organization and engagement objective through a structured diagnostic workflow. It gathers and organizes available evidence, separates what is observed from what is inferred or still unknown, surfaces areas that require validation, supports the selection of questions for the client conversation, and produces a consultant-reviewed brief with possible next steps and measures.

The final integrated workflow connects the Intellectus web application to an n8n orchestration layer and then to the end-to-end diagnostic workflow. The response is validated before being returned to the web application for consultant review. The project also includes a research and evidence layer developed to structure public evidence, supporting material and analytical findings. The web experience guides the consultant through five stages: intake, diagnostic overview, conversation preparation, next steps and final brief. 

## Inputs

Inputs can include:

- organization name, website, country and engagement objective;
- publicly available information about the organization;
- evidence and research findings collected during the diagnostic process;
- structured consultant notes and selections;
- supporting documents where enabled.

The intended focus is organizational information rather than profiling individuals. However, public sources or future document uploads may contain incidental personal or confidential information.

## Outputs

Intellectus produces structured observations, evidence-backed findings, unknowns, hypotheses, suggested questions, possible next steps, measures and a final consulting brief.

It does not make a binding decision, approve or reject a person, determine eligibility, or automatically implement a recommendation.

## People affected

The direct users are consultants and consulting organizations. Client organizations receive the reviewed diagnostic output. Employees, beneficiaries, customers or other stakeholders may be indirectly affected if the client later acts on the consultant's recommendations.

## Human review

Human review is part of the intended operating model. The consultant reviews the evidence, challenges unsupported findings, adds context, selects questions and next steps, and decides when the final brief is ready for client use.

The current product therefore operates as decision support rather than autonomous decision-making.

## Who built and would use it

Intellectus was built by the Project 3 team. The system combines custom product logic, a web interface, research/evidence workflows, transformation and diagnostic workflows, validation rules and third-party workflow infrastructure.

In production, the intended users would be consultants or consulting organizations using Intellectus to support pre-engagement diagnostics and transformation work.

The current repository documents a functioning end-to-end live path, but also identifies production controls that remain to be completed, including authentication, durable persistence, logging, retention and other security controls. 