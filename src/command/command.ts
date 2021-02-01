import { Direction, parseDirection } from "../direction/direction";

export type PLACE = 'PLACE';
export type LEFT = 'LEFT';
export type RIGHT = 'RIGHT';
export type MOVE = 'MOVE';
export type REPORT = 'REPORT';

export type CommandType = PLACE | LEFT | RIGHT | MOVE | REPORT;

export type Command = {
  type: CommandType
  x?: number
  y?: number
  direction?: Direction
}

export const parseCommand = (command: string): Command => {

  const args = command.trim().split(/ |,/);

  switch (args[0].toUpperCase()) {
    case 'PLACE':
      return {
        type: 'PLACE',
        x: parseInt(args[1], 10),
        y: parseInt(args[2], 10),
        direction: parseDirection(args[3] || ''),
      };
    case 'LEFT':
      return { type: 'LEFT' };
    case 'RIGHT':
      return { type: 'RIGHT' };
    case 'MOVE':
      return { type: 'MOVE' };
    case 'REPORT':
      return { type: 'REPORT' };
    default:
      throw new Error(`Invalid Command: ${args[0]}`);
  }
};



