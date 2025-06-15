import jwt from 'jsonwebtoken';

const JWT_SECRET="supersecretkey123"
const JWT_EXPIRES_IN="7d";


const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, JWT_SECRET || '', {
    expiresIn: JWT_EXPIRES_IN || '7d',
  });
};

export default generateToken;
