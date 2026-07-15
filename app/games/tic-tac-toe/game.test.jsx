import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TicTacToePage from "./page";
import { calculateWinner, isDraw, makeMove, emptyBoard } from "./logic";

// Two styles of test, both worth learning:
// 1) fast unit tests of the pure logic
// 2) a component test that clicks through a real game

describe("tic-tac-toe logic", () => {
  it("detects a row win", () => {
    const board = ["X", "X", "X", null, null, null, null, null, null];
    expect(calculateWinner(board)?.winner).toBe("X");
  });

  it("returns null when there is no winner", () => {
    expect(calculateWinner(emptyBoard())).toBeNull();
  });

  it("ignores a move on an occupied square", () => {
    const board = makeMove(emptyBoard(), 0, "X");
    expect(makeMove(board, 0, "O")).toBe(board); // unchanged
  });

  it("detects a full-board draw", () => {
    const board = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
    expect(isDraw(board)).toBe(true);
  });
});

describe("<TicTacToePage />", () => {
  it("plays a game where X wins the top row", async () => {
    const user = userEvent.setup();
    render(<TicTacToePage />);

    const squares = screen.getAllByRole("button", { name: /square/i });

    await user.click(squares[0]); // X
    await user.click(squares[3]); // O
    await user.click(squares[1]); // X
    await user.click(squares[4]); // O
    await user.click(squares[2]); // X wins top row

    expect(screen.getByTestId("status")).toHaveTextContent("Winner: X");
  });
});
