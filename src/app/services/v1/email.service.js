import axios from "axios";
import { MS_EMAIL_API_URL } from "../../../enviroment/env_config";

/* export const envioEmailSimple = dataIn => {
  const url = `${MS_EMAIL_API_URL}/envioEmail/envioEmailSimple`;
  return axios.post(url, dataIn);
};
 */
export const sendEmailSimpleDestinationTemplate = dataIn => {
  const url = `${MS_EMAIL_API_URL}/envioEmail/sendEmailSimpleDestinationTemplate`;
  return axios.post(url, dataIn);
};

/* export const sendEmailMultipleDestinationTemplate = dataIn => {
  const url = `${MS_EMAIL_API_URL}/envioEmail/sendEmailMultipleDestinationTemplate`;
  return axios.post(url, dataIn);
}; */