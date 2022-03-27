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

const getDifference = (
  playerOneScore: number,
  playerTwoScore: number
): boolean => {
  if (playerOneScore > playerTwoScore)
    return playerOneScore - playerTwoScore < 2;
  return playerTwoScore - playerOneScore < 2;
};

const afterFourteen = (playerOne: Player, playerTwo: Player): string => {
  const isDifferenceSmallerThanTwo = getDifference(
    playerOne.score,
    playerTwo.score
  );

  const isEqual = playerOne.score === playerTwo.score;

  const isPlayerOneWinning = playerOne.score > playerTwo.score;

  if (isEqual) return "Deuce";

  if (isDifferenceSmallerThanTwo)
    return isPlayerOneWinning
      ? `Advantage to ${playerOne.name}`
      : `Advantage to ${playerTwo.name}`;

  return isPlayerOneWinning
    ? `Game to ${playerOne.name}`
    : `Game to ${playerTwo.name}`;
};

const calculate = (playerOne: Player, playerTwo: Player): string => {
  const isAfterFourteen = playerOne.score > 3 || playerTwo.score > 3;

  if (!isAfterFourteen)
    return `${mapScore[playerOne.score]}:${mapScore[playerTwo.score]}`;

  return afterFourteen(playerOne, playerTwo);
};

export function play(score: number[]): string {
  const rios: Player = { name: "Marcelo Rios", score: score[0] };

  const agassi: Player = { name: "Andre Agassi", score: score[1] };

  return calculate(rios, agassi);
}
