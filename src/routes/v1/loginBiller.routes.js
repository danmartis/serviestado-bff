import { Router } from 'express';
import {
  loginBiller,
  changePasswordBiller,
  recoverPassword
} from "../../app/controllers/v1/login-biller.controller";

const router = Router();

router.post('', loginBiller);
router.put('/change-password', changePasswordBiller);
router.post('/recover-password', recoverPassword);

export default router;