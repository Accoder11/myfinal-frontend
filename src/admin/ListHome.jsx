import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const EditPost = ({ id, title, category, description, onUpdate }) => {
  const [post, setPost] = useState({ id, title, category, description });

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'image') {
      setPost((prevPost) => ({ ...prevPost, [name]: files[0] }));
    } else {
      setPost((prevPost) => ({ ...prevPost, [name]: value }));
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/posts/${id}`, post);
      onUpdate(post);
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleImageChange = async (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
  
    try {
      const response = await axios.post('http://localhost:8000/api/posts/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      setPost((prevPost) => ({ ...prevPost, image: response.data.image_url }));
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={post.title} onChange={handleInputChange} />
      <input type="text" name="category" value={post.category} onChange={handleInputChange} />
      <textarea type="text" name="description" value={post.description} onChange={handleInputChange} cols="60" rows="10"></textarea>
      <input type="file" onChange={handleImageChange} />
      {post.image && <img src={post.image} alt="Post image" />}
      <button type="submit">Update</button>
    </form>
  );
  
};

const ListHome = () => {
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

  const deletePost = async (id) => {
    try {
      await axios.delete(Api_url + `posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      } else {
        return post;
      }
    }));
  };
  

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='container my-5'>
      <h1>Latest Post</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <NavLink to={`/post/${post.id}`}>
            <h1>{post.title}</h1>
          </NavLink>
          <p>{post.category}</p>
          <p>{post.description}</p>
          <button onClick={() => deletePost(post.id)} className="my-3">Delete</button>
          <br />
          <EditPost
            id={post.id}
            title={post.title}
            category={post.category}
            description={post.description}
            onUpdate={updatePost} className="my-3"
          />
        </div>
      ))}
    </div>
  );
};

export default ListHome;
