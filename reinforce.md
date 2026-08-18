# Reinforce: second look

## What might have been glossed over

The system brief mentions OpenAI, Cohere, and Pinecone, but it is easy to read that list too quickly and miss what the OpenAI step actually does. The `extract_profile` step does not just pull out job history and skills, it turns a CV into a structured profile using an LLM. Even though the app never asks for age, gender, or nationality, an LLM reading a CV can still infer things close to that, like age from graduation years, or likely nationality from the language and location on the CV. That inferred detail can end up sitting inside the structured profile that then gets embedded and stored in Pinecone.

Looking at it again, this does not change the risk tier. It is still the user's own choice, for their own benefit, and nobody else acts on it. But it does make the GDPR gap in gap-analysis.md a bit bigger than it first looks, because the data being sent to OpenAI, Cohere, and Pinecone is not just "a CV," it can include inferred personal details the user never typed in directly. Worth keeping in mind when writing the privacy notice.

## One design decision I would change

Sending the raw CV file straight to OpenAI, with no step in between to strip out anything unnecessary first, is the decision I would change in hindsight. It was the simplest way to build the MVP, upload a file, hand it to the model, get a structured profile back. But it means the full CV, with more detail than the app actually needs, leaves my control and goes to a third party every time someone uses the tool.

A better design would pull out only the fields the system actually needs (skills, years of experience, industry background) before sending anything to OpenAI, and drop the rest. That is a data minimisation step, and it is exactly the kind of thing GDPR expects, only collect and pass on what you actually need. It would also make the privacy notice easier to write honestly, since there would be less data changing hands to explain.
