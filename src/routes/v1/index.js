// Declara variables
import { Router } from "express";
const router = Router();

import contentRoutes from "./content-manager.routes";
import healthcheckRoutes from "./healthcheck.routes";
import registroBillerRoutes from "./registro.routes";

router.use("/gestor-contenido", contentRoutes);
router.use("/healthcheck", healthcheckRoutes);
router.use("/registro-biller", registroBillerRoutes);

export default router;