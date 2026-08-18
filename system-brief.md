# System brief: AI Entrepreneur Coach

This is a one page brief of what I built for Project 3. It is written for someone who has never seen the system before.

## What the system does

The system looks at a person's professional background and personality, then suggests business ideas that fit them. The user uploads their CV or LinkedIn export, answers a short personality quiz, and tells the system their budget and free time. The system picks the best matching ideas from a list of 463 business ideas, explains why each one fits, and gives a 90 day plan to start the top choice.

## Inputs

- A CV or LinkedIn PDF (name, job history, skills). This is personal data.
- Answers to a Big Five personality quiz (TIPI). This is also personal data, it says something about the person's character.
- Budget and time the person has available.

No sensitive categories like health, race, or religion are asked on purpose. But a CV can still reveal things like age (through graduation years) or nationality (through language or location).

## Outputs

A ranked list of business ideas, each with a fit percentage and a short explanation of why it fits. For the idea the user picks, the system also creates a 90 day roadmap. The user can ask for changes to the wording of the plan, but the fit score and the budget and time numbers stay fixed. Only the story around them can change.

## Who is affected by the output

Only the person who uses the tool. Right now there is no employer, bank, or other third party using the output to make a decision about someone. The user is the one reading their own report and deciding what to do with it.

## Human review

The user is the human in the loop. They see the ranked ideas, choose one, and can give feedback on the wording before the final report is made. There is no separate reviewer checking the system's output before it reaches the user, because the user is both the subject and the reader of the report.

## Who built it

It is built by Zahra Moghaddasi as Project 3 for AI Consulting Bootcamp in Ironhack, using OpenAI (for reading the CV and writing the report), Cohere (to turn ideas into vectors), and Pinecone (to store and search those vectors).

## Who would use it in production

The code is public on GitHub. Anyone can clone it and run it on their own machine with `python app.py`, using their own OpenAI, Cohere, and Pinecone keys. There is no hosted version and no company running it for other people, each person who uses it runs their own copy. Future plans mention a hosted version, but for this audit I describe the system as it exists today.
