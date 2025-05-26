export const fetchNutritionData = async (barcode) => {
  try {
    const res = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
    const data = await res.json();
    return data?.product || null;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};
