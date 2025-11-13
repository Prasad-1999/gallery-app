import React from "react";

const categories = ["Nature", "Cars", "Mountains", "Animals", "Cities"];

const CategoryFilter = ({ setQuery }) => {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <button key={cat} onClick={() => setQuery(cat.toLowerCase())}>
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
