const CODE = 'SVE';

const listaRespuesta = {
    RESPONSE_DEFAULT: 'DEF',
    OBTENER_CONVENIOS: 'OC',
    OBTENER_CONVENIO_ID: 'OCI',
    OBTENER_DEUDAS_CLIENTE: 'OCC',
    OBTENER_DEUDA_CONVENIO_CLIENTE: 'OCCC',
    OBTENER_BUSQUEDA_CONVENIO: 'OBC',
    OBTENER_COMPROBANTE: 'OCBTE',
    ENVIAR_COMPROBANTE: 'EC',
    REGISTRAR_USUARIO_INICIO_SE: 'RISE',
    REGISTRAR_USUARIO_VALIDACION_SE: 'RVSE',
    REGISTRAR_USUARIO_FIN_SE: 'RFSE',
}

const RESPONSE_DEFAULT = {
    CODE_API: listaRespuesta.RESPONSE_DEFAULT,
    SUCCESS: {
        code: CODE + '.' + listaRespuesta.RESPONSE_DEFAULT + '.' + '000',
        desc: 'Se realizó con éxito'
    },
    ERROR: {
        code: CODE + '.' + listaRespuesta.RESPONSE_DEFAULT + '.' + '001',
        desc: 'Error en la ejecución'
    }
}

const OBTENER_CONVENIOS = {
    CODE_API: listaRespuesta.OBTENER_CONVENIOS,
    SUCCESS: {
        code: CODE + '.' + listaRespuesta.OBTENER_CONVENIOS + '.' + '000',
        desc: 'Se obtuvo listado de convenios con éxito'
    },
    ERROR: {
        code: CODE + '.' + listaRespuesta.OBTENER_CONVENIOS + '.' + '001',
        desc: 'Error al obtener listado de convenios'
    }
}

const OBTENER_CONVENIO_ID = {
    CODE_API: listaRespuesta.OBTENER_CONVENIO_ID,
    SUCCESS: {
        code: CODE + '.' + listaRespuesta.OBTENER_CONVENIO_ID + '.' + '000',
        desc: 'Se obtuvo convenio por id con éxito'
    },
    ERROR: {
        code: CODE + '.' + listaRespuesta.OBTENER_CONVENIO_ID + '.' + '001',
        desc: 'Error al obtener convenio por id'
    }
}

const OBTENER_DEUDAS_CLIENTE = {
    CODE_API: listaRespuesta.OBTENER_DEUDAS_CLIENTE,
    SUCCESS: {
        code: CODE + '.' + listaRespuesta.OBTENER_DEUDAS_CLIENTE + '.' + '000',
        desc: 'Se obtuvo cuentas por cliente con éxito'
    },
    ERROR: {
        code: CODE + '.' + listaRespuesta.OBTENER_DEUDAS_CLIENTE + '.' + '001',
        desc: 'Error al obtener cuentas por cliente'
    }
}

const OBTENER_DEUDA_CONVENIO_CLIENTE = {
    CODE_API: listaRespuesta.OBTENER_DEUDA_CONVENIO_CLIENTE,
    SUCCESS: {
        code: CODE + '.' + listaRespuesta.OBTENER_DEUDA_CONVENIO_CLIENTE + '.' + '000',
        desc: 'Se obtuvo cuenta por cliente y convenio con éxito'
    },
    ERROR: {
        code: CODE + '.' + listaRespuesta.OBTENER_DEUDA_CONVENIO_CLIENTE + '.' + '001',
        desc: 'Error al obtener cuenta por cliente y convenio'
    }
}

const OBTENER_BUSQUEDA_CONVENIO = {
    CODE_API: listaRespuesta.OBTENER_BUSQUEDA_CONVENIO,
    SUCCESS: {
        code: CODE + '.' + listaRespuesta.OBTENER_BUSQUEDA_CONVENIO + '.' + '000',
        desc: 'Se obtuvo busqueda por convenio con éxito'
    },
    ERROR: {
        code: CODE + '.' + listaRespuesta.OBTENER_BUSQUEDA_CONVENIO + '.' + '001',
        desc: 'Error al obtener busqueda por convenio'
    }
}

const OBTENER_COMPROBANTE = {
    CODE_API: listaRespuesta.OBTENER_COMPROBANTE,
    SUCCESS: {
        code: CODE + '.' + listaRespuesta.OBTENER_COMPROBANTE + '.' + '000',
        desc: 'Se obtuvo comprobante con éxito'
    },
    ERROR: {
        code: CODE + '.' + listaRespuesta.OBTENER_COMPROBANTE + '.' + '001',
        desc: 'Error al obtener comprobante'
    }
}

const ENVIAR_COMPROBANTE = {
    CODE_API: listaRespuesta.ENVIAR_COMPROBANTE,
    SUCCESS: {
        code: CODE + '.' + listaRespuesta.ENVIAR_COMPROBANTE + '.' + '000',
        desc: 'Se programó envió comprobante con éxito'
    },
    ERROR: {
        code: CODE + '.' + listaRespuesta.ENVIAR_COMPROBANTE + '.' + '001',
        desc: 'Error al programar envio comprobante'
    }
}

const REGISTRAR_USUARIO_INICIO_SE = {
    CODE_API: listaRespuesta.REGISTRAR_USUARIO_INICIO_SE,
    SUCCESS: {
        code: CODE + '.' + listaRespuesta.REGISTRAR_USUARIO_INICIO_SE + '.' + '000',
        desc: 'Usuario registrado correcto, se envio correo de validación'
    },
    ERROR: {
        code: CODE + '.' + listaRespuesta.REGISTRAR_USUARIO_INICIO_SE + '.' + '001',
        desc: 'Error al registrar usuario SE'
    }
};

const REGISTRAR_USUARIO_VALIDACION_SE = {
    CODE_API: listaRespuesta.REGISTRAR_USUARIO_INICIO_SE,
    SUCCESS: {
        code: CODE + '.' + listaRespuesta.REGISTRAR_USUARIO_VALIDACION_SE + '.' + '000',
        desc: 'Código coincide'
    },
    ERROR: {
        code: CODE + '.' + listaRespuesta.REGISTRAR_USUARIO_VALIDACION_SE + '.' + '001',
        desc: 'Código no coincide'
    }
};

const REGISTRAR_USUARIO_FIN_SE = {
    CODE_API: listaRespuesta.REGISTRAR_USUARIO_INICIO_SE,
    SUCCESS: {
        code: CODE + '.' + listaRespuesta.REGISTRAR_USUARIO_FIN_SE + '.' + '000',
        desc: 'Finalizo registro correctamente '
    },
    ERROR: {
        code: CODE + '.' + listaRespuesta.REGISTRAR_USUARIO_FIN_SE + '.' + '001',
        desc: 'Error al finalizar registro de usuario'
    }
};

module.exports = Object.assign({}, {
    CODE,
    listaRespuesta,
    RESPONSE_DEFAULT,
    OBTENER_CONVENIOS,
    OBTENER_CONVENIO_ID,
    OBTENER_DEUDAS_CLIENTE,
    OBTENER_DEUDA_CONVENIO_CLIENTE,
    OBTENER_BUSQUEDA_CONVENIO,
    OBTENER_COMPROBANTE,
    ENVIAR_COMPROBANTE,
    REGISTRAR_USUARIO_INICIO_SE,
    REGISTRAR_USUARIO_VALIDACION_SE,
    REGISTRAR_USUARIO_FIN_SE,
});