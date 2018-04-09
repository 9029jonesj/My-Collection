module.exports = {
  server: {
    PORT: process.env.PORT || 7887
  },
  google: {
    googleCallbackURL: "auth/google/callback"
  },
  facebook: {
    facebookCallbackURL: "/login/facebook/return"
  },
  twitter: {
    twitterCallbackURL: "/auth/twitter/callback"
  }
};
