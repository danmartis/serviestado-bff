const express = require('express');
const router = express.Router();

const gestorContenidoController = require('../../app/controllers/v1/gestor-contenido.controller');

router.get('', gestorContenidoController.controllerGestorContenido)

module.exports = router;