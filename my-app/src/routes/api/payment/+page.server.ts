export const load = async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	console.log(params, 'params');
	const { total } = params;
	const response = fetch(`http://localhost:4000/payment/${total}`)
	return {
		total
	};
};