import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
  const tastyCookie = await cookies.get('username');
  const title = 'Micro-Proc';
  return {
    title,
    tastyCookie
  };
}) satisfies PageServerLoad;

export const prerender = false;