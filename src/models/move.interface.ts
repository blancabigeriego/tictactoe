export interface Move {
  player: Player;
  isStartingGame: boolean;
  coordinates: Coordinates
}

export enum Player {
  'X' = 1,
  'Y' = 2
}

type ValidNumber = 1 | 2 | 3;

export interface Coordinates {
  x: ValidNumber,
  y: ValidNumber
}