const mensajeSalida = require('../models/mensajeSalida');
const codigoRespuesta = require('../models/codigoRespuesta');
const deudas = require('../data/deudas');

const busqueda = (req, res) => {
    try {
        const { idConvenio } = req.params;
        console.log('idConvenio:', idConvenio);
        const data = req.body;
        console.log('data:', data);
        if (data === null || typeof data === 'undefined' || Object.keys(data).length === 0) {
            return res.status(400).send(new mensajeSalida(
                codigoRespuesta.OBTENER_BUSQUEDA_CONVENIO.ERROR.code, 
                'Error de data', 
                {}
            ));
        }
        let numeroCliente;
        for (let i = 0; i < deudas.length; i++) {
            if (deudas[i].idConvenio == idConvenio) {
                if (deudas[i].datosCliente !== undefined) {
                    numeroCliente = validarDatosCliente(data, deudas[i].datosCliente, deudas[i]);
                    if (numeroCliente !== undefined) {
                        break;
                    }
                }
            }
        }
        console.log('numeroCliente:', numeroCliente);
        return res.status(200).send(new mensajeSalida(
            codigoRespuesta.OBTENER_BUSQUEDA_CONVENIO.SUCCESS.code, 
            codigoRespuesta.OBTENER_BUSQUEDA_CONVENIO.SUCCESS.desc, 
            { numeroCliente: (numeroCliente != undefined) ? numeroCliente : 'No encontrado' }
        ));
    } catch (error) {
        console.log('Error:', error);
        return res.status(500).send(new mensajeSalida(
            codigoRespuesta.OBTENER_BUSQUEDA_CONVENIO.ERROR.code, 
            codigoRespuesta.OBTENER_BUSQUEDA_CONVENIO.ERROR.desc, 
            {}
        ));
    }
};

const validarDatosCliente = (busquedaCliente, datosCliente, deuda) => {
    let cont = 0;
    for (let i = 0; i < busquedaCliente.length; i++) {
        for (let j = 0; j < datosCliente.length; j++) {
            if (busquedaCliente[i].id == datosCliente[j].key 
                && busquedaCliente[i].valor.toLocaleLowerCase() == datosCliente[j].value.toLocaleLowerCase()) {
                // console.log('Dato buscado:', busquedaCliente[i]);
                // console.log('Dato de la deuda:', datosCliente[j]);
                cont++;
            }
        }
    }
    console.log(cont, datosCliente.length, deuda.idCliente, busquedaCliente.length);
    if (cont == datosCliente.length && cont == busquedaCliente.length) { 
        return deuda.idCliente;
    } 
    return undefined;
};

module.exports = {
    busqueda
}