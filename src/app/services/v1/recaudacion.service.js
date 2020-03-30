import axios from "axios";
import { MS_RECAUDACION_API_URL } from "../../../enviroment/env_config";


export const getConvenioByEmpresa = (idConvenio) => {
  const uri = `${MS_RECAUDACION_API_URL}/recaudacion/${idConvenio}`;
  return axios.get(uri);
}