// Declara variables
import { Router } from "express";
const router = Router();

import gestorContenidosRoutes from "./gestorContenido.routes";
import healthcheckRoutes from "./healthcheck.routes";
import registroBillerRoutes from "./registro.routes";
import loginBillerRoutes from "./loginBiller.routes";

router.use("/gestorContenido", gestorContenidosRoutes);
router.use("/healthcheck", healthcheckRoutes);
router.use("/registro-biller", registroBillerRoutes);
router.use("/login", loginBillerRoutes);

export default router;