import { Handler } from '@netlify/functions';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production';

export const handler: Handler = async (event) => {
  const token = event.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'No token provided' }),
    };
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const user = {
      id: decoded.id || decoded.email,
      email: decoded.email,
      role: decoded.role,
      name: decoded.name,
    };
    return {
      statusCode: 200,
      body: JSON.stringify({ user }),
    };
  } catch (error) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Invalid token' }),
    };
  }
};
