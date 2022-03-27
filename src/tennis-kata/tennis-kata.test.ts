import { play } from "./tennis-kata";

describe("tennis-kata", () => {
  describe("when score is before advantages or game", () => {
    it.each`
      score     | expectedScore
      ${[0, 0]} | ${"love:love"}
      ${[1, 0]} | ${"fifteen:love"}
      ${[1, 1]} | ${"fifteen:fifteen"}
      ${[2, 1]} | ${"thirteen:fifteen"}
      ${[3, 1]} | ${"fourteen:fifteen"}
      ${[3, 2]} | ${"fourteen:thirteen"}
      ${[3, 3]} | ${"fourteen:fourteen"}
    `("should format $score to $expectedScore", ({ score, expectedScore }) => {
      const run = play(score);
      expect(run).toBe(expectedScore);
    });
  });
});

describe("tennis-kata", () => {
  describe("when score is after fourteen", () => {
    it.each`
      score     | expectedScore
      ${[4, 2]} | ${"Game to Marcelo Rios"}
      ${[1, 4]} | ${"Game to Andre Agassi"}
      ${[4, 4]} | ${"Deuce"}
      ${[5, 4]} | ${"Advantage to Marcelo Rios"}
      ${[5, 6]} | ${"Advantage to Andre Agassi"}
      ${[5, 7]} | ${"Game to Andre Agassi"}
    `("should format $score to $expectedScore", ({ score, expectedScore }) => {
      const run = play(score);
      expect(run).toBe(expectedScore);
    });
  });
});
