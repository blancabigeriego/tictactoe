import "jasmine";

import { TicTacToe } from "./tictactoe";
import {Move, Player} from "./models/move.interface";

describe('Tictactoe', () => {
  it('should be started by player X', () => {
    const ticktacktoe = new TicTacToe();
    ticktacktoe.isXTurn = true;
    ticktacktoe.board= [[null, null, null],
      [null, null, null],
      [null, null, null]];
    const validMove: Move = {
      player: Player.X,
      coordinates: {
        x: 2,
        y: 2
      }
    }
    const result = ticktacktoe.move(validMove);
    expect(result).toEqual('valid move');

    ticktacktoe.isXTurn = false;
    const notValidMove: Move = {
      player: Player.Y,
      coordinates: {
        x: 2,
        y: 2
      }
    }
    const resultNotValid = ticktacktoe.move(notValidMove);
    expect(resultNotValid).toEqual('invalid move');
  })
  it('should have players moving alternatively', () => {
    const ticktacktoe = new TicTacToe();
    ticktacktoe.board= [[null, null, null],
      [null, null, null],
      [null, null, null]];
    ticktacktoe.isXTurn = true;
    const mockMove: Move = {
      player: 1,
      coordinates: { x:1, y: 2}
    }
    const spy = spyOn(ticktacktoe as any, 'setPlayerForNextMove');
    ticktacktoe.move(mockMove);
    expect(spy).toHaveBeenCalled();
    expect(ticktacktoe.isXTurn).toBe(false);
  })
  it('should not allow to play twice in the same coordinate', () => {
    const ticktacktoe = new TicTacToe();
    ticktacktoe.isXTurn = true;
    ticktacktoe.board= [[null, null, null],
      [null, null, null],
      [null, null, null]]

    const mockMove: Move = {
      player: 1,
      coordinates: { x: 1, y: 1}
    }
    const result = ticktacktoe.move(mockMove);
    expect(result).toEqual('valid move');

    const resultSecondMove = ticktacktoe.move(mockMove);
    expect(resultSecondMove).toEqual('invalid move');
  })
})