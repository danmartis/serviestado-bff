"use strict";

const express = require("express");
require("express-async-errors");
const helmet = require("helmet");
const routes = require("./routes/v1");
const bodyParser = require("body-parser");

const config = require("./config/config");

const app = express();

async function serverStart() {
  app.use(bodyParser.json());

  // Seguridad; ver https://github.com/helmetjs/helmet
  app.use(helmet());

  // Incorporar rutas
  routes(app);

  let port = config.microservicios.port;
  app.listen(port, () => {
    console.log("Servidor ejecutandose en el puerto: " + port);
  });
}

async function cleanup() {
  console.log("Desconectando...");

  process.exit(0);
}

// Captura de señales de S.O. en las que ejecutaremos el cierre de conexiones
process.on("SIGTERM", cleanup);
process.on("SIGINT", cleanup);
process.on("SIGHUP", cleanup);

serverStart();
