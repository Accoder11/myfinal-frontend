import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const SingleBlog = () => {
  const [posts, setPosts] = useState([]);

  const Api_url = 'http://localhost:8000/api/';

  const fetchPosts = async () => {
    try {
      const response = await axios.get(Api_url + 'posts');
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
        {posts.map((post) => (
        <div key={post.id} className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className='row'>
            <div className="col-md-7 px-0">
            <NavLink to={`/post/${post.id}`}>
              <h2 className="display-4 fst-italic">{post.title}</h2>
              <strong className="d-inline-block mb-2 text-success">{post.category}</strong>
              </NavLink>
              <p className="lead my-3">{post.description}</p>
              <p className="lead mb-0 text-white fw-bold"> <NavLink to={`/post/${post.id}`}>Continue reading... </NavLink></p>
            </div>
            <div className="col-5 d-none d-lg-block">
              <img src="https://jaysonrobert.files.wordpress.com/2016/08/philippine-cuisine-pinoy-food.jpg" className="d-block w-100 h-100" preserveAspectRatio="xMidYMid slice" alt="..." />
            </div>
          </div>
        </div>
         ))} 
    </div>
        
  );
};

export default SingleBlog;
     





