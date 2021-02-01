const testCases = [
  {
    commands: ["PLACE 0,0,NORTH", "REPORT", "MOVE", "REPORT"],
    output: { "x": 0, "y": 1, "direction": "NORTH" }
  },
  {
    commands: ["PLACE 0,0,NORTH", "LEFT", "REPORT"],
    output: { "x": 0, "y": 0, "direction": "WEST" }
  },
  {
    commands: ["PLACE 1,2,EAST", "MOVE", "MOVE", "LEFT", "MOVE", "REPORT"],
    output: { "x": 3, "y": 3, "direction": "NORTH" }
  },
  {
    commands: ["PLACE 0,0,SOUTH", "MOVE", "MOVE", "LEFT", "MOVE", "REPORT"],
    output: { "x": 1, "y": 0, "direction": "EAST" }
  },
  {
    commands: ["PLACE 0,4,NORTH", "MOVE", "MOVE", "RIGHT", "MOVE", "REPORT"],
    output: { "x": 1, "y": 4, "direction": "EAST" }
  },
  {
    commands: ["PLACE 4,4,EAST", "MOVE", "MOVE", "RIGHT", "MOVE", "REPORT"],
    output: { "x": 4, "y": 3, "direction": "SOUTH" }
  },
  {
    commands: ["PLACE 4,0,SOUTH", "MOVE", "MOVE", "RIGHT", "MOVE", "REPORT"],
    output: { "x": 3, "y": 0, "direction": "WEST" }
  },
  {
    commands: ["PLACE 0,0,SOUTH", "LEFT", "LEFT", "LEFT", "LEFT", "REPORT"],
    output: { "x": 0, "y": 0, "direction": "SOUTH" }
  },
  {
    commands: ["PLACE 0,0,SOUTH", "RIGHT", "RIGHT", "RIGHT", "RIGHT", "REPORT"],
    output: { "x": 0, "y": 0, "direction": "SOUTH" }
  },
  {
    commands: ["PLACE -1,0,NORTH", "MOVE", "MOVE", "REPORT"],
    output: { "direction": undefined, "x": undefined, "y": undefined }
  },
  {
    commands: ["PLACE -1,0,NORTH", "PLACE 0,0,NORTH", "MOVE", "REPORT"],
    output: { "x": 0, "y": 1, "direction": "NORTH" }
  },
  {
    commands: ["PLACE -1,0,NORTH", "PLACE 0,-1,NORTH", "PLACE -1,-1,NORTH", "PLACE 6,6,NORTH", "PLACE 7,7,NORTH, REPORT"],
    output: { "direction": undefined, "x": undefined, "y": undefined }
  },
  {
    commands: ["REPORT"],
    output: { "direction": undefined, "x": undefined, "y": undefined }
  },
  {
    commands: [],
    output: { "direction": undefined, "x": undefined, "y": undefined }
  },
  {
    commands: ["MOVE", "LEFT", "RIGHT", "PLACE 1,1,EAST"],
    output: { "x": 1, "y": 1, "direction": "EAST" }
  }
];

export default testCases;