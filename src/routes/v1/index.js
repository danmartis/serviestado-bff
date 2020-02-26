// Declara variables
const base = process.env.NODE_ENV || "/bff/v1/se-bff-empresas";

const {controllerGestorContenido} = require("../../app/controllers/v1/gestor-contenido.controller");
const {healthcheck} = require("../../app/controllers/v1/healthcheck.controller");
const errorHandler = require("../../app/modules/error-handler");
const paises = require('./ejemplo-paises.routes');

const routes = app => {
  app.get(base + "/controllerGestorContenido", controllerGestorContenido);

  // Operación de healthcheck
  app.get("/healthcheck", healthcheck);

  // Middleware para manejo de errores
  app.use(errorHandler);

  // Ejemplo Paises
  app.use(base, paises);
};

module.exports = routes;
