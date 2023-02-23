import React from 'react'
import ListHome from './ListHome'
import PostForm from './PostForm'


function AdminHome() {
  return (
    <div className="container-fluid mt-5">
      <div className='row mx-auto mt-5'>
      <div className='col-7 bg-light p-5'>
      <ListHome />
      </div>
      
      <div className='col-5'>
      <PostForm />
      </div>
      </div>
    </div>
  )
}

export default AdminHome