import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GrLinkNext, GrView } from "react-icons/gr";
import { useEffect,useContext } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {showProducts} from '../store/actions/ProductAction';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules"
import { APiContext } from "../ApiContext";
import 'swiper/css';
import 'swiper/css/autoplay';
import { FaArrowRight } from "react-icons/fa";
const Home=({match})=>{

const slides=[
  {
    title:" Luxury accessories",
    image:"home2.webp"
  },
  {
    title:"Elegant Watches",
    image:"home4.webp"
  },
  
  {
    title:"Luxury handbags",
    image:"home1.webp"
  },

]

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
  {
    slides.map((item,index)=>{
      return(
<SwiperSlide key={index}>
  <div className="row">
<div className="col-md-6 slide-text">
  <div className="text-center text">
<h2>{item.title}</h2>
<div className="text-center pb-4">
<Link to={`/accessories/`}><a className="btn btn-dark">Discover now <FaArrowRight/></a></Link>
</div>

</div>
</div>
  <div className="col-md-6">
  <img src={item.image}/>
  </div>
  </div>
</SwiperSlide>
      )
    })
  }
</Swiper>
</div>
 <div className="mb-3 pt-5">
        <h2 className='best_sellers text-center mt-4'>Featured Products</h2>
        </div>
        <div className='container bestt'>
        <div className='row products'>
          {
            products.slice(-3).map(product=>{
              return (
              <div className='col-lg-3 col-12 product' key={product._id}>
              <div className='position-relative'>
              <img src={`${product.mainImage}`} className="card-img"/>
            <div className='hidden'>
              <Link to={`/products/${product._id}`}> <button className='btn btn-white'><GrLinkNext fontSize={24}/></button></Link>
              </div>
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
      <div className="banner-content text-center justify-content-center">
        <h3 className="high-title">HIGH QUALITY SINCE 2020</h3>
        <p className="banner3_p">Everything you need to complete the perfect collection</p>
    <div className="text-center">
    <p className="banner-txt text-center mb-2 mb-lg-3">  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
malesuada erat ut turpis. </p>
{/* Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis
facilisis fermentum. Aliquam porttitor mauris sit amet orci. */}
<Link to="/about"><button className="seeProducts_button mb-3">See more</button></Link> 
    </div>
    
      </div>
      </section>
      </>

    )
}
export default Home;