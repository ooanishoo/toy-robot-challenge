import path from 'path';
import { Table } from './table/table';
import { Robot } from './robot/robot';
import { parseCommand } from './command/command';
import { readCommand } from './utils/readCommand';

export const startSimulation = async (): Promise<void> => {

  // get the filename
  const fileName = process.argv[2];

  if (fileName) {
    const filePath = path.resolve(fileName);

    try {
      const commands = await readCommand(filePath);
      //console.log({ commands });

      const validCommands = commands.map(parseCommand);
      //console.log({ validCommands });

      // create a table of dimenstion 5 x 5 units
      const table = new Table(5, 5);

      // initalize a robot with a table
      const robot = new Robot(table);

      // execute commands
      validCommands.forEach(cmd => robot.run(cmd));

    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

}

startSimulation();

