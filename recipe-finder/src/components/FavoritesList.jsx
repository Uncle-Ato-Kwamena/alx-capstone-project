import React from 'react';
import PropTypes from 'prop-types';

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-8">Favorites</h2>
      {favorites.length === 0 ? ( // Check if there are no favorites
        <p className="text-gray-600">No favorites added yet.</p>
      ) : (
        <ul>
          {favorites.map((recipe) => (
            <li key={recipe.idMeal} className="border-b py-2">
              {recipe.strMeal} {/* Use strMeal for the recipe name */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Prop validation
FavoritesList.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      idMeal: PropTypes.string.isRequired, 
      strMeal: PropTypes.string.isRequired, 
    })
  ).isRequired, 
};

export default FavoritesList;
