import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
  logout: async ({ cookies, url }) => {
    cookies.delete('username', { path: '/' });
    throw redirect(303, url.searchParams.get('redirectTo') || '/');
  }
} satisfies Actions;

export const prerender = false;