import { Request, Response } from 'express';

export const addPerson = (req: Request, res: Response) => {

  res.status(200).send('add person')
};