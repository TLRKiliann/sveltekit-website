export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const response = await fetch('http://localhost:4000/members');
	const members = await response.json();
	return {
		members
	}
};