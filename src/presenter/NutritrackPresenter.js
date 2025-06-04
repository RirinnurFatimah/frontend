import NutriTrackModel from "../models/nutritrackModel";
import NutriPagesModel from "../models/NutriPagesModel";

const NutriTrackPresenter = {
  async getFoodRecommendations(inputFoodData, setLoading, setRecommendations) {
    console.log("Presenter dipanggil dengan:", inputFoodData);

    setLoading(true);

    const recommendations = await NutriTrackModel.getRecommendation(inputFoodData);

    console.log("Rekomendasi diterima:", recommendations);

    setRecommendations(recommendations);
    setLoading(false);
  },

  handleSeeMore(navigate, foodName, nutritionDetail) {
    // Simpan data detail ke model
    NutriPagesModel.setFoodDetail(foodName, nutritionDetail);
    
    // Navigasi ke halaman detail
    navigate("/nutritrack/detail");
  }
};

export default NutriTrackPresenter;
