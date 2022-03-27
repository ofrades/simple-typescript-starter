enum mapScore {
  "love" = 0,
  "fifteen" = 1,
  "thirteen" = 2,
  "fourteen" = 3
}

interface Player {
  name: string;
  score: number;
}

const afterFourteen = (
  isDifferenceBiggerThan1: boolean,
  isPlayer1Winning: boolean,
  isEqual: boolean
): string => {
  if (isEqual) return "deuce";

  if (!isDifferenceBiggerThan1)
    return isPlayer1Winning ? "advantage player1" : "advantage player2";

  return isPlayer1Winning ? "game player1" : "game player2";
};

const calculate = (player1: Player, player2: Player): string => {
  const isAfterFourteen = player1.score > 3 || player2.score > 3;

  const isDifferenceBiggerThanOne =
    player1.score > player2.score
      ? player1.score - player2.score > 1
      : player2.score - player1.score > 1;

  const isEqual = player1.score === player2.score;

  const isPlayer1Winning = player1.score > player2.score;

  if (!isAfterFourteen)
    return `${mapScore[player1.score]}:${mapScore[player2.score]}`;

  return afterFourteen(isDifferenceBiggerThanOne, isPlayer1Winning, isEqual);
};

export function play(score: number[]): string {
  const player1: Player = { name: "player1", score: score[0] };

  const player2: Player = { name: "player2", score: score[1] };

  return calculate(player1, player2);
}
