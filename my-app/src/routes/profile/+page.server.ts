import { redirect } from '@sveltejs/kit';

export const load = ({ cookies, url }) => {
	if (!cookies.get('username')) {
		throw redirect(307, `/api/auth?redirectTo=${url.pathname}`)
	}
	const profile = {
		name: "esteban",
		lastname: "catanea",
		phone: "777-77-77"
	}
	return { profile }
}