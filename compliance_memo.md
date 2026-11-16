# Compliance memo: Programme Research Agent

**To:** Head of Product, Unioptt · **From:** Elif Yurdakul, AI consultant · **Re:** EU AI Act first-pass assessment

**1. Classification.** The research agent is most likely **minimal risk** under the EU AI Act: it checks public programme facts and shows where a student meets published requirements, but it does not decide admission, rank students or score them. It sits close to the education area of Annex III, so this rests on the agent staying a preparatory tool and on its profile comparison not counting as profiling.

**2. Roles.** Unioptt (built by me) is the **provider**, because we developed it and would offer it under our name. Unioptt is also the **deployer** when we offer it to students; schools and counsellors become deployers if they use it later. OpenAI provides the underlying language model and carries its own obligations.

**3. Key findings.**
- **The word "Verified" overpromises.** It currently means the system's automatic checks passed, but families will read it as "a person confirmed this". That is a consumer-protection risk, especially with young users.
- **The classification depends on how we use student profiles.** Today the profile is synthetic. With real students, the comparison of grades and language levels against requirements may count as profiling, which could move the system into the high-risk category.
- **Real student data needs a data protection setup before launch.** Many users are under 18, and several services we use are based in the US.

**4. Recommended next steps.**
1. Rename the status to "Auto-verified" and add a two-line AI notice to every report (this week, no external review needed).
2. Write a short document explaining why we consider the system not high-risk, and **have a lawyer review it** before any launch with real students.
3. With a **data protection officer**: parental consent for under-18s, keep student profiles out of external AI services, EU hosting for logs, retention rules.
4. Before launch: a human review step for reports with uncertain facts.

**5. Caveats.** This memo is a first-pass consulting assessment. It is not a legal opinion, a conformity assessment or a certification. Classification and role mapping should be confirmed by a lawyer.