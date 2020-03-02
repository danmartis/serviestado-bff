// Declara variables
import { Router } from "express";
const router = Router();

import gestorContenidosRoutes from "./gestorContenido.routes";
import healthcheckRoutes from "./healthcheck.routes";
import paisesRoutes from "./ejemplo-paises.routes";
import registroBillerRoutes from "./registro.routes";

router.use("/gestorContenido", gestorContenidosRoutes);
router.use("/healthcheck", healthcheckRoutes);
router.use("/paises", paisesRoutes);
router.use("/registro-biller", registroBillerRoutes);

export default router;