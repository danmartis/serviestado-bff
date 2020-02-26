const paises = require("../../services/v1/ejemplo-paises-service");

const getPaises = (req, res) => {
  paises
    .getApi("https://dog.ceo/api/breeds/list/all")
    .then(data => {
        // console.log(data.data)
      res.json({
        ok: true,
        data: data.data
      });
    })
    .catch(err => {
      res.status(400).json({
        ok: false,
        error: err.message
      });
    });
};

module.exports = {
  getPaises
};
