import { redirect } from '@sveltejs/kit';

export const prerender = false;
export const ssr = true;
export const csr = true;

export const load = ({ locals, url }) => {
  if (!locals.auth) {
    if (url.pathname !== '/signin' && url.pathname !== '/signup') {
      redirect(302, '/signin');
    }
  }
  return {
    auth: locals.auth
  };
};
