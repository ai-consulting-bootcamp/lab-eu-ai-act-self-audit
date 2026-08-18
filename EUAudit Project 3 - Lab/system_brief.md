System Brief — Platform Risk Research Agent
What the system does

The system checks if an AI vendor is safe to use. A user gives it a vendor name and a use case. The system searches the web, checks compliance signals, and scores the vendor on six risk areas. It gives a final verdict: recommended, or not recommended. If not recommended, it suggests other vendors instead.

Inputs

The user gives three things:

The vendor name
What they plan to use the vendor for
Basic context about their own company

Some of this input may include company data. It does not include personal data about individual people.

Outputs

The system gives one report. The report has:

A trust score
Six risk scores (data handling, vendor stability, incident history, community signal, compliance posture, integration risk)
A confidence tag for each finding (strong evidence, limited evidence, inferred, or no signal found)
A final verdict
If the verdict is negative, two or three alternative vendors with a comparison table
Who is affected

The buyer company gets the report and acts on it. The vendor being checked is affected too, since the report can recommend against them.

Human review

No human reviews the report before the user sees it. This is on purpose. The system is self-serve. Nobody checks the output first. This makes the confidence tags important. If the system is not sure about something, it has to say so in the report itself.

Who built it

I built it alone. I used an existing LangGraph agent repo as a starting point and built the research, scoring, and reporting logic on top of it.

Who uses it in production

A company deciding whether to adopt an AI vendor or a no-code platform. This could be a small team doing their own vendor check, or a consultant running it before advising a client. The current build is designed for the first case: the buyer runs it directly.