import { marsRover } from "./mars-rover";

describe("[mars-rover]", () => {
  describe.each`
    commands          | expectedPosition
    ${"L"}            | ${"0:0:W"}
    ${"LL"}           | ${"0:0:S"}
    ${"LLL"}          | ${"0:0:E"}
    ${"LLLL"}         | ${"0:0:N"}
    ${"R"}            | ${"0:0:E"}
    ${"RR"}           | ${"0:0:S"}
    ${"RRR"}          | ${"0:0:W"}
    ${"RRRR"}         | ${"0:0:N"}
    ${"M"}            | ${"0:1:N"}
    ${"MM"}           | ${"0:2:N"}
    ${"MMRMMLM"}      | ${"2:3:N"}
    ${"LM"}           | ${"9:0:W"}
    ${"RRM"}          | ${"0:9:S"}
    ${"RMMMMMMMMMMM"} | ${"1:0:E"}
    ${"MMMMMMMMMMM"}  | ${"0:1:N"}
  `("when receive command $commands", ({ commands, expectedPosition }) => {
    it(`should move to ${expectedPosition}`, () => {
      const rover = marsRover();
      const run = rover.execute(commands);

      expect(run).toBe(expectedPosition);
    });
  });
});
