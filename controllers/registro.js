const codigoRespuesta = require('../models/codigoRespuesta');
const mensajeSalida = require('../models/mensajeSalida');
const { usuariosServiEstado, estadoRegistroSE } = require('../data/registro');

const registroInicialSE = (req, res) => {
    try {
        const data = req.body;
        if (!data || !data.nombre || !data.correo) {
            return res.status(400).send(new mensajeSalida(
                codigoRespuesta.REGISTRAR_USUARIO_INICIO_SE.ERROR.code,
                'Error de data',
                {}
            ));
        }
        console.log('usuarios:', usuariosServiEstado);
        for (let usuario of usuariosServiEstado) {
            if (usuario.correo == data.correo && usuario.estadoRegistro == estadoRegistroSE.REGISTRO_INICIAL) {
                usuario.codigoRegistro = codeGenerate();
                console.log('usuario: ', usuario);
                return res.status(200).send(new mensajeSalida(
                    codigoRespuesta.REGISTRAR_USUARIO_INICIO_SE.SUCCESS.code,
                    'Usuario ya se encontraba ingresado, se envio un correo de validación',
                    { codigo: usuario.codigoRegistro }
                ));
            } else if (usuario.correo == data.correo && usuario.estadoRegistro == estadoRegistroSE.REGISTRO_VALIDADO) {
                return res.status(200).send(new mensajeSalida(
                    codigoRespuesta.REGISTRAR_USUARIO_INICIO_SE.SUCCESS.code,
                    'Correo validado correctamente',
                    {}
                ));
            }else if (usuario.correo == data.correo && usuario.estadoRegistro == estadoRegistroSE.REGISTRO_COMPLETO) {
                return res.status(200).send(new mensajeSalida(
                    codigoRespuesta.REGISTRAR_USUARIO_INICIO_SE.SUCCESS.code,
                    'Usuario registrado correctamente',
                    {}
                ));
            }

        }
        const nuevoUsuario = {
            nombre: data.nombre,
            correo: data.correo,
            codigoRegistro: codeGenerate(),
            estadoRegistro: estadoRegistroSE.REGISTRO_INICIAL
        };
        console.log('nuevoUsuario:', nuevoUsuario);
        usuariosServiEstado.push(nuevoUsuario);
        return res.status(200).send(new mensajeSalida(
            codigoRespuesta.REGISTRAR_USUARIO_INICIO_SE.SUCCESS.code,
            codigoRespuesta.REGISTRAR_USUARIO_INICIO_SE.SUCCESS.desc,
            { codigo: nuevoUsuario.codigoRegistro }
        ));
    } catch (error) {
        console.log(error);
        return res.status(500).send(new mensajeSalida(
            codigoRespuesta.REGISTRAR_USUARIO_INICIO_SE.error.code,
            codigoRespuesta.REGISTRAR_USUARIO_INICIO_SE.error.desc,
            {}
        ));
    }
};

const registroValidacionSE = (req, res) => {
    try {
        const data = req.body;
        console.log('data:', data);
        if (!data || !data.correo || !data.codigo) {
            return res.status(400).send(new mensajeSalida(
                codigoRespuesta.REGISTRAR_USUARIO_VALIDACION_SE.ERROR.code,
                'Error de data',
                {}
            ));
        }
        for (let usuario of usuariosServiEstado) {
            if (usuario.correo == data.correo && usuario.codigoRegistro == data.codigo && usuario.estadoRegistro == estadoRegistroSE.REGISTRO_INICIAL) {
                usuario.estadoRegistro = estadoRegistroSE.REGISTRO_VALIDADO;
                console.log('usuario:', usuario);
                return res.status(200).send(new mensajeSalida(
                    codigoRespuesta.REGISTRAR_USUARIO_VALIDACION_SE.SUCCESS.code,
                    codigoRespuesta.REGISTRAR_USUARIO_VALIDACION_SE.SUCCESS.desc,
                    {}
                ));
            }
        }
        return res.status(400).send(new mensajeSalida(
            codigoRespuesta.REGISTRAR_USUARIO_VALIDACION_SE.ERROR.code,
            codigoRespuesta.REGISTRAR_USUARIO_VALIDACION_SE.ERROR.desc,
            {}
        ));
    } catch (error) {
        console.log(error);
        return res.status(500).send(new mensajeSalida(
            codigoRespuesta.REGISTRAR_USUARIO_VALIDACION_SE.error.code,
            codigoRespuesta.REGISTRAR_USUARIO_VALIDACION_SE.error.desc,
            {}
        ));
    }
};

const registroFinSE = (req, res) => {
    try {
        const data = req.body;
        console.log('data:', data);
        if (!data || !data.correo || !data.password) {
            return res.status(400).send(new mensajeSalida(
                codigoRespuesta.REGISTRAR_USUARIO_FIN_SE.ERROR.code,
                'Error de data',
                {}
            ));
        }
        for (let usuario of usuariosServiEstado) {
            if (usuario.correo == data.correo && usuario.estadoRegistro == estadoRegistroSE.REGISTRO_VALIDADO) {
                usuario.estadoRegistro = estadoRegistroSE.REGISTRO_COMPLETO;
                usuario.password = data.password;
                console.log('usuario:', usuario);
                return res.status(200).send(new mensajeSalida(
                    codigoRespuesta.REGISTRAR_USUARIO_FIN_SE.SUCCESS.code,
                    codigoRespuesta.REGISTRAR_USUARIO_FIN_SE.SUCCESS.desc,
                    {}
                ));
            }
        }
        return res.status(400).send(new mensajeSalida(
            codigoRespuesta.REGISTRAR_USUARIO_FIN_SE.ERROR.code,
            'Usuario no existe',
            {}
        ));
    } catch (error) {
        console.log(error);
        return res.status(500).send(new mensajeSalida(
            codigoRespuesta.REGISTRAR_USUARIO_VALIDACION_SE.error.code,
            codigoRespuesta.REGISTRAR_USUARIO_VALIDACION_SE.error.desc,
            {}
        )); 
    }
};

const codeGenerate =  () => {
    return Math.floor((Math.random() * 900000) + 100000);
}

module.exports = {
    registroInicialSE,
    registroValidacionSE,
    registroFinSE,
}