import React from 'react';

const CategoryButton = ({ handleCategoryClick }) => {
  return (
    <div>
      <button onClick={() => handleCategoryClick('fish')}>Fish</button>
      <button onClick={() => handleCategoryClick('chicken')}>Chicken</button>
      <button onClick={() => handleCategoryClick('pork')}>Pork</button>
      <button onClick={() => handleCategoryClick('vegetable')}>Vegetable</button>
      <button onClick={() => handleCategoryClick('beef')}>Beef</button>
      <button onClick={() => handleCategoryClick('desserts')}>Desserts</button>
    </div>
  );
};

export default CategoryButton;
