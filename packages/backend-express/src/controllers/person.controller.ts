import { Request, Response } from 'express';

import { IPerson } from '@gmahechas/common-lib';

export const addPerson = (req: Request, res: Response) => {

  const person: IPerson = {
    firstName: 'Jaya',
    lastName: 'Company'
  };

  res.status(200).send('add person')
};