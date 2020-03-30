import axios from "axios";
import { MS_REGISTROBILLER_API_URL } from "../../../enviroment/env_config";

export const sendRegistroBillerMS = dataIn => {
  const url = `${MS_REGISTROBILLER_API_URL}/registro-biller`;
  return axios.post(url, dataIn);
};

export const loginBillerMS = dataIn => {
  const url = `${MS_REGISTROBILLER_API_URL}/login`;
  return axios.post(url, dataIn);
};

export const changePasswordBillerMS = dataIn => {
  const url = `${MS_REGISTROBILLER_API_URL}/login/cambio-contrasenia`;
  return axios.put(url, dataIn);
};

export const recoverPasswordMS = dataIn => {
  const url = `${MS_REGISTROBILLER_API_URL}/login/recover-password`;
  return axios.post(url, dataIn);
};