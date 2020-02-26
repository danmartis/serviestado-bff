const express = require('express');
const router = express.Router();

const healthcheckController = require('../../app/controllers/v1/healthcheck.controller');

router.get('', healthcheckController.healthcheck);

module.exports = router;