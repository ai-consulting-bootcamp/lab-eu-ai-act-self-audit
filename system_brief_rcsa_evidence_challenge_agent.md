# Phase 1 — System Brief

**System:** RCSA Evidence & Challenge Agent
**Project:** Ironhack AI Consulting Bootcamp — Project 3
**Industry:** Banking / Financial Services — Operational Risk Management
**Development status:** Functional prototype (MVP)

## 1. Purpose and Functionality
The RCSA Evidence & Challenge Agent helps banks run their Risk and Control Self-Assessment (RCSA). In an RCSA, the people responsible for a business process (process owners) list the risks in their process, describe the controls in place, and rate how serious each risk is. Today this usually takes months of meetings and the results are often subjective.

The process owner describes a business process step by step. For each step, the system suggests possible operational risks from a risk library. The process owner must answer every suggested risk: is it applicable or not (and why), and which control exists.

The system then **challenges** these answers with internal evidence. If an owner marks a risk "not applicable" but a loss event shows it happened, or says a control is effective while key risk indicators (KRIs) are breaching thresholds, the system flags the contradiction. It estimates inherent risk, control effectiveness and residual risk, and produces an RCSA report.

The system does not accept risks, approve controls or change risk ratings in the bank's systems by itself.

## 2. Inputs and Data Sources
- The process description written by the process owner
- The previous RCSA for that process (existing risks and controls per step)
- An operational risk library (risk categories, typical risks)
- Internal loss events and near misses for the process
- KRI values and thresholds

The prototype uses **synthetic data only**. In a real bank, loss event descriptions may contain employee names, customer references or amounts, and the process owner's name is linked to the answers, so personal data could be present.

There is no internet or news research and no RAG over external sources. OpenAI models are used through the API (orchestrated with LangGraph) to suggest risks, compare answers with evidence and write the report text.

## 3. Outputs and Decisions
- A list of suggested risks per process step
- Challenge flags where the owner's answer conflicts with loss events or KRIs, with the evidence shown
- Indicative ratings: inherent risk (likelihood × impact), control effectiveness and residual risk
- A written RCSA report with the open challenges

Ratings and flags are **proposals for discussion**, not final risk decisions. The results could later feed management reporting and capital or supervisory processes, but only after human sign-off.

## 4. Affected Individuals and Human Oversight
Directly affected: process owners (first line), whose answers are challenged, and operational risk managers (second line), who use the report. Indirectly: management and supervisors, who rely on RCSA results.

The process owner reviews and answers every suggested risk. A second-line risk manager is intended to review the challenges and the report before final ratings are accepted. In the prototype, this final validation step is a **design intention, not an enforced workflow** with approval logging.

## 5. Development and Intended Users
Built individually by Murat Çömez as a bootcamp project in Python with LangGraph and the OpenAI API.

Intended production users are a bank's process owners and its operational risk function. The tool could be offered to banks by a software vendor or consultancy, or built in-house by a bank.

The current system is a prototype and is not used in a real bank.
