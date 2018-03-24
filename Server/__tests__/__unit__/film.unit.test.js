import {filmService} from "../../domain/FilmService.js";

it('Film Creation', () => {
  const film = filmService.createFilm({
    title: "Black Panther",
    director: "Ryan Coogler",
    producer: "Kevin Feige",
    productionCompany: "Marvel Studios",
    distributor: "Walt Disney Motion Pictures",
    format: "Blu-ray",
    year: 2018
  });
  expect(typeof film.id).toBe("string");
  expect(film.rating).toEqual(0);
  expect(film).toBeTruthy();
});

it('Film Creation -- Error', () => {
  const film = filmService.createFilm({
    title: "Black Panther",
    director: "Ryan Coogler",
    producer: "Kevin Feige",
    productionCompany: "Marvel Studios",
    distributor: "Walt Disney Motion Pictures",
    format: "Blu-ray",
    year: "2018"
  });
  expect(film).toBeNull();
});

it('Film Rating Update', () => {
  const film = filmService.createFilm({
    title: "Black Panther",
    director: "Ryan Coogler",
    producer: "Kevin Feige",
    productionCompany: "Marvel Studios",
    distributor: "Walt Disney Motion Pictures",
    format: "Blu-ray",
    year: 2018
  });
  const updateFilm = filmService.updateRating(film, 5);
  expect(updateFilm.rating).toEqual(5);
  expect(updateFilm).toBeTruthy();
});

it('Film Rating Update -- Error', () => {
  const film = filmService.createFilm({
    title: "Black Panther",
    director: "Ryan Coogler",
    producer: "Kevin Feige",
    productionCompany: "Marvel Studios",
    distributor: "Walt Disney Motion Pictures",
    format: "Blu-ray",
    year: "2018"
  });
  const updateFilm = filmService.updateRating(film, 5);
  expect(updateFilm).toBeNull();
});

it('Film ID Update', () => {
  const film = filmService.createFilm({
    title: "Black Panther",
    director: "Ryan Coogler",
    producer: "Kevin Feige",
    productionCompany: "Marvel Studios",
    distributor: "Walt Disney Motion Pictures",
    format: "Blu-ray",
    year: 2018
  });
  const id = film.id;
  const updateFilm = filmService.updateId(film);
  expect(updateFilm.id).not.toEqual(id);
  expect(updateFilm).toBeTruthy();
});

it('Film ID Update -- Error', () => {
  const film = filmService.createFilm({
    title: "Black Panther",
    director: "Ryan Coogler",
    producer: "Kevin Feige",
    productionCompany: "Marvel Studios",
    distributor: "Walt Disney Motion Pictures",
    format: "",
    year: 2018
  });
  const updateFilm = filmService.updateId(film);
  expect(updateFilm).toBeNull();
});
