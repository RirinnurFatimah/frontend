import { fetchNutritionData } from "../models/scannerModel";

export const getProductDetails = async (barcode, setProductDetails, setWarning, checks) => {
  const data = await fetchNutritionData(barcode);

  if (!data || data.status !== 1 || !data.product) {
    setProductDetails("❌ Produk tidak ditemukan.");
    return;
  }

  const p = data.product;
  const n = p.nutriments || {};

  let warning = "";

  if (checks.sugar && parseFloat(n.sugars_100g) > 10) {
    warning += "⚠️ Gula terlalu tinggi!\n";
  }
  if (checks.fat && parseFloat(n.fat_100g) > 17.5) {
    warning += "⚠️ Lemak terlalu tinggi!\n";
  }
  if (checks.carbs && parseFloat(n.carbohydrates_100g) > 50) {
    warning += "⚠️ Karbohidrat tinggi!\n";
  }

  const details = `
Detail Produk:
Nama: ${p.product_name || "Tidak tersedia"}

Brand: ${p.brands || "Tidak tersedia"}

Komposisi: ${p.ingredients_text || "Tidak tersedia"}

Kalori: ${n['energy-kcal_100g'] || "Tidak tersedia"} kkal

Asal: ${(p.origins_tags?.[0] || p.countries_tags?.[0] || "Tidak tersedia").replace('en:', '')}

Informasi Nutrisi per 100g/ml:
Lemak Total : ${n.fat_100g ?? "Tidak tersedia"} g
Lemak Jenuh : ${n['saturated-fat_100g'] ?? "Tidak tersedia"} g
Karbohidrat : ${n.carbohydrates_100g ?? "Tidak tersedia"} g
Gula        : ${n.sugars_100g ?? "Tidak tersedia"} g
Serat       : ${n.fiber_100g ?? "Tidak tersedia"} g
Protein     : ${n.proteins_100g ?? "Tidak tersedia"} g
Garam       : ${n.salt_100g ?? "Tidak tersedia"} g
Sodium      : ${n.sodium_100g ?? "Tidak tersedia"} g
`;

  setProductDetails(details.trim());
  setWarning(warning || "✅ Kandungan masih dalam batas aman.");
};

