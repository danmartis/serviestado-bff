import { Router } from 'express';
const router = Router();

import { healthcheck } from '../../app/controllers/v1/healthcheck.controller';

router.get('', healthcheck);

export default router;