import axios from "axios";
import { MS_CMS_API_URL } from "../../../enviroment/env_config";



export const sendCmsMS = dataIn => {

    const url = `${MS_CMS_API_URL}/contentFul/getSpace`;
    console.log(url);
    console.log(dataIn);
    return axios.post(url, dataIn);

};