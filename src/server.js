import app from "./app";
import { PORT, BASE } from "./enviroment/env_config";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import {
  CODE_RESP_NOT_FOUND,
  CODE_MESSAGE_ERROR,
  MEN_PAGE_NOT_FOUND,
  mensajeSalida
} from "./app/utils/mensaje-salida.service";
// Para desarrollo, muestra todas los endpoint del router
import listEndpoints from "express-list-endpoints";

async function main() {

  //Documentación API
  const swaggerDocument = YAML.load("./bff_spec.yaml");
  app.use(
    `${BASE}/api-docs`,
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  );
  // se deja mensaje por defecto al no existir ruta
  app.use(`*`, (req, res) => {
    res
      .status(CODE_RESP_NOT_FOUND)
      .json(mensajeSalida(CODE_MESSAGE_ERROR, MEN_PAGE_NOT_FOUND, {}));
  });

  app.listen(PORT, () => {
    console.log("Servidor ejecutandose en el puerto: " + PORT);
    console.log(listEndpoints(app));
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

main();
