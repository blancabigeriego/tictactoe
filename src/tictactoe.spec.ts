import "jasmine";

import { TicTacToe } from "./tictactoe";
import {Move, Player} from "./models/move.interface";

describe('Tictactoe', () => {
  it('should be started by player X', () => {
    const tictactoe = new TicTacToe();
    const validMove: Move = {
      player: Player.X,
      isStartingGame: true,
      coordinates: {
        x: 2,
        y: 2
      }
    }
    const result = tictactoe.move(validMove);
    expect(result).toEqual('valid move');

    const notValidMove: Move = {
      player: Player.Y,
      isStartingGame: true,
      coordinates: {
        x: 2,
        y: 2
      }
    }
    const resultNotValid = tictactoe.move(notValidMove);
    expect(resultNotValid).toEqual('not valid');
  })
})