import { Robot } from './robot';
import { Table } from '../table/table';
import { Direction } from '../direction/direction';
import * as display from '../types/display';

jest.mock('../types/display');

describe('Robot tests', () => {
  let robot: Robot;
  const width = 5;
  const height = 5;
  const table = new Table(width, height);

  beforeEach(() => {
    robot = new Robot(table);
  });

  describe('REPORT Action tests', () => {
    test('should log the position and direction of the robot', () => {
      robot.place(0, 1, 'WEST');
      robot.report();
      const expected = 'Output: 0,1,WEST';
      expect(display.log).toHaveBeenCalledTimes(1);
      expect(display.log).toHaveBeenCalledWith(expected);
    });
  });

  describe('PLACE Action tests', () => {

    type params = {
      x: number,
      y: number,
      direction: Direction
    };

    describe('When positions (x,y) is within the table range', () => {
      test.each`
      x     | y     | direction 
      ${0}  | ${0}  | ${'NORTH'}  
      ${4}  | ${4}  | ${'NORTH'}  
      ${0}  | ${4}  | ${'NORTH'}  
      ${4}  | ${0}  | ${'NORTH'}  
      ${0}  | ${3}  | ${'NORTH'} 
      ${0}  | ${4}  | ${'NORTH'}  
    `('should place the robot at ($x,$y) facing $direction', ({ x, y, direction }: params) => {
        robot.place(x, y, 'NORTH');
        expect(robot.x).toBe(x);
        expect(robot.y).toBe(y);
        expect(robot.direction).toBe(direction);
      });
    });

    describe('When positions (x,y) is not within the table range', () => {
      test.each`
        x     | y     | direction 
        ${-1} | ${0}  | ${'NORTH'}  
        ${0}  | ${-1} | ${'NORTH'}  
        ${-1} | ${-1} | ${'NORTH'}  
        ${6}  | ${6}  | ${'NORTH'} 
        ${7}  | ${7}  | ${'NORTH'}  
      `('should not place the robot at ($x,$y) facing $direction ', ({ x, y, direction }: params) => {
        robot.place(x, y, direction);
        expect(robot.x).toBeUndefined();
        expect(robot.y).toBeUndefined();
        expect(robot.direction).toBeUndefined();
      });
    });
  });

  describe("MOVE Action Test", () => {

    type params = {
      x: number,
      y: number,
      direction: Direction
    };
    describe('When robot is placed on the table edge', () => {
      test.each`
        x    |  y   | direction 
        ${0} | ${0} | ${'WEST'} 
        ${0} | ${0} | ${'SOUTH'} 
        ${0} | ${4} | ${'WEST'} 
        ${0} | ${4} | ${'NORTH'} 
        ${4} | ${0} | ${'EAST'} 
        ${4} | ${0} | ${'SOUTH'} 
        ${4} | ${4} | ${'EAST'} 
        ${4} | ${4} | ${'NORTH'} 
      `('should not move if the robot is placed at ($x, $y) and facing $direction', ({ x, y, direction }: params) => {
        robot.place(x, y, direction);
        robot.move();

        expect(robot.x).toBe(x);
        expect(robot.y).toBe(y);
        expect(robot.direction).toBe(direction);
      })
    });

    type args = {
      x: number,
      y: number,
      direction: Direction,
      expectedX: number,
      expectedY: number,
    };

    describe('When robot is placed anywhere but the table edges', () => {
      test.each`
        x    |  y   | direction  | expectedX    |  expectedY   
        ${3} | ${3} | ${'EAST'}  | ${4}         | ${3} 
        ${3} | ${3} | ${'WEST'}  | ${2}         | ${3} 
        ${3} | ${3} | ${'NORTH'} | ${3}         | ${4} 
        ${3} | ${3} | ${'SOUTH'} | ${3}         | ${2} 
      `('should move to ($expectedX, $expectedY) if the robot is placed at ($x, $y) facing $direction', ({ x, y, direction, expectedX
        , expectedY }: args) => {
        robot.place(x, y, direction);
        robot.move();

        expect(robot.x).toBe(expectedX);
        expect(robot.y).toBe(expectedY);
      });
    });
  });

  describe('LEFT Action Test', () => {

    type params = {
      input: Direction;
      output: Direction;
    };

    describe('When a robot is placed at (0,0), a left action', () => {
      test.each`
        input      | output
        ${'EAST'}  | ${'NORTH'}
        ${'WEST'}  | ${'SOUTH'}
        ${'NORTH'} | ${'WEST'}
        ${'SOUTH'} | ${'EAST'}
      `('should change direction from $input to $output', ({ input, output }: params) => {
        robot.place(0, 0, input);
        robot.left();
        expect(robot.direction).toBe(output);
      });
    });
  });

  describe('RIGHT Action Test', () => {
    type params = {
      input: Direction;
      output: Direction;
    };
    describe('When a robot is placed at (0,0), a right action', () => {
      test.each`
        input      | output
        ${'NORTH'} | ${'EAST'}
        ${'WEST'}  | ${'NORTH'}
        ${'SOUTH'} | ${'WEST'}
        ${'EAST'}  | ${'SOUTH'}
      `('should change direction from $input to $output', ({ input, output }: params) => {
        robot.place(0, 0, input);
        robot.right();
        expect(robot.direction).toBe(output);
      });
    });
  });

  describe('Discard all commands until valid PLACE command is executed', () => {
    test('should ignore actions untill the robot is placed on the table', () => {
      robot.left();
      robot.right();
      robot.move();
      robot.report();
      expect(robot.x).toBeUndefined();
      expect(robot.y).toBeUndefined();
      expect(robot.direction).toBeUndefined();
    });
  });
});
