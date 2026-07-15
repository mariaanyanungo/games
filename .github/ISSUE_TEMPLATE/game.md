---
name: Game task
about: A single game for one student to build
title: "[Game] <Game name>"
labels: ["unclaimed"]
---

<!--
This issue is the COMPLETE spec for one game. A student reads only this issue to
know what to build. Fill in every section before publishing. Add a difficulty
label (easy / medium / hard).
-->

## Game

**Name:** <Game name>
**Folder:** `app/games/<slug>/` (this already exists as a placeholder — fill it in)
**Difficulty:** easy | medium | hard

## Objective

<One or two sentences: what does the finished game do, and how does a player win/lose?>

## Core rules / mechanics

1. <rule>
2. <rule>
3. <rule>

## Required features (must all work)

- [ ] Game is fully playable start to finish
- [ ] Clear win / lose / draw (or score) state shown to the player
- [ ] "New game" / reset control
- [ ] Turn or score indicator where relevant
- [ ] "Back to arcade" link works (provided by the shared layout)
- [ ] `meta.js` filled in (title, difficulty, author, github, `status: "done"`)
- [ ] At least one unit test in your game folder

## Stretch goals (optional)

- [ ] <nice-to-have>
- [ ] <nice-to-have>

## Definition of done

- [ ] Only files inside `app/games/<slug>/` are changed
- [ ] `npm run format:check`, `npm run lint`, and `npm run build` all pass
- [ ] `npm run test:run` passes (your test included)
- [ ] PR opened with `Closes #<this-issue-number>` and the Vercel preview link pasted

## How to claim

Comment "claiming" and self-assign this issue, then change the label from
`unclaimed` to `claimed`. See [CONTRIBUTING.md](../CONTRIBUTING.md) for the full workflow.
