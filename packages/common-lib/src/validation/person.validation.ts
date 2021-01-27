import { object, string } from 'joi';

export const personValidation = object().keys({
  firstName: string().min(2).max(30).required(),
  lastName: string().min(2).max(30).required()
});