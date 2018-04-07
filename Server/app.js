const express = require("express"),
  app = express(),
  passport = require("passport"),
  GoogleStrategy = require("passport-google-oauth20").Strategy,
  config = require("./config/public"),
  keys = require("./config/private");

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: config.google.googleCallbackURL
  }, (accessToken) => {
    console.log(accessToken);
  })
);

app.listen(config.server.PORT);
