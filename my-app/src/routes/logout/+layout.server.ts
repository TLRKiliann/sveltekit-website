import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit'

export const load = (async ({ cookies }) => {
  const deltastyCookie = await cookies.delete('username');
  if (deltastyCookie !== undefined) {
    throw error(404, {
      message: "Cookie not deleted !"
    })
  }
  const title = 'Logout';
  return {
    title
  };
}) satisfies PageServerLoad;
