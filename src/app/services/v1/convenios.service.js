import axios from "axios";
import { MS_RECAUDACION_API_URL } from "../../../enviroment/env_config";

export const getConvenioByEmpresa = (rutEmpresa) => {
  const uri = `${MS_RECAUDACION_API_URL}/convenios/${rutEmpresa}`;
  return axios.get(uri);
}

export const getConvenioRecaudacionByEmpresa = (rutEmpresa) => {
  const uri = `${MS_RECAUDACION_API_URL}/convenios/recaudacion/${rutEmpresa}`;
  return axios.get(uri);
}