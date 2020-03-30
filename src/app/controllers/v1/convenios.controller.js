import { getConvenioByBiller, getConvenioRecaudacionByBiller } from '../../services/v1/convenios.service'
import { CODE_RESP_OK, mensajeSalida, CODE_MESSAGE_OK, GET_CONVENIOS_BILLER, CODE_RESP_BAD_REQUEST } from '../../utils/mensaje-salida.service';

export const getConveniosByBillerController = (req,res) => {
  const rutBiller = req.params.rutBiller;
  getConvenioByBiller(rutBiller)
    .then( convenios => 
      res.status(CODE_RESP_OK).json( 
        mensajeSalida(CODE_MESSAGE_OK,GET_CONVENIOS_BILLER.SUCCESS, { ...convenios.data.data} )))
    .catch( err => 
      res.status(CODE_RESP_BAD_REQUEST).json(
        mensajeSalida(CODE_MESSAGE_ERROR, GET_CONVENIOS_BILLER.ERROR, {
          ...err.response.data
        })))
}

export const getConveniosRecaudacionByBillerController = (req,res) => {
  const rutBiller = req.params.rutBiller;
  getConvenioRecaudacionByBiller(rutBiller)
    .then( convenios => 
      res.status(CODE_RESP_OK).json( 
        mensajeSalida(CODE_MESSAGE_OK,GET_CONVENIOS_BILLER.SUCCESS, { ...convenios.data.data} )))
    .catch( err => 
      res.status(CODE_RESP_BAD_REQUEST).json(
        mensajeSalida(CODE_MESSAGE_ERROR, GET_CONVENIOS_BILLER.ERROR, {
          ...err.response.data
        })))
}