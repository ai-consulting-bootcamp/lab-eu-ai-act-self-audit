# Phase 1 — System brief

**System:** AI Use Case Identifier
**Built by:** Friedrich Tschoepke, solo
**Written for:** an external reviewer who has never seen the project

## What the system does

The AI Use Case Identifier is a research agent that prepares a consultant for a first meeting with a company. You give it a company name and a website address. It reads what is publicly available about that company, works out how the company operates and earns money, judges each step of that work against established frameworks for where AI helps, matches the most promising steps against a library of AI use cases already running at comparable firms, and writes a short brief. The brief contains three proposed use cases, an argument for redesigning the work before automating it, and the questions to ask in the first conversation.

It is a thinking aid, not an answer. The brief is explicitly framed as a hypothesis for a conversation rather than a validated analysis.

## What goes in

A company name and homepage address, typed on the command line. Optionally a contact name, email address and city, which are stored separately and do not enter the analysis.

From there the system collects by itself: the company's homepage, its About page and its careers pages including individual job advertisements; news coverage; and company register entries from portals such as the Unternehmensregister, Handelsregister and Northdata.

Some of this is personal data, which was not the intention. Company registers publish the names of managing directors and shareholders. Job advertisements name a contact person. About pages name founders. This arrives incidentally and the system makes no attempt to remove it.

## What comes out

A Markdown report and an illustrative process-map image, written to a folder on the local machine. The report describes the company's business model, marks each claim as documented or assumed, proposes three use cases with an estimated money effect, and lists discovery questions.

It produces no score about a person, no ranking of people, no decision and no notification. The only numeric rating is applied to process steps, not to individuals.

## Who is affected

The company being researched, and the people named in its public sources. More indirectly, the employees whose work is described: the brief includes options that would substitute human tasks with software. No employee is named, assessed or ranked, but a recommendation about a process is ultimately a recommendation about the people who perform it.

## Does a human review the output

Yes, always. The report is written to a file and read by the consultant. Nothing is sent to the company, no email leaves the system, and no action follows automatically. The consultant decides what, if anything, to raise in the meeting — and the brief's own framing invites them to treat it sceptically.

## Who built it, and who would use it

I built it alone, in Python with LangGraph, using three external services: OpenAI for text models, embeddings and the image, Tavily for web search, and Pinecone to hold the use-case library.

Today the only user is me. A planned later version would publish a lighter report publicly as a lead magnet, collecting an email address in exchange for three use cases.
