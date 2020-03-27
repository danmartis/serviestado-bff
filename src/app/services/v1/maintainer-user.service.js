import axios from "axios";
import {
  MS_REGISTROBILLER_URL,
  MS_REGISTROBILLER_BASE,
  MS_REGISTROBILLER_VERSION
} from "../../../enviroment/env_config";

export const registerNewUser = dataIn => {
  const url = `${MS_REGISTROBILLER_URL}${MS_REGISTROBILLER_BASE}${MS_REGISTROBILLER_VERSION}/maintainer-user/registerNewUser`;
  return axios.post(url, dataIn);
};

export const personalInformation = dataIn => {
  const url = `${MS_REGISTROBILLER_URL}${MS_REGISTROBILLER_BASE}${MS_REGISTROBILLER_VERSION}/maintainer-user/informacion-personal`;
  return axios.post(url, dataIn);
};

export const updatePerfilUser = dataIn => {
  const url = `${MS_REGISTROBILLER_URL}${MS_REGISTROBILLER_BASE}${MS_REGISTROBILLER_VERSION}/maintainer-user/editar-perfil`;
  return axios.put(url, dataIn);
};
