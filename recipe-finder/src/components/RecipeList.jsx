// src/components/RecipeList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        const areaResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const ingredientResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');

        setCategories(categoryResponse.data.categories || []);
        setAreas(areaResponse.data.meals || []);
        setIngredients(ingredientResponse.data.meals || []);
        console.log('Fetched Data:', { categories: categoryResponse.data.categories, areas: areaResponse.data.meals, ingredients: ingredientResponse.data.meals }); // Debugging log
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <div>
        <h2 className="text-lg font-bold">Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.strCategory}>{category.strCategory}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold">Areas</h2>
        <ul>
          {areas.map((area) => (
            <li key={area.strArea}>{area.strArea}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold">Ingredients</h2>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.strIngredient}>{ingredient.strIngredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeList;
