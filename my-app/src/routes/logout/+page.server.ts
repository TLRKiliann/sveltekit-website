import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ cookies, url }) => {
  const tastyCookie = await cookies.get('username');
  if (tastyCookie) {
    throw redirect(307, `/api/logout?redirectTo=${url.pathname}`)
  };
}) satisfies PageLoad;