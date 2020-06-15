import React from "react";

const SearchBar = ({ searchProduct }) => {
  return (
    <div>
      <input
        className="search-input"
        type="text"
        onChange={(e) => searchProduct(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
