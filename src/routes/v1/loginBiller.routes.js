import { Router } from 'express';

const router = Router();

import * as loginBillerController from '../../app/controllers/v1/login-biller.controller';

router.post('', loginBillerController.loginBiller);

export default router;