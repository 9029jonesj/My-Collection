const passport = require("passport"),
  GoogleStrategy = require("passport-google-oauth20").Strategy,
  FacebookStrategy = require("passport-facebook").Strategy,
  TwitterStrategy = require("passport-twitter").Strategy,
  keys = require("../config/private"),
  config = require("../config/public");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: config.google.googleCallbackURL
    },
    (accessToken, refreshToken, profile, callback) => {
      console.log("Access Token: " + accessToken);
      console.log("Refresh Token: " + refreshToken);
      console.log("Profile: " + JSON.stringify(profile));
      return callback(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.clientSecret,
      callbackURL: config.facebook.facebookCallbackURL
    },
    function(accessToken, refreshToken, profile, callback) {
      return callback(null, profile);
    }
  )
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitter.consumerKey,
      consumerSecret: keys.twitter.consumerSecret,
      callbackURL: config.twitter.twitterCallbackURL
    },
    function(token, tokenSecret, profile, cb) {
      return callback(null, profile);
    }
  )
);
