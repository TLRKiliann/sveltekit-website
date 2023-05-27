export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const response = await fetch(`http://localhost:4000/news`)
	const response_2 = await fetch(`http://localhost:4000/reviews`)
	const news = await response.json();
	const reviews = await response_2.json();
	return {
		news,
		reviews
	};
};