import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken } from './auth';

const protectedHandler = (req: NextApiRequest, res: NextApiResponse) => {
  // Your protected route logic here
  res.status(200).json({ message: 'Protected route accessed successfully' });
};

export default verifyToken(protectedHandler);
