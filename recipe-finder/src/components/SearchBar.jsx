import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm} // Updated to use searchTerm
        onChange={(e) => setSearchTerm(e.target.value)} // Updated to use setSearchTerm
        placeholder="Search for recipes..."
        className="border border-gray-300 rounded-md p-2 w-full"
      />
    </div>
  );
};

export default SearchBar;
