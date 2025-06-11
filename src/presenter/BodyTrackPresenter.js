// src/presenters/bodyTrackPresenter.js
import { predictBodyStatus } from '../models/BodyTrackModel';

export const handleFormSubmit = async (formData, setLoading, setResult) => {
  setLoading(true);
  const parsedData = {
    age: Number(formData.age),
    height_cm: Number(formData.height),
    weight_kg: Number(formData.weight),
    gender: formData.gender,
    activity: Number(formData.activityLevel),
  };

  const response = await predictBodyStatus(parsedData);

  if (response.success) {
    setResult(response.data);
  } else {
    setResult({
      predictedLabel: response.error,
      predictedClass: 'N/A',
    });
  }

  setLoading(false);
};
