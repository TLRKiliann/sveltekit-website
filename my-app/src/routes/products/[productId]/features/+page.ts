import type { PageLoad } from "./$types";

export const load = (async (loadEvent) => {
  const { fetch, params } = loadEvent;
  const { productId } = params;
  const response = await fetch(`http://localhost:4000/products/${productId}`);
  const product = await response.json();
  const response_2 = await fetch(`http://localhost:4000/features`);
  const features = await response_2.json();
  return {
    product,
    features
  }
}) satisfies PageLoad;