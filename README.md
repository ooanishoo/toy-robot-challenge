# Toy Robot Code Challenge

![toy-robot](https://github.com/ooanishoo/toy-robot-challenge/assets/9260574/f8995df6-19f6-4008-9ed5-8ca8af017b40)

1.  [Introduction](#introduction)
2.  [Application Instructions](#application-instructions)
3.  [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
4.  [Running Tests](#running-tests)
5.  [Running Robot Simulation](#running-robot-simulation)
6.  [Code Architecture](#code-architecture)
    *   [Table](#table)
    *   [Command](#command)
    *   [Direction](#direction)

## Introduction
A toy robot simulator written in Typescript
- The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. 
- There are no other obstructions on the table surface. 
- The robot is free to roam around the surface of the table but must be prevented from falling to destruction.  
- Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

## Application Instructions

A robot can read commands of the following form from a text file
```
PLACE X,Y,FACE
MOVE
LEFT
RIGHT
REPORT
```
-	PLACE will put the toy robot on the table in positions X,Y and facing NORTH, SOUTH, EAST, or WEST
-	The origin (0,0) is considered to be the SOUTH WEST most corner of the table
-	The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command
-	The application will discard all commands in the sequence until a valid PLACE command has been executed
-	MOVE will move the toy robot 1 unit forward in the direction it is currently facing
-	LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot
-	REPORT will announce the X, Y, and F of the robot. This can be in any form, but the standard output is sufficient
-	Input is read from a text file.


## Getting started
### Prerequisites

- [node](https://nodejs.org/en/), Run ` node --version` in terminal to verify
- npm comes with node
 

### Installation

Clone the repository
```
$ git clone https://github.com/ooanishoo/toy-robot-challenge
$ cd toy-robot-challenge
```

This is the directory/file structure once you clone the repository from the git.
```
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

## Running Tests

- Run `npm install` to install package dependencies.
- Run `npm test` to run tests

## Running Robot Simulation
- Run `npm install` to install package dependencies.
- Run `npm run simulation` to start the robot simulation. This will run examples:
  - **simulation-1**
  - **simulation-2**
  - **simulation-3**
  - **simulation-4**

  *Note: simulation-1, simulation-2, simulation-3, and simulation-4 are test command files in the `src/tests/data` folder. You can modify the commands inside these files to test different outcomes.*

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




