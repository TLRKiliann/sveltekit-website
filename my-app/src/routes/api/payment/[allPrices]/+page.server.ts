import { DB_PASSWORD } from '$env/static/private';

export const load = async ( serverLoadEvent ) => {
  const { params, fetch } = serverLoadEvent;
  const { allPrices } = params;
  const password = DB_PASSWORD;
  const response = await fetch('http://localhost:4000/profile');
  const profileData = await response.json();
  return {
    allPrices,
    profileData,
    password
  };
};
