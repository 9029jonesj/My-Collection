// @flow
import v1 from 'uuid';
import * as R from 'ramda';
import type {
  Music
} from "./Music";
import * as validators from "./Validators";

export type MusicFields = {
  +title: string;
  +artist: string;
  +genre: string;
  +label: string;
  +version: string;
  +year: number;
}

export type MusicService = {
  createMusic(musicFields: MusicFields): ? Music;
  updateRating(music: Music, rating: number): Music;
  updateId(music: Music): Music;
  isTitleValid(title: string): boolean;
  isArtistValid(artist: string): boolean;
  isGenreValid(genre: string): boolean;
  isLabelValid(label: string): boolean;
  isVersionValid(version: string): boolean;
  isYearValid(year: number): boolean;
}

export const createMusic = (musicFields: MusicFields): ? Music => {
  const {
    title,
    artist,
    genre,
    label,
    version,
    year
  } = musicFields;
  return isTitleValid(title) && isArtistValid(artist) && isGenreValid(genre) &&
    isLabelValid(label) && isVersionValid(version) && isYearValid(year) ?
    Object.freeze({
      id: v1(),
      rating: 0,
      title,
      artist,
      genre,
      label,
      version,
      year
    }) :
    null;
};

export const updateRating = (music: Music, rating: number): Music =>
  validators.isObject(music) ?
  Object.freeze({
    ...music,
    rating
  }) :
  music;

export const updateId = (music: Music): Music =>
  validators.isObject(music) ?
  Object.freeze({
    ...music,
    id: v1()
  }) :
  music;

export const isTitleValid = (title: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(title);

export const isArtistValid = (artist: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(artist);

export const isGenreValid = (genre: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(genre);

export const isLabelValid = (label: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(label);

export const isVersionValid = (version: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(version);

export const isYearValid = (year: number) =>
  R.allPass([
    validators.isNumber
  ])(year);

export const MusicServiceFactory = () => ({
  createMusic,
  updateRating,
  updateId,
  isTitleValid,
  isArtistValid,
  isGenreValid,
  isLabelValid,
  isVersionValid,
  isYearValid
});

export const musicService = MusicServiceFactory();
