import { redirect } from '@sveltejs/kit';

export const load = ({ cookies, url }) => {
	if (!cookies.get('username')) {
		throw redirect(307, `/api/auth?redirectTo=${url.pathname}`)
	}
	const APIKey = "APIZUTRE777";
	console.log(APIKey);
	const members = [
		{
			id: 1,
			name: "Alice Pays",
			age: 39,
			status: "web dev"
		},
		{
			id: 2,
			name: "Stephany Lindel",
			age: 28,
			status: "engeneer"
		},
		{
			id: 3,
			name: "Esteban Dualo",
			age: 33,
			status: "designer"
		}
	];
	return { members }
};