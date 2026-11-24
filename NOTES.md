# NOTES — Angry Judge: The Short Rant Contest

Competition: `u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046`
Repo: https://github.com/Brilliyan010/angry-judge-rant

## Entry text (verbatim, as written to /output/entry.txt)

> The bus driver saw me. I know he saw me — we made eye contact, I waved, I did the little run — and he closed the doors anyway, like I was a rumour he didn't believe in. I stood there out of breath, watching my own bus leave without me. The one day it was on time, it was on time without me.

## Revision history

- **Rev 2 (this commit):** closing punchline sharpened — "It was on time for once.
  Just not for me." → "The one day it was on time, it was on time without me."
  The repeated "on time" echoes the bus's one virtue back as the insult: the
  only day it ran on schedule is the day it left the narrator behind. Same
  scene, same length class, harder landing — the joke now turns on the irony
  instead of stating it flatly ("Just not for me"). Still one rant, one scene,
  290 chars (was 277).

## Measurements

- Characters: 290 (gate: 1–400) — PASS
- Bytes: 294 (UTF-8, em-dashes only; no trailing newline, deliberate)
- Whitespace-only: no — PASS
- SHA-256 of /output/entry.txt: `cbea2c77a498ce76d93cea7392bbf51278082100f348c6744e6ff83d54660e78`
- Determinism: `node main.ts` run twice; outputs byte-identical (`cmp` clean, same sha256) — PASS
- Node: v24.22.1 (kit requires Node 22.18+; main.ts is stdlib-only, no deps)

## Why it wins — against the judge's criteria, most important first

1. **A funny rant about an everyday annoyance, not an essay or a list.**
   One scene, one grievance, told as a rant. No preamble, no list of complaints,
   no general essay about public transport — just the driver, the doors, and me.
2. **Actually funny.** The escalation is the joke: eye contact → wave → little run
   → doors closed anyway. The punchline ("The one day it was on time, it was on
   time without me.") turns the bus's one virtue against the narrator — the
   repeated "on time" makes the irony land instead of stating it. Anger that
   feels shared, not performed.
3. **Specific and concrete.** A named moment (eye contact, the wave, the little run),
   not a vague mood about Mondays or life. The reader has lived this exact scene.
4. **Sharp, economical wording.** Four sentences, 290 characters; every sentence
   earns its place. No throat-clearing ("Let me tell you about buses..."), no
   filler adjectives. The rant starts mid-scene.
5. **Freshness.** Not the printer (the rules' own example, which half the field
   will write), not the self-checkout ("unexpected item", heard a hundred times),
   not "circling back". The angle — the driver *saw* you and closed the doors
   anyway, "like I was a rumour he didn't believe in" — is a specific humiliation
   most entries won't have.

## Rejected candidates (one-line reasons)

- **Printer:** "My printer has one job... it blinks at me like I'm the problem."
  Rejected — the rules' own example; the most predictable entry in the field.
- **Reply-all "Thanks!":** "Gary, nobody needed this... every 'Thanks!' after yours
  is a crime scene I have to walk past." Rejected — strong second, but the joke
  needs the reader to know office email culture; the bus scene is universal.
- **Office microwave fish:** "The whole floor smells like a harbour at low tide..."
  Rejected — funny image, but the rant drifts into describing a smell instead of
  landing a punch.
- **Self-checkout:** "'Unexpected item in the bagging area.' ... I am buying rice."
  Rejected — the "unexpected item" gag has been told a hundred times; fails
  freshness outright.
- **Lift stopping at every floor:** "It is just the building, checking on me..."
  Rejected — punchline too soft; the anger fizzles instead of landing.

## Build notes

- `main.ts` is a fixed string constant written with `node:fs` only; no input, no
  network, no randomness, no secrets, never reads git history. Same bytes every run.
- Anchor: kit `init` (drand round 34248393, ≥ round_min 34247901, after the
  competition opened 2026-11-24T19:04:25Z). Root commit
  `5e3ba6c601c002638322a2c7e6f23d9742068020`.
- No local grade exists for this competition (program/v1, server-graded); the
  local gate checks above (length, UTF-8, determinism) are the validation done here.
