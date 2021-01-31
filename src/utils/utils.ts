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
