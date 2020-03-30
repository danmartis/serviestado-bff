import { getRecaudacionByConvenio } from '../../services/v1/recaudacion.service';
import { CODE_RESP_OK, GET_RECAUDACION_CONVENIO, CODE_MESSAGE_OK, CODE_RESP_BAD_REQUEST, mensajeSalida } from '../../utils/mensaje-salida.service';

export const getRecaudacionByConvenioController = (req, res) => {
    console.log("Params: ", req.params)
    const idConvenio = req.params.idConvenio;
    getRecaudacionByConvenio(idConvenio)
      .then( recaudacion =>
        res.status(CODE_RESP_OK).json(mensajeSalida(CODE_MESSAGE_OK, GET_RECAUDACION_CONVENIO.SUCCESS, { ...recaudacion.data.data })))
      .catch( err => 
        res.status(CODE_RESP_BAD_REQUEST).json(
          mensajeSalida(CODE_MESSAGE_ERROR, GET_RECAUDACION_CONVENIO.ERROR, {
            ...err.response.data
          })))

}