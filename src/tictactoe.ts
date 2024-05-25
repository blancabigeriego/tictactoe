import {Move, Player} from "./models/move.interface";

export class TicTacToe {

  public isXTurn = true;
  public move(move: Move): string  {
    if(!this.isPlayerTurn(move)) return 'invalid move';
    this.setPlayerForNextMove();
    return 'valid move'
  }

  private isPlayerTurn(move: Move): boolean {
    if(move.player !== Player.X && this.isXTurn) return false;
    return !(move.player === Player.Y && !this.isXTurn);

  }

  private setPlayerForNextMove(): void {
    this.isXTurn = !this.isXTurn;
  }
}