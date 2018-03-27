import {bookService} from "../../domain/BookService.js";

it('Book Creation', () => {
  const book = bookService.createBook({
    title: "You Are A Badass",
    author: "Jen Sincero",
    genre: "Self-help",
    publisher: "Running Press Book Publishers",
    isbn: 9780762447695,
    year: 2013
  });
  expect(typeof book.id).toBe("string");
  expect(book.rating).toEqual(0);
  expect(book).toBeTruthy();
});

it('Book Creation -- Error', () => {
  const book = bookService.createBook({
    title: "You Are A Badass",
    author: "Jen Sincero",
    genre: "Self-help",
    publisher: "Running Press Book Publishers",
    isbn: 9780762447695,
    year: ""
  });
  expect(book).toBeNull();
});

it('Book Rating Update', () => {
  const book = bookService.createBook({
    title: "You Are A Badass",
    author: "Jen Sincero",
    genre: "Self-help",
    publisher: "Running Press Book Publishers",
    isbn: 9780762447695,
    year: 2013
  });
  const updateBook = bookService.updateRating(book, 5);
  expect(updateBook.rating).toEqual(5);
  expect(updateBook).toBeTruthy();
});

it('Book Rating Update -- Error', () => {
  const book = bookService.createBook({
    title: "You Are A Badass",
    author: "Jen Sincero",
    genre: "Self-help",
    publisher: "Running Press Book Publishers",
    isbn: 9780762447695,
    year: 2013
  });
  const updateBook = bookService.updateRating(book, 6);
  expect(updateBook.rating).toBe(book.rating);
  expect(updateBook).toBeTruthy();
});

it('Book ID Update', () => {
  const book = bookService.createBook({
    title: "You Are A Badass",
    author: "Jen Sincero",
    genre: "Self-help",
    publisher: "Running Press Book Publishers",
    isbn: 9780762447695,
    year: 2013
  });
  const id = book.id;
  const updateBook = bookService.updateId(book);
  expect(updateBook.id).not.toEqual(id);
  expect(updateBook).toBeTruthy();
});

it('Book ID Update -- Error', () => {
  const book = bookService.createBook({
    title: "You Are A Badass",
    author: "Jen Sincero",
    genre: "Self-help",
    publisher: "Running Press Book Publishers",
    isbn: 9780762447695,
    year: "2013"
  });
  const updateBook = bookService.updateId(book);
  expect(updateBook).toBeNull();
});
