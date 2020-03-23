
function addEnvParam(paramName, required) {
  // Evaluación del parámetro
  var parameter = process.env[paramName];
  console.log("Param ",parameter)
  if (!parameter) {
    if (required)
      throw new Error("No se definió la variable de entorno " + paramName);
    else return null;
  }

  return parameter;
}

/* Constantes de variables de entorno */

const microservicios = {
  port: addEnvParam("PORT", false) || 8080,
  checkCertificate: process.env.NODE_ENV === ("produccion" || "production")
};

module.exports = {
  microservicios
};
