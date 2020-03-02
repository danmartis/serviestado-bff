import { getApi } from "../../services/v1/ejemplo-paises-service";

export const getPaises = (req, res) => {
  getApi("https://dog.ceo/api/breeds/list/all")
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
