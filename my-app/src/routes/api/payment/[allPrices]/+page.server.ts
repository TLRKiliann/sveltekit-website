import { DB_PASSWORD } from '$env/static/private';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ( serverLoadEvent ) => {
  const { params, fetch, cookies } = serverLoadEvent;
  const { allPrices } = params;
  const tastyCookie = cookies.get('username');
  console.log(tastyCookie)
  if (tastyCookie === undefined) {
    throw error(404, {
      message: "You're not logged in !",
      hint: "Login before"
    })
  }
  const password = DB_PASSWORD;
  const response = await fetch('http://localhost:4000/profile');
  const profileData = await response.json();
  return {
    allPrices,
    profileData,
    password
  };
}) satisfies PageServerLoad;