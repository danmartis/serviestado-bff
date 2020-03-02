//const loggerBECH = require("logger-bech").loggerBECH;

/**
 * Middleware para manejo de excepciones dentro de controladores
 * @param {Error} err
 * @param {Http Request} req
 * @param {Http Response} res
 * @param {function} next
 * @returns {Promise<void>}
 */
async function errorHandler(err, req, res, next) {
  console.error(err.message);

  if (!err.statusCode) err.statusCode = 500;

  res.status(err.statusCode).send({ error: err.message });
  next();
}

export default errorHandler;
