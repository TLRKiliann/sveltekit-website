import type { PageLoad } from "./$types";

export const load = (async (loadEvent) => {
	const { fetch, params } = loadEvent;
	const {memberId} = params
	const response = await fetch(`http://localhost:4000/members/${memberId}`);
	const member = await response.json();
	return {
		member
	};
}) satisfies PageLoad;