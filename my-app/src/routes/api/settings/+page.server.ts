import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { DB_PASSWORD } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const actions = {
	register: async ({ cookies, request, url }) => {
		const data = await request.formData()
		const username = data.get('username');
		const lastname = data.get('lastname');
		const password = data.get('password');
		const phone = data.get('phone');
		const address = data.get('address');
		const email = data.get('email');
		cookies.set('username', username, {path: '/'});
		throw redirect(303, url.searchParams.get('redirectTo') || '/');
	}
} satisfies Actions;

export const prerender = false;

export const load = (async (serverLoadEvent) => {
	const { fetch } = serverLoadEvent;
	const password = DB_PASSWORD;
	const response = await fetch('http://localhost:4000/profile');
	const profileData = await response.json();
	return {
		profileData,
		password
	};
}) satisfies PageServerLoad;