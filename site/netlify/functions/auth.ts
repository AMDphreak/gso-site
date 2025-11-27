import { Handler } from '@netlify/functions';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production';
const MEMBERS_PASSWORD = process.env.MEMBERS_PASSWORD || 'default-password';

function isBoardMember(email: string): boolean {
  return email.endsWith('@germantownsymphony.org');
}

interface LoginRequest {
  email?: string;
  password?: string;
  type: 'member' | 'editor' | 'board';
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const body: LoginRequest = JSON.parse(event.body || '{}');

    // Member login (shared password)
    if (body.type === 'member') {
      if (body.password === MEMBERS_PASSWORD) {
        const token = jwt.sign(
          { role: 'member', type: 'member' },
          JWT_SECRET,
          { expiresIn: '30d' }
        );
        return {
          statusCode: 200,
          body: JSON.stringify({ token, role: 'member' }),
        };
      }
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Invalid password' }),
      };
    }

    // Editor login
    if (body.type === 'editor') {
      // In production, check against database
      // For now, accept any email/password combination
      if (body.email && body.password) {
        const token = jwt.sign(
          { email: body.email, role: 'editor', type: 'editor' },
          JWT_SECRET,
          { expiresIn: '7d' }
        );
        return {
          statusCode: 200,
          body: JSON.stringify({ token, role: 'editor', email: body.email }),
        };
      }
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Email and password required' }),
      };
    }

    // Board member login (Google Workspace email verification)
    if (body.type === 'board') {
      if (!body.email) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Email required' }),
        };
      }

      if (!isBoardMember(body.email)) {
        return {
          statusCode: 403,
          body: JSON.stringify({ 
            error: 'Only @germantownsymphony.org email addresses are allowed' 
          }),
        };
      }

      // In production, verify with Google OAuth
      // For now, just check the domain
      const token = jwt.sign(
        { email: body.email, role: 'board', type: 'board' },
        JWT_SECRET,
        { expiresIn: '7d' }
      );
      return {
        statusCode: 200,
        body: JSON.stringify({ token, role: 'board', email: body.email }),
      };
    }

    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid login type' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

