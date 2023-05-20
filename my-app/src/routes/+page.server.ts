import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
  const tastyCookie = cookies.get('username');
  if (!tastyCookie) {
    throw error(404, {
      message: "cookies doesn't exist"
    })
  }
  return {
    tastyCookie
  };
}) satisfies PageServerLoad;

export const ssr = true;
export const csr = false;