import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ cookies, request, url }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		if (!username || !password) {
			return fail(400, {
				username,
				message: "L: Missing password or username !"
			})
		}
		cookies.set('username', username, {path: '/'});
		throw redirect(303, url.searchParams.get('redirectTo') || '/');
	},
	register: async ({ cookies, request, url }) => {
		const data = await request.formData()
		const username = data.get('username');
		const password = data.get('password');
		if (!username || !password) {
			return fail(400, {
				username,
				message: "R: Missing password or username !"
			})
		}
		cookies.set('username', username, {path: '/'});
		throw redirect(303, url.searchParams.get('redirectTo') || '/');
	}
} satisfies Actions;
