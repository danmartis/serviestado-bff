// Declara variables
import { Router } from "express";
const router = Router();

import contentRoutes from "./content-manager.routes";
import healthcheckRoutes from "./healthcheck.routes";
import registroBillerRoutes from "./registro.routes";
import loginBillerRoutes from "./loginBiller.routes";
import maintainerUser from "./maintainer-user.routes";

router.use("/gestor-contenido", contentRoutes);
router.use("/healthcheck", healthcheckRoutes);
router.use("/registro-biller", registroBillerRoutes);
router.use("/login", loginBillerRoutes);
router.use("/maintainerUser", maintainerUser);

export default router;