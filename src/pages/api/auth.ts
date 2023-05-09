import jwt from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { config } from '../../../config';

interface CustomNextApiRequest extends NextApiRequest {
  user?: { email: string }
}

export const verifyToken = (handler: NextApiHandler) => async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, config.apiKey) as { email: string };
      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  } else {
    return res.status(401).json({ message: 'Token not found' });
  }
};
