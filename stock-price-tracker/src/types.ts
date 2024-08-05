// src/types.ts

export interface Delta {
  hour: number;
  day: number;
  week: number;
  month: number;
  quarter: number;
  year: number;
}

export interface Coin {
  code: string;
  rate: number;
  volume: number;
  cap: number;
  delta: Delta;
}
