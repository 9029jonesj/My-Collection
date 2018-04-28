const express = require("express"),
  mongoose = require("mongoose"),
  cookieSession = require("cookie-session"),
  passport = require("passport"),
  https = require("https"),
  fs = require("fs"),
  keys = require("./config/keys"),
  PORT = process.env.PORT || 7887,
  options = {
    key: fs.readFileSync("./localhost.key"),
    cert: fs.readFileSync("./localhost.crt"),
    requestCert: false,
    rejectUnauthorized: false
  };
require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongodb.URI);
const app = express();

app.use(
  cookieSession({
    maxAge: keys.cookie.maxAge,
    keys: [keys.cookie.key]
  })
);

app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);

const server = https.createServer(options, app);

server.listen(PORT, () => {
  console.log("Express server listening on port " + server.address().port);
});
