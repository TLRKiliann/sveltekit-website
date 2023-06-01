import type { PageServerLoad } from './$types';

export const load = (async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { newElemId, reviewId } = params;
	const arraySlug = params.slug.split("/");
	const firstSlug = arraySlug[0];
	const secondSlug = arraySlug[1];
	const title = 'Slug';
	const response = await fetch(`http://localhost:4000/news/${firstSlug}`);
	const response_2 = await fetch(`http://localhost:4000/features/${secondSlug}`);
	const newElem = await response.json();
	const feature = await response_2.json();
	return {
		newElem,
		feature,
		title
	}
}) satisfies PageServerLoad;
