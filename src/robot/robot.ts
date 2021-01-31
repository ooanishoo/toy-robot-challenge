import { Direction } from '../direction/direction';
import { Command } from '../command/command';
import { Table } from '../table/table';
import * as display from '../utils/display'
import { processNextMove } from '../utils/processNextMove';
import { turnLeft, turnRight } from '../rotation/rotation';

export class Robot {
  private _x: number;
  private _y: number;
  private _direction: Direction;
  private _isPlaced: boolean;
  private _table: Table;

  constructor(table: Table) {
    this._isPlaced = false;
    this._table = table;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get direction(): Direction {
    return this._direction;
  }

  public place(x: number, y: number, direction: Direction): void {
    if (!this._table.isWithinRange(x, y)) {
      return;
    }
    this._x = x;
    this._y = y;
    this._direction = direction;
    this._isPlaced = true;
  }

  public move(): void {
    if (!this._isPlaced) {
      return;
    }
    const { x, y } = processNextMove(this._direction);
    if (!this._table.isWithinRange(x + this._x, y + this._y)) {
      return;
    }
    this._x += x;
    this._y += y;

  }

  public left(): void {
    if (!this._isPlaced) {
      return;
    }
    this._direction = turnLeft(this._direction);
  }

  public right(): void {
    if (!this._isPlaced) {
      return;
    }
    this._direction = turnRight(this._direction);
  }

  public report = (): void => {
    if (!this._isPlaced) {
      return;
    }
    display.info(`Output: ${this._x},${this._y},${this._direction}`);
  }

  public run(command: Command): void {
    switch (command.type) {
      case 'PLACE':
        this.place(command.x, command.y, command.direction);
        break;
      case 'LEFT':
        this.left();
        break;
      case 'RIGHT':
        this.right();
        break;
      case 'MOVE':
        this.move();
        break;
      case 'REPORT':
        this.report();
        break;
    }
  }
}