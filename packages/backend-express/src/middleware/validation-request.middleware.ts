import { Request, Response, NextFunction } from 'express';

import { validate, personValidation } from '@gmahechas/common-lib';

export const validationRequestMiddleware = (req: Request, res: Response, next: NextFunction) => {

  const { body } = req;

  const { error } = validate(personValidation, body);
  if (error) {
    console.log('Error::', error.details);
    throw new Error('Validation Error');
  } else {
    console.log('OK:::', body)
    next();
  }

  
};