import { loginBillerMS, changePasswordBillerMS } from "../../services/v1/registro-biller-ms.services";
import { mensajeSalida, CODE_MESSAGE_OK, CODE_RESP_OK, CODE_RESP_BAD_REQUEST, CODE_MESSAGE_ERROR, LOGIN_BILLER_RESP, CHANGE_PASSWORD_RESP } from "../../services/v1/mensaje-salida.service";

export const loginBiller = (req,res) => {
    const body = req.body;
    loginBillerMS(body)
        .then( data => 
            res.status(CODE_RESP_OK)
                    .json( mensajeSalida(CODE_MESSAGE_OK,
                                        LOGIN_BILLER_RESP.SUCCESS, 
                                        { ...data })) )
        .catch( err => 
            res.status(CODE_RESP_BAD_REQUEST)
                    .json( mensajeSalida(CODE_MESSAGE_ERROR,
                                        LOGIN_BILLER_RESP.ERROR, 
                                        { message: err })) )
}

export const changePasswordBiller = (req,res) => {
    const body = req.body;
    changePasswordBillerMS(body)
        .then( data => 
                    res.status(CODE_RESP_OK)
                        .json( mensajeSalida(CODE_MESSAGE_OK,
                                            CHANGE_PASSWORD_RESP.SUCCESS,
                                            { ...data })))
        .catch( err => 
                    res.status(CODE_RESP_BAD_REQUEST)
                        .json( mensajeSalida(CODE_MESSAGE_ERROR,
                                            CHANGE_PASSWORD_RESP.ERROR,
                                            { err })))
}