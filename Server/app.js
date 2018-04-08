const express = require("express"),
      app = express(),
      config = require("./config/public");
require("./routes/authRoutes")(app);
require("./services/passport");

app.listen(config.server.PORT);
