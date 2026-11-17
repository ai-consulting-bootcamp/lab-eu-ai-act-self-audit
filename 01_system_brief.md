# Phase 1: System Brief: Fix My Process

*Ayhan Demir · 17 Nov 2026*

## What does the system do?

Fix My Process helps employees at Kleinanzeigen, Germany's largest classifieds marketplace, fix everyday work problems with tools the company has approved. An employee describes a slow or manual task once. The system looks for how others solve it, checks the company's own AI rules, and replies with practical steps. It also sends the AI enablement team a short summary of each case. It is a prototype built for my Ironhack Project 3; Kleinanzeigen does not use it.

## What inputs does it take?

- **From the employee:** department, a written description of the problem, how often it happens and, optionally, the tools they use today. Afterwards, whether they will use the suggested tool, and why.
- **From outside sources:** web pages, news articles and research papers found by search.
- **From inside the company:** four fictional documents: AI policy, approved tools list, works council agreement, past AI projects.
- **Personal data:** no name or login is asked for. But the description can still contain names; only an on-screen warning asks people to leave them out.

## What does it output?

- **Generated text:** a fix report for the employee (steps, a ready-to-send access request, sources) and a use-case summary for the AI enablement team.
- **A flag:** green (allowed), amber (allowed with conditions) or red (not allowed yet), citing the policy rules.
- **A score:** confidence High, Medium or Low, with a percentage.
- **Notifications:** a Slack message for every case, a review request for red cases, and error alerts.

## Who is affected by the output?

Mainly **employees**, who act on the advice. **Departments** are affected indirectly, because the summaries shape what the company builds next. **Customers** are affected only indirectly, if the advice leads an employee to put customer data into a tool. No applicants or members of the public are involved.

## Does a human review the output before any action is taken?

**No, not for the employee's report.** It arrives in about a minute, labelled as AI-generated, and the employee decides whether to act. Green cases get no review. Amber cases are posted to the AI Governance Board's Slack channel for information only. Red cases go to the Board, which clicks "Add to pipeline" or "Dismiss for now". This happens after the employee has a report saying the use is not allowed yet.

## Who built it?

I built it alone, with help from AI coding assistants. It connects third-party tools I configured: an OpenAI language model, Cohere for ranking results, Pinecone for the document search, Tavily, GNews and OpenAlex for research, Airtable for case records, Notion for summaries, Slack for reviews and alerts, n8n to run the steps, and a Gradio web page hosted on Render.

## Who would use it in production?

Kleinanzeigen staff: operations employees and team leads who submit problems, the Operational Effectiveness and Enablement team, the AI enablement team under the Chief Product Officer, the AI Governance Board, and a workflow owner for error alerts.
