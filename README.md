# AkiraChix Games Arcade

A single Next.js app where each student builds **one browser game** in its own folder. The
homepage auto-discovers every game and lists it as a playable card. Built as a hands-on way
to learn modern Next.js **and** the real-world workflow of claim → branch → PR → review →
merge → deploy.

- **Framework:** Next.js (App Router) + React, **JavaScript only**
- **UI:** Tailwind CSS + [shadcn/ui](https://ui.shadcn.com) (components vendored in `components/ui/`)
- **Tests:** Vitest + Testing Library
- **Hosting:** Vercel (auto-deploy on merge to `main`, preview deploy per PR)

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command                | What it does                                    |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Start the dev server                            |
| `npm run build`        | Production build (CI runs this)                 |
| `npm run lint`         | ESLint (CI runs this)                           |
| `npm run format`       | Format all files with Prettier                  |
| `npm run format:check` | Check formatting without writing (CI runs this) |
| `npm test`             | Run tests in watch mode                         |
| `npm run test:run`     | Run tests once                                  |

## How it's organised

```
app/
  page.js                 # arcade homepage — auto-lists every game
  games/
    layout.js             # shared "back to arcade" header
    _lib/loader.js        # discovers game folders (no central registry to edit)
    tic-tac-toe/          # fully-built reference game — copy its shape
      logic.js            #   pure rules (easy to test)
      page.js             #   the UI
      game.test.jsx       #   example tests
      meta.js             #   card metadata
    <game>/               # one folder per student (placeholder until built)
      page.js
      meta.js
components/ui/            # shadcn components (shared, don't edit per-game)
```

**Adding a game = filling in its folder.** There is no shared list to edit, so PRs don't
conflict. A game shows up on the homepage automatically once its folder has a `meta.js`.

## Building a game

Students: see **[CONTRIBUTING.md](CONTRIBUTING.md)** for the full step-by-step workflow.
Each game has a GitHub issue with its complete spec — claim one to get started.

## For instructors

- Each game is one GitHub issue (full spec inside). Students self-claim.
- `main` is protected: PRs require green CI (format + lint + build) and an approving review.
- Merges to `main` auto-deploy to production; every PR gets a Vercel preview.
- Set `NEXT_PUBLIC_REPO_URL` (in Vercel env) to this repo's URL so placeholder cards link to
  the right issues.
