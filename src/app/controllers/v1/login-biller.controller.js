import {
  loginBillerMS,
  changePasswordBillerMS
} from "../../services/v1/registro-biller-ms.services";
import {
  mensajeSalida,
  CODE_MESSAGE_OK,
  CODE_RESP_OK,
  CODE_RESP_BAD_REQUEST,
  CODE_MESSAGE_ERROR,
  LOGIN_BILLER_RESP,
  CHANGE_PASSWORD_RESP
} from "../../utils/mensaje-salida.service";

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
