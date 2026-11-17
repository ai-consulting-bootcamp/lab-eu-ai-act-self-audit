## System Brief: Interview Prep Report

*Julia Antunes — 16 Nov 2026*

### What does the system do?

This workflow helps a job seeker prepare for an interview. It researches a company and its recent news, compares a job description with information about the candidate, and creates a report with relevant experience to discuss, possible skill gaps, and likely interview questions. It is a preparation aid, not a hiring tool.

### What inputs does it take?

The user provides a company name, a job description, and a PDF CV, a GitHub profile, or both. The workflow extracts information from the CV and/or gathers repository information from the supplied GitHub profile. It also researches the company and recent news using online sources. A CV can contain personal data such as a person's name, contact details, employment history, education, and skills. A GitHub profile may contain identifying information and public work history. The job description and company research may also identify people, depending on their contents.

### What does it output?

The workflow generates and displays an HTML report. The report summarizes relevant role requirements and candidate evidence, suggests projects or experience to highlight, identifies potential skill gaps, and lists five likely interview questions. It does not produce a candidate score, hiring decision, or notification.

### Who is affected, and how is the output reviewed?

The job seeker whose CV or profile is submitted is the person most directly affected: the report may shape how they prepare and present their experience. The workflow does not make decisions or take action on the user's behalf. The user can read the report, check its claims and links, and decide what advice to use; there is no separate or mandatory human-review step built into the workflow. Unsupported claims and unverified links are removed during validation, but the user should still verify the report before relying on it.

### Who built it, and who would use it?

Julia Antunes built the workflow by configuring n8n and integrating OpenAI and online research sources. In production, the intended users would be job seekers preparing for their own interviews. No employer or hiring team is intended to use the report to assess or select candidates.

### Data handling

The workflow processes the submitted materials, research results, and generated report. n8n execution history may retain sensitive data, and invalid submissions may also be logged to Notion if that integration is configured. Generated reports are not stored in persistent project storage.

Further information:

- [Project repository](https://github.com/antunesjulia/project-3-interview-prep-report)
- [README](https://github.com/antunesjulia/project-3-interview-prep-report/blob/main/README.md)
