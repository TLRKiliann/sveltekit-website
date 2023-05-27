import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit'

export const load = (async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { reviewId, productId } = params;
	if (reviewId > 3) {
		throw error(404, {
			message: "No more reviews...",
			hint: "Please, choose another one."
		})
	}
	const response = await fetch(`http://localhost:4000/reviews/${reviewId}`);
	const review = await response.json();
	const response_2 = await fetch(`http://localhost:4000/products/${productId}`);
	const product = await response_2.json();
	return {
		review,
		product
	}
}) satisfies PageServerLoad;