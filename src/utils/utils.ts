import { Direction } from '../direction/direction';
import { Position } from '../types/position';
import fs from 'fs';

export const readCommand = (filePath: string): Promise<string[]> =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(data);
    });
  }).then((context: string) => {
    return context.split(/\r?\n/).filter((line) => !!line)
  });

export type NextDirection = {
  [direction in Direction]: Position;
};

export const nextMove: NextDirection = {
  'EAST': {
    x: 1,
    y: 0
  },
  'WEST': {
    x: -1,
    y: 0,
  },
  'NORTH': {
    x: 0,
    y: 1,
  },
  'SOUTH': {
    x: 0,
    y: -1,
  }
};

export const processNextMove = (direction: Direction): Position => {
  if (nextMove[direction]) return nextMove[direction];
  throw new Error(`Invalid Direction: ${direction}`);
};

export const getInstruction = (): string =>
  `
  Welcome to Toy Robot Simulator

  Please try the following commands:

  PLACE X,Y,Facing
  - Put the toy robot on the table in position X,Y
  - Facings can be: EAST, WEST, NORTH, SOUTH
  - Example: PLACE 2,2,NORTH
  
  LEFT
  - Turn the robot left
  
  RIGHT
  - Turn the robot right
  
  MOVE
  - Move the robot one unit forward in the direction it is currently facing

  REPORT
  - Announce the current position and facing of the robot

  Note: 
  - It is required that the first command to the robot is a PLACE command,
  - after PLACE command, any sequence of commands may be issued.
  - The application should discard all commands in the sequence until 
    a valid PLACE command has been executed.

  `;
