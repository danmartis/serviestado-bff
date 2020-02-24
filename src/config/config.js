function addEnvParam(paramName, required) {
  // Evaluación del parámetro
  var parameter = process.env[paramName];

  if (!parameter) {
    if (required)
      throw new Error("No se definió la variable de entorno " + paramName);
    else return null;
  }

  return parameter;
}

/* Constantes de variables de entorno */

const microservicios = {
  port: addEnvParam("PORT", false) || 3000,
  checkCertificate: process.env.NODE_ENV === ("produccion" || "production")
};

module.exports = {
  microservicios
};
