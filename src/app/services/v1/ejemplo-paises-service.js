import axios from "axios";

export const getApi = url => {
  return axios.get(url);
};