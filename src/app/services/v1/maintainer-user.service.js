import axios from "axios";

const urlMS =
  process.env.URL_MS_REGISTRO_BILLER ||
  "http://se-ms-registrobiller/ms/se-ms-registrobiller/v1";

export const registerNewUser = dataIn => {
  const url = `${urlMS}/maintainer-user/registerNewUser`;
  return axios.post(url, dataIn);
};

export const personalInformation = dataIn => {
  const url = `${urlMS}/maintainer-user/informacion-personal`;
  return axios.post(url, dataIn);
};

export const updatePerfilUser = dataIn => {
  const url = `${urlMS}/maintainer-user/editar-perfil`;
  return axios.put(url, dataIn);
};
