//const enviarLog = require("../modules/enviarMonitoreo").enviarLog;
const config = require("../../../config/config");
const textos = require("../../mensajes/textos");

const controllerGestorContenido = (req, res) => {
  try {
    return res.status(200).send(textos);
  } catch (error) {
    console.log('Error:', error);
    return res.status(500).send('Error');
  }
}

module.exports = { controllerGestorContenido };
