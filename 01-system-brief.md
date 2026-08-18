# System Brief — School Book Order Bot (Shirdi Hicon Publications)

**Scope note:** Everything below describes the system as it exists and runs **today**, for a single shop. Where the brief refers to a possible future rollout to other EU book sellers, that is explicitly marked as **under consideration**, not built or deployed.

## What does the system do?
**Today (in use):** The system is an automated ordering assistant for an independent bookshop that sells school textbooks to schools. Schools send their book orders as a Telegram message — either typed text or a photo of a handwritten order list. The system reads the message, works out what is being requested, checks it against the shop's catalogue (a spreadsheet of publishers, titles, classes, and prices), and replies with a confirmation of what was ordered and the price. It also logs every order and can, on request, produce a consolidated list of everything that still needs to be ordered from each publisher. A separate feature lets a school ask about the status of a previous order and get its history back.

**Under consideration (not yet built or deployed):** Packaging this same workflow so other independent book sellers across the EU can run it for their own schools. Nothing described below reflects this future state unless explicitly marked as such — everything else in this brief describes the system exactly as it runs today, for one shop.

The system's role is limited to confirming and logging orders against a fixed catalogue — it does not decide which schools get priority, adjust pricing per school, or gate access to any book. Every reply is a straightforward confirmation or status lookup, not a discretionary decision about a school.

## What inputs does it take?
- Telegram messages from school staff: free text or a photo of an order list, always including the school name.
- Personal/identifying data: each message carries the sender's Telegram chat ID, which is linked to a real person's Telegram account and can be considered personal data.
- A reference catalogue (publisher, title, class, price) held in a spreadsheet, which the system reads but does not itself generate.

## What does it output?
- A confirmation reply naming the matched book(s), price, and order status.
- An order-history summary when a school asks about a past order.
- A consolidated "what to reorder from each publisher" report, used internally by the shop owner.
- A log entry per order (publisher, class, title, quantity, price, status, sender, date, school, fulfilled flag).

## Who is affected by the output?
Primarily school administrative staff placing orders on behalf of their school — not students directly. The shop owner is affected as the recipient of the consolidated reports. Publishers are indirectly affected in that their price lists determine what gets ordered from them. The system's effect on schools is limited to order confirmation and status — it does not make any decision that affects a school's access to books, pricing eligibility, or standing beyond confirming or reporting on the order itself.

## Does a human review the output before any action is taken?
No, not before the reply reaches the customer. The pipeline (read message → parse → match against catalogue → reply → log) runs end to end without a human checkpoint. The shop owner does review the publisher-consolidation report before actually placing stock orders with publishers — checking quantities per title and running totals per publisher against known stock — but that review happens after the automated customer-facing reply has already gone out, so it functions as a stock-ordering check, not a check on what the customer was told.

## Who built it?
One person (the author of this audit), as a personal/family project built during a bootcamp. It uses OpenAI's GPT-4o and GPT-4o-mini models via API for parsing text and photos, n8n as the workflow/orchestration engine, and Google Sheets as the catalogue and order log.

## Who would use it in production?
**Today (in actual use):** a single bookshop (Shirdi Hicon Publications, ~40 years in business) and the schools it supplies.

**Under consideration (not yet built or deployed):** licensing or distributing the same workflow to other independent book sellers across the EU who supply schools, which would turn this from an internal tool into a product used by multiple unrelated businesses. This audit treats that expansion as the planning horizon, but nothing described above beyond the single-shop deployment currently exists in production.
