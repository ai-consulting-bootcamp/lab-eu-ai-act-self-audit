## Interview Prep Report

*Julia Antunes - 16 Nov 2026*

### What is it?
An n8n workflow that creates a personalized interview-preparation report.

### What problem does it resolve?
It reduces the time needed to research a company, understand a role, and identify relevant candidate experience.

### Who uses it?
Job seekers preparing for an interview.

### How does it work?
The user submits a company name, job description, and a PDF CV, GitHub profile, or both. The workflow validates the input, researches the company and recent news, gathers candidate evidence, and uses OpenAI to generate and display an HTML report.

### What data does it keep?
It processes the job description, CV text, public GitHub repository data, company research, news, and generated report. n8n execution history may retain sensitive data; invalid submissions may also be logged to Notion if configured. Generated reports are not stored in persistent project storage.

### What does it decide?
It identifies role requirements, candidate matches, projects to highlight, skill gaps, and five likely interview questions.

### What happens when its wrong?
Invalid inputs are rejected with a form error. Unsupported claims and unverified links are removed during validation. API failures or unusable evidence may stop the workflow and require correction or a retry.

Further info on the project can be found at:

- [Project repository](https://github.com/antunesjulia/project-3-interview-prep-report)
- [README](https://github.com/antunesjulia/project-3-interview-prep-report/blob/main/README.md)