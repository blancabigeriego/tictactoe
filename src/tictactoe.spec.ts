import "jasmine";

import { TicTacToe } from "./tictactoe";
import {Move, Player} from "./models/move.interface";

describe('Tictactoe', () => {
  it('should be started by player X', () => {
    const tictactoe = new TicTacToe();
    tictactoe.isXTurn = true;
    const validMove: Move = {
      player: Player.X,
      coordinates: {
        x: 2,
        y: 2
      }
    }
    const result = tictactoe.move(validMove);
    expect(result).toEqual('valid move');

    tictactoe.isXTurn = false;
    const notValidMove: Move = {
      player: Player.Y,
      coordinates: {
        x: 2,
        y: 2
      }
    }
    const resultNotValid = tictactoe.move(notValidMove);
    expect(resultNotValid).toEqual('not valid');
  })
  it('should have players moving alternatively', () => {
    const ticktacktoe = new TicTacToe();
    ticktacktoe.isXTurn = true;
    const mockMove: Move = {
      player: 1,
      coordinates: { x:1, y: 3}
    }
    const spy = spyOn(ticktacktoe as any, 'setPlayerForNextMove');
    ticktacktoe.move(mockMove);
    expect(spy).toHaveBeenCalled();
    expect(ticktacktoe.isXTurn).toBe(false);
  })
})