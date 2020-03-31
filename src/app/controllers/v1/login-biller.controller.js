import {
  loginBillerMS,
  changePasswordBillerMS,
  recoverPasswordMS
} from "../../services/v1/registro-biller-ms.services";
import { sendEmailSimpleDestinationTemplate } from "../../services/v1/email.service"
import {
  mensajeSalida,
  CODE_MESSAGE_OK,
  CODE_RESP_OK,
  CODE_RESP_BAD_REQUEST,
  CODE_MESSAGE_ERROR,
  LOGIN_BILLER_RESP,
  CHANGE_PASSWORD_RESP,
  RECOVER_PASSWORD
} from "../../utils/mensaje-salida.service";
import {
  EMAIL_SOURCE_EMAIL_VERIFIED,
  EMAIL_TEMP_NAME_CLAVE_PROVISORIA,
  EMAIL_CONFIGURATION_NAME
} from "../../../enviroment/env_config";

export const loginBiller = (req, res) => {
  const body = req.body;
  loginBillerMS(body)
    .then(response =>
      res.status(CODE_RESP_OK).json(
        mensajeSalida(CODE_MESSAGE_OK, LOGIN_BILLER_RESP.SUCCESS, {
          ...response.data
        })
      )
    )
    .catch(err =>
      res.status(CODE_RESP_BAD_REQUEST).json(
        mensajeSalida(CODE_MESSAGE_ERROR, CHANGE_PASSWORD_RESP.ERROR, {
          ...err.response.data
        })
      )
    );
};

export const changePasswordBiller = (req, res) => {
  const body = req.body;
  changePasswordBillerMS(body)
    .then(response =>
      res.status(CODE_RESP_OK).json(
        mensajeSalida(CODE_MESSAGE_OK, CHANGE_PASSWORD_RESP.SUCCESS, {
          ...response.data
        })
      )
    )
    .catch(err =>
      res.status(CODE_RESP_BAD_REQUEST).json(
        mensajeSalida(CODE_MESSAGE_ERROR, CHANGE_PASSWORD_RESP.ERROR, {
          ...err.response.data
        })
      )
    );
};


export const recoverPassword = (req, res) => {
  const body = req.body;
  recoverPasswordMS(body)
    .then(resRecPass => {
      let bodyEmail = {
        sourceEmailVerified: EMAIL_SOURCE_EMAIL_VERIFIED,
        templateName: EMAIL_TEMP_NAME_CLAVE_PROVISORIA,
        configurationSetName: EMAIL_CONFIGURATION_NAME,
        toAddresses: body.email,
        templateData: `{ "claveProvisoria":"${resRecPass.data.data.clave_provisoria}" }`
      };
      return sendEmailSimpleDestinationTemplate(bodyEmail);
    }).then(resEmail => 
      res.status(CODE_RESP_OK).json(
        mensajeSalida(CODE_MESSAGE_OK, RECOVER_PASSWORD.SUCCESS, {
          ...resEmail.data
        })
      )
    ).catch( err => {
      res.status(CODE_RESP_BAD_REQUEST).json(
        mensajeSalida(CODE_MESSAGE_ERROR, RECOVER_PASSWORD.ERROR, {
          ...err.response.data
        })
      );
    })
};