// Imports
import { sign } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next';
import { config } from "../../../config"
import { IUserInfo } from '@/interfaces/IUserInfo';

const users: IUserInfo[] = [
  {
    name: 'Teste',
    email: 'teste@teste.com',
    password: '123'
  },
  {
    name: 'Caleb da Silva Buffleben',
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
      const refreshToken = sign({ email }, config.apiKey, { expiresIn: '15m' })
      const { password, ...dataUser } = user;

      res.status(200).json({token, refreshToken, dataUser})
    } else {
      res.status(401).json({ message: 'Invalid credentials1' });
    }
  } else {
    res.status(401).json({ message: 'Invalid credentials2' });
  }
}
