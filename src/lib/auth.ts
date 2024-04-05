import { env } from '$env/dynamic/private';
import type { Auth } from '@prisma-app/client';
import jwt from 'jsonwebtoken';

export const JWT_TOKEN_COOKIE_NAME = 'Gimbocha-Token';

export function createToken(user: Auth) {
  return jwt.sign({ sub: user.id }, env.JWT_SECRET, { expiresIn: '7d' });
}
