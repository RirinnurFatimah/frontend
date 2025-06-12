import NutriTrackModel from "../models/nutritrackModel";

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

      if (message.includes("Apakah maksud Anda")) {
        const suggestionMatch = message.match(/\[(.*?)\]/);
        if (suggestionMatch) {
          const suggestionList = suggestionMatch[1]
            .split(",")
            .map((s) => s.trim().replace(/^'|'$/g, "")); 

          setRecommendations(suggestionList.map((name) => ({ name, isSuggestion: true })));
          setInputFood(null);
          return; 
        }
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  },

  handleSeeMore(navigate, food) {
    navigate("/nutripages", { state: { food } });
  },
};

export default NutriTrackPresenter;
