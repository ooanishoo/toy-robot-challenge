import { Robot } from '../robot/robot';
import { Table } from '../table/table';
import { parseCommand } from '../command/command';
import testCases from './testCases';

const table = new Table(5, 5);

describe('Integration Tests', () => {
  let robot: Robot;

  beforeEach(() => {
    robot = new Robot(table);
  });

  testCases.forEach(({ commands, output }) => {
    test(`test case should pass`, () => {

      const validCommands = commands.map(parseCommand);
      validCommands.forEach(cmd => robot.run(cmd));
      expect({
        x: robot.x,
        y: robot.y,
        direction: robot.direction
      }).toEqual(output);
    });
  });
});