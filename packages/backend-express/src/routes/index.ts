import { Router } from 'express';
import { personRouter } from './person.routes';

const router = Router();

export default [
  router.use('/person', personRouter)
];