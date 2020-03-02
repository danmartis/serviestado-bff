import { Router } from "express";
import { getPaises } from "../../app/controllers/v1/ejemplo-paises.controller";
const router = Router();

router.get("", getPaises);

export default router;
