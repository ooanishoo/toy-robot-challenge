
import { Direction } from '../direction/direction';
import { readCommand, processNextMove } from './utils';

jest.mock('fs');

describe('readCommand', () => {
  test('should read commands from the file', async () => {
    const filePath = 'correct-path';
    const result = await readCommand(filePath);
    const expected = ['PLACE 0,0,NORTH', 'MOVE', 'LEFT', 'MOVE'];
    expect(result).toEqual(expected);
  });

  test('should throw error', async () => {
    const filePath = 'wrong-path';
    await expect(() => readCommand(filePath)).rejects.toThrowError();
  });
});

describe('processNextMove', () => {

  describe('When a DIRECTION is valid', () => {
    test.each`
      direction  | expected
      ${'EAST'}  | ${{ x: 1, y: 0 }}
      ${'WEST'}  | ${{ x: -1, y: 0 }}
      ${'NORTH'} | ${{ x: 0, y: 1 }}
      ${'SOUTH'} | ${{ x: 0, y: -1 }}
    `('should return the position $expected when direction = $direction', ({ direction, expected }) => {
      const result = processNextMove(direction);
      expect(result).toEqual(expected);
    });
  })

  describe('When a DIRECTION is Invalid', () => {
    const input = ['EASTWEST', 'WESTNORTH', 'NORTHSOUTH', 'SOUTHEAST'];
    test.each(input)('should throw error when the direction is invalid (direction = %p)', (direction) => {
      expect(() => processNextMove(direction as Direction)).toThrowError();
    });
  });
});

