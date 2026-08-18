# Compliance Memo: Stups

**To:** Head of Product
**From:** Gordan Skopljak
**Date:** 18 August 2026
**Re:** AI compliance review of Stups, and what it takes to put it in front of real users

---

## The short version

Stups is legal to run today and legal to ship. It sits in the lightest regulated category under European AI rules, and nothing about it changes that, even at scale. I am recommending approval, with two conditions to close before the first external user and two questions for legal before we charge anyone money.

The reason the risk is low is worth stating plainly. Stups suggests what to do with your evening. It does not decide who gets a job, a loan, a school place, or medical care. Those are the areas the rules are built around, and we are nowhere near them. That is a structural advantage and it will not change as we grow.

---

## Who is responsible for what

Today, nobody outside this project. The system is unpublished, has one user, and that user built it. That single fact is the reason almost no obligations currently apply.

The moment we give it to real users, we become the responsible party in the eyes of the regulation, with the full set of duties that follow. The AI vendor we use, currently OpenAI or DeepSeek, carries its own separate obligations for the model itself, but those are theirs, not ours. We remain answerable for what our product does with it.

---

## What we have to fix before a stranger uses it

**Tell people it is AI.** The message currently reads like a friend texting a suggestion, and nothing says a machine wrote it. That is acceptable while the only reader is the person who built it. It stops being acceptable the moment someone else receives it. European rules require that people know when they are dealing with a machine, and that requirement is already in force. Fix: a line at signup and a short footer on each message. Roughly two hours.

**Check the output before it sends.** Nothing reviews what the system produces. We get an alert if the workflow breaks, but not if it runs perfectly and recommends a venue that closed last year. Fix: a validation step before delivery, plus a thumbs up or down so we learn when a suggestion misses. Roughly half a day, and it produces the data personalisation needs anyway.

Total cost to be compliant for launch: under one engineering day. This is not a hold.

---

## Two things I want legal to look at before we take money

**Our event data is unlicensed.** Most of what Stups knows about the city is read directly off four public websites without permission. This is our largest commercial exposure and it is not an AI issue at all, it is contract and copyright. If one of those sites objects, we lose most of the event pipeline overnight and the product stops working. I want the terms reviewed and the sources replaced with proper agreements or paid feeds before launch.

**We send user preferences to an outside AI vendor.** On every run, the user's taste profile goes to a third party model provider. Today that is my own data and it does not matter. The day it is a customer's, we need a signed agreement with that vendor, a stated retention period, written confirmation they do not train on our users' data, and a way to delete a user's information on request. Our current design stores nothing, which sounds privacy friendly but in fact means we have no way to find or delete anything either. That capability has to be built alongside personalisation, not bolted on after.

---

## One roadmap item that changes the picture

The plan includes reading sleep and stress data from smartwatches. That is health information and is treated far more strictly than anything else we handle. It does not make Stups a high risk product, but it does require explicit, separate, revocable permission from each user and a higher standard of care throughout. My recommendation is to treat it as a distinct project with its own review rather than a feature added to an existing consent flow.

Daily mood tracking, by contrast, is fine. I checked it specifically against the rules on reading people's emotions, and those cover workplaces and schools, not consumer leisure apps.

---

## Recommendation, in order

1. Close the disclosure and validation items. Under one engineering day. Before the first external user.
2. Add run logging. One hour, useful to us regardless of compliance.
3. Legal review of the four scraped data sources. Before commercial launch.
4. Vendor data agreement and deletion capability. Before storing any customer's preferences.
5. Separate review for the smartwatch feature, when it reaches the roadmap.

---

## What this memo is not

This is a first pass internal self assessment. It is not a legal opinion, not a formal conformity assessment, and not a certification of any kind. Items three and four above specifically require qualified external advice, and nothing here should be relied on in their place.
