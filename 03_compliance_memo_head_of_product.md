# Compliance Memo – RCSA Evidence & Challenge Agent

**To:** Head of Product, [Client bank] · **From:** Murat Çömez, AI consultant · **Date:** 17 November 2026
**Subject:** EU AI Act first-pass assessment before production use

**1. Classification.** The agent is **not a high-risk AI system**. It supports the assessment of business processes and controls, which is not an Annex III use, but it generates text with a large language model, so the **Article 50(2) transparency obligation** applies (AI-generated output must be marked).

**2. Who is who.** The team that builds and offers the agent is the **provider**. The bank that uses it in its risk function is the **deployer**. OpenAI supplies the underlying language model and has its own obligations as a general-purpose AI model provider.

**3. Key findings.**
- **The tool could be used to judge people.** Every challenge is linked to a named process owner. If the bank used these flags to assess employees, the tool would become high-risk (employment area) and need a full compliance programme. We must design this out.
- **Human approval is not built in yet.** A second-line risk manager is supposed to approve ratings, but the system does not enforce or record this. For a bank, an unlogged AI-supported risk rating is an audit and governance finding.
- **Data leaves the bank.** Loss event descriptions, which may name employees or customers, are sent to OpenAI in the US. This is a GDPR, DORA and outsourcing issue before it is an AI Act issue.

**4. Recommended next steps, in order.**
1. Remove names before data is sent to the language model, and agree data residency and retention terms with OpenAI. *(Data protection officer, DORA / outsourcing officer)*
2. Build a mandatory approval step with an audit log.
3. Label all AI-generated content in reports and exports.
4. Write a one-page intended-purpose statement and report results per process, never per person. *(Legal review; works council information)*
5. Provide a short AI-literacy guide for users.

Items 1 and 2 should be done before any real data is used. Items 3 to 5 are needed before go-live.

**5. Caveats.** This memo is a first-pass assessment based on the system brief. It is **not a legal opinion, not a conformity assessment and not a certification**. The classification and the employment-area question should be confirmed by legal counsel before the system is placed on the market or used with real data.
