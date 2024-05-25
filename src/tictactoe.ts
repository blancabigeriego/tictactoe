import {Move, Player} from "./models/move.interface";

export class TicTacToe {

  public move(move: Move): string  {
    if(move.player !== Player.X && move.isStartingGame) return 'not valid';
    return 'valid move'
  }
}