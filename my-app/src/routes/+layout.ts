import { error } from '@sveltejs/kit';

export const load = () => {
	//const visitor = cookies.get('username');
	//console.log(visitor)
	const title = "Home";
	//if (!visitor) {
	//	throw error(404, {
	//)		message: "cookies doesn't exist"
	//	})
	//}
	return {
		//visitor,
		title 
	}
};