import { Router } from 'express';
import * as personController from '../controllers/person.controller';

const router = Router();

router.post('', personController.addPerson);

export { router as personRouter };