# Toy Robot Code Challenge
A toy robot simulator written in Typescript

- The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. 
- There are no other obstructions on the table surface. 
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction.  
- Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

## Application Instructions

A robot can read in commands of the following form from a text file
```shell
PLACE X,Y,FACE
MOVE
LEFT
RIGHT
REPORT
```
-	PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST
-	The origin (0,0) is considered to be the SOUTH WEST most corner on the table
-	The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command
-	The application will discard all commands in the sequence until a valid PLACE command has been executed
-	MOVE will move the toy robot 1 unit forward in the direction it is currently facing
-	LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot
-	REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient
-	Input is only standard input as MVP, will include reading text file in future releases.


# Getting started
### Prerequisites

- [node](https://nodejs.org/en/), Run ` node --version` in terminal to verify
- npm comes with node
 

## Installation

Clone the repository
```shell
$ git clone https://github.com/ooanishoo/toy-robot-challenge
$ cd toy-robot-challenge
```

This is the directory/file structure once you clone the repository from the git.
```shell
├── README.md
├── jest.config.js
├── package-lock.json
├── package.json
├── simulation
├── src
│   ├── command
│   │   ├── command.spec.ts
│   │   └── command.ts
│   ├── direction
│   │   ├── direction.spec.ts
│   │   └── direction.ts
│   ├── index.ts
│   ├── robot
│   │   ├── robot.spec.ts
│   │   └── robot.ts
│   ├── rotation
│   │   ├── rotation.spec.ts
│   │   └── rotation.ts
│   ├── table
│   │   ├── table.spec.ts
│   │   └── table.ts
│   ├── tests
│   │   ├── data
│   │   │   ├── simulation-1
│   │   │   ├── simulation-2
│   │   │   ├── simulation-3
│   │   │   └── simulation-4
│   │   ├── integration.spec.ts
│   │   └── testCases.ts
│   ├── types
│   │   ├── display.ts
│   │   └── position.ts
│   └── utils
│       ├── __mocks__
│       │   └── fs.ts
│       ├── utils.spec.ts
│       └── utils.ts
└── tsconfig.json
```

### Run JEST Tests

- Run `npm install` to install package dependencies.
- Run `npm test` to run tests

### Run Robot Simulation
- Run `npm install` to install package dependencies.
- Run `npm run simulation` to start robot simulation. This will run examples:
  - **simulation-1**
  - **simulation-2**
  - **simulation-3**
  - **simulation-4**

  *Note: simulation-1, simulation-2, simulation-3, simulation-4 are test command files in `src/tests/data` folder. You can modify the commands inside these files to test different outcomes.*

- Run `npm start` *./any-command-file*.
  
  Example:
  ```
  npm start ./src/tests/data/simulation-4
  ```

  *Note: You can also create your own command file*

- Run `npm run build` to compile Typescript files to Javascript files to dist/ with tsc
  


## Code Architecture

### Table
 A table can be constructed by providing dimensions: width and height
 ```
 const table = new Table(5,5);
```

### Command

- Type **CommandType** represents the types: **PLACE**, **MOVE**, **LEFT**, **RIGHT**, **REPORT**

- Type **Command** represents the type, positions (x,y) and direction.

  ```
  type Command = {
    type: CommandType
    x?: number
    y?: number
    direction?: Direction
  }
  ```

### Direction
**Direction** represents the types: **NORTH**, **SOUTH**, **WEST**, **EAST**.




