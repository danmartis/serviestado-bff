import { Router } from 'express';
const router = Router();

import * as controllerContent from '../../app/controllers/v1/content-manager.controller';

router.get('/landing', controllerContent.controllerLandingContent);
router.get('/questions', controllerContent.controllerQuestionsContent);
router.get('/question-details', controllerContent.controllerQuestionDetailsContent);
router.get('/videos', controllerContent.controllerVideosContent);

router.get('/CF/landing', controllerContent.controllerLandingCF);

export default router;