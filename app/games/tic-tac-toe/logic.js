// Pure game logic — no React in here. Keeping the rules separate from the UI
// makes them easy to unit test (see game.test.jsx). Aim to do the same in your game.

export const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

export function emptyBoard() {
  return Array(9).fill(null);
}

/**
 * Returns { winner: "X" | "O", line: number[] } if someone has won,
 * otherwise null.
 */
export function calculateWinner(board) {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line };
    }
  }
  return null;
}

export function isDraw(board) {
  return board.every((cell) => cell !== null) && !calculateWinner(board);
}

/**
 * Returns a new board with `player` placed at `index`, or the same board if the
 * move is illegal (cell taken or game already over).
 */
export function makeMove(board, index, player) {
  if (board[index] || calculateWinner(board)) return board;
  const next = board.slice();
  next[index] = player;
  return next;
}

export function nextPlayer(player) {
  return player === "X" ? "O" : "X";
}
