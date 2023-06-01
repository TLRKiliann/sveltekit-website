import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit'

export const load = (async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { featureId, productId } = params;
	if (featureId > 3) {
		throw error(404, {
			message: "No more features...",
			hint: "Please, choose another one."
		})
	}
	const response = await fetch(`http://localhost:4000/features/${featureId}`);
	const feature = await response.json();
	const response_2 = await fetch(`http://localhost:4000/products/${productId}`);
	const product = await response_2.json();
	return {
		feature,
		product
	}
}) satisfies PageServerLoad;