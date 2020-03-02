async function validarHeaders(req, res, next) {
  let headers = [
    "codigosesion",
    "authorization",
    "canal",
    "nombreAplicacion",
    "xTrackID",
    "xRequestID",
    "funcionalidad",
    "dispositivo",
    "artefacto",
    "etapa",
    "operacion",
    "codigoAplicacion"
  ];

  for (let h of headers) {
    if (!req.headers[h]) {
      throw new Error("No se definió la cabecera: " + h);
    }
  }
  next();
}
export default validarHeaders;
