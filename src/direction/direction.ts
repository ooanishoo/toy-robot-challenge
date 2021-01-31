export type EAST = 'EAST';
export type WEST = 'WEST';
export type NORTH = 'NORTH';
export type SOUTH = 'SOUTH';

export type Direction = EAST | WEST | NORTH | SOUTH;

export const parseDirection = (text: string): Direction => {
  switch (text && text.toUpperCase()) {
    case 'NORTH':
      return 'NORTH';
    case 'SOUTH':
      return 'SOUTH';
    case 'WEST':
      return 'WEST';
    case 'EAST':
      return 'EAST';
    default:
      throw new Error(`Invalid Direction: ${text}`);
  }
};