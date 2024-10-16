import React from 'react';
import PropTypes from 'prop-types';

const ShoppingList = ({ shoppingList }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-8">Shopping List</h2>
      {shoppingList.length === 0 ? ( // to check if shoppin list is empty
        <p className="text-gray-600">Your shopping list is empty.</p>
      ) : (
        <ul>
          {shoppingList.map((item, index) => ( 
            <li key={index} className="border-b py-2">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Prop validation to ensure array and string validation
ShoppingList.propTypes = {
  shoppingList: PropTypes.arrayOf( 
    PropTypes.string.isRequired 
  ).isRequired,
};

export default ShoppingList;
