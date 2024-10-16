import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import RecipeCategories from './RecipeCategories';
import SearchBar from './SearchBar'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FavoritesList from './FavoritesList'; 
import ShoppingList from './ShoppingList'; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState('All'); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const navigate = useNavigate(); 

  // API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        if (response.data && response.data.meals) {
          setRecipes(response.data.meals);
          console.log('Fetched recipes:', response.data.meals); // Log fetched meals
        } else {
          console.error('No meals found');
        }
      } catch (error) {
        console.error('Error fetching recipes:', error); 
      }
    };
  
    fetchRecipes();
  }, []);

  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const filteredRecipes = recipes.filter(recipe =>
    (selectedCategory === 'All' || recipe.strCategory === selectedCategory) &&
    recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // filtered recipes
  console.log('Filtered recipes:', filteredRecipes); 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">RECIPE FINDER</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RecipeCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      {/* Temporarily commented to test recipe display */}
      {/* <FavoritesList /> */}
      {/* <ShoppingList /> */}

      <div className="text-center my-4">
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => navigate('/add-recipe')}
        >
          Add Recipe
        </button>
      </div>

      <p>Recipes will be displayed below:</p> {/* Static message for testing */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <RecipeCard 
              recipe={recipe} 
              key={recipe.idMeal} 
              onClick={() => handleRecipeClick(recipe.idMeal)} 
            />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
