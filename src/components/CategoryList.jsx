import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryList = ({ category }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    axios.get(`/posts/${category}`)
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('An error occurred while fetching posts.');
        setLoading(false);
      });
  }, [category]);
  

  const filteredPosts = posts.filter((post) => post.category === category);

  return (
    <div>
      {loading ? <p>Loading posts...</p> : (
        <>
          {error && <p>{error}</p>}
          {filteredPosts.map(post => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.category}</p>
              <p>{post.description}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CategoryList;
