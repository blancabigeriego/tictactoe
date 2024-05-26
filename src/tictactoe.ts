import {Move, Player, ValidNumber} from "./models/move.interface";

export class TicTacToe {

  public isXTurn = true;
  public board: (Player | null)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  public move(move: Move): string  {
    if(!this.isPlayerTurn(move)) return 'invalid move';
    if (!this.isCellEmpty(move.coordinates.x, move.coordinates.y)) return 'invalid move';

    this.checkCell(move);
    this.setPlayerForNextMove();
    return 'valid move'
  }

  private isPlayerTurn(move: Move): boolean {
    if (this.isXTurn && move.player !== Player.X) return false;
    if (!this.isXTurn && move.player !== Player.O) return false;
    return true;

  }

  private setPlayerForNextMove(): void {
    this.isXTurn = !this.isXTurn;
  }

  private isCellEmpty(x: ValidNumber, y: ValidNumber): boolean {
    return this.board[x][y] === null;
  }

  private checkCell(move: Move): void {
    this.board[move.coordinates.x][move.coordinates.y] = move.player;
  }
}