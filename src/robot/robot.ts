import { Direction } from '../direction/direction';
import { Command } from '../command/command';
import { Table } from '../table/table';
import * as logger from '../utils/logger'
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

}