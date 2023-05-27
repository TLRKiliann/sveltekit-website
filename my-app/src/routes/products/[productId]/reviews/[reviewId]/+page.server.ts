import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit'

export const load = (async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { reviewId } = params;
	if (reviewId > 3) {
		throw error(404, {
			message: "No more reviews...",
			hint: "Please, choose another one."
		})
	}
	const response = await fetch(`http://localhost:4000/reviews/${reviewId}`);
	const review = await response.json();
	return {
		review
	}
}) satisfies PageServerLoad;