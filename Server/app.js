// @flow
"use strict";

import * as Hapi from "hapi";
import * as config from "./config";

const server = Hapi.server({
  port: config.server.PORT,
  host: config.server.HOST
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
