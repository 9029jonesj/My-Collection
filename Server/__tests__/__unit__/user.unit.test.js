import {userService} from "../../domain/UserService.js";

it('User Creation', () => {
  const user = userService.createUser({
    username: "testUser",
    email: "testUser@testEmail.test",
    password: "testPassword"
  });
  expect(typeof user.email).toBe("string");
  expect(user.password).toEqual("testPassword");
  expect(user).toBeTruthy();
});

it('User Creation -- Error', () => {
  const user = userService.createUser({
    username: "testUser",
    email: "testUser@testEmail.test",
    password: 123456
  });
  expect(user).toBeNull();
});

it('User Email Update', () => {
  const user = userService.createUser({
    username: "testUser",
    email: "testUser@testEmail.test",
    password: "testPassword"
  });
  const updateUser = userService.updateEmail(user, "newEmail@sameUser.com");
  expect(updateUser.email).not.toEqual(user.email);
  expect(updateUser).toBeTruthy();
});

it('User Email Update -- Error', () => {
  const user = userService.createUser({
    username: "testUser",
    email: "testUser@testEmail.test",
    password: "testPassword"
  });
  const updateUser = userService.updateEmail(user, 1232);
  expect(updateUser.email).toEqual(user.email);
  expect(updateUser).toBeTruthy();
});
