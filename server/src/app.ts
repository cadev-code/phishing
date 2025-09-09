import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { pool } from './db';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

const validateRegisterInput = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (
    !req.body.email ||
    typeof req.body.email !== 'string' ||
    !req.body.email.includes('@')
  ) {
    res.status(400).send({ error: 'Correo electrónico invalido.' });
    return;
  }
  next();
};

app.post('/register', validateRegisterInput, (req: Request, res: Response) => {
  const { email } = req.body;
  pool.query('INSERT INTO registers (email) VALUES (?)', [email]);
  res.status(200).send({ message: 'Correo registrado correctamente.' });
});

app.listen(PORT, () => {});
