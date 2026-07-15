# Contributing — build your game

Welcome! Each student builds **one game**, entirely inside its own folder, and ships it
through a real pull request. This is exactly how teams work in industry: claim a task,
branch, build, open a PR, get it reviewed, merge.

## The workflow

### 1. Claim a game

- Browse the [open game issues](../../issues). Each issue is the full spec for one game.
- Find an **`unclaimed`** game you like, comment **"claiming"**, and assign it to yourself.
- Change the label from `unclaimed` to `claimed` so nobody doubles up.

### 2. Set up the project (once)

```bash
git clone <repo-url>
cd games
npm install
npm run dev        # open http://localhost:3000
```

### 3. Create a branch

```bash
git checkout -b <your-slug>      # e.g. git checkout -b snake
```

### 4. Build your game

- Your folder already exists as a placeholder: **`app/games/<your-slug>/`**.
- Replace `page.js` in that folder with your game. Update `meta.js`.
- **Only touch files inside your own folder.** This is what keeps 50+ people working in
  one repo without conflicts — and it's the first thing the reviewer checks.
- Look at **`app/games/tic-tac-toe/`** for a complete example: it splits pure game rules
  (`logic.js`) from the UI (`page.js`) and has tests (`game.test.jsx`). Copy that shape.
- Use the shared UI kit in `components/ui/` (shadcn) — `Button`, `Card`, `Badge`, etc.

### 5. Fill in `meta.js`

```js
const meta = {
  title: "Snake",
  difficulty: "medium",
  issue: 23,
  status: "done", // <- flip from "unclaimed" to "done" when it's playable
  author: "Your Name",
  github: "yourhandle",
  description: "Eat, grow, and don't hit your own tail.",
};
export default meta;
```

Setting `status: "done"` makes your card on the homepage link to your playable game.

### 6. Write at least one test

Add a `*.test.jsx` file in your folder. Test your game logic (easiest if you keep it in a
separate `logic.js` like the example). Run tests locally:

```bash
npm test          # watch mode
npm run test:run  # run once
```

### 7. Check everything passes locally

CI will run these on your PR — run them first so there are no surprises:

```bash
npm run format:check   # formatting (fix with: npm run format)
npm run lint           # linting
npm run build          # production build — a broken game fails here
npm run test:run       # your tests
```

### 8. Open a pull request

```bash
git add app/games/<your-slug>
git commit -m "Add <game> game"
git push -u origin <your-slug>
```

Open the PR on GitHub. In the description write **`Closes #<your-issue-number>`** so your
game issue closes automatically when it merges. A **Vercel preview link** will appear on the
PR — click it to play your game live, and paste it into the PR description.

### 9. Review & merge

Your instructor reviews the PR. Once approved and all checks are green, it's merged and your
game goes live on the arcade. 🎉

## Rules of thumb

- **One folder per person.** Never edit another game's folder or a shared file.
- **Keep it self-contained.** Everything your game needs lives in your folder (except the
  shared `components/ui` kit).
- **Ask for help early** — in the issue comments or with your instructor.
