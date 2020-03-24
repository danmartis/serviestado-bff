import { registerNewUser } from '../../services/v1/registro-biller-ms.services';
import Joi from '@hapi/joi';

const formSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    perfil: Joi.string().required(),
    contacto: Joi.string().required(),
    asignar: Joi.boolean().required()
})

export const RegisterNewUser = (req,res) => {
    new Promise( (resolve, reject) => {
        let body = req.body;
        const { error, value } = formSchema.validate(body);
        if( error ){
            reject(error);
        } else {
            resolve(value);
        }
    })
    .then( data => registerNewUser(data))
    .then( data => res.status(200).json( {ok: true, data } ))
    .catch( err => res.status(400).json( {ok: false, error: err}));
}