import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Navbar from './components/Navbar';
import List from './pages/Home/Blog/List';
import PostForm from './admin/PostForm';
import BlogPost from './pages/Home/Blog/BlogPost';
import Blog from './pages/Home/Blog/Blog'
import AdminHome from './admin/AdminHome'
import LoginForm from './admin/LoginForm'
import CategoryBlog from './components/CategoryBlog'
import RegisterForm from './admin/RegisterForm'
import Contact from './components/Contact';
import Travel from './components/Travel';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/form" element={<PostForm />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/category" element={<CategoryBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/post/:id" element={<BlogPost />} />
        
          
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;
