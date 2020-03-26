import axios from "axios";
import {
  MS_REGISTROBILLER_URL,
  MS_REGISTROBILLER_BASE,
  MS_REGISTROBILLER_VERSION
} from "../../../enviroment/env_config";

export const sendRegistroBillerMS = dataIn => {
  console.log("==============", `${MS_REGISTROBILLER_URL}${MS_REGISTROBILLER_BASE}${MS_REGISTROBILLER_VERSION}/registro-biller`)
  const url = `${MS_REGISTROBILLER_URL}${MS_REGISTROBILLER_BASE}${MS_REGISTROBILLER_VERSION}/registro-biller`;
  return axios.post(url, dataIn);
};

export const loginBillerMS = dataIn => {
  const url = `${MS_REGISTROBILLER_URL}${MS_REGISTROBILLER_BASE}${MS_REGISTROBILLER_VERSION}/login`;
  return axios.post(url, dataIn);
};

export const changePasswordBillerMS = dataIn => {
  const url = `${MS_REGISTROBILLER_URL}${MS_REGISTROBILLER_BASE}${MS_REGISTROBILLER_VERSION}/login/cambio-contrasenia`;
  return axios.put(url, dataIn);
};

export const recoverPasswordMS = dataIn => {
  const url = `${MS_REGISTROBILLER_URL}${MS_REGISTROBILLER_BASE}${MS_REGISTROBILLER_VERSION}/login/recover-password`;
  return axios.post(url, dataIn);
};