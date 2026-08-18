# Phase 3: Role Map

## Role Mapping

| Role | Entity | Key AI Act obligations |
|---|---|---|
| Provider | John Adams (you) | Article 50: Disclose that AI generated conversational responses. Ensure system accuracy and robustness. Document the system's capabilities and limitations. Monitor for harmful outputs or misrepresentations. |
| Deployer | John Adams (you) | Monitor system performance and user interactions via logging. Respond to user concerns or errors. Implement escalation procedures (e.g., taking system offline if critical failures occur). Maintain records of deployment, monitoring, and decisions. |
| Vendor: OpenAI (gpt-5-mini, embeddings) | OpenAI | Provide the base language model under their terms of service. However, as you have substantially customized the model (system prompt, tool integration, RAG pipeline), liability for the model's behavior has shifted from OpenAI to you (John) as the provider. |
| Vendor: Pinecone (vector database) | Pinecone | Provide vector storage and retrieval infrastructure. Handle data security and availability. You are responsible for how the data is used within the system. |
| Vendor: Cohere (reranking) | Cohere | Provide the reranking model as a service. You are responsible for the reranking logic and how it filters retrieved results. |
| Vendor: Calendly & Resend | Calendly, Resend | Provide scheduling and email delivery services. These are not AI systems and have minimal regulatory relevance to the EU AI Act. |

## Provider Obligations Under Article 50 (Limited Risk / Transparency)

As the provider of a system that generates AI content and interacts with end users, your key obligations are:

1. **Disclosure:** Clearly inform users that AI is generating conversational responses. This must be prominent and not buried in terms of service.
2. **System Documentation:** Maintain documentation of how the system works, its training data (knowledge base), and known limitations.
3. **Accuracy and Robustness:** Ensure the knowledge base is accurate and the system prompt prevents harmful outputs or misrepresentations.
4. **Monitoring:** Use logging to detect when the system gives incorrect or harmful information.
5. **Accountability:** Respond to complaints or concerns from users (recruiters in this case).

## Deployer Obligations

As the deployer (since you operate the system):

1. **Monitoring:** Review chat logs regularly to identify problems, gaps in the knowledge base, or misstatements.
2. **Escalation:** Establish procedures to take the system offline if critical errors or failures occur.
3. **Record-Keeping:** Maintain records of deployment decisions, monitoring activities, and any incidents or corrections.
4. **User Support:** Be able to address recruiter concerns or clarifications if they arise from the chatbot's responses.

## Liability Shift: OpenAI to You

Your teacher's note is crucial here: when you customize an LLM substantially (system prompt, tool use, RAG, controlled outputs), you shift liability from the model provider to yourself. OpenAI's terms generally state that their liability shield applies to out-of-the-box use; once you integrate it into a custom system with controlled behavior and brand representation, **you assume responsibility for what the system does.**

This is reflected in your provider role: you must ensure the system is accurate, transparent, and does not cause harm.
