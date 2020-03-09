import { loginBillerMS } from "../../services/v1/registro-biller-ms.services";
import { mensajeSalida } from "../../services/v1/mensaje-salida.service";

export const loginBiller = (req,res) => {
    const body = req.body;
    loginBillerMS(body)
        .then( data => res.status(200).json(mensajeSalida(200,"Exito", { ...data })))
        .catch( err => res.status(400).json(mensajeSalida(200,"Error", { message: err})))
}