import { json } from '@sveltejs/kit';

export async function GET() {
	const response = await fetch('http://localhost:4000/news');
	const news = await response.json();
	return json(news);
};