import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const BlogPost = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})

  // get post
  const Api_url = 'http://localhost:8000/api/';

  const getPost = async (id) => {
    try {
      const response = await axios.get(`${Api_url}posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost(id);
  }, [id]);

  return (
    <div className='my-5 py-5'>
      <div className='container'>
      <div className='single-post p-5'>
        <div className='Row text-center'>
        <h2>{post.title}</h2>
        <div className='Row'>
          <p>Category: {post.category}</p>
        </div>
        </div>
        <p>{post.description}</p>
      </div>
      <h4>Please leave a comment.</h4>
    </div>
    </div>
  )
}

export default BlogPost
