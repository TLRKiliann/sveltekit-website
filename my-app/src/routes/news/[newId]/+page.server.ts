import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { newId } = params;
	if (newId > 3) {
		throw error(404, {
			message: "Sorry, this news was not found !",
			hint: "Choose another news"
		})
	}
	const response = await fetch(`http://localhost:4000/news/${newId}`);
	const newElement = await response.json();
	return {
		newElement
	} 
}) satisfies PageServerLoad;

export const ssr = true;
export const csr = false;