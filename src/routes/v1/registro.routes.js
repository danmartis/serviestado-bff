import express from 'express';

import * as registroBillerController  from '../../app/controllers/v1/registro.controller';

const router = express.Router();

router.post('', registroBillerController.registroBiller);
router.get('/:id', registroBillerController.getBiller);

export default router;