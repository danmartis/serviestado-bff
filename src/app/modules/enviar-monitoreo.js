//const monitoreoBECH = require("monitoreo-bech").monitoreoBECH;

/**
 *  Envío de logs a monitoreo funcional (kafka)
 *
 * @param req
 * @param rut
 * @param dv
 * @param resp
 * @param fechaInicio
 * @param fechaFin
 * @param token
 * @param codApp
 * @param rutEmpresa
 * @param dvEmpresa
 */
function enviarLog(
  req,
  resp,
  rut,
  dv,
  fechaInicio,
  fechaFin,
  token,
  codApp = "",
  rutEmpresa = "",
  dvEmpresa = ""
) {
  var request = {
    headers: {
      fechaInicio: fechaInicio.toJSON(),
      fechaTermino: fechaFin.toJSON(),
      nombreArtefacto: req.headers.artefacto,
      url: req.url,
      codigosesion: req.headers.codigosesion,
      canal: req.headers.canal,
      nombreaplicacion: req.headers.nombreaplicacion,
      funcionalidad: req.headers.funcionalidad,
      artefacto: req.headers.artefacto,
      etapa: req.headers.etapa || "",
      ip: req.headers["X-Forwarded-For"] || req.connection.remoteAddress,
      dispositivo: req.headers["user-agent"],
      rutPersonaNatural: rut,
      digitoPersonaNatural: dv,
      rutPersonaEmpresa: rutEmpresa,
      digitoPersonaEmpresa: dvEmpresa,
      Authorization: token,
      xTrackID: req.headers.xTrackID || Date.now(),
      xRequestID: req.headers.xRequestID || Date.now(),
      codigoAplicacion: codApp
    },
    connection: { remoteAddress: req.connection.remoteAddress }
  };

  monitoreoBECH(request, resp)
    .then(() => {
      console.debug("Log monitoreoBECH enviado");
    })
    .catch(err => {
      console.error(
        "Error en envío de log monitoreoBECH:\n" + JSON.stringify(err)
      );
    });
}

export default { enviarLog };
