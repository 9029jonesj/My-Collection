import {videoGameService} from "../../domain/VideoGameService.js";

it('Video Game Creation', () => {
  const videoGame = videoGameService.createVideoGame({
    title: "Tekken 3",
    developer: "Namco",
    genre: ["Fighting"],
    format: "NSTC",
    system: "PS2",
    year: 1998
  });
  expect(typeof videoGame.id).toBe("string");
  expect(videoGame.rating).toEqual(0);
  expect(videoGame).toBeTruthy();
});

it('Video Game Creation -- Error', () => {
  const videoGame = videoGameService.createVideoGame({
    title: "Tekken 3",
    developer: "Namco",
    genre: "Fighting",
    format: "NSTC",
    system: "PS2",
    year: 1998
  });
  expect(videoGame).toBeNull();
});

it('Video Game Rating Update', () => {
  const videoGame = videoGameService.createVideoGame({
    title: "Tekken 3",
    developer: "Namco",
    genre: ["Fighting"],
    format: "NSTC",
    system: "PS2",
    year: 1998
  });
  const updateVideoGame = videoGameService.updateRating(videoGame, 5);
  expect(updateVideoGame.rating).toEqual(5);
  expect(updateVideoGame).toBeTruthy();
});

it('Video Game Rating Update -- Error', () => {
  const videoGame = videoGameService.createVideoGame({
    title: "Tekken 3",
    developer: "Namco",
    genre: ["Fighting"],
    format: "NSTC",
    system: "PS2",
    year: 1998
  });
  const updateVideoGame = videoGameService.updateRating(videoGame, 6);
  expect(updateVideoGame.rating).toBe(videoGame.rating);
  expect(updateVideoGame).toBeTruthy();
});

it('Video Game ID Update', () => {
  const videoGame = videoGameService.createVideoGame({
    title: "Tekken 3",
    developer: "Namco",
    genre: ["Fighting"],
    format: "NSTC",
    system: "PS2",
    year: 1998
  });
  const id = videoGame.id;
  const updateVideoGame = videoGameService.updateId(videoGame);
  expect(updateVideoGame.id).not.toEqual(id);
  expect(updateVideoGame).toBeTruthy();
});

it('Video Game ID Update -- Error', () => {
  const videoGame = videoGameService.createVideoGame({
    title: "Tekken 3",
    developer: "Namco",
    genre: "Fighting",
    format: "NSTC",
    system: "PS2",
    year: 1998
  });
  const updateVideoGame = videoGameService.updateId(videoGame);
  expect(updateVideoGame).toBeNull();
});
