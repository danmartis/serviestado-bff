import { Router } from 'express';
const router = Router();

import * as convenioController from '../../app/controllers/v1/convenios.controller';

router.get('/:rutBiller', convenioController.getConveniosByBillerController);
router.get('/recaudacion/:rutBiller', convenioController.getConveniosRecaudacionByBillerController)

export default router;