import { JWT_TOKEN_COOKIE_NAME } from '$lib/auth';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = async ({ cookies }) => {
  cookies.delete(JWT_TOKEN_COOKIE_NAME, { path: '/' });
};
