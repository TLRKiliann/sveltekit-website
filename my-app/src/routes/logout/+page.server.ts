import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit'

export const load = (async ({ cookies }) => {
  const tastyCookie = await cookies.delete('username');
  console.log(tastyCookie)
  if (tastyCookie !== undefined) {
    throw error(404, {
      message: "Cookie not deleted !"
    })
  }
}) satisfies PageServerLoad;
