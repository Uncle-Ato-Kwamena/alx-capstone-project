
import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories = async () => {
  const response = await axios.get(`${BASE_URL}/list.php?c=list`);
  return response.data.categories;
};

export const fetchAreas = async () => {
  const response = await axios.get(`${BASE_URL}/list.php?a=list`);
  return response.data.meals;
};

export const fetchIngredients = async () => {
  const response = await axios.get(`${BASE_URL}/list.php?i=list`);
  return response.data.meals;
};
