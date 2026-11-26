# Phase 1: System brief - Menohelp

**System:** Menohelp, my bootcamp build project (code: `course work/week-6/proj-menopause-insights`). A working prototype that runs locally. It is not deployed and has no real users yet.

**What it does.** It turns a woman's own health data into a written report about her menstrual cycle. The report says whether her pattern looks like the changes that can happen before menopause (perimenopause). It also suggests what may help and what to raise with a doctor. Every report says it is "not medical advice and not a diagnosis".

**Inputs. All of it is personal health data:**
- **Cycle log:** an export from a period-tracking app (dates, cycle length, flow).
- **Blood test PDFs (optional):** code keeps only a fixed list of values, such as hormones and thyroid. It drops name, address and date of birth, but keeps age.
- **Questionnaire (optional):** symptom ratings, contraception and surgery history, and one free-text box ("What bothers you most?").
- **Coaching material:** licensed, non-public menopause-coaching PDFs that the system searches for advice.

**How it works.**
1. **Code, not AI, calculates every number:** cycle averages, variability, trends, long or skipped cycles, and blood values outside the lab's printed range.
2. **An AI language model (OpenAI) writes the report text** from those facts and the coaching material.
3. **Automatic checks** compare every number in the text with the data. They block diagnoses, doses and "start/stop medication" wording.
4. **Fixed safety texts, written by me,** are added for red flags such as palpitations or severe low mood.

**Outputs.** A personalised report with a chart, shown on screen: summary, findings, "what it could mean", "things that may help" and "talking to your doctor". For women under 40 whose signals line up, it may name **early menopause or premature ovarian insufficiency** as something a gynaecologist should check. The user can email the report to any address.

**Who is affected.** The woman whose data it is. Her doctor or coach may also read the report.

**Human review.** **No human reviews the report before the user sees it.** The only human step is the user confirming the blood values the code read from her PDF. Everything else is automatic: the number check and the wording check, each allowing up to 2 rewrites.

**Who built it.** I built it alone, as a custom system. Third-party services:
- **OpenAI:** text generation and search embeddings.
- **Supabase:** stores the coaching material, not user data.
- **Resend:** sends the emails.

**Who would use it.** Individual women for themselves, and coaches preparing consultations with their clients. For this audit, the client is a **fictional** coaching company, "Wechselweise Coaching GmbH", which would offer Menohelp to its customers and coaches.

**Data handling today.** Uploads stay in memory for at most one hour. The system has no accounts, no consent step and no logs. The UI says "Nothing is stored".
