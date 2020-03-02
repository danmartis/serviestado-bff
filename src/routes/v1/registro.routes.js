import express from 'express';

import { registroBiller } from '../../app/controllers/v1/registro.controller';

const router = express.Router();

router.post('', registroBiller);

export default router;