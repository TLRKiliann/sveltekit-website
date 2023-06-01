import { json } from '@sveltejs/kit';

export async function GET(requestEvent) {
	const { params } = requestEvent;
	const { newId } = params;
	const response = await fetch(`http://localhost:4000/news`);
	const news = await response.json();
	const newArticle = news.find((newArticle) => newArticle.id === parseInt(newId));
	return json(newArticle);
};
