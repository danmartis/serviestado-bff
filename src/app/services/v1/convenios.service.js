import axios from "axios";
import { MS_RECAUDACION_API_URL } from "../../../enviroment/env_config";

export const getConvenioByBiller = (rutBiller) => {
  const uri = `${MS_RECAUDACION_API_URL}/convenios/${rutBiller}`;
  return axios.get(uri);
}

export const getConvenioRecaudacionByBiller = (rutBiller) => {
  const uri = `${MS_RECAUDACION_API_URL}/convenios/recaudacion/${rutBiller}`;
  return axios.get(uri);
}