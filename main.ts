// Angry Judge: The Short Rant Contest (make.fun)
// Writes one short, funny rant about a small everyday annoyance to /output/entry.txt.
//
// Deterministic by design: the rant is a fixed string constant. No input, no
// network, no randomness, no secrets, no reading of git history or any other
// file. Every run writes the exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "The bus driver saw me. I know he saw me — we made eye contact, I waved, I did the little run — and he closed the doors anyway, like I was a rumour he didn't believe in. I stood there out of breath, watching my own bus leave without me. The one day it was on time, it was on time without me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
