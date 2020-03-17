// Declara variables
import { Router } from 'express';
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const swaggerDocument = YAML.load('./swagger-docs.yaml');
const router = Router();

import v1 from "./v1";

const base = "/bff/se-bff-empresas";

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/v1', v1);

export default app => {
    app.use(base, router);
};