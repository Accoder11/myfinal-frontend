import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const List = () => {
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
    <div className='container my-5 py-5'>
      <main className="container my-5">
        <h1 className="section-header">Latest Post</h1>
        <div className="row mb-2">

          {posts.map((post) => (
            <div key={post.id} className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">{post.category}</strong>
                  <NavLink to={`/post/${post.id}`}><h3 className="mb-0">{post.title}</h3></NavLink>
                  <p className="mb-auto">{post.description}</p>
                  <NavLink to={`/post/${post.id}`}><p className='stretch-link'>Continue reading</p></NavLink>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShG00v1pL_U6VG_QkptjP-aNrIV9L6euCuvg&usqp=CAU" className="d-block w-100 h-100" preserveAspectRatio="xMidYMid slice" alt="..." />
                </div>
              </div>
            </div>
          ))}

        </div>
      </main>
    </div>
  );
};

export default List;
