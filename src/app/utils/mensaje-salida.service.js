export const mensajeSalida = (codigo, mensaje, data) => ({
  codigo,
  mensaje,
  data
});
// CÓDIGO DE RESPUESTA
export const CODE_RESP_OK = 200;
export const CODE_RESP_CREATED = 201;
export const CODE_RESP_BAD_REQUEST = 400;
export const CODE_RESP_NOT_FOUND = 404;
export const CODE_RESP_UNAUTHORIZED = 401;
export const CODE_RESP_METHOD_NOT_ALLOWED = 405;
export const CODE_RESP_CONFLICT = 409;
export const CODE_RESP_INTERNAL_SERVER_ERROR = 500;

// CÓDIGO MENSAJES
export const CODE_MESSAGE_OK = "OK";
export const CODE_MESSAGE_ERROR = "ERROR";
// DESCRIPCION ERRORES
export const MEN_PAGE_NOT_FOUND = "PAGE NOT FOUND";
export const REGISTRO_BILLER_RESP = {
  SUCCESS: "Registro exitoso",
  ERROR: "Registro fallido, verifique informacion ingresada"
};
export const LOGIN_BILLER_RESP = {
  SUCCESS: "Inicio de sesion correcto",
  ERROR: "Usuario o contraseña mal ingresado, verifique datos"
};
export const CHANGE_PASSWORD_RESP = {
  SUCCESS: "Cambio de contraseña exitoso",
  ERROR: "Ha ocurrido un error"
};
export const GET_DATA_USER = {
  SUCCESS: "Datos encontrados con éxito",
  ERROR: "Ha ocurrido un error"
};
export const RECOVER_PASSWORD = {
  SUCCESS: "Recuperación extosa",
  ERROR: "Error al recuperar contraseña"
};
export const UPDATE_DATA_USER = {
  SUCCESS: "Datos actualizados con éxito",
  ERROR: "Ha ocurrido un error"
};

export const REGISTER_NEW_USER = {
  SUCCESS: "Datos registrados con éxito",
  ERROR: "Ha ocurrido un error"
};

export const GET_REPORT = {
  SUCCESS: "Documento generado con éxito",
  ERROR: "Ha ocurrido un error"
};

// FUNCION
// export const mensajeSalida = (code, message, data) =>
//     ({
//         SUCCESS: { code: `${code}.000`, message, data },
//         ERROR: { code: `${code}.001`, message, data }
//     });
export const GET_CONVENIOS_BILLER = {
  SUCCESS: "Convenios obtenidos correctamente",
  ERROR: "Ha ocurrido un error"
}

export const GET_RECAUDACION_CONVENIO = {
  SUCCESS: "Recaudacion obtenida correctamente",
  ERROR: "Ha ocurrido un error"
}
