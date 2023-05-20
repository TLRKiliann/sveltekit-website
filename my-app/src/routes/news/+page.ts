export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const response = await fetch('http://localhost:4000/news');
	const news = await response.json();
	return { news };
};

export const prerender = true;
export const ssr = true;
export const csr = false;