const passport = require("passport"),
      GoogleStrategy = require("passport-google-oauth20").Strategy,
      keys = require("../config/private");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Access Token: " + accessToken);
      console.log("Refresh Token: " + refreshToken);
      console.log("Profile: " + JSON.stringify(profile));
    }
  )
);
