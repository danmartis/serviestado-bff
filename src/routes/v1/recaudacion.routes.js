import express from 'express';

import * as recaudacionController  from '../../app/controllers/v1/recaudacion.controller';

const router = express.Router();

router.get('/:idConvenio', recaudacionController.getRecaudacionByConvenioController );

export default router;