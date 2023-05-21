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
			name: "Nivadia Lorento",
			age: 39,
			status: "web dev"
		},
		{
			id: 2,
			name: "Brie Olsen",
			age: 28,
			status: "engeneer"
		},
		{
			id: 3,
			name: "Clark Kent",
			age: 33,
			status: "designer"
		}
	];
	return { members }
};