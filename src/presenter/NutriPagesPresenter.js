import NutriPagesModel from '../models/NutriPagesModel';

const NutriTrackPresenter = {
  handleSeeMore(navigate, foodName, nutritionContent) {
    NutriPagesModel.setFoodDetail(foodName, nutritionContent);
    navigate('/nutritrack/detail');
  },
};

export default NutriTrackPresenter;
