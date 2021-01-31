import { Direction } from "../direction/direction";

export type Turn = {
  LEFT: Direction
  RIGHT: Direction
}

export type Rotation = {
  [direction in Direction]: Turn
}

export const rotation: Rotation = {
  EAST: {
    LEFT: 'NORTH',
    RIGHT: 'SOUTH'
  },
  WEST: {
    LEFT: 'SOUTH',
    RIGHT: 'NORTH'
  },
  NORTH: {
    LEFT: 'WEST',
    RIGHT: 'EAST'
  },
  SOUTH: {
    LEFT: 'EAST',
    RIGHT: 'WEST'
  }
};

export const turnLeft = (direction: Direction): Direction => {
  if (rotation[direction]) return rotation[direction].LEFT;
  throw new Error(`Invalid Direction: ${direction}`);
}

export const turnRight = (direction: Direction): Direction => {
  if (rotation[direction]) return rotation[direction].RIGHT;
  throw new Error(`Invalid Direction: ${direction}`);
}

