const NutriTrackModel = {
  async getRecommendation(inputFoodData) {
    const response = await fetch("https://web-production-165e2.up.railway.app/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputFoodData),
    });

    if (!response.ok) {
      throw new Error("Gagal mengambil data dari server");
    }

    return await response.json();
  },
};

export default NutriTrackModel;
