import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



const Home=({})=>{
 const  imagestyle ={
  backgroundImage:`url("banner.jpg")`,
}
    return (
<>
<div className="home">
<Carousel autoPlay={true} infiniteLoop={true} interval={2000} showStatus= {false} showArrows={false} showThumbs={false}>
<div> <Card title='Trend bags' description='IBPS PO & SBI PO live coaching in English Batc...' image='home1.webp' alt="bags"/></div>
<div> <Card title='Awesome Accessories' description='Civil Junior Engineer Live Coaching Batch 2' image='home4.webp' alt="accessories" /></div>
<div> <Card title='Dream Jewellery'  description='UPSC CSS - 2 2021 Live Coaching Batch 3' image='home3.webp' alt="jewellery"  /></div>
</Carousel>
</div>


 
        
   
      <section className="banner3">
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
      {/* <div className='container discover mb-5'>
<div className='row justify-content-center'>
<div className='col-md-4 shop'>
<img src="handbags1.jpg" className="img-fluid" alt="handbags"></img>
<h5>Discover handbags</h5>
<div className="product-action"><div className='text-center'>
<Link to='/accessories'><button className='btn btn-danger shops'>Shop Now</button></Link>
</div>
</div>
</div>
<div className='col-md-4 shop'>
<img src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" className="img-fluid w-100" alt="earrings"></img>
<h5>Discover Earrings</h5>
<div className="product-action"><div className='text-center'>
<Link to='/page/3'><button className='btn btn-secondary shops'>Shop Now</button></Link>
</div>
</div>
</div>
<div className='col-md-4 shop'>
<img src="https://www.accessorize.com/on/demandware.static/-/Library-Sites-accessorize-content-global/default/dw08fd81ba/home/2022/mar/28032022_UK/D1440-SEO2.jpg" className="img-fluid" alt="jewellery"></img>
<h5>Discover Jewellery</h5>
<div className="product-action"><div className='text-center'>
<Link to='/page/2'><button className='btn btn-success shops'>Shop Now</button></Link>
</div>
</div>
</div>
</div>
 </div> */}
 <div className="desc mb-5">
        <h2 className='best_sellers '>Featured Products</h2>
        </div>
        <div className='container bestt mt-4'>
        <div className='row products'>
          <div className='col-md-3 featured'>
         
              <div className='img_frame'> <img src="silver_gold.webp" alt="product_5"></img></div>
              <div className="media">
              <div className='best_title'>Silver Gold Tone Waves Drop Pendant</div>
            
              </div>
              <div className='product_bootom text-center'>
              <div className='best_price'>$331.00</div>
              <Link to="/products/6554f2ceba660224070a102b"><button className='btn btn-danger text-center'>Discover</button></Link>
              </div>
          
          </div>
          <div className='col-md-3 featured'>
            <div className='img_frame'>
              <img src="silver_earrings.jfif" alt="product_6"></img></div>
              <div className="media">
              <div className='best_title'>Sterling Silver Tassel Drop Earrings</div>
          
              </div>
              <div className='product_bootom text-center'>
              <div className='best_price'>$355.00</div>
              <Link to="/products/6554f2ceba660224070a102a"> <button className='btn btn-danger text-center'>Discover</button></Link>
              </div>
            
          </div>
          <div className='col-md-3 featured'>
            <div className='img_frame'>
              <img src="nude_earrings.jpg" alt="product_8"></img></div>
              <div className="media">
              <div className='best_title'>Nude Statement Tassel Drop Earrings</div>
       
              </div>
              <div className='product_bootom text-center'>
              <div className='best_price'>$265.00</div>
              <Link to="/products/6554f2ceba660224070a102d"><button className='btn btn-danger text-center'>Discover</button></Link>
              </div>
           
          </div>
          <div className='col-md-3 featured'>
            <div className='img_frame'>
              <img src="star_ring.jpg" crossOrigin="anonymous" alt="product_9"></img></div>
              <div className="media">
              <div className='best_title'>Sterling Silver Star Ring</div>
              </div>
              <div className='product_bootom text-center'>
              <div className='best_price'>$370.00</div>
         <Link to="/products/6554f2ceba660224070a102c"> <button className='btn btn-danger text-center'>Discover</button></Link> 
              </div>
              </div>
       
       
       
      </div>
      </div>
      </>

    )
}
export default Home;