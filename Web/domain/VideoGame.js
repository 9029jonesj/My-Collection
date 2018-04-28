// @flow
export type VideoGame = {
  +id: string;
  +rating: number;
  +title: string;
  +developer: string;
  +genre: Array<string>;
  +format: string;
  +system: string;
  +year: number;
};
