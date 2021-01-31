import { parseCommand } from './command';

describe('parseCommand', () => {

  describe('When a command is valid', () => {
    test.each`
      command               | expected
      ${'PLACE 0,0,EAST'}   | ${{ type: 'PLACE', x: 0, y: 0, direction: 'EAST' }}
      ${'PLACE 0,0,WEST'}   | ${{ type: 'PLACE', x: 0, y: 0, direction: 'WEST' }}
      ${'PLACE 0,0,NORTH'}  | ${{ type: 'PLACE', x: 0, y: 0, direction: 'NORTH' }}
      ${'PLACE 0,0,SOUTH'}  | ${{ type: 'PLACE', x: 0, y: 0, direction: 'SOUTH' }}
      ${'MOVE'}             | ${{ type: 'MOVE' }}
      ${'LEFT'}             | ${{ type: 'LEFT' }}
      ${'RIGHT'}            | ${{ type: 'RIGHT' }}
      ${'REPORT'}           | ${{ type: 'REPORT' }}
    `('should return Command = $expected', ({ command, expected }) => {
      const result = parseCommand(command);
      expect(result).toEqual(expected);
    });
  });

  describe('When a command is Invalid', () => {
    const input = ['PLACE', 'PLACE 0', 'PLACE 0,0', 'PLACE 0,0,1', 'PLACE NORTH,0,1', 'PLACE ,,', 'MOVING', 'FORWARD', 'BACKWARD', null];
    test.each(input)(`should throw error when command = %p`, (command) => {
      expect(() => parseCommand(command)).toThrowError();
    });
  });


});
