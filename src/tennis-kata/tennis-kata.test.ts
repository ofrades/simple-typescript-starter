import { play } from "./tennis-kata";

describe("tennis-kata", () => {
  it.each`
    score     | expectedScore
    ${[0, 0]} | ${"love:love"}
    ${[1, 0]} | ${"fifteen:love"}
    ${[1, 1]} | ${"fifteen:fifteen"}
    ${[2, 1]} | ${"thirteen:fifteen"}
    ${[3, 1]} | ${"fourteen:fifteen"}
    ${[3, 2]} | ${"fourteen:thirteen"}
    ${[4, 2]} | ${"game player1"}
    ${[1, 4]} | ${"game player2"}
    ${[4, 4]} | ${"deuce"}
    ${[5, 4]} | ${"advantage player1"}
    ${[5, 6]} | ${"advantage player2"}
    ${[5, 7]} | ${"game player2"}
  `("should format $score to $expectedScore", ({ score, expectedScore }) => {
    const run = play(score);
    expect(run).toBe(expectedScore);
  });
});
