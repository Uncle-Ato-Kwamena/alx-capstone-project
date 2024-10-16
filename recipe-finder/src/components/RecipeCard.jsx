import React from 'react';

const RecipeCard = ({ recipe, onClick }) => {
  const imageUrl = recipe.strMealThumb; //  '/preview' to the image URL

  return (
    <div className="recipe-card cursor-pointer" onClick={onClick}>
      <img src={imageUrl} alt={recipe.strMeal} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="text-xl font-bold mt-2">{recipe.strMeal}</h2>
      <p className="text-gray-600">{recipe.strCategory}</p>
      <p className="text-gray-600">{recipe.strArea}</p>
    </div>
  );
};

export default RecipeCard;
