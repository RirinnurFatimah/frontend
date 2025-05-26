import { fetchNutritionData } from "../models/scannerModel";

export const getProductDetails = async (barcode, setNutritionData, setWarning, checks) => {
  const data = await fetchNutritionData(barcode);

  if (!data) {
    setNutritionData("Produk tidak ditemukan.");
    return;
  }

  let warning = "";

  const nutriments = data.nutriments;

  if (checks.sugar && parseFloat(nutriments.sugars_100g) > 10) {
    warning += "⚠️ Gula terlalu tinggi!\n";
  }
  if (checks.fat && parseFloat(nutriments.fat_100g) > 17.5) {
    warning += "⚠️ Lemak terlalu tinggi!\n";
  }
  if (checks.carbs && parseFloat(nutriments.carbohydrates_100g) > 50) {
    warning += "⚠️ Karbohidrat tinggi!\n";
  }

  const details = `
Nama: ${data.product_name || "N/A"}
Merek: ${data.brands || "N/A"}
Energi: ${nutriments.energy_100g || "N/A"} kJ
Gula: ${nutriments.sugars_100g || "N/A"} g
Lemak: ${nutriments.fat_100g || "N/A"} g
Karbohidrat: ${nutriments.carbohydrates_100g || "N/A"} g
Protein: ${nutriments.proteins_100g || "N/A"} g
Serat: ${nutriments.fiber_100g || "N/A"} g
  `;

  setNutritionData(details);
  setWarning(warning || "✅ Kandungan masih dalam batas aman.");
};
