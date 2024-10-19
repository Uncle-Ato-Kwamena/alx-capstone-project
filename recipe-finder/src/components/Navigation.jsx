// Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-2">
        <Link to="/" className="text-blue-500 mx-2">Home</Link>
        <Link to="/favorites" className="text-blue-500 mx-2">Favorites</Link>
        <Link to="/shopping-list" className="text-blue-500 mx-2">Shopping List</Link>
        <Link to="/add-recipe" className="text-blue-500 mx-2">Add Recipe</Link>
      </div>
    </nav>
  );
};

export default Navigation;
