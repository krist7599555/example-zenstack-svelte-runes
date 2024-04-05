import { Prisma } from '@prisma-app/client';
import { JWT_TOKEN_COOKIE_NAME, createToken } from '$lib/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';

export const actions = {
  default: async ({ request, cookies, locals: { rawDb: db } }) => {
    const data = await request.formData();
    const username = `${data.get('username')}`;
    const password = `${data.get('password')}`;
    console.log({
      username,
      password
    });

    if (typeof username !== 'string' || typeof password !== 'string') {
      return fail(400, { username, password, missing: true });
    }

    const user = await db.auth.findFirst({
      where: { username },
      select: { password: true, id: true, username: true, role: true }
    });
    console.log({ user });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return fail(401, { username, password, invalid: true });
    }

    const token = createToken(user);
    cookies.set(JWT_TOKEN_COOKIE_NAME, token, {
      httpOnly: true,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      path: '/'
    });
    throw redirect(303, `/`);
  }
} satisfies Actions;
