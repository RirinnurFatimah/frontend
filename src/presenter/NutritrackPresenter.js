import NutriTrackModel from "../models/nutritrackModel";
import NutriPagesModel from "../models/NutriPagesModel";

const NutriTrackPresenter = {
  async handleSearchFood(query, { setLoading, setError, setInputFood, setRecommendations }) {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setInputFood(null);
    setRecommendations([]);

    try {
      const result = await NutriTrackModel.getRecommendation(query.trim());

      setInputFood(result.input_food || null);
      setRecommendations(result.recommendations || []);
    } catch (err) {
      const message = err.message || "Terjadi kesalahan";
      setError(message);

      // 👇 Coba cari saran dalam bentuk array dari string
      const suggestionMatch = message.match(/\[(.*?)\]/); // cari array string dalam error
      if (suggestionMatch) {
        const suggestionList = suggestionMatch[1]
          .split(",")
          .map((s) => s.trim().replace(/^'|'$/g, "")); // bersihkan kutip

        // kirim suggestion ke UI sebagai object { name }
        setRecommendations(suggestionList.map((name) => ({ name })));
        setInputFood(null); // pastikan hanya suggestions yang muncul
      }
    } finally {
      setLoading(false);
    }
  },

  handleSeeMore(navigate, foodName, nutritionDetail) {
    NutriPagesModel.setFoodDetail(foodName, nutritionDetail);
    navigate("/nutritrack/detail");
  },
};

export default NutriTrackPresenter;
