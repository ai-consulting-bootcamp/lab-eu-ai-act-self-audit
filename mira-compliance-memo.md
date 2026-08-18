# MIRA compliance memo

To: Head of Product  
Subject: First-pass EU AI Act compliance review of MIRA

MIRA is a private, authenticated creative-direction tool that generates brand-world concepts, moodboard directions, and editorial visual suggestions. Based on the current local source, it is best classified as a limited-risk / transparency use case rather than a high-risk system. It does not determine employment outcomes, credit access, education access, public-benefit eligibility, or law-enforcement decisions. The local implementation is private and owner-scoped, and the active V3/V4 documentation confirms the flow is not publicly deployed.

The main role map is straightforward: the product team that designed and configured the MIRA workflows acts as the provider in this first-pass view, while the organisation or client using MIRA in production acts as the deployer. Any external model or image-generation vendor would need a separate responsibility check if it is part of a live production environment. This is a first-pass allocation only and would need formal legal review for a real commercial rollout.

The key compliance findings are limited but important. First, the system is user-facing and generates AI-created content, so Article 50-style transparency is likely relevant. Users should be clearly told that the tool is AI-assisted and that generated visuals may be AI-generated outputs. Second, the project includes private or personal creative inputs, so separate privacy controls are needed for any personal data, image uploads, or private inspiration handling. Third, the project lacks a formal deployment-level notice and provider/deployer governance document, which should be created before external use.

The recommended next steps are: (1) add a clear AI disclosure at the start of the user journey and on exported outputs; (2) document the provider/deployer map and any third-party model responsibilities; (3) formalise personal-data handling and retention rules for private inspiration or uploaded content; and (4) keep the current system in private staging until those controls are in place. This memo is not a legal opinion or conformity assessment. It is a first-pass compliance review based on the actual MIRA source and project documentation, and it should be validated by qualified legal or compliance counsel before public or client deployment.
