// Declara variables
import { Router } from 'express';
const router = Router();

import v1 from "./v1";

const base = process.env.NODE_ENV || "/bff/se-bff-empresas";

router.use('/v1', v1);

export default app => {
  app.use(base, router);
};
