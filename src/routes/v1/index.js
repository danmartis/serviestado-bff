// Declara variables
const express = require("express");
const router = express.Router();


const gestorContenidosRoutes = require("./gestorContenido.routes");
const healthcheckRoutes = require("./healthcheck.routes");
const paisesRoutes = require("./ejemplo-paises.routes");

router.use("/gestorContenido", gestorContenidosRoutes);
router.use("/healthcheck", healthcheckRoutes);
router.use("/paises", paisesRoutes);

module.exports = router;