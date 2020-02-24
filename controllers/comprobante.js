const mensajeSalida = require('../models/mensajeSalida');
const codigoRespuesta = require('../models/codigoRespuesta');
const comprobantes = require('../data/comprobantes');

const resultComprobante = (req, res) => {
    try {
        const { idTrx } = req.params;
        console.log('idTrx:', idTrx);
        let comprobanteByTrx = [];
        for(let i = 0; i < comprobantes.length; i++){
            console.log('idTransaccion:', comprobantes[i].idTransaccion);
            if (comprobantes[i].idTransaccion ==  idTrx) {
                let today = new Date();
                let day = today.getDate();
                let month = today.getMonth() + 1; 
                let year= today.getFullYear();
                if (day < 10) {
                    day = '0' + day;
                  } 
                  if (month < 10) {
                    month = '0' + month;
                  } 
                  let formatToday = day + '/' + month + '/' + year;
                //comprobante[i].fecha = formatToday;
                comprobantes[i].fecha = formatToday;
                comprobantes[i].hora = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
                comprobanteByTrx.push(comprobantes[i]);
            }
        }
        console.log('comprobantes',comprobanteByTrx);
        return res.status(200).send(new mensajeSalida(
            codigoRespuesta.OBTENER_COMPROBANTE.SUCCESS.code,
            codigoRespuesta.OBTENER_COMPROBANTE.SUCCESS.desc,
            { comprobante: comprobanteByTrx }
          ));

    } catch(error){
        console.log(error);
    }
};
const sendComprobante = (req, res) => {
    const data = req.body;
    console.log(data);
    if (data == undefined || data.idTransaccion == undefined || data.correo == undefined) {
        return res.status(400).send(new mensajeSalida(
            codigoRespuesta.ENVIAR_COMPROBANTE.ERROR.code,
            'Error de data',
            {}
        ));
    }
    for (let i = 0; i < comprobantes.length; i++) {
        if (comprobantes[i].idTransaccion == data.idTransaccion) {
            return res.status(200).send(new mensajeSalida(
                codigoRespuesta.ENVIAR_COMPROBANTE.SUCCESS.code,
                codigoRespuesta.ENVIAR_COMPROBANTE.SUCCESS.desc,
                { idTransaccion: data.idTransaccion, correo: data.correo }
            ));
        }
    }
    return res.status(200).send(new mensajeSalida(
        codigoRespuesta.ENVIAR_COMPROBANTE.ERROR.code,
        codigoRespuesta.ENVIAR_COMPROBANTE.ERROR.desc,
        { }
    ));
}
module.exports = {
    resultComprobante,
    sendComprobante
}
