# EU AI Act Compliance Audit --- Previously On: Love Is Blind

**Project:** Previously On: Love Is Blind\
**Author:** Louise Plessis\
**Project 3:** Autonomous Research and Report Generation Agent\
**Assessment:** First-pass EU AI Act compliance audit

> **Scope note:** This is a product/compliance assessment for the lab.
> It is not legal advice, a conformity assessment, or certification.

------------------------------------------------------------------------

## Phase 1 --- System brief

**Previously On: Love Is Blind** is an AI-powered recap companion for
viewers who want to remember what has happened in a season without being
spoiled on episodes they have not yet watched. The user provides three
inputs: the *Love Is Blind* edition, season, and the last episode they
watched. No account profile or personal characteristics are required for
the core flow.

After the user starts a recap, the system works autonomously. It fetches
canonical episode and cast metadata from OMDb and TMDB, runs web
searches through Tavily, checks results against a hand-verified season
index, ranks relevant sources, and retrieves YouTube comments for fan
reaction. Selected material is chunked, embedded and indexed in
Pinecone. Retrieval is filtered so that only material tagged at or
before the viewer's selected episode can be used. A generative model
then synthesises the material into a structured recap. A separate
spoiler-check node audits the generated draft and can send it back for
regeneration if it detects information beyond the user's cutoff.

The system therefore processes show metadata, public web content, and
public YouTube comments. Some source material may contain personal data,
particularly usernames/channel identifiers and comments attributable to
identifiable YouTube users. The viewer's edition/season/episode
selections are not inherently identifying, although they could become
personal data if linked to an identifiable user in a production service.

The output is generated text: an introduction, season-wide drama recap,
recent highlights, participant information, fan reactions, sources, and
a conclusion. It does not score viewers, determine eligibility, make
employment or financial decisions, or control access to a service.

There is no human review before a recap reaches the viewer. Instead, the
system uses automated safeguards: source selection, episode-number
filtering, and a dedicated spoiler-check/retry loop. I designed and
built the prototype using third-party APIs and AI infrastructure. In
production, the organisation operating the consumer service would make
it available directly to viewers.

------------------------------------------------------------------------

## Phase 2 --- Risk tier classification

  -----------------------------------------------------------------------
  Question                            Answer
  ----------------------------------- -----------------------------------
  Does this system fall under any     **No.** Its intended purpose does
  prohibited category (Article 5)?    not involve prohibited
                                      manipulation/exploitation, social
                                      scoring, prohibited biometric
                                      categorisation, workplace/education
                                      emotion recognition, prohibited
                                      facial-recognition database
                                      creation, or prohibited real-time
                                      biometric identification.

  Does this system operate in any of  **No.** An entertainment
  the eight Annex III areas?          recap/research assistant is outside
                                      the listed high-risk areas such as
                                      employment, education, essential
                                      services, law enforcement,
                                      migration, biometrics, critical
                                      infrastructure and
                                      justice/democratic processes.

  If Annex III: does it significantly **N/A.**
  influence decisions, or is it       
  narrow/preparatory?                 

  Does it interact with end users or  **Yes.** The system is intended to
  generate content requiring          interact directly with viewers
  disclosure (Article 50)?            through an AI-generated recap
                                      experience. Article 50(1) requires
                                      users to be informed that they are
                                      interacting with AI unless this is
                                      obvious from the circumstances.

  **First-pass risk tier**            **Limited risk / transparency**

  **One-sentence justification**      The system is neither prohibited
                                      under Article 5 nor high-risk under
                                      Annex III, but its direct AI
                                      interaction triggers the Article 50
                                      transparency analysis.
  -----------------------------------------------------------------------

### Classification ambiguity

The main classification is not especially ambiguous: the intended use is
entertainment and information synthesis, not a high-risk decision
context. The more important uncertainty is the **scope of the Article 50
disclosure in the actual interface**. If the product branding and
interaction make the AI nature obvious to a reasonably well-informed,
observant and circumspect user, Article 50(1) contains an exception; for
a production product, I would still choose explicit disclosure as the
safer and clearer product design.

The system also generates text, but the separate Article 50 rules
concerning publication of AI-generated text on matters of public
interest are not the main basis for this classification: the product is
an entertainment recap companion, not a public-interest news publisher.

**Phase 4 high-risk checklist:** skipped, because the system is not
classified as high-risk.

------------------------------------------------------------------------

## Phase 3 --- Role map

  -----------------------------------------------------------------------
  Role                    Entity                  Key AI Act obligations
                                                  / first-pass
                                                  interpretation
  ----------------------- ----------------------- -----------------------
  **Provider**            **Louise / future       For this exercise, I am
                          entity operating        the provider because I
                          Previously On**         designed the AI system.
                                                  If placed on the market
                                                  or put into service
                                                  under my own name, the
                                                  provider is responsible
                                                  for applicable AI Act
                                                  requirements, including
                                                  designing the
                                                  direct-interaction
                                                  experience to satisfy
                                                  Article 50 where
                                                  required.

  **Deployer**            **Product operator;     The organisation
                          potentially the same    professionally
                          organisation as         operating the service
                          provider**              uses the system. In a
                                                  direct-to-consumer
                                                  model, provider and
                                                  deployer functions may
                                                  sit within the same
                                                  company. It must use
                                                  the system consistently
                                                  with its intended
                                                  purpose and applicable
                                                  law.

  **AI/model vendor**     **OpenAI / other model  Provides underlying
                          provider used by the    model capabilities. Its
                          implementation**        own AI Act obligations
                                                  depend on the
                                                  model/service and its
                                                  legal role. Using a
                                                  third-party model does
                                                  not transfer the
                                                  provider's
                                                  product-level
                                                  obligations to the
                                                  vendor.

  **Infrastructure        **Pinecone**            Provides vector
  vendor**                                        storage/retrieval
                                                  infrastructure. It is a
                                                  technical supplier in
                                                  this architecture; its
                                                  precise AI Act role
                                                  requires
                                                  component-specific
                                                  legal analysis rather
                                                  than assuming it is the
                                                  provider of the end
                                                  system.

  **Search/data vendors** **Tavily, YouTube Data  Supply search results,
                          API, TMDB, OMDb**       comments, or
                                                  entertainment metadata.
                                                  Contractual, privacy,
                                                  platform/API and
                                                  data-use requirements
                                                  remain relevant even
                                                  where these suppliers
                                                  are not providers of
                                                  the end AI system.
  -----------------------------------------------------------------------

**Role-mapping caveat:** In a real deployment, legal counsel should
confirm the provider/deployer allocation and the role of each upstream
supplier based on contracts, branding, substantial modifications and how
the service is placed on the market.

------------------------------------------------------------------------

## Phase 5 --- Gap analysis and remediation plan

### Gap 1 --- User-facing AI transparency

-   **Obligation:** Article 50(1) transparency for AI systems intended
    to interact directly with natural persons.
-   **Current state:** The prototype clearly behaves as an AI recap
    product, but I have not implemented a dedicated, persistent
    disclosure in the audited product flow that explicitly tells the
    viewer that the recap is generated by AI.
-   **Required state:** The interface should inform the user that they
    are interacting with an AI system unless that fact is already
    obvious from the circumstances and context.
-   **Remediation:** Add a concise disclosure at the start of the recap
    experience and near the generated output: **"AI-generated recap
    based on public sources. It may contain inaccuracies."** Link to a
    short "About this recap" notice explaining sources and automated
    spoiler checking.
-   **Escalation needed?** **No** for the basic product change; **Yes
    --- legal review** before production to validate the final Article
    50 implementation and wording.

### Gap 2 --- Personal data in YouTube fan reactions

-   **Obligation / parallel law:** GDPR rather than a high-risk AI Act
    obligation. Public availability does not by itself remove
    information from data-protection law when a person remains
    identifiable.
-   **Current state:** The pipeline fetches public YouTube comments to
    create a fan-reaction section. Depending on the API fields retained,
    this can include usernames/channel identifiers and comment text
    attributable to identifiable people. Content may then be processed
    through the analysis, embedding or retrieval pipeline.
-   **Required state:** A production deployment needs a defined purpose
    and lawful basis, data minimisation, retention rules,
    processor/vendor mapping, appropriate user/data-subject information
    where required, and an assessment of international transfers and
    API/platform terms.
-   **Remediation:** Inventory exactly which YouTube fields enter each
    pipeline stage. Remove usernames/channel identifiers before analysis
    unless they are demonstrably necessary. Avoid displaying
    identifiable commenters by default; synthesise reactions at an
    aggregate level. Define retention/deletion rules and document which
    data is sent to each vendor.
-   **Escalation needed?** **Yes --- DPO/privacy counsel**, particularly
    for lawful basis, notices, retention, processor relationships and
    international transfers.

### Gap 3 --- Data minimisation and vector storage

-   **Obligation / parallel law:** GDPR data minimisation, storage
    limitation and privacy-by-design where stored material contains
    personal data.
-   **Current state:** Selected source material is chunked and indexed
    in Pinecone. The architecture was primarily designed for retrieval
    quality and spoiler safety, not around an explicit personal-data
    minimisation specification.
-   **Required state:** Only information necessary for the recap purpose
    should be embedded/stored, for no longer than needed, with a clear
    deletion strategy.
-   **Remediation:** Add a preprocessing step before embedding that
    strips unnecessary author identifiers and metadata, separates source
    URLs from text used for semantic retrieval, and applies a retention
    window or per-season deletion process. Document the fields stored in
    Pinecone.
-   **Escalation needed?** **Yes --- privacy review** to validate the
    production data lifecycle; implementation itself can be handled by
    the product/engineering team.

### Gap 4 --- Provenance and generated-vs-source distinction

-   **Obligation / control:** Transparency, trustworthy product design
    and consumer-protection considerations.
-   **Current state:** The system already includes sources, retrieval
    grounding, structural episode filtering and an automated spoiler
    audit. However, factual recap, synthesis of fan comments and
    model-generated interpretation/theories can appear within one
    generated experience.
-   **Required state:** A viewer should be able to understand which
    parts are grounded in source material and which are synthesis or
    interpretation, especially when the system may hallucinate.
-   **Remediation:** Label sections such as **"Episode recap," "Fan
    reaction," and "AI synthesis/theory."** Keep source links visible,
    and add a lightweight correction/report mechanism for factual errors
    or spoilers.
-   **Escalation needed?** **No** for the core product design; seek
    legal review if the service evolves toward publishing factual claims
    about individuals in a broader media context.

### Gap 5 --- No documented production compliance ownership

-   **Obligation / control:** Governance supporting ongoing compliance,
    even though the system is not high-risk.
-   **Current state:** As a course prototype, the project has technical
    logging and safeguards but no formal owner for privacy requests,
    vendor review, transparency wording or compliance changes.
-   **Required state:** A production operator should know who owns
    privacy/compliance decisions and how changes to sources, models or
    intended use trigger reassessment.
-   **Remediation:** Add a lightweight release checklist:
    intended-purpose change, new data source, new model/vendor, new
    personal-data field, new user-facing AI behaviour, and Article 50
    notice review. Assign an accountable product owner and privacy
    contact.
-   **Escalation needed?** **No** to establish the process; **Yes** when
    a flagged change creates a legal question.

------------------------------------------------------------------------

## Reinforce --- Design decision I would change

One design choice I would make differently is the handling of raw
YouTube comments. I initially approached the YouTube API primarily as a
product-quality problem: authentic comments make the "fan reaction"
section feel more representative of what viewers are saying. From a
compliance-by-design perspective, I should have defined the **minimum
data needed before ingestion**.

In a production version I would separate "content needed to identify
reaction themes" from "information identifying the commenter."
Usernames/channel identifiers would be removed before comments reach the
analysis and vector-storage pipeline unless there is a documented reason
to retain them. The generated product would default to aggregate themes
rather than attribution to individual commenters. This reduces privacy
exposure without removing the user value of the fan-reaction feature.

------------------------------------------------------------------------

## Phase 6 --- Compliance memo

**To:** Head of Product, Previously On\
**From:** Louise Plessis\
**Subject:** First-pass EU AI Act compliance assessment --- Previously
On: Love Is Blind

### Classification

Previously On is best classified as a **limited-risk / transparency AI
system** for this first-pass assessment. Its entertainment recap use
does not fall within Article 5 prohibited practices or the Annex III
high-risk areas, but the product is designed to interact directly with
viewers and therefore requires an Article 50 transparency analysis.

### Role map

For this exercise, the creator/operator of Previously On is the
**provider** of the end AI system. If the same company operates the
consumer service, it also performs the **deployer** function. OpenAI and
other model suppliers are upstream vendors with their own obligations
depending on their services; Pinecone provides retrieval infrastructure;
Tavily, YouTube, TMDB and OMDb provide search or source data. Final role
allocation should be confirmed contractually before production.

### Key findings

The first gap is user-facing transparency. The prototype should make the
AI nature of the recap explicit rather than relying on users to infer
it. Second, the fan-reaction pipeline introduces a separate privacy
issue: public YouTube comments can include personal data, and the
current prototype was not designed around a documented minimisation and
retention policy. Third, source-grounded facts, aggregate fan reaction
and AI synthesis should be more clearly distinguished in the interface
so viewers understand the provenance and limitations of the output.

The project already contains useful safeguards. The episode cutoff is
enforced structurally during retrieval rather than only through
prompting, and a dedicated spoiler-check node can reject and regenerate
a draft. Those controls reduce an important product risk, even though
spoiler prevention is not itself an AI Act high-risk obligation.

### Recommended next steps

1.  **Add the Article 50 transparency layer first:** explicit AI
    disclosure plus an "About this recap" notice.
2.  **Minimise the YouTube data pipeline:** remove unnecessary commenter
    identifiers before analysis/embedding and document retention.
3.  **Document the data/vendor flow:** what is sent to OpenAI, Pinecone
    and other suppliers, for what purpose, and for how long.
4.  **Improve output provenance:** distinguish factual recap, fan
    reaction and AI synthesis, while preserving source links and adding
    an error/spoiler reporting route.
5.  **Run privacy/legal review before production**, particularly for the
    lawful basis and data lifecycle for public comments and for final
    Article 50 wording. Re-run the AI Act classification if the intended
    purpose materially changes.

### Caveats

This memo is a first-pass product compliance assessment for a course
project. It is **not legal advice, a formal conformity assessment, or
certification**. It is based on the current intended purpose and
architecture; material changes to the product, data sources or use
context could change the assessment.

------------------------------------------------------------------------

## Stretch artifact --- Draft end-user transparency notice

### About this recap

**This recap is generated by AI.**

Previously On uses episode information, public web sources and public
fan reactions to create a recap up to the episode you selected. The
system automatically filters retrieved information to your episode
cutoff and runs an additional spoiler check before showing the recap.

AI-generated summaries can still contain mistakes or accidental
spoilers. Source links are provided so you can check the original
material.

The **Fan reaction** section summarises themes from publicly available
comments. It is designed to represent broad audience reactions, not to
profile individual viewers. In a production version, unnecessary
commenter identifiers should be removed before analysis and storage.

------------------------------------------------------------------------

## Evidence and legal references

-   **Project repository:**
    `lou-PL-dev/project3_autonomous_research_-and_report_generation_agent`
    --- current README documents the autonomous workflow, YouTube
    comment ingestion, Pinecone indexing/retrieval, episode cutoff and
    spoiler-check/retry architecture.
-   **Regulation (EU) 2024/1689 (AI Act):** Article 5 (prohibited
    practices), Article 6 and Annex III (high-risk classification),
    Article 50 (transparency obligations).
-   **Regulation (EU) 2026/1744:** 2026 amendments to the AI Act,
    including implementation timing changes.
-   **GDPR (Regulation (EU) 2016/679):** relevant to any personal data
    processed through public comments, identifiers, logs or production
    user data.
