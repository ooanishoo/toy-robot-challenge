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

  describe('isWithinRange()', () => {
    const width = 3;
    const height = 3;
    const table = new Table(width, height);
    describe(`When a table is of (${table.width} x ${table.height}) dimesnsion:`, () => {
      test.each`
        x     | y 
        ${0}  | ${0}
        ${0}  | ${1}
        ${0}  | ${2}
        ${1}  | ${0}
        ${1}  | ${1}
        ${1}  | ${2}
        ${2}  | ${0}
        ${2}  | ${1}
        ${2}  | ${2}
      `(`(x=$x, y=$y) should be within the boundary of the table`, ({ x, y }) => {
        const result = table.isWithinRange(x, y);
        expect(result).toBe(true);
      });

      test.each`
        x      | y 
        ${0}   | ${-1}
        ${-1}  | ${0}
        ${2}   | ${-1}
        ${3}   | ${0}
        ${2}   | ${3}
        ${3}   | ${2}
        ${-1}  | ${2}
        ${0}   | ${3}
      `(`(x=$x, y=$y) should NOT be within the boundary of the table`, ({ x, y }) => {
        const result = table.isWithinRange(x, y);
        expect(result).toBe(false);
      });
    });
  })
});

/*
  ${0}   | ${-1}
${-1}  | ${0}
${2}   | ${-1}
${3}   | ${0}
${2}   | ${3}
${3}   | ${2}
${-1}  | ${2}
${0}   | ${3}
*/
