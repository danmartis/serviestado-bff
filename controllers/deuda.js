const mensajeSalida = require('../models/mensajeSalida');
const codigoRespuesta = require('../models/codigoRespuesta');
const deudas = require('../data/deudas');

const findDeudaByConvenioAndCliente = (req, res) => {
    try {
        const { idConvenio, idCliente } = req.params;
        console.log('idConvenio:', idConvenio);
        console.log('idCliente:', idCliente);
    
        for (let i = 0; i < deudas.length; i++) {
            if (deudas[i].hasOwnProperty('idConvenio') && deudas[i]['idConvenio'] == idConvenio
                && deudas[i].hasOwnProperty('idCliente') && deudas[i]['idCliente'] == idCliente) {
    
                console.log(deudas[i]);
                const mensajeRespuesta = new mensajeSalida(
                    codigoRespuesta.OBTENER_DEUDA_CONVENIO_CLIENTE.SUCCESS.code, 
                    codigoRespuesta.OBTENER_DEUDA_CONVENIO_CLIENTE.SUCCESS.desc, 
                    deudas[i]
                  );
                return res.status(200).send(mensajeRespuesta);
            }
        }
        const mensajeRespuesta = new mensajeSalida(
            codigoRespuesta.OBTENER_DEUDA_CONVENIO_CLIENTE.ERROR.code, 
            codigoRespuesta.OBTENER_DEUDA_CONVENIO_CLIENTE.ERROR.desc, 
            { }
          );
        return res.status(400).send(mensajeRespuesta);
    } catch (error) {
        console.log('Se produjo un problema:', error);
        const mensajeRespuesta = new mensajeSalida(
            codigoRespuesta.OBTENER_DEUDA_CONVENIO_CLIENTE.ERROR.code, 
            codigoRespuesta.OBTENER_DEUDA_CONVENIO_CLIENTE.ERROR.desc, 
            { }
          );
        return res.status(500).send(mensajeRespuesta);
    }
};

const findDeudas = (req, res) => {
    try {
        return res.json({
            deudas
        });
    } catch (error) {
        console.log('Se produjo un problema: ', error);
        return res.status(500).json({
            message: 'Se produjo un problema al devolver las deudas.'
        });
    }
};

const findDeudasByCliente = (req, res) => {
    try {
        const { idCliente } = req.params;
        console.log('idCliente', idCliente);
        let deudasByCliente = [];
        for (let i = 0; i < deudas.length; i++) {
            console.log(deudas[i]);
            if (deudas[i].hasOwnProperty('idCliente') && deudas[i]['idCliente'] == idCliente) {
                console.log(deudas[i]);
                deudasByCliente.push(deudas[i]);
            }
        }
        if (deudasByCliente !== null && deudasByCliente !== 'undefined' && deudasByCliente.length > 0){
            const mensajeRespuesta = new mensajeSalida(
                codigoRespuesta.OBTENER_DEUDAS_CLIENTE.SUCCESS.code, 
                codigoRespuesta.OBTENER_DEUDAS_CLIENTE.SUCCESS.desc, 
                { deudas: deudasByCliente }
              );
            return res.status(200).send(mensajeRespuesta);
        } else {
            const mensajeRespuesta = new mensajeSalida(
                codigoRespuesta.OBTENER_DEUDAS_CLIENTE.SUCCESS.code, 
                codigoRespuesta.OBTENER_DEUDAS_CLIENTE.SUCCESS.desc, 
                { }
              );
            return res.status(400).send(mensajeRespuesta);
        }
    } catch (error) {
        console.log('Se produjo un problema: ', error);
        const mensajeRespuesta = new mensajeSalida(
            codigoRespuesta.OBTENER_DEUDAS_CLIENTE.SUCCESS.code, 
            codigoRespuesta.OBTENER_DEUDAS_CLIENTE.SUCCESS.desc, 
            { }
          );
        return res.status(500).send(mensajeRespuesta);
    }
};

module.exports = {
    findDeudaByConvenioAndCliente,
    findDeudas,
    findDeudasByCliente
}