import { createToken, JWT_TOKEN_COOKIE_NAME } from '$lib/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { isPrismaClientKnownRequestError, enhance } from '@zenstackhq/runtime';

export const actions = {
  default: async ({ request, cookies, locals: { db } }) => {
    const data = await request.formData();
    const username = `${data.get('username')}`;
    const password = `${data.get('password')}`;

    try {
      // create the user together with a default space
      const user = await db.auth.create({
        data: {
          username,
          password
        }
      });

      // sign a JWT token and set it as a cookie
      const token = createToken(user);
      cookies.set(JWT_TOKEN_COOKIE_NAME, token, {
        httpOnly: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        path: '/'
      });
    } catch (err) {
      if (isPrismaClientKnownRequestError(err) && err.code === 'P2002') {
        // duplicated username
        return fail(400, { username, password, dup: true });
      } else {
        throw err;
      }
    }

    throw redirect(303, `/`);
  }
} satisfies Actions;
