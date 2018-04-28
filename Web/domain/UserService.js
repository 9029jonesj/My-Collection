// @flow
import v1 from 'uuid';
import _ from 'lodash';
import * as R from 'ramda';
import type {
  User
} from "./User";
import * as validators from "./Validators";

export type UserFields = {
  +username: string;
  +email: string;
  +password: string;
}

export type UserService = {
  createUser(userFields: UserFields): ? User;
  updateEmail(user: User, email: string): User;
  isUsernameValid(username: string): boolean;
  isEmailValid(email: string): boolean;
  isPasswordValid(password: string): boolean;
}

export const createUser = (userFields: UserFields): ? User => {
  const {
    username,
    email,
    password
  } = userFields;
  return isUsernameValid(username) && isEmailValid(email) && isPasswordValid(password) ?
    Object.freeze({
      username,
      email,
      password
    }) :
    null;
};

export const updateEmail = (user: User, email: string): User =>
validators.isObject(user) && isEmailValid(email) ?
  Object.freeze({
    ...user,
    email
  }) :
  user;

export const isUsernameValid = (username: string): boolean =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(username);

export const isEmailValid = (email: string): boolean =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(email);

export const isPasswordValid = (password: string): boolean =>
  R.allPass([
    validators.isString,
    validators.isLengthGreaterThen(0)
  ])(password);

export const UserServiceFactory = () => ({
  createUser,
  updateEmail,
  isUsernameValid,
  isEmailValid,
  isPasswordValid
});

export const userService = UserServiceFactory();
