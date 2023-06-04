import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import {MY_SECRET_KEY} from '$lib/server/+page.server.ts'

export const load = (async ({ cookies, url }) => {
	if (!cookies.get('username')) {
		throw redirect(307, `/api/?redirectTo=${url.pathname}`)
	}
	console.log(MY_SECRET_KEY);
	const response = await fetch('http://localhost:4000/members');
	const members = await response.json();
	return { members }
}) satisfies PageServerLoad;

export const csr = true;