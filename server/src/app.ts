import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { pool } from './db';
import { RowDataPacket } from 'mysql2';

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
  try {
    pool.query('INSERT INTO registers (email) VALUES (?)', [email]);
    res.status(200).send({ message: 'Correo registrado correctamente.' });
  } catch (error) {
    res.status(500).send({ error, message: 'Error al registrar el correo.' });
  }
});

interface Register extends RowDataPacket {
  id: number;
  email: string;
  created_at: Date;
}

app.get('/registers', async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query<Register[]>('SELECT * FROM registers');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({ error, message: 'Error al obtener los registros.' });
  }
});

app.listen(PORT, () => {});
