import fs from 'fs';

export const readCommand = (filePath: string): Promise<string[]> =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(data);
    });
  }).then((context: string) => {
    return context.split(/\r?\n/).filter((line) => !!line)
  });
