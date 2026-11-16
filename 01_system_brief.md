# Phase 1 – System Brief: Job Application Prep Agent (Project 3)

**Author:** Nicolò · **Built with:** n8n · **Status:** working prototype (Ironhack Project 3)

## What the system does
The system helps a job seeker prepare one specific application. The user gives it a link to a job posting and their CV. It reads both, looks up the hiring company, and returns three things: an interview prep brief, suggestions for tailoring the CV to this role, and a first-draft cover letter. It doesn't apply for jobs, contact employers or make decisions. It drafts material that the job seeker then edits and uses, or doesn't.

## Inputs
- **Job posting URL:** the workflow fetches the public page and extracts the job description. This is public data with no personal data, apart from a recruiter's name if the posting lists one.
- **CV (PDF or text):** uploaded by the user. This is **personal data**: name, contact details, work history and education. A German-style CV often also has a photo, a date of birth and nationality, which can reveal sensitive characteristics.
- **Company information:** the agent searches public web sources about the employer.
- **AI model:** the CV text, the job description and the company information go in a prompt to a third-party large language model through its API.

## Outputs
All outputs are **generated text** (no scores, rankings or decisions):
1. **Prep brief:** a company overview, what the role needs, likely interview questions, and points to stress.
2. **CV suggestions:** which experience to highlight, which keywords match the posting, and what to reword.
3. **Cover letter draft:** a full letter addressed to the employer, based on the CV.

## Who is affected
- **The job seeker** is the main person affected. They rely on the advice, and the cover letter goes out under their name.
- **The employer and recruiter** receive a letter that was partly written by AI, but they don't interact with the system.
- **No one else's personal data** is processed, except a recruiter's name if the posting lists one.

## Human review
Yes. The system never sends anything itself. The job seeker reads all three outputs and decides what to copy, edit or drop before they apply. In practice the depth of that review depends on the user: someone in a hurry could paste the cover letter unchanged, including any detail the model got wrong.

## Who built it
Nicolò built it alone as a custom n8n workflow: a trigger and form, an HTTP fetch of the posting, CV text extraction, an AI agent step with a web-search tool, and output formatting. The AI model itself is a third-party general-purpose model accessed by API. n8n is the automation platform, not an AI provider.

## Who would use it in production
For this audit the production scenario is a client, **CareerBridge**, a fictional outplacement and career-coaching firm. It offers the tool to job seekers it supports (people leaving employers through severance programmes). Its coaches use it in sessions, and its candidates use it directly through a web form. CareerBridge doesn't use it to assess or select candidates for employers.
