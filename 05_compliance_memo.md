# Compliance Memo: Virtual Coffee Chat Bot

**TO:** Head of Product  
**FROM:** Compliance Review  
**DATE:** August 18, 2026  
**RE:** EU AI Act Compliance Assessment – Virtual Coffee Chat Bot

---

## System Classification

The Virtual Coffee Chat Bot is classified as a **limited-risk system under Article 50 of the EU AI Act** because it generates AI-written content and interacts with end users (recruiters) without currently disclosing that an AI is present.

## Role Assignment

- **Provider:** John Adams (developer and integrator of the custom system)
- **Deployer:** John Adams (operator and maintainer)
- **Third-party vendors:** OpenAI (LLM), Pinecone (retrieval), Cohere (reranking), Calendly and Resend (non-AI services)

Note: By customizing OpenAI's model with a custom system prompt, RAG pipeline, and tool integration, John has assumed provider responsibility for the system's accuracy and transparency. OpenAI's liability shield does not fully protect a substantially modified deployment.

## Key Findings

**Finding 1: Article 50 Transparency Disclosure is Missing**

The system generates all conversational responses using an LLM, but users (recruiters) are not clearly informed that an AI is generating those responses. Article 50 requires explicit disclosure. Currently, the initial chat message identifies the system as "a virtual coffee chat with John" but does not say "I'm an AI assistant."

**Finding 2: GDPR Privacy Notice May Be Missing**

The system logs all conversations (recruiter questions, bot responses, contact data). Under GDPR, users should be informed how their data is collected, used, and retained. No privacy notice is currently linked or displayed. Additionally, Data Processing Agreements (DPAs) should be in place with third-party vendors (OpenAI, Pinecone) that process data on your behalf.

**Finding 3: Liability Alignment**

By building a custom AI system integrated with OpenAI's model, John has shifted liability from OpenAI to himself. This is expected and appropriate, but means John is now responsible for the system's accuracy, robustness, and transparency – not OpenAI.

## Recommended Next Steps

**Immediate (before production launch):**
1. Update the initial chat message to include explicit AI disclosure: "I'm an AI assistant trained to answer questions about John's background..."
2. Add or link a privacy notice explaining how recruiter data is collected and used.
3. Review the system prompt for accuracy and bias.

**Short-term (post-launch):**
1. Monitor chat logs regularly for incorrect or misleading answers.
2. Update the knowledge base when gaps or errors are detected.
3. Establish a process to take the system offline if critical failures occur.

**External review needed:**
- Have a legal or data protection advisor review the privacy notice for GDPR compliance and verify DPAs are in place with OpenAI and Pinecone.
- No conformity assessment or formal EU registration is required at this risk tier (limited risk does not require these).

## Caveats

This memo is not:
- A legal opinion or binding compliance determination
- A formal conformity assessment (required only for high-risk systems)
- An EU AI Act certification or approval
- A complete legal or data protection review

This assessment reflects Article 50 obligations for transparent AI disclosure and notes parallel GDPR considerations. Formal legal counsel should review before production launch.

---

**Status:** Ready for remediation and monitoring.
