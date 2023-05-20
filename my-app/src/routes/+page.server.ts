import type { PageServerLoad } from './$types';
//import { error } from '@sveltejs/kit'

export const load = (async ({ cookies }) => {
  const tastyCookie = cookies.get('username');
  const title = 'Home';
  return {
    title,
    tastyCookie
  };
}) satisfies PageServerLoad;
