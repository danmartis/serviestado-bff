// Declara variables
import { Router } from "express";
const router = Router();

import gestorContenidosRoutes from "./gestorContenido.routes";
import healthcheckRoutes from "./healthcheck.routes";
import paisesRoutes from "./ejemplo-paises.routes";

router.use("/gestorContenido", gestorContenidosRoutes);
router.use("/healthcheck", healthcheckRoutes);
router.use("/paises", paisesRoutes);

export default router;