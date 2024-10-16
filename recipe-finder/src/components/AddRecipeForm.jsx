
import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!title) errors.title = 'Title is required';
    if (!ingredients) errors.ingredients = 'Ingredients are required';
    if (!steps) errors.steps = 'Preparation steps are required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // to handle submissions 
    console.log({ title, ingredients, steps });

    // clear erronous forms
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        {errors.title && <p className="text-red-500 mb-4">{errors.title}</p>}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
            placeholder="Enter recipe title"
          />
        </div>
        {errors.ingredients && <p className="text-red-500 mb-4">{errors.ingredients}</p>}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium mb-2">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
            placeholder="Enter ingredients"
            rows="4"
          />
        </div>
        {errors.steps && <p className="text-red-500 mb-4">{errors.steps}</p>}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-sm font-medium mb-2">Preparation Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
            placeholder="Enter preparation steps"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
