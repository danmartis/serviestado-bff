import app from './app';
import { microservicios } from "./config/config";

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const swaggerDocument = YAML.load('./swagger-docs.yaml');

// Para desarrollo, muestra todas los endpoint del router
import listEndpoints from "express-list-endpoints";

async function main() {  
    let port = microservicios.port;
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.listen(port, () => {
      console.log("Servidor ejecutandose en el puerto: " + port);
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