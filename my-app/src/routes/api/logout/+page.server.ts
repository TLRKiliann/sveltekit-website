import type { Actions } from './$types';
import { DB_USER, DB_PASSWORD } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  logout: async ({ request, cookies, url }) => {
    const data = await request.formData()
    //const username = data.get('username');
    //const password = data.get('password');
    /*if (username !== DB_USER || password !== DB_PASSWORD) {
      return fail(400, {
        username,
        message: "Password or Username not correct !"
      })
    }*/
    cookies.delete('username', { path: '/' });
    throw redirect(303, url.searchParams.get('redirectTo') || '/');
  }
} satisfies Actions;

export const prerender = false;