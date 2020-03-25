import axios from "axios";

const urlMS =
  process.env.URL_MS_REGISTRO_BILLER ||
  "http://se-ms-registrobiller/ms/se-ms-registrobiller/v1";

export const sendRegistroBillerMS = dataIn => {
  const url = `${urlMS}/registro-biller`;
  return axios.post(url, dataIn);
};

export const loginBillerMS = dataIn => {
  const url = `${urlMS}/login`;
  return axios.post(url, dataIn);
};

export const changePasswordBillerMS = dataIn => {
  const url = `${urlMS}/login/cambio-contrasenia`;
  return axios.put(url, dataIn);
};
