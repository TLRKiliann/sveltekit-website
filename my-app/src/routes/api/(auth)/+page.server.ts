import type { Actions } from './$types';
import { DB_USER, DB_PASSWORD } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  login: async ({ cookies, request, url }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');
    if (username !== DB_USER || password !== DB_PASSWORD) {
      return fail(400, {
        username,
        message: "Password or Username not correct !"
      })
    }
    cookies.set('username', username, {path: '/'});
    throw redirect(303, url.searchParams.get('redirectTo') || '/');
  },
  register: async ({ cookies, request, url }) => {
    const data = await request.formData()
    const username = data.get('username');
    const password = data.get('password');
    if (!username || !password) {
      return fail(400, {
        username,
        message: "Missing password or username !"
      })
    }
    cookies.set('username', username, {path: '/'});
    throw redirect(303, url.searchParams.get('redirectTo') || '/');
  }
} satisfies Actions;

export const prerender = false;