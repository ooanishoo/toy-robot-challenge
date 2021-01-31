import { Direction } from "../direction/direction";
import { turnLeft, turnRight } from "./rotation";

describe('LEFT & RIGHT Action Test', () => {

  type params = {
    input: Direction;
    output: Direction;
  };

  describe('LEFT TURN', () => {
    test.each`
      input      | output
      ${'EAST'}  | ${'NORTH'}
      ${'WEST'}  | ${'SOUTH'}
      ${'NORTH'} | ${'WEST'}
      ${'SOUTH'} | ${'EAST'}
    `('should turn from $input to $output', ({ input, output }: params) => {
      const result = turnLeft(input);
      expect(result).toBe(output);
    });
  });

  describe('RIGHT TURN', () => {
    test.each`
      input      | output
      ${'EAST'}  | ${'SOUTH'}
      ${'WEST'}  | ${'NORTH'}
      ${'NORTH'} | ${'EAST'}
      ${'SOUTH'} | ${'WEST'}
    `('should turn from $input to $output', ({ input, output }: params) => {
      const result = turnRight(input);
      expect(result).toBe(output);
    });
  });

  describe('When a DIRECTION is Invalid', () => {
    const input = ['EASTWEST', 'WESTNORTH', 'NORTHSOUTH', 'SOUTHEAST', null, undefined];
    test.each(input)('should throw error when the direction is invalid (direction = %p)', (direction) => {
      expect(() => turnLeft(direction as Direction)).toThrowError(`Invalid Direction: ${direction}`);
      expect(() => turnRight(direction as Direction)).toThrowError(`Invalid Direction: ${direction}`);
    });
  });
});

