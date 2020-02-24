const usuariosServiEstado = [
    {
        "nombre": "Juan",
        "correo": "jperez@gmail.com",
        "password": "654321",
        "codigoRegistro": "259874",
        "estadoRegistro": 2
    },
    {
        "nombre": "Matias Gonzales",
        "correo": "matias@gmail.com",
        "password": "654321",
        "codigoRegistro": "259874",
        "estadoRegistro": 2
    }
];

const estadoRegistroSE = {
    REGISTRO_INICIAL: 0,
    REGISTRO_VALIDADO: 1,
    REGISTRO_COMPLETO: 2
};

module.exports = {
    usuariosServiEstado,
    estadoRegistroSE
}