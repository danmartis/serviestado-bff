// Declara variables
const express = require('express')
const router = express.Router();

const v1 = require("./v1");

const base = process.env.NODE_ENV || "/bff/se-bff-empresas";

router.use('/v1', v1);

module.exports = app => {
  app.use(base, router);
};
