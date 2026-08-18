# Identify Obligations: Article 50 Transparency Requirements

## Summary

Your system is classified as **limited risk under Article 50** of the EU AI Act. Article 50 applies to AI systems that generate, edit, or manipulate content, or interact with end users in ways that may not be immediately apparent as AI-generated.

This phase identifies which Article 50 obligations apply to your system and assesses your current compliance status.

---

## Article 50 Obligation Checklist

Article 50 requires transparency when AI systems generate or manipulate content that end users interact with. For the Virtual Coffee Chat Bot, the following obligations apply:

| Obligation | Requirement | Current Status | Note |
|---|---|---|---|
| **Disclosure of AI Use** | Users must be clearly informed that content is AI-generated | **Gap** | Current demo does not explicitly state "AI assistant" in initial message |
| **Clear and Accessible Information** | Provide easily understandable information about how the AI system works | **Partial** | System prompt defines scope, but not visible to users |
| **Capability & Limitation Awareness** | Users should understand what the system can and cannot do | **Partial** | Implied by "virtual coffee chat" framing, but not explicit |
| **Prevention of Deception** | The system must not be designed to deceive users into thinking they're interacting with a human | **Met** | System identifies itself as representing John (though needs AI disclosure) |
| **Documentation** | Maintain documentation of how the system generates content (system prompt, training data, tools) | **Met** | System prompt documented in n8n workflow; knowledge base in kb/ folder |
| **Compliance Monitoring** | Monitor system performance and user interactions for harmful outputs | **Partial** | Logging infrastructure exists, but no formal monitoring schedule documented |

---

## Detailed Assessment

### Obligation 1: Disclosure of AI Use (REQUIRED — Article 50)

**Requirement:** Users must be clearly informed that an AI system is generating conversational responses.

**Current state:** The chatbot's initial message says "Welcome to a virtual coffee chat with John. Ask me anything about his work history, skills, or projects, then book a call or send a message directly from the conversation." It does NOT explicitly state that an AI is generating responses.

**Status:** **GAP**

**Why it matters:** Without disclosure, users may believe they're interacting with a human representative or curated FAQ, not an AI. This violates Article 50's transparency principle.

---

### Obligation 2: Clear and Accessible Information (REQUIRED — Article 50)

**Requirement:** Provide clear, easily understandable information about how the AI system works.

**Current state:** The system prompt (visible only to developers in n8n) defines the bot's rules, retrieval approach, and tool limitations. However, this information is not accessible to end users. The UI does not explain how the system retrieves information (RAG from a knowledge base), what it can do (answer about John's background), or what it cannot do (it won't pretend to be John, it won't answer off-topic questions).

**Status:** **PARTIAL**

**Why it matters:** Users should have a basic understanding of the system's capabilities and limitations to set appropriate expectations and trust.

---

### Obligation 3: Capability and Limitation Awareness (REQUIRED — Article 50)

**Requirement:** Users should understand what the system can and cannot do.

**Current state:** The system prompt includes rules like "You only discuss John's professional background, skills, and projects. Politely decline anything else and redirect to what you can help with." However, users don't see this rule. The initial message does not explain the scope (professional background only) or limitations (no general-purpose assistance).

**Status:** **PARTIAL**

**Why it matters:** When users understand limitations upfront, they're less likely to be surprised or misled by the system's refusals or inability to answer certain questions.

---

### Obligation 4: Prevention of Deception (REQUIRED — Article 50)

**Requirement:** The system must not deceive users about whether they are interacting with a human.

**Current state:** The system does NOT impersonate John or claim to be human. The initial message frames it as "a virtual coffee chat with John" representing him. The system prompt explicitly states "You only discuss John's professional background...and you are not a general-purpose assistant."

**Status:** **MET**

**Why it matters:** The system is designed to represent John, not deceive users into thinking they're talking to him directly.

---

### Obligation 5: Documentation (REQUIRED — Article 50)

**Requirement:** Maintain documentation of how the system generates content (system prompt, training approach, knowledge base, tools used).

**Current state:** 
- System prompt: Documented in n8n Chat Flow workflow (19 rules for behavior control, grounding, scope, etc.)
- Knowledge base: Markdown files in kb/facts/ and kb/narrative/
- Retrieval: Pinecone vector database with Cohere reranking
- Model: OpenAI gpt-5-mini with text-embedding-3-small for embeddings
- Workflows: Exported JSON files in workflows/ folder

**Status:** **MET**

**Why it matters:** Documentation enables auditing, debugging, and transparency about how the system operates.

---

### Obligation 6: Compliance Monitoring (RECOMMENDED — Article 50)

**Requirement:** Monitor system performance and detect harmful outputs (incorrect facts, misleading statements, inappropriate responses).

**Current state:** 
- Chat logs are recorded in n8n Data Table (chat_log)
- Error logs are recorded (error_log)
- However, there is no documented procedure for regular monitoring, no escalation thresholds, and no formal review schedule

**Status:** **PARTIAL**

**Why it matters:** Logging without active monitoring provides detection capability but not active risk management. A formal monitoring and escalation procedure would strengthen compliance.

---

## Obligation Met/Partial/Gap Summary

| Status | Obligations |
|---|---|
| **Met** | Prevention of deception, Documentation |
| **Partial** | Clear information, Capability/limitation awareness, Compliance monitoring |
| **Gap** | Disclosure of AI use |

---

## Conclusion

Your system meets most Article 50 transparency principles but has **one critical gap**: the lack of explicit AI disclosure in the user interface. The other "partial" obligations are addressable with improved user-facing documentation and formal monitoring procedures.

The primary remediation (adding AI disclosure to the initial message) directly addresses the most significant transparency gap and brings the system into Article 50 compliance.
