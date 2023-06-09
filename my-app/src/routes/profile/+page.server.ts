import { redirect } from '@sveltejs/kit';

export const load = ({ cookies, url }) => {
	if (!cookies.get('username')) {
		throw redirect(307, `/api/auth?redirectTo=${url.pathname}`)
	}
	const profile = {
		name: "Esteban",
		lastname: "Catanea",
		phone: "777-77-77",
		address: "23 St-James Bd.",
		email: "esteban@hotmail.uk"
	}
	return { profile }
}