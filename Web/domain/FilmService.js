// @flow
import v1 from 'uuid';
import * as R from 'ramda';
import type {
  Film
} from "./Film";
import * as validators from "./Validators";

export type FilmFields = {
  +title: string;
  +director: string;
  +producer: string;
  +productionCompany: string;
  +distributor: string;
  +format: string;
  +year: number;
}

export type FilmService = {
  createFilm(filmFields: FilmFields): ? Film;
  updateRating(film: Film, rating: number): Film;
  updateId(film: Film): Film;
  isTitleValid(title: string): boolean;
  isDirectorValid(director: string): boolean;
  isProducerValid(producer: string): boolean;
  isDistributorValid(distributor: string): boolean;
  isFormatValid(formatstring: number): boolean;
  isYearValid(year: number): boolean;
}

export const createFilm = (filmFields: FilmFields): ? Film => {
  const {
    title,
    director,
    producer,
    productionCompany,
    distributor,
    format,
    year
  } = filmFields;
  return isTitleValid(title) && isDirectorValid(director) && isProducerValid(producer) && isFormatValid(format) &&
    isDistributorValid(distributor) && isProductionCompanyValid(productionCompany) && isYearValid(year) ?
    Object.freeze({
      id: v1(),
      rating: 0,
      title,
      director,
      producer,
      productionCompany,
      distributor,
      format,
      year
    }) :
    null;
};

export const updateRating = (film: Film, rating: number): Film =>
  validators.isObject(film) && validators.withinRange(rating) ?
  Object.freeze({
    ...film,
    rating
  }) :
  film;

export const updateId = (film: Film): Film =>
  validators.isObject(film) ?
  Object.freeze({
    ...film,
    id: v1()
  }) :
  film;

export const isTitleValid = (title: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(title);

export const isDirectorValid = (director: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(director);

export const isProducerValid = (producer: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(producer);

export const isDistributorValid = (distributor: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(distributor);

export const isFormatValid = (format: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(format);

export const isProductionCompanyValid = (productionCompany: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(productionCompany);

export const isYearValid = (year: number) =>
  R.allPass([
    validators.isNumber
  ])(year);

export const FilmServiceFactory = () => ({
  createFilm,
  updateRating,
  updateId,
  isTitleValid,
  isDirectorValid,
  isProducerValid,
  isDistributorValid,
  isFormatValid,
  isYearValid
});

export const filmService = FilmServiceFactory();
