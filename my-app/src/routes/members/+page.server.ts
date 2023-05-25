import { redirect } from '@sveltejs/kit';
import {MY_SECRET_KEY} from '$lib/server/+page.server.ts'

export const load = ({ cookies, url }) => {
	if (!cookies.get('username')) {
		throw redirect(307, `/api/auth?redirectTo=${url.pathname}`)
	}
	console.log(MY_SECRET_KEY);
	const members = [
		{
			id: 1,
			name: "Nivadia Lorento",
			age: 39,
			status: "web dev",
			email: "nivadia@mail.com"
		},
		{
			id: 2,
			name: "Brie Olsen",
			age: 28,
			status: "engeneer",
			email: "bo@mail.uk"
		},
		{
			id: 3,
			name: "Clark Kent",
			age: 33,
			status: "designer",
			email: "ck@mail.info"
		}
	]
	return { members }
};

export const csr = true;