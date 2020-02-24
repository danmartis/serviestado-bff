/**
 * APIs ServiEstado
 * Dummy Server
 */

// Declara dependencias
const cors = require("cors");
const express = require('express');
const static = express.static
const swaggerPath = require('swagger-ui-dist').absolutePath()

// Declara variables
const port = process.env.PORT1 || 6969
const base = !process.env.NODE_ENV ? '' : '/bff/v1/se-personas-bff'

// Inicia el servicio
express()
    // SwaggerUI
    .use(base + '/ui', static(swaggerPath))
    // OpeanAPI Spec
    .use(base + '/spec', static('./api_spec.yaml'))
    // Loggeer
    .use(require('morgan')('combined'))
    // Json
    .use(require('express').json())
    // Cors
    .use(cors())
    // API Convenios
    .get(base + '/convenios', require('./controllers/convenios').findConvenios)
    .get(base + '/convenios/:id', require('./controllers/convenios').findConveniosById)

    //API Cuentas
    .get(base + '/deudas', require('./controllers/deuda').findDeudas)
    .get(base + '/deudas/:idCliente', require('./controllers/deuda').findDeudasByCliente)
    .get(base + '/deudas/:idConvenio/:idCliente', require('./controllers/deuda').findDeudaByConvenioAndCliente)

    // API busqueda
    .post(base + '/busqueda/:idConvenio', require('./controllers/busqueda').busqueda)

    // API comprobantes
    .get(base + '/comprobante/:idTrx', require('./controllers/comprobante').resultComprobante)
    .post(base + '/comprobante/send', require('./controllers/comprobante').sendComprobante)

    // Healthcheck
    .get(base  + '/healthcheck', require('./controllers/healthcheck').healthcheck)

    // Registro SE
    .post(base + '/registro-se/inicial', require('./controllers/registro').registroInicialSE)
    .post(base + '/registro-se/validacion', require('./controllers/registro').registroValidacionSE)
    .post(base + '/registro-se/fin', require('./controllers/registro').registroFinSE)

// lets go!
.listen(port)

console.log('listening in ' + port + '...')
