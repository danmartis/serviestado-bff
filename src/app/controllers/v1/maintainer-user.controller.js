import {
  registerNewUser,
  personalInformation,
  updatePerfilUser,
  getUser
} from "../../services/v1/maintainer-user.service";
import {
  mensajeSalida,
  CODE_MESSAGE_OK,
  CODE_RESP_OK,
  CODE_RESP_BAD_REQUEST,
  CODE_MESSAGE_ERROR,
  GET_DATA_USER,
  REGISTER_NEW_USER,
  UPDATE_DATA_USER,
  GET_REPORT
} from "../../utils/mensaje-salida.service";

export const RegisterNewUser = (req, res) => {
  const body = req.body;
  registerNewUser(body)
    .then(response =>
      res.status(CODE_RESP_OK).json(
        mensajeSalida(CODE_MESSAGE_OK, REGISTER_NEW_USER.SUCCESS, {
          ...response.data
        })
      )
    )
    .catch(err =>
      res.status(CODE_RESP_BAD_REQUEST).json(
        mensajeSalida(CODE_MESSAGE_ERROR, REGISTER_NEW_USER.ERROR, {
          ...err.response.data
        })
      )
    );
};

export const PersonalInformation = (req, res) => {
  const body = req.body;
  personalInformation(body)
    .then(response =>
      res.status(CODE_RESP_OK).json(
        mensajeSalida(CODE_MESSAGE_OK, GET_DATA_USER.SUCCESS, {
          ...response.data
        })
      )
    )
    .catch(err =>
      res.status(CODE_RESP_BAD_REQUEST).json(
        mensajeSalida(CODE_MESSAGE_ERROR, GET_DATA_USER.ERROR, {
          ...err.response.data
        })
      )
    );
};

export const UpdatePerfilUser = (req, res) => {
  const body = req.body;
  updatePerfilUser(body)
    .then(response =>
      res.status(CODE_RESP_OK).json(
        mensajeSalida(CODE_MESSAGE_OK, UPDATE_DATA_USER.SUCCESS, {
          ...response.data
        })
      )
    )
    .catch(err =>
      res.status(CODE_RESP_BAD_REQUEST).json(
        mensajeSalida(CODE_MESSAGE_ERROR, UPDATE_DATA_USER.ERROR, {
          ...err.response.data
        })
      )
    );
};

let path = require("path");

export const AssignedAgreements = (req, res) => {
  let filename = req.query["nameFile"] + ".pdf";
  let filePath = path.join("./document/", filename);

  res.download(filePath, filename, function(err) {
    if (err) {
      return res.status(err.status).json(
        mensajeSalida(CODE_MESSAGE_ERROR, GET_REPORT.ERROR, {
          ...err
        })
      );
    } else {
      return res.status(CODE_RESP_OK);
    }
  });
};

export const UpdateUser = (req, res) => {
  const body = req.body;
  updateUser(body)
    .then(response =>
      res.status(CODE_RESP_OK).json(
        mensajeSalida(CODE_MESSAGE_OK, UPDATE_DATA_USER.SUCCESS, {
          ...response.data
        })
      )
    )
    .catch(err =>
      res.status(CODE_RESP_BAD_REQUEST).json(
        mensajeSalida(CODE_MESSAGE_ERROR, UPDATE_DATA_USER.ERROR, {
          ...err.response.data
        })
      )
    );
};

export const GetUser = (req, res) => {
  const body = req.body;
  getUser(body)
    .then(response =>
      res.status(CODE_RESP_OK).json(
        mensajeSalida(CODE_MESSAGE_OK, GET_DATA_USER.SUCCESS, {
          ...response.data
        })
      )
    )
    .catch(err =>
      res.status(CODE_RESP_BAD_REQUEST).json(
        mensajeSalida(CODE_MESSAGE_ERROR, GET_DATA_USER.ERROR, {
          ...err.response.data
        })
      )
    );
};