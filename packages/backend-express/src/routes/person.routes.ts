import { Router } from 'express';
import * as personController from '../controllers/person.controller';

import { validationRequestMiddleware } from '../middleware/validation-request.middleware';

const router = Router();

router.post('', validationRequestMiddleware, personController.addPerson);

export { router as personRouter };