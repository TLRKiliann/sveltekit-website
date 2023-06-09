import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { newId } = params;
	if (newId > 3) {
		throw error(404, {
			message: "Sorry, this article was not found !",
			hint: "Choose another news"
		})
	}
	const response = await fetch(`/api/news/${newId}`);
	const newArticle = await response.json();
	return {
		newArticle
	} 
}) satisfies PageServerLoad;
