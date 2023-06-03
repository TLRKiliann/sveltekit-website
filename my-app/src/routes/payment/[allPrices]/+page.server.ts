export const load = async ( serverLoadEvent ) => {
  const { params } = serverLoadEvent;
  const { allPrices } = params;
  return {
    allPrices
  };
};