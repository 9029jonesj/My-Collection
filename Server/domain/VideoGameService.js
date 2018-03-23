// @flow
import v1 from 'uuid';
import _ from 'lodash';
import * as R from 'ramda';
import type {
  VideoGame
} from "./VideoGame";
import * as validators from "./Validators";

export type VideoGameFields = {
  +title: string;
  +developer: string;
  +genre: Array <string>;
  +format: string;
  +system: string;
  +year: number;
}

export type VideoGameService = {
  createVideoGame(videoGameFields: VideoGameFields): ? VideoGame;
  updateRating(videoGame: VideoGame, rating: number): VideoGame;
  updateId(videoGame: VideoGame): VideoGame;
  isTitleValid(title: string): boolean;
  isDeveloperValid(developer: string): boolean;
  isGenreValid(genre: Array < string > ): boolean;
  isFormatValid(format: string): boolean;
  isSystemValid(system: string): boolean;
  isYearValid(year: number): boolean;
}

export const createVideoGame = (videoGameFields: VideoGameFields): ? VideoGame => {
  const {
    title,
    developer,
    genre,
    format,
    system,
    year
  } = videoGameFields;
  return isTitleValid(title) && isDeveloperValid(developer) && isGenreValid(genre) &&
    isFormatValid(format) && isSystemValid(system) && isYearValid(year) ?
    Object.freeze({
      id: v1(),
      rating: 0,
      title,
      developer,
      genre,
      format,
      system,
      year
    }) :
    null;
};

export const updateId = (videoGame: VideoGame): VideoGame =>
  validators.isObject(videoGame) ?
  Object.freeze({
    ...videoGame,
    id: v1()
  }) :
  videoGame;

export const updateRating = (videoGame: VideoGame, rating: number): VideoGame =>
  validators.isObject(videoGame) ?
  Object.freeze({
    ...videoGame,
    rating
  }) :
  videoGame;

export const isTitleValid = (title: string): boolean =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(title);

export const isDeveloperValid = (developer: string): boolean =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(developer);

export const isGenreValid = (genre: Array < string > ): boolean => {
  var bool1 = false;
  var bool2 = R.allPass([validators.isArray])(genre);

  _.forEach(genre, (value: string) => {
    bool1 = R.allPass([
          validators.isString,
        validators.isLengthGreaterThen(0)
      ])(value);
  });
  return bool1 && bool2;
};

export const isSystemValid = (system: string): boolean =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(system);

export const isFormatValid = (format: string): boolean =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(format);

export const isYearValid = (year: number): boolean =>
  R.allPass([
    validators.isNumber
  ])(year);

export const VideoGameServiceFactory = () => ({
  createVideoGame,
  updateRating,
  updateId,
  isTitleValid,
  isDeveloperValid,
  isGenreValid,
  isFormatValid,
  isSystemValid,
  isYearValid
});

export const videoGameService = VideoGameServiceFactory();
