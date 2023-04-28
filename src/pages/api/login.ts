// Imports
import { sign } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next';
import { config } from "../../../config"
import { ILogin } from '@/interfaces/ILogin';

const users: ILogin[] = [
  {
    email: 'teste@teste.com',
    password: '123'
  },
  {
    email: 'caleb@teste.com',
    password: '12345'
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse):Promise<void> {
  const { email, password} = req.body;

  const user = users.find((u) => u.email === email);

  if(user){
    const isMach = user.password === password && true

    if(isMach){
      const token = sign({ email }, config.apiKey, { expiresIn: '15m' })

      res.status(200).json({token})
    } else {
      res.status(401).json({ message: 'Invalid credentials1' });
    }
  } else {
    res.status(401).json({ message: 'Invalid credentials2' });
  }
}
