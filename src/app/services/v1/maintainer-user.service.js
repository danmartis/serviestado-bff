import axios from "axios";

const urlMS = process.env.URL_MS_REGISTRO_BILLER || "http://se-ms-registrobiller/ms/se-ms-registrobiller/v1";

export const registerNewUser = (dataIn) => {
    const url = `${urlMS}/maintainerUser/registerNewUser`;
    console.log('url: ', url);
    return axios.post(url, data);
}

export const personalInformation = (dataIn) => {
    const url = `${urlMS}/maintainer-user/informacion-personal`;
    return axios.post(url, dataIn);
}