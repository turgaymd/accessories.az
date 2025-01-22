import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { GrView } from "react-icons/gr";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules"
import 'swiper/css';
import 'swiper/css/autoplay';
const Home=({})=>{
 const  imagestyle ={
  backgroundImage:`url("banner.jpg")`,
}
    return (
<>
<div className="home">
<Swiper
modules={ [ Autoplay, Pagination, Navigation]}
slidesPerView={1}
spaceBetween={50}
navigation
pagination={{clickable:true}}
autoplay={{
  delay:2000,
  disableOnInteraction:false
}}
>
<SwiperSlide><img src="home1.webp"/></SwiperSlide>
<SwiperSlide><img src="home2.webp"/></SwiperSlide>
<SwiperSlide><img src="home4.webp"/></SwiperSlide>
</Swiper>
</div>
 <div className="page-header mb-5">
        <h2 className='best_sellers '>Featured Products</h2>
        </div>
        <div className='container bestt mt-4'>
        <div className='row products'>
          <div className='col-md-3'>
            <div className ="featured">
            <div className='img_frame'> <img src="silver_gold.webp" alt="product_5"></img></div>
            </div>
            <div className='product-bottom text-center'>
              <div className='product-title'>Silver Gold  Waves Drop Pendant</div>
              <div className='product-prize'>$331.00</div>
              <Link to="/products/6554f2ceba660224070a102b"></Link>
              </div>
          </div>

          <div className='col-md-3'>
          <div className ="featured">
            <div className='img_frame'>
              <img src="silver_earrings.jfif" alt="product_6"></img></div>
                   
          </div>
          <div className='product-bottom text-center'>
              <div className='product-title'>Sterling Silver Tassel Drop Earrings</div>
              <div className='product-prize'>$355.00</div>
              <Link to="/products/6554f2ceba660224070a102a"></Link>
              </div>
          </div>
          <div className='col-md-3'>
          <div className ="featured">
            <div className='img_frame'>
              <img src="nude_earrings.jpg" alt="product_8"></img></div>
            </div>
              <div className='product-bottom text-center'>
              <div className='product-title'>Nude Statement Tassel Drop Earrings</div>
              <div className='product-prize'>$265.00</div>
              <Link to="/products/6554f2ceba660224070a102d"></Link>
              </div>           
          </div>
          {/* <div className='col-md-3'>
            <div className="featured">
            <div className='img_frame'>
            <img src="star_ring.jpg" crossOrigin="anonymous" alt="product_9"></img></div>  
            </div>
              <div className='product-bottom text-center'>
              <div className='product-title'>Sterling Silver Star Ring</div>
              <div className='product-prize'>$370.00</div>
         <Link to="/products/6554f2ceba660224070a102c"></Link> 
              </div>
              </div> */}
              
       
       
       
      </div>
      </div>
      <section className="banner3 mt-4 pt-4">
      <div className="banner-content text-center justify-content-center" style={imagestyle}>
        <img src="https://d-themes.com/react/molla/demo-25/images/home/diamond-ring.png"  alt="ring"></img>
        <h3 className="high-title my-4">HIGH QUALITY SINCE 2020</h3>
        <p className="banner3_p">Everything you need to complete the perfect collection</p>
     <p className="banner-txt text-center mb-2 mb-lg-3">  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis
facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
<Link to="/about"><button className="seeProducts_button mb-3">See more</button></Link> 
      </div>
      </section>
      </>

    )
}
export default Home;