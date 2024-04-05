import SvelteKitHandler_ from '@zenstackhq/server/sveltekit';
import { enhance } from '$zenstack/enhance';
import { default as modelMeta } from '$zenstack/model-meta';
import * as zodSchemas from '$zenstack/zod/index';
import type { RequestEvent } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { Prisma, PrismaClient } from '@prisma-app/client';

const prisma = new PrismaClient();

const SvelteKitHandler: (typeof SvelteKitHandler_)['SvelteKitHandler'] =
  SvelteKitHandler_.SvelteKitHandler as any;

function getSessionUser(event: RequestEvent) {
  return {
    id: 'anon'
  };
}

// create an enhanced Prisma client with user context
function getPrisma(event: RequestEvent) {
  // getSessionUser extracts the current session user from the request, its
  // implementation depends on your auth solution
  return enhance(prisma, { user: getSessionUser(event) });
}

console.log({ SvelteKitHandler: SvelteKitHandler });
// create the hooks handler with the `getPrisma` hook
export const handle = sequence(
  async function hooks({ event, resolve }) {
    await prisma.$connect();
    return resolve(event);
  },
  SvelteKitHandler({ prefix: '/api/model', getPrisma, modelMeta: modelMeta as any, zodSchemas }),
  function hooks({ event, resolve }) {
    return resolve(event);
  }
);
