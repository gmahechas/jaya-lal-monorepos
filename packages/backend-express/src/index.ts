import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import routes from './routes';

const app = express();
app.use(json());

app.use('/_rest', routes);

const start = async () => {
  app.listen(3000, () => console.log('Listening on port 3000'));
};

start();