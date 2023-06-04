import type { Actions } from './$types';
import { DB_USER, DB_PASSWORD } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  send: async ({ cookies, request }) => {
    const data = await request.formData();
    const title = data.get('title');
    const text = data.get('text');
    const cookie = cookies.get('username');
    if (cookie) {
      return ({
        message: "Message sent !"
      })
    } else {
      return ({
        message: "You are not logged in !"
      })
    }
  }
} satisfies Actions;

export const prerender = false;