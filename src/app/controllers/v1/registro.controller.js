import { sendRegistroBillerMS } from '../../services/v1/registro-biller-ms.services';
import { checkObject } from '../../../utils/data.utils';

const formTest = {
    "DATOS_EMPRESA" : {
        "business_name" : "ENTEL S.A.",
        "rut" : "11.111.111-1"
    },
    "DATOS_CONTACTOS" : {
        "name" : "Pedro",
        "last_name" : "Engel",
        "email" : "pedrito@engel.cl",
        "phone" : "+56123456789",
        "position" : "Big Boss"
    }
};
const keysBody = ["business_name", "rut","name","last_name","email","phone","position"];

export const registroBiller = (req,res) => {
    new Promise( (resolve, reject) => {
        let body = req.body;
        if( !checkObject(body, keysBody)){
            reject(new Error("Data no valida o incompleta"));
        } else {
            resolve(body);
        }
    })
    .then( data => sendRegistroBillerMS(data))
    .then( data => res.status(200).json( {ok: true, data } ))
    .catch( err => res.status(400).json( {ok: false, error: err.message}));
}

export const getBiller = (req,res) => {
    let id = req.params.id;
    console.log("ID: ", id);
    res.status(200).json(formTest);
}



