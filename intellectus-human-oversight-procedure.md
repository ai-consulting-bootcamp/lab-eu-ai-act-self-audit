# Intellectus — Human Oversight Procedure

## Purpose

This procedure defines the minimum human review required before an Intellectus diagnostic can be treated as ready for client use.

Intellectus is designed as decision support. The system can organize evidence, generate findings, identify gaps and suggest next steps, but the consultant remains responsible for deciding what is accurate, relevant and appropriate to share with the client.

## Who reviews

A named consultant must review the diagnostic before it is marked client-ready.

The reviewer should understand the client context, the evidence used and the limits of the system. The reviewer must not assume that a finding is correct simply because it was generated or presented confidently by the system.

## What must be reviewed

Before approval, the consultant must check:

1. **Evidence**
   - Is each important factual claim supported by evidence?
   - Is the source appropriate and sufficiently current?
   - Has demo or non-client evidence been excluded from client-facing conclusions?

2. **Epistemic status**
   - Are facts, inferences, hypotheses and unknowns clearly distinguished?
   - Has any hypothesis been presented as established fact?

3. **Contradictions and gaps**
   - Are conflicting sources or unresolved evidence gaps visible?
   - Could any missing information materially change the recommendation?

4. **Recommendations**
   - Do the recommendations follow from the available evidence?
   - Are they proportionate to the confidence of the findings?
   - Is further client validation needed before action is recommended?

5. **Sensitive information**
   - Does the brief contain unnecessary personal, confidential or sensitive information?
   - Should any information be removed or escalated before client use?

## Approval states

A diagnostic should move through the following states:

`Generated → Under review → Corrected / challenged → Approved for client conversation`

A brief must not be marked ready if a critical unsupported claim or unresolved contradiction remains.

## Review record

For a production version, the system should record:

- reviewer identity;
- review timestamp;
- corrections made;
- rejected or overridden findings;
- reason for any override;
- unresolved evidence gaps;
- final approval status.

This information should remain associated with the diagnostic so that the final client-facing output can be traced back to the review process.

## Escalation

The consultant should stop the approval process and escalate when:

- evidence is insufficient for a material conclusion;
- the output concerns an individual rather than the organization;
- the proposed use could fall within an EU AI Act high-risk area;
- personal or sensitive data raises privacy concerns;
- the system is being used outside its documented intended purpose;
- a legal or regulatory interpretation is required.

Depending on the issue, escalation should go to the product owner, compliance lead, Data Protection Officer or legal counsel.

## Principle

Human review is not intended to be a final click after the system has already made the decision.

The reviewer must have enough information and authority to challenge, correct, reject or withhold the output before it is used with the client.