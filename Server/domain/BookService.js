// @flow
import v1 from 'uuid';
import * as R from 'ramda';
import type {
  Book
} from "./Book";
import * as validators from "./Validators";

export type BookFields = {
  +title: string;
  +author: string;
  +genre: string;
  +publisher: string;
  +isbn: number;
  +year: number;
}

export type BookService = {
  createBook(bookFields: BookFields): ? Book;
  updateRating(book: Book, rating: number): Book;
  updateId(book: Book): Book;
  isTitleValid(title: string): boolean;
  isAuthorValid(author: string): boolean;
  isGenreValid(genre: string): boolean;
  isPublisherValid(publisher: string): boolean;
  isIsbnValid(isbn: number): boolean;
  isYearValid(year: number): boolean;
}

export const createBook = (bookFields: BookFields): ? Book => {
  const {
    title,
    author,
    genre,
    publisher,
    isbn,
    year
  } = bookFields;
  return isTitleValid(title) && isAuthorValid(author) && isGenreValid(genre) &&
    isPublisherValid(publisher) && isIsbnValid(isbn) && isYearValid(year) ?
    Object.freeze({
      id: v1(),
      rating: 0,
      title,
      author,
      genre,
      publisher,
      isbn,
      year
    }) :
    null;
};

export const updateRating = (book: Book, rating: number): Book =>
  validators.isObject(book) ?
  Object.freeze({
    ...book,
    rating
  }) :
  book;

export const updateId = (book: Book): Book =>
  validators.isObject(book) ?
  Object.freeze({
    ...book,
    id: v1()
  }) :
  book;

export const isTitleValid = (title: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(title);

export const isAuthorValid = (author: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(author);

export const isGenreValid = (genre: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(genre);

export const isPublisherValid = (publisher: string) =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(publisher);

export const isIsbnValid = (isbn: number) =>
  R.allPass([
    validators.isNumber
  ])(isbn);

export const isYearValid = (year: number) =>
  R.allPass([
    validators.isNumber
  ])(year);

export const BookServiceFactory = () => ({
  createBook,
  updateRating,
  updateId,
  isTitleValid,
  isAuthorValid,
  isGenreValid,
  isPublisherValid,
  isIsbnValid,
  isYearValid
});

export const bookService = BookServiceFactory();
