import { error } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
	const { request, params } = serverLoadEvent; 
	const { memberId } = params;
	if (memberId > 3) {
		throw error(404, {
			message: "Member not found !",
			hint: "Search another one"
		})
	}
	const response = await fetch(`http://localhost:4000/members/${memberId}`);
	const member = await response.json();
	return {
		member
	}
}