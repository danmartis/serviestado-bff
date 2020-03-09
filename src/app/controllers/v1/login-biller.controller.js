import { loginBillerMS } from "../../services/v1/registro-biller-ms.services";

export const loginBiller = (req,res) => {
    const body = req.body;
    loginBillerMS(body)
        .then( data => res.status(200).json({ ok: true, data}))
        .catch( err => res.status(400).json({ ok: false, error: err}))
}