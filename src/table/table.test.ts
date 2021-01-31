import { Table } from './table';

describe(`Table Test`, () => {
  describe('Table constructor test', () => {
    test.each`
      x     | y 
      ${0}  | ${0}
      ${1}  | ${1}
      ${2}  | ${2}
      ${3}  | ${3}
      ${4}  | ${4}
      ${5}  | ${5}
    `(`should create a table of dimensions x=$x and y=$y`, ({ x, y }) => {
      const table = new Table(x, y);
      expect(table.width).toEqual(x);
      expect(table.height).toEqual(y);
    });
  });

});