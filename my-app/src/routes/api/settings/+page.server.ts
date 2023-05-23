import { DB_USER, DB_PASSWORD } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const actions = {
	register: async ({ cookies, request, url }) => {
		const data = await request.formData()
		const username = data.get('username');
		const password = data.get('password');

		cookies.set('username', username, {path: '/'});
		throw redirect(303, url.searchParams.get('redirectTo') || '/');
	}
}

export const prerender = false;