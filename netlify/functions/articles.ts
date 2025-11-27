import { Handler } from '@netlify/functions';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production';

// In production, this would connect to a database
// For now, we'll use a simple in-memory store (not persistent)
let articles: any[] = [];

export const handler: Handler = async (event) => {
  // Verify authentication
  const token = event.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Not authenticated' }),
    };
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userRole = decoded.role;

    // Only editors and board members can manage articles
    if (userRole !== 'editor' && userRole !== 'board') {
      return {
        statusCode: 403,
        body: JSON.stringify({ error: 'Forbidden' }),
      };
    }

    if (event.httpMethod === 'GET') {
      return {
        statusCode: 200,
        body: JSON.stringify(articles),
      };
    }

    if (event.httpMethod === 'POST') {
      const article = JSON.parse(event.body || '{}');
      const newArticle = {
        id: Date.now().toString(),
        ...article,
        publishedAt: new Date().toISOString(),
      };
      articles.push(newArticle);
      return {
        statusCode: 201,
        body: JSON.stringify(newArticle),
      };
    }

    if (event.httpMethod === 'PUT') {
      const article = JSON.parse(event.body || '{}');
      const index = articles.findIndex(a => a.id === article.id);
      if (index === -1) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'Article not found' }),
        };
      }
      articles[index] = { ...articles[index], ...article, updatedAt: new Date().toISOString() };
      return {
        statusCode: 200,
        body: JSON.stringify(articles[index]),
      };
    }

    if (event.httpMethod === 'DELETE') {
      const { id } = JSON.parse(event.body || '{}');
      const index = articles.findIndex(a => a.id === id);
      if (index === -1) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'Article not found' }),
        };
      }
      articles.splice(index, 1);
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    }

    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  } catch (error) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Invalid token' }),
    };
  }
};

