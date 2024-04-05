import jwt from 'jsonwebtoken';
import SvelteKitHandler_ from '@zenstackhq/server/sveltekit';
import { enhance } from '$zenstack/enhance';
import { default as modelMeta } from '$zenstack/model-meta';
import * as zodSchemas from '$zenstack/zod';
import type { RequestEvent } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { PrismaClient } from '@prisma-app/client';
import { JWT_TOKEN_COOKIE_NAME } from '$lib/auth';
import { env } from '$env/dynamic/private';
import type { Auth } from '@prisma-app/client';
import { dev } from '$app/environment';

const prismaRaw = new PrismaClient({});

const SvelteKitHandler: (typeof SvelteKitHandler_)['SvelteKitHandler'] =
  SvelteKitHandler_.SvelteKitHandler as any;

async function getSessionAuth(event: RequestEvent): Promise<Auth | undefined> {
  const token = event.cookies.get(JWT_TOKEN_COOKIE_NAME);
  event.locals.auth = undefined;
  if (!token) return undefined;
  try {
    const decoded = jwt.verify(token, env.JWT_SECRET);
    const user = await prismaRaw.auth.findUnique({
      where: { id: decoded.sub as string }
    });
    if (!user) throw new Error(`User not found: ${decoded.sub}`);
    event.locals.auth = user;
    return user;
  } catch {
    event.cookies.delete(JWT_TOKEN_COOKIE_NAME, { path: '/' });
    return undefined;
  }
}

export const handle = sequence(
  async function pre({ event, resolve }) {
    event.locals.auth = await getSessionAuth(event);
    event.locals.rawDb = prismaRaw; // for signup only
    event.locals.db = enhance(prismaRaw, { user: event.locals.auth });
    if (dev) {
      await event.locals.db.auth
        .create({
          data: { username: 'admin', password: 'admin' }
        })
        .catch(() => {});
    }
    return resolve(event);
  },
  SvelteKitHandler({
    prefix: '/api/model',
    getPrisma: (e) => e.locals.db,
    modelMeta: modelMeta as any,
    zodSchemas: { models: zodSchemas.models, input: zodSchemas.input }
  }),
  function hooks({ event, resolve }) {
    return resolve(event);
  }
);
