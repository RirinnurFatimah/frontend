const NutriTrackModel = {
  async getRecommendation(foodName) {
    try {
      const response = await fetch("http://localhost:5000/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ food_name: foodName })  
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Gagal mendapatkan rekomendasi");
      }

      const result = await response.json();

      if (result.status !== "success") {
        throw new Error(result.message || "Response tidak valid dari server");
      }

      return result;  
    } catch (error) {
      console.error("Error saat mengambil data rekomendasi:", error.message);
      return null;
    }
  }
};

export default NutriTrackModel;
