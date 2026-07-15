import fs from "node:fs";
import path from "node:path";

const GAMES_DIR = path.join(process.cwd(), "app", "games");

const DIFFICULTY_ORDER = { easy: 0, medium: 1, hard: 2 };

/**
 * List every game folder under app/games (ignoring helpers like _lib).
 * A folder appearing here IS a registered game — there is no central list to edit,
 * so students never touch a shared file and their PRs never conflict.
 */
export function getGameSlugs() {
  return fs
    .readdirSync(GAMES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name);
}

/**
 * Load and normalise the meta.js of every game folder.
 * Returns an array sorted by difficulty then title.
 */
export async function getAllGames() {
  const games = await Promise.all(
    getGameSlugs().map(async (slug) => {
      const mod = await import(`../${slug}/meta.js`);
      const meta = mod.default ?? {};
      return {
        slug,
        title: meta.title ?? slug,
        difficulty: meta.difficulty ?? "easy",
        issue: meta.issue ?? null,
        status: meta.status ?? "unclaimed",
        author: meta.author ?? null,
        github: meta.github ?? null,
        description: meta.description ?? "",
      };
    }),
  );

  return games.sort((a, b) => {
    const byDifficulty =
      (DIFFICULTY_ORDER[a.difficulty] ?? 99) - (DIFFICULTY_ORDER[b.difficulty] ?? 99);
    if (byDifficulty !== 0) return byDifficulty;
    return a.title.localeCompare(b.title);
  });
}

/**
 * The GitHub repository the issues live in, used to link placeholder games to
 * their spec. Set NEXT_PUBLIC_REPO_URL in Vercel/`.env` once the repo exists.
 */
export const REPO_URL = process.env.NEXT_PUBLIC_REPO_URL ?? "https://github.com/akirachix/games";

export function issueUrl(issue) {
  if (!issue) return `${REPO_URL}/issues`;
  return `${REPO_URL}/issues/${issue}`;
}
