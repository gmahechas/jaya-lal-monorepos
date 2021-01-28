import { Request, Response } from 'express';

import { IPerson } from '@gmahechas/common-lib';

export const addPerson = (req: Request, res: Response) => {

  const { body } = req;
  const person: IPerson = {
    firstName: 'Jaya',
    lastName: 'Company',
    email: 'jaya@jaya.com'
  };

  res.status(200).send(body)
};