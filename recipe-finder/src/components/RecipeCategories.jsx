import React from 'react';

const categories = [
  { name: 'All', id: 'all' },
  { name: 'Beef', id: 'beef' },
  { name: 'Chicken', id: 'chicken' },
  { name: 'Dessert', id: 'dessert' },
  { name: 'Pork', id: 'pork' },
  { name: 'Seafood', id: 'seafood' },
  // Recipe categogiries that subject to update
];

const RecipeCategories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex justify-center space-x-4 my-4">
      {categories.map(category => (
        <div
          key={category.id}
          className={`category-thumbnail flex items-center justify-center cursor-pointer rounded-full h-16 w-16 transition-transform duration-300 
            ${selectedCategory === category.id ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setSelectedCategory(category.id)}
          style={{
            backgroundImage: `url(https://via.placeholder.com/100)`, // background image yet to be updated
            backgroundPosition: 'center',
          }}
        >
          <span className="text-sm font-bold">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default RecipeCategories;
