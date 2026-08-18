# Risk tier classification: AI Entrepreneur Coach

## Table

| Question | Your answer |
|---|---|
| Does this system fall under any prohibited category (Article 5)? | No. It does not manipulate people, it does not target a vulnerable group, it is not social scoring by a public authority, and it does not use biometric data. |
| Does this system operate in any of the eight Annex III areas? | No, not as the system is built and used today. The closest area is "employment and self-employment," but that area covers tools an employer uses to judge workers or job candidates. Here there is no employer. The user is judging their own future business idea for themselves. |
| If Annex III: does it "significantly influence" decisions in that area, or is it narrow/preparatory? | Not applicable, since the system does not fall under an Annex III area today. |
| Does this system interact with end users or generate content requiring disclosure (Article 50)? | Yes. The user talks to the system directly (uploads data, gets a report, gives feedback on the wording), and the system writes text with AI (the fit reasons and the 90 day roadmap). |
| First-pass risk tier | Limited risk / transparency (Article 50) |
| One-sentence justification citing the specific article or Annex entry | The system must meet the Article 50 duty to tell users they are talking to an AI and that the report text is AI generated, because it does not match any Article 5 banned use or Annex III high-risk area, but it does interact directly with users and produce AI written content. |

## Justification

I am placing this system in the limited risk tier, under the Article 50 transparency rules, not high-risk.

The reason it is not high-risk is simple: high-risk under Annex III means the AI system affects someone else's access to a job, school place, loan, or similar service, decided by an employer, school, bank, or public body. This system does not do that. The user is not being evaluated by anyone. They upload their own CV and personality answers, and the system gives them ideas for their own use. Nobody else sees the report or acts on it. So the "employment and self-employment" area of Annex III does not apply, because there is no employer or institution making a decision about the person.

The reason it is not minimal risk either is that the system talks to the user directly and writes text with AI (OpenAI generates the fit explanations and the roadmap). Article 50 says systems like this must make clear to the user that they are interacting with AI, and that generated text is AI made, not written by a human. So some obligations do apply, just lighter ones than the high-risk list.

**Ambiguity to flag:** if this system is ever sold or given to a career center, university, employment agency, or company to use on other people (for example, a bootcamp using it to help decide who is ready to start a business, or advise students), the picture changes. At that point it could move much closer to the Annex III "employment/self-employment" or "education" areas, because now an institution would be using the output to influence real decisions about other people. This would need a fresh legal review before that kind of use starts.

**Cross-check:** I ran the same case through the European Commission's [EU AI Act Compliance Checker](https://ai-act-service-desk.ec.europa.eu/en/eu-ai-act-compliance-checker). The repository is public on GitHub, so anyone can get the code and run it with their own OpenAI, Cohere, and Pinecone keys, which counts as placing the system on the market. The checker confirms:

- I am established in the EU and count as the provider.
- None of the Article 5 prohibited practices apply.
- None of the Article 6(1) sector-specific product rules apply.
- None of the Annex III high-risk areas apply.
- The Article 50 transparency duties do apply, because the system interacts directly with users and generates AI written text.

This matches the limited risk / Article 50 tier above.
