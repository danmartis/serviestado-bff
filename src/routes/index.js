// Declara variables
import { Router } from "express";

const router = Router();

import v1 from "./v1";

export const base = "/bff/se-bff-empresas";

router.use("/v1", v1);

export default app => {
  app.use(base, router);
};
