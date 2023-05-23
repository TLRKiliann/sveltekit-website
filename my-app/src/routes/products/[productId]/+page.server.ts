import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit'

export const load = (async (serverLoadEvent) => {
	const { params, fetch } = serverLoadEvent;
	const { productId } = params;
	if (productId > 8) {
		throw error(404, {
			message: "Sorry, product not found !",
			hint: "Choose another product"
		})
	};
	const response = await fetch(`http://localhost:4000/products/${productId}`);
	const product = await response.json();
	return {
		product
	}
}) satisfies PageServerLoad;

export const ssr = true;