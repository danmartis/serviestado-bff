const router = require('express').Router();

const healthcheckController = require('../../app/controllers/v1/healthcheck.controller');

router.get('', healthcheckController.healthcheck);

module.exports = router;