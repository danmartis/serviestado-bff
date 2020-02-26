const axios = require("axios");

const getApi = url => {
  return axios.get(url);
};

module.exports = {
  getApi
};
