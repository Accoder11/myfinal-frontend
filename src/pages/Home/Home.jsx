import React from 'react';
import { useRef } from "react";
import bannerVid from '../../assets/video2.mp4';
import SingleBlog from '../../components/SingleBlog';
import { Link } from 'react-router-dom';
import ImageGallery from '../../components/ImageGallery';
import FeaturedPost from '../../components/FeaturedPost';

const Home = () => {

  const introduction = useRef(null);

  return (
    <div> 
      <video id="myVideo" loop autoPlay muted>
        <source src={bannerVid} type="video/mp4" />
      </video>

      <div className="content">
        <h1>HAK foodblog</h1>
        {/* button link */}
        <a href="#menus"><button className='btn start-btn'>View Recipes</button></a>
      </div>
     
      <div className='my-5 container introduction'>
        <h1 className='section-header my-5'>HAK Food Blog</h1>
        <p>
          Welcome to our recipe blog website! Our goal is to provide you with a wide variety of delicious and easy-to-follow recipes that you can enjoy with your family and friends. Whether you're a seasoned cook or a beginner in the kitchen, we have something for everyone.
          <br/><br/>
          We believe that food should be both enjoyable and nourishing, and that's why we only feature recipes that use wholesome ingredients and easy-to-find pantry staples. From classic comfort foods to exotic dishes from around the world, we've got you covered.
          <br/><br/>
          So, pull up a chair, grab a cup of coffee, and browse through our collection of mouth-watering recipes. We hope you find inspiration and joy in the kitchen, and that our recipes become a regular part of your mealtime routine. Happy cooking!
        </p>
      </div>

      <main className="container my-5" id="menus">
        <FeaturedPost />
        <div>
          <header className="blog-header">
            <div className="container-fluid">
              <div className="nav-scroller py-1 mb-2">
                <nav className="nav nav-menu d-flex justify-content-between mx-5">
                  <a className="p-2 menu-link" href="#menus">
                    Menu
                  </a>
                  <Link
                    to={{
                      pathname: '/posts',
                      search: '?category=chicken',
                    }}
                    className="p-2 menu-link"
                  >
                    Chicken
                  </Link>
                  <Link
                    to={{
                      pathname: '/posts',
                      search: '?category=pork',
                    }}
                    className="p-2 menu-link"
                  >
                    Pork
                  </Link>
                  <Link
                    to={{
                      pathname: '/posts',
                      search: '?category=beef',
                    }}
                    className="p-2 menu-link"
                  >
                    Beef
                  </Link>
                  <Link
                    to={{
                      pathname: '/posts',
                      search: '?category=vegetables',
                    }}
                    className="p-2 menu-link"
                  >
                    Vegetables
                  </Link>
                  <Link
                    to={{
                      pathname: '/posts',
                      search: '?category=desserts',
                    }}
                    className="p-2 menu-link"
                  >
                    Desserts
                  </Link>
                  <Link
                    to={{
                      pathname: '/posts',
                      search: '?category=food-destinations',
                    }}
                    className="p-2 menu-link"
                  >
                    Food Destinations
                  </Link>
                </nav>
              </div>
            </div>
          </header>
        </div>
        <SingleBlog />
        <ImageGallery />
      </main>
    </div>
  );
}

export default Home;