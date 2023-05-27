export const load = async (loadEvent) => {
  const { fetch, params } = loadEvent;
  const { productId } = params;
  const response = await fetch(`http://localhost:4000/reviews`);
  const reviews = await response.json();
  return {
    reviews
  }
}