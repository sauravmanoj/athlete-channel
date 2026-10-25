---
name: new-topics
description: Generate and rank new episode ideas for the backlog by combining proven title templates with sports/topics, checking demand and competition. Use when the user says /new-topics, asks for video ideas, or the backlog is low.
argument-hint: "[sport or theme, optional] [count, default 10]"
---

# Topic ideation

Read `channel.json` (niche, audience), `docs/style-guide.md` (title templates), `topics/backlog.md`, `topics/published.md`. Never duplicate.

## How ideas are made here
Template × subject. Templates that win for this format: *how to never get tired in X*, *the physique of a X athlete*, *your X is weak (here's why)*, *how to X faster than anyone*, *the levels of a X player*, *N mistakes killing your X*, *the mental game of X*, *what happens to your body when you X for 30 days*, *all X explained*.

Subjects: sports (tennis, badminton, football, basketball, cricket, volleyball, padel, pickleball, boxing, running, swimming, cycling, table tennis…) and universal athletic traits (speed, jump, endurance, reaction, balance, recovery, sleep, focus, nutrition).

## Procedure
1. Draft ~30 template × subject combinations (honour any theme the user gave).
2. For the best ~12, WebSearch: is there search demand (questions people ask, forum threads, existing videos with high views)? Has a big channel done *this exact* angle recently? Is the science solid enough for a framework + drills?
3. Score 1–5: desire strength, framework clarity, mascot-actability (can the character act it out?), demand, competition gap, safety (low-risk advice scores higher). Keep the top N.
4. Append to `topics/backlog.md`:
```markdown
- [ ] **How to never get tired in badminton** — 26/30 — template: never-get-tired
  - Framework: rally energy systems (alactic bursts + aerobic recovery between rallies)
  - Acting: lunges, smash jumps, gasping between rallies, battery gauge
  - Demand: … · Competition: …
```
5. Prefer a mix: half "expansions" of templates that already worked on the channel (check `published.md` notes), half new bets. Report the top 5.
