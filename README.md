# Toy Robot Code Challenge

![toy-robot](https://github.com/ooanishoo/toy-robot-challenge/assets/9260574/f8995df6-19f6-4008-9ed5-8ca8af017b40)

## Table of Contents:
1.  [Introduction](#introduction)
2.  [Prerequisites](#prerequisites)
3.  [Installation](#installation)
4.  [Running Tests](#running-tests)
5.  [Running Robot Simulation](#running-robot-simulation)
6.  [Other available scripts](#other-available-scripts)
7.  [Folder structure](#folder-structure)
8.  [Problem Statement](#problem-statement)
9.  [Solution Approach](#solution-approach)
    *   [Table](#table)
    *   [Command](#command)
    *   [Direction](#direction)

## Introduction
A toy robot simulator written in Typescript

- The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table but must be prevented from falling to destruction.
- Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

## Prerequisites
Before setting up and running the project, ensure you have [node](https://nodejs.org/en/) on your machine. Run the following command in terminal to verify
```
node --version
```


## Installation

1.  Clone the repository to your local machine:

```
git clone https://github.com/ooanishoo/toy-robot-challenge.git
```

2.  Navigate to the project directory:

```
cd toy-robot-challenge
```

3.  Install the required dependencies:

```
npm install
```


## Running Tests

To run all the tests, run the following command:

```
npm test
```

## Running Robot Simulation

To run the toy robot simulation, run the following command:
```
npm run simulation
```

This will run example command files stored in `src/tests/data` directory.

- [**simulation-1**](https://github.com/ooanishoo/toy-robot-challenge/blob/main/src/tests/data/simulation-1)
- [**simulation-2**](https://github.com/ooanishoo/toy-robot-challenge/blob/main/src/tests/data/simulation-2)
- [**simulation-3**](https://github.com/ooanishoo/toy-robot-challenge/blob/main/src/tests/data/simulation-3)
- [**simulation-4**](https://github.com/ooanishoo/toy-robot-challenge/blob/main/src/tests/data/simulation-4)

If you want to run a specific command file, run the following command:
```
npm start ./src/tests/data/<command-file>
```

Example:
```
npm start ./src/tests/data/simulation-1
```

Alternatively, you can create your command file and run it using the above command.


## Other available scripts
To compile Typescript files to Javascript files to `dist` folder with tsc, run the following command:
```
npm run build
```

## Folder structure:
Here is an overview of the key folders and their contents:

```
├── src
│   ├── command
│   │   ├── command.spec.ts
│   │   └── command.ts
│   ├── direction
│   │   ├── direction.spec.ts
│   │   └── direction.ts
│   ├── robot
│   │   ├── robot.spec.ts
│   │   └── robot.ts
│   ├── rotation
│   │   ├── rotation.spec.ts
│   │   └── rotation.ts
│   ├── table
│   │   ├── table.spec.ts
│   │   └── table.ts
│   ├── tests
│   │   ├── data
│   │   │   ├── simulation-1
│   │   │   ├── simulation-2
│   │   │   ├── simulation-3
│   │   │   └── simulation-4
│   │   ├── integration.spec.ts
│   │   └── testCases.ts
│   ├── types
│   │   ├── display.ts
│   │   └── position.ts
│   ├── utils
│   │   ├── __mocks__
│   │   │   └── fs.ts
│   │   ├── utils.spec.ts
│   │   └── utils.ts
│   └── index.ts
├── .eslintrc
├── .gitignore
├── jest.config.js
├── package-lock.json
├── package.json
├── README.md
├── simulation
└── tsconfig.json
```
## Problem Statement

A robot can read commands of the following form from a text file

```
PLACE X,Y,FACE
MOVE
LEFT
RIGHT
REPORT
```

- Input is read from a text file.
- PLACE will put the toy robot on the table in positions X,Y and facing NORTH, SOUTH, EAST, or WEST
- The origin (0,0) is considered to be the SOUTH WEST most corner of the table
- The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command
- The application will discard all commands in the sequence until a valid PLACE command has been executed
- MOVE will move the toy robot 1 unit forward in the direction it is currently facing
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot
- REPORT will announce the X, Y, and F of the robot. This can be in any form, but the standard output is sufficient
## Solution Approach
### Table
A table can be constructed by providing dimensions: width and height

```ts
const table = new Table(5,5);
```

### Command
**CommandType** represents the following types of commands that can be executed by the robot:
- **PLACE**
- **MOVE**
- **LEFT**
- **RIGHT**
- **REPORT**

### Direction
**Direction** represents the types of directions that the robot can face:
- **NORTH**
- **SOUTH**
- **WEST**
- **EAST**