import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit'

export const load = (async ({ cookies }) => {
  const tastyCookie = await cookies.delete('username');
  if (tastyCookie !== undefined) {
    throw error(404, {
      message: "Cookie not deleted !"
    })
  }
  const title = 'Logout';
  return {
    title
  };
}) satisfies PageServerLoad;
