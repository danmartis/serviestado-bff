import express from 'express';

import * as maintainerUserController  from '../../app/controllers/v1/maintainer-user.controller';

const router = express.Router();

router.post('/registerNewUser', maintainerUserController.RegisterNewUser);

export default router;