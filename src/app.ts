import express, { Request, Response } from 'express';
import cors from 'cors';
import config from './config';

const app = express();

const {cors_origin} = config;
if(!!cors_origin)
app.use(
  cors({
    // origin is given a array if we want to have multiple origins later
    origin: [cors_origin],
    credentials: true,
  })
);

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;