import axios from "axios";

export const sendRegistroBillerMS = (data) => {
    return axios.post('url-ms', data);
}