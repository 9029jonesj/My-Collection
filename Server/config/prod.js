module.exports = {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  },
  mongodb: {
    URI: process.env.MONGODB_URI
  },
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    key: process.env.COOKIE_KEY
  }
};
