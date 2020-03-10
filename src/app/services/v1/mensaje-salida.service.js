export const mensajeSalida = (codigo, mensaje, data) => ({codigo,mensaje,data});
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
export const REGISTRO_BILLER_RESP = {
    SUCCESS: "Registro exitoso",
    ERROR: "Registro fallido, verifique informacion ingresada"
}
export const LOGIN_BILLER_RESP = {
    SUCCESS: "Inicio de sesion correcto",
    ERROR: "Usuario o contraseña mal ingresado, verifique datos"
}

// FUNCION 
// export const mensajeSalida = (code, message, data) => 
//     ({
//         SUCCESS: { code: `${code}.000`, message, data },
//         ERROR: { code: `${code}.001`, message, data }
//     });