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
    if(this.checkIfItsWinnerMove(move)){
      this.resetGame();
      return `${move.player} wins`;
    }
    if(this.checkIfLastMove()) {
      this.resetGame();
      return 'Its a Draw!'

    }
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

  private checkIfLastMove(): boolean {
    return this.board.every(row => row.every(cell => cell !== null));
  }

  private resetGame(): void {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.isXTurn = true;
  }

  private checkIfItsWinnerMove(move: Move): boolean {
    const { player, coordinates } = move;
    const x = coordinates.x;
    const y = coordinates.y;

    if (this.board[x].every(cell => cell === player)) {
      return true;
    }

    if (this.board.every(row => row[y] === player)) {
      return true;
    }

    if (x === y && this.board.every((row, index) => row[index] === player)) {
      return true;
    }

    if (x + y === 2 && this.board.every((row, index) => row[2 - index] === player)) {
      return true;
    }

    return false;
  }
}