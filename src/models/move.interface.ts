export interface Move {
  player: Player;
  coordinates: Coordinates
}

export enum Player {
  'X' = 1,
  'O' = 2
}

export type ValidNumber = 0 | 1 | 2;

export interface Coordinates {
  x: ValidNumber,
  y: ValidNumber
}