// Declara variables
const express = require('express')
const router = express.Router();

const base = process.env.NODE_ENV || "/bff/v1/se-bff-empresas";
// const base = process.env.NODE_ENV || "/api/v1/bff/se-bff-empresas";

const gestorContenidosRoutes = require('./gestorContenido.routes');
const healthcheckRoutes = require('./healthcheck.routes');
const paisesRoutes = require('./ejemplo-paises.routes');

router.use('/gestorContenido', gestorContenidosRoutes);
router.use('/healthcheck', healthcheckRoutes);
router.use('/paises', paisesRoutes);

module.exports = (app) => {
    app.use(base, router);
}
