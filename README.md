# Toy Robot Code Challenge
A toy robot simulator written in Typescript

- The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. 
- There are no other obstructions on the table surface. 
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction.  
- Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

# Getting started
### Prerequisites
Check for node, npm, and npx

- [node](https://nodejs.org/en/), Run ` node --version` in terminal to verify
- npm comes with node

Alternatively if you are on Mac OSX, you can install these packages using [brew package manager for Mac OSX](https://brew.sh/) 

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
├── src
│   ├── command
│   │   ├── command.spec.ts
│   │   └── command.ts
│   ├── direction
│   │   ├── direction.spec.ts
│   │   └── direction.ts
│   ├── index.ts
│   ├── robot
│   │   ├── robot.test.ts
│   │   └── robot.ts
│   ├── rotation
│   │   ├── rotation.spec.ts
│   │   └── rotation.ts
│   ├── table
│   │   ├── table.test.ts
│   │   └── table.ts
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

You can start the application by executing the following commands from the root project direcotory.

- Resolve package dependencies with 
```shell
$ npm install
```
- Execute test with JEST
 ```shell
$ npm test
 ```
- Compile Typescript files to Javascript files to dist/ with tsc
```shell
$ npm build
 ```
- Start the application (toy robot simulation)
```shell
$ npm start simulation
```


# Application Instructions

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

# Application Constraints
-	The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot
-	Any move that would cause the robot to fall must be ignored
