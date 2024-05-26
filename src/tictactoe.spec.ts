import "jasmine";

import {TicTacToe} from "./tictactoe";
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
      player: Player.O,
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
    ticktacktoe.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    ticktacktoe.isXTurn = true;


    const moveX: Move = {
      player: 1,
      coordinates: { x: 1, y: 2 }
    };
    ticktacktoe.move(moveX);
    expect(ticktacktoe.isXTurn).toBe(false);

  });
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
  it('should check the chosen cell with the right symbol', () => {
    const ticktacktoe = new TicTacToe();
    ticktacktoe.isXTurn = false;
    ticktacktoe.board = [
      [null, null, null],
      [null, Player.X, null],
      [null, null, null]
    ];

    const move: Move = {
      player: Player.O,
      coordinates: {
        x: 0,
        y: 1
      }
    };
    ticktacktoe.move(move);

    expect(ticktacktoe.board).toEqual([
      [null, Player.O, null],
      [null, Player.X, null],
      [null, null, null]
    ]);
  })
  it('should check if all the cells are occupied after a move to reset game', () => {
    const ticktacktoe = new TicTacToe();
    ticktacktoe.isXTurn = false;
    ticktacktoe.board = [
      [Player.O, Player.O, Player.X],
      [Player.X, null, Player.X],
      [Player.O, Player.X, Player.O]
    ];
    const move: Move = {
      player: Player.O,
      coordinates: {
        x: 1,
        y: 1
      }
    };
    const spy = spyOn(ticktacktoe as any, 'resetGame');
    ticktacktoe.move(move);
    expect(spy).toHaveBeenCalled()
  })
  it('should finish game when a player wins', () => {
    const ticktacktoe = new TicTacToe();
    ticktacktoe.isXTurn = false;
    ticktacktoe.board = [
      [Player.X, null, null],
      [Player.X, Player.O, Player.X],
      [Player.O, Player.X, Player.O]
    ];
    const spy = spyOn(ticktacktoe as any, 'resetGame');
    const move: Move = {
      player: Player.O,
      coordinates: {
        x: 0,
        y: 2
      }
    };
    ticktacktoe.move(move);

    ticktacktoe.move(move);
    expect(spy).toHaveBeenCalled()
  })
})