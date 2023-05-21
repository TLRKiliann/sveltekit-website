import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
  const tastyCookie = await cookies.get('username');
  const title = 'Home';
  return {
    title,
    tastyCookie
  };
}) satisfies PageServerLoad;

export const prerender = true;