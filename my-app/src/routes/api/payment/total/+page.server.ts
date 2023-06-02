export const load = async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	console.log(params, 'params');
	const { payment } = params;
	return {
		payment
	};
};