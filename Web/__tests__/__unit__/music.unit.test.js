import {musicService} from "../../domain/MusicService.js";

it('Music Creation', () => {
  const music = musicService.createMusic({
    title: "Into",
    artist: "Sonder",
    genre: "R&B",
    label: "Unknown Label",
    version: "Vinyl",
    year: 2017
  });
  expect(typeof music.id).toBe("string");
  expect(music.rating).toEqual(0);
  expect(music).toBeTruthy();
});

it('Music Creation -- Error', () => {
  const music = musicService.createMusic({
    title: "Into",
    artist: "Sonder",
    genre: "R&B",
    label: "Unknown Label",
    version: "Vinyl",
    year: "2017"
  });
  expect(music).toBeNull();
});

it('Music Rating Update', () => {
  const music = musicService.createMusic({
    title: "Into",
    artist: "Sonder",
    genre: "R&B",
    label: "Unknown Label",
    version: "Vinyl",
    year: 2017
  });
  const updateMusic = musicService.updateRating(music, 5);
  expect(updateMusic.rating).toEqual(5);
  expect(updateMusic).toBeTruthy();
});

it('Music Rating Update -- Error', () => {
  const music = musicService.createMusic({
    title: "Into",
    artist: "Sonder",
    genre: "R&B",
    label: "Unknown Label",
    version: "Vinyl",
    year: 2017
  });
  const updateMusic = musicService.updateRating(music, 6);
  expect(updateMusic.rating).toBe(music.rating);
  expect(updateMusic).toBeTruthy();});

it('Music ID Update', () => {
  const music = musicService.createMusic({
    title: "Into",
    artist: "Sonder",
    genre: "R&B",
    label: "Unknown Label",
    version: "Vinyl",
    year: 2017
  });
  const id = music.id;
  const updateMusic = musicService.updateId(music);
  expect(updateMusic.id).not.toEqual(id);
  expect(updateMusic).toBeTruthy();
});

it('Music ID Update -- Error', () => {
  const music = musicService.createMusic({
    title: "Into",
    artist: "Sonder",
    genre: "R&B",
    label: "Unknown Label",
    version: "Vinyl",
    year: "2017"
  });
  const updateMusic = musicService.updateId(music);
  expect(updateMusic).toBeNull();
});
