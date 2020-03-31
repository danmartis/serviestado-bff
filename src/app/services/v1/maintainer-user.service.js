import axios from "axios";
import { MS_REGISTROBILLER_API_URL } from "../../../enviroment/env_config";

export const registerNewUser = dataIn => {
  const url = `${MS_REGISTROBILLER_API_URL}/maintainer-user/registerNewUser`;
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

export const updateUser = dataIn => {
  const url = `${MS_REGISTROBILLER_API_URL}/maintainer-user/editar-usuario`;
  return axios.put(url, dataIn);
};

export const getUser = dataIn => {
  const url = `${MS_REGISTROBILLER_API_URL}/maintainer-user/listar-usuarios`;
  return axios.post(url, dataIn);
};