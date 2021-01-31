'use strict';

jest.genMockFromModule('fs');

type cb = (...myArgument: any) => void;

const readFile = (path: string, enconding: string, callbackFn: cb): void => {
  if (path === 'wrong-path') {
    callbackFn(new Error('test error'));
  } else {
    const result = 'PLACE 0,0,NORTH\nMOVE\nLEFT\nMOVE';
    callbackFn(null, result);
  }
};

export default {
  readFile,
};
