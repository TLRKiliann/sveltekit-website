import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
  const tastyCookie = cookies.get('username');

  return {
    tastyCookie
  };
}) satisfies PageServerLoad;