import { sendRegistroBillerMS } from '../../services/v1/registro-biller-ms.services';
import Joi from '@hapi/joi';

const formSchema = Joi.object({
    business_name: Joi.string().required(),
    rut: Joi.string().required(),
    name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    position: Joi.string().required()
})

export const registroBiller = (req,res) => {
    new Promise( (resolve, reject) => {
        let body = req.body;
        const { error, value } = formSchema.validate(body);
        if( error ){
            reject(error);
        } else {
            resolve(value);
        }
    })
    .then( data => sendRegistroBillerMS(data))
    .then( data => res.status(200).json( {ok: true, data } ))
    .catch( err => res.status(400).json( {ok: false, error: err}));
}

export const getBiller = (req,res) => {
    let id = req.params.id;
    console.log("ID: ", id);
    res.status(200).json({ ok: true, biller: id});
}



