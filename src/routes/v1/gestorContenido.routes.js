import { Router } from 'express';
const router = Router();

import { controllerGestorContenido } from '../../app/controllers/v1/gestor-contenido.controller';

router.get('', controllerGestorContenido)

export default router;