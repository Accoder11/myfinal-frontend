import React, { useState } from 'react';
import CategoryList from './CategoryList';
import CategoryButton from './CategoryButton'

const CategoryBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('fish');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='my-5'>
      <h1>Posts by Category</h1>
      <CategoryButton handleCategoryClick={handleCategoryClick} />
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CategoryList category={selectedCategory} setLoading={setLoading} setError={setError} />
      )}
    </div>
  );
};

export default CategoryBlog;