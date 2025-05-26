import { calculateBMI, getBMICategory } from '../models/BodyTrackModel';

export const processBodyData = ({ age, height, weight, gender, activityLevel }) => {
  const bmi = calculateBMI(weight, height);
  const category = getBMICategory(bmi);
  return {
    bmi: bmi.toFixed(2),
    category,
  };
};