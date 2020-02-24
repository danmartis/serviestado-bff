const validarHeaders = require("../modules/validarHeadersMDW");

const {
  controllerGestorContenido
} = require("../controllers/controllerGestorContenido.controller");

const { healthcheck } = require("../controllers/healthcheck.controller");
const errorHandler = require("../modules/errorHandler");

function routes(app) {
  /*app.use(
    "/bff/v1/se-bff-empresas/controllerGestorContenido",
    validarHeaders
  );*/

  app.get(
    "/bff/v1/se-bff-empresas/controllerGestorContenido",
    controllerGestorContenido
  );

  // Operación de healthcheck
  app.get("/healthcheck", healthcheck);

  // Middleware para manejo de errores
  app.use(errorHandler);
}

module.exports = { routes };
