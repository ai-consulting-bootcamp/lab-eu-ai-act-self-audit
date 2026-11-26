# Reinforce and stretch

## Reinforce 1 - What I glossed over in my own system

| What I said about it | What is actually true | Does the picture change? |
|---|---|---|
| "The LLM never sees raw data." | It never sees the raw *cycle log*. It does see blood values, symptom ratings, age, contraception status and the free-text "What bothers you most?" answer. | **The AI Act tier doesn't change. The GDPR picture does:** more health data leaves the EU than my own README claims. This is a blind spot of exactly the kind the lab warns about: I repeated a design principle until I stopped checking it. |
| "Nothing is stored." | It's true of my server only. OpenAI (abuse-monitoring retention), Resend (email logs) and hosting all keep data. | GDPR Art 13 accuracy, plus a consumer-law risk from a misleading claim (Gap 5). |
| The free-text field is "used only as a search query". | It is also embedded by OpenAI and passed to the model, unfiltered. | It opens a prompt-injection path I never tested (Art 15 robustness, if high-risk). |
| The "alignment" count is "not a score and never shown as a label". | It drives what the model may say ("in line with what happens when egg reserve falls"). | **The tier might change.** The count is the feature that most looks like a diagnostic algorithm (Gap 1). |

## Reinforce 2 - A design decision that created a compliance burden

**Decision:** letting the report name *early menopause / premature ovarian insufficiency* for under-40s when the cycle, symptoms and labs line up. I built it because it felt like the most valuable output: the problem statement is that diagnosis comes 6 years late.

**In hindsight:** that one feature does more than anything else to push Menohelp towards medical-device software, and with it into AI Act high-risk via Annex I. All the other safety work (number checks, banned wording, fixed red-flag texts) aimed to make the output *accurate*. None of it addressed what the output *is for*, legally.

**What I'd do differently:** write the intended-purpose statement on day 1, next to the architecture, and test every feature against it. The safe version still delivers the value: "this combination is worth showing a gynaecologist soon", plus a doctor-ready summary of the data. It tells the woman *to act* without telling her *what she has*. I would also have built the metadata-only log from the start, instead of treating "store nothing" as the privacy answer.

---

## Stretch - Transparency notice for end users (closes Gaps 1, 3 and 5)

I picked this artefact because the most significant gap, the intended purpose, is fixed in writing **here**: the MDR reads intended purpose from what the product tells its users. The same notice also carries the Art 50 AI disclosure and the accurate data-flow wording.

> **About your Menohelp report**
>
> **What Menohelp is for.** Menohelp helps you organise and understand your own cycle-tracking data, symptoms and blood test results, and prepare questions for a doctor. It **does not detect, diagnose or monitor any condition** and is not a medical device. It doesn't replace a doctor.
>
> **How your report is made.** Our code calculates every number from your data. An **AI language model (OpenAI)** then writes the text, using those figures and licensed menopause-coaching material. Our software automatically checks the numbers and wording. **No person reviews your report before you see it.** Reports carry a hidden label that marks them as AI-generated.
>
> **What it can get wrong.** The AI may phrase things imperfectly or miss context it can't see: other conditions, medication, your history. A pattern in your data is a reason to talk to a doctor, not a conclusion.
>
> **Your data.** We don't save your uploads; they're deleted from our server within an hour. To write your report, your figures, symptom answers and the text you type are sent to **OpenAI in the US**, which may keep them for up to 30 days for safety checks before deleting them. We only process your data with your explicit consent, which you can withdraw at any time. Privacy contact: *[DPO address]*.
>
> **If something worries you.** Feeling unwell, chest pain, or thoughts of harming yourself: call **112** or your local emergency line now. Don't wait for a report.
