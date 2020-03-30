import axios from "axios";
import { MS_REGISTROBILLER_API_URL } from "../../../enviroment/env_config";

export const registerNewUser = dataIn => {
  const url = `${MS_REGISTROBILLER_API_URL}/maintainerUser/registerNewUser`;
  return axios.post(url, data);
};

export const personalInformation = dataIn => {
  const url = `${MS_REGISTROBILLER_API_URL}/maintainer-user/informacion-personal`;
  return axios.post(url, dataIn);
};

export const updatePerfilUser = dataIn => {
  const url = `${MS_REGISTROBILLER_API_URL}/maintainer-user/editar-perfil`;
  return axios.put(url, dataIn);
};
