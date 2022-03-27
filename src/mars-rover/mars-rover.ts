interface Rover {
  x: number;
  y: number;
  direction: "N" | "E" | "S" | "W";
}

interface MarsRover {
  execute: (commands: string) => string;
}

function rotateRight(rover: Rover): Rover {
  if (rover.direction === "N") return { ...rover, direction: "E" };
  if (rover.direction === "E") return { ...rover, direction: "S" };
  if (rover.direction === "S") return { ...rover, direction: "W" };
  return { ...rover, direction: "N" };
}

function rotateLeft(rover: Rover): Rover {
  if (rover.direction === "N") return { ...rover, direction: "W" };
  if (rover.direction === "W") return { ...rover, direction: "S" };
  if (rover.direction === "S") return { ...rover, direction: "E" };
  return { ...rover, direction: "N" };
}

function move(rover: Rover): Rover {
  if (rover.direction === "N")
    return { ...rover, y: rover.y < 10 ? rover.y + 1 : 0 };
  if (rover.direction === "W")
    return { ...rover, x: rover.x > 0 ? rover.x - 1 : 10 - 1 };
  if (rover.direction === "S")
    return { ...rover, y: rover.y > 0 ? rover.y - 1 : 10 - 1 };
  return { ...rover, x: rover.x < 10 ? rover.x + 1 : 0 };
}

export const marsRover = (): MarsRover => {
  const execute = (commands: string): string => {
    let rover: Rover = {
      x: 0,
      y: 0,
      direction: "N"
    };
    commands.split("").forEach(command => {
      if (command === "R") rover = rotateRight(rover);
      if (command === "L") rover = rotateLeft(rover);
      if (command === "M") rover = move(rover);
    });
    return `${rover.x}:${rover.y}:${rover.direction}`;
  };
  return {
    execute
  };
};
