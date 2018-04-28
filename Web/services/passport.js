const passport = require("passport"),
  GoogleStrategy = require("passport-google-oauth20").Strategy,
  FacebookStrategy = require("passport-facebook").Strategy,
  TwitterStrategy = require("passport-twitter").Strategy,
  keys = require("../config/keys"),
  mongoose = require("mongoose"),
  User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({email: profile.emails[0].value}).then(existingUser => {
        if (!existingUser) {
          new User({ID: profile.id, email: profile.emails[0].value})
            .save()
            .then(user => {
              done(null, user);
            });
        } else done(null, existingUser);
      });
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.clientSecret,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "email"],
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({email: profile.emails[0].value}).then(existingUser => {
        if (!existingUser) {
          new User({ID: profile.id, email: profile.emails[0].value})
            .save()
            .then(user => {
              done(null, user);
            });
        } else done(null, existingUser);
      });
    }
  )
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitter.consumerKey,
      consumerSecret: keys.twitter.consumerSecret,
      callbackURL: "/auth/twitter/callback",
      includeEmail: true
    },
    (token, tokenSecret, profile, done) => {
      User.findOne({email: profile.emails[0].value}).then(existingUser => {
        if (!existingUser) {
          new User({ID: profile.id, email: profile.emails[0].value})
            .save()
            .then(user => {
              done(null, user);
            });
        } else done(null, existingUser);
      });
    }
  )
);
