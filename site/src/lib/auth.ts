import jwt from 'jsonwebtoken';

export interface User {
  id: string;
  email: string;
  role: 'editor' | 'board' | 'member';
  name?: string;
}

const JWT_SECRET = import.meta.env.JWT_SECRET || 'dev-secret-change-in-production';

export function generateToken(user: User): string {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyToken(token: string): User | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    return {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
      name: decoded.name,
    };
  } catch (error) {
    return null;
  }
}

export function isBoardMember(email: string): boolean {
  return email.endsWith('@germantownsymphony.org');
}

export function isEditor(email: string): boolean {
  // Editors can be added via admin panel
  // For now, we'll check against a list or database
  return false;
}

