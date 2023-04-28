import { ILogin } from "@/interfaces/ILogin";
import { verify, sign, JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { config } from "../../../config"

interface IToken {
  email: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse ): Promise<void>{
  const token = req.headers.authorization?.split(' ')[1];

  console.log('Authorization', token);
  if(!token) {
    res.status(401).json({ message: 'Authorization header not found' })
    return;
  }

  try {
    const decoded = verify(token, config.apiKey) as { email: string };
    const newToken = sign({ email: decoded.email }, config.apiKey, { expiresIn: '15m' })

    res.status(200).json({ token: newToken })
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' })
  }
}
