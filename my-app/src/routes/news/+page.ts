import type { PageLoad } from "./$types";

export const load = (async (loadEvent) => {
	const { fetch } = loadEvent;
	const response = await fetch('/api/news');
	const news = await response.json();
	return { news };
}) satisfies PageLoad;
