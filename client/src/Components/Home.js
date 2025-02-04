import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { GrView } from "react-icons/gr";
import { useEffect,useContext } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {showProducts} from '../store/actions/ProductAction';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules"
import { APiContext } from "../ApiContext";
import 'swiper/css';
import 'swiper/css/autoplay';
import { BsHeart } from "react-icons/bs";
const Home=({match})=>{
 const  imagestyle ={
  backgroundImage:`url("banner.jpg")`,
}
  const {apiUrl}=useContext(APiContext)
  const keyword=match.params.keyword;
  const dispatch=useDispatch()
  const productList=useSelector((state)=>state.productList)
  const{loading,error,products}=productList;

useEffect(()=>{
  dispatch(showProducts(keyword, apiUrl));
},[dispatch,keyword,apiUrl]);
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
          {
            products.slice(-3).map(product=>{
              return (
              <div className='col-lg-3 product' key={product._id}>
              <div className='position-relative'>
              <img src={`${product.mainImage}`} className="card-img"/>
            <div className='hidden'>
              <Link to={`/products/${product._id}`}> <button className='btn btn-danger'><BsHeart fontSize={24}/></button></Link>
              </div>
              {/* <div className='add-btn'>
              <Link to={`/products/${product._id}`}> Add to cart</Link>
              </div> */}
              </div>
            <div className='product-bottom'>
            <div className='product-title text-truncate'>
                <a>{product.name}</a>
              </div>
              <div className='product-prize'>
                ${product.price}
              </div>
            </div>
            
            </div>
              )
            })
          }
      
      
       
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