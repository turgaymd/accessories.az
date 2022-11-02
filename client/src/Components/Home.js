import React from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick-slider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const Carousel=()=>{
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 3,
  };

  const slider = React.useRef(null);

  return (
    <div className='carouselCards'>
        
       <div className='carousel__slider pb-3 mb-2'>
      <Slider  ref={slider} {...settings}>
        <div> <Card title='5 days left to enroll' description='IBPS PO & SBI PO live coaching in English Batc...' image='https://images.unsplash.com/photo-1537832816519-689ad163238b?crop=faces%2Cedges&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODY2ODA3&ixlib=rb-1.2.1&q=60&w=1200&auto=format&h=630&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-mode=normal&blend-alpha=10&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=000000' /></div>
        <div> <Card title='Starts in 15days' description='Civil Junior Engineer Live Coaching Batch 2' /></div>
        <div> <Card title='Batch closes in 2days'  description='UPSC CSS - 2 2021 Live Coaching Batch 3'image="https://images.unsplash.com/photo-1558191053-8edcb01e1da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" /></div>

      </Slider> 
      </div>
    </div>
  )
}

const Home=({})=>{
 const  imagestyle ={
  backgroundImage:`url("banner.jpg")`,
}
    return (
<>

<div className='container discover'>
<Carousel/>
<div className='row justify-content-center'>
<div className='col-md-4 shop'>
<img src="handbags1.jpg" className="img-fluid"></img>
<h5>Discover handbags</h5>
<div className="product-action"><div className='text-center'>
<Link to='/accessories'><button className='btn btn-danger shops'>Shop Now</button></Link>
</div>
</div>
</div>
<div className='col-md-4 shop'>
<img src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" className="img-fluid w-100"></img>
<h5>Discover Earrings</h5>
<div className="product-action"><div className='text-center'>
<Link to='/page/3'><button className='btn btn-secondary shops'>Shop Now</button></Link>
</div>
</div>
</div>
<div className='col-md-4 shop'>
<img src="https://www.accessorize.com/on/demandware.static/-/Library-Sites-accessorize-content-global/default/dw08fd81ba/home/2022/mar/28032022_UK/D1440-SEO2.jpg" className="img-fluid"></img>
<h5>Discover Jewellery</h5>
<div className="product-action"><div className='text-center'>
<Link to='/page/2'><button className='btn btn-success shops'>Shop Now</button></Link>
</div>
</div>
</div>
</div>
 </div>
        <div className='container bestt mt-4'>
        <h2 className='best_sellers'>Best Sellers</h2>
        <div className='row products'>
          <div className='col-md-3'>
            <div className='best1'>
              <div className='img_frame'> <img src="https://d-themes.com/react_asset_api/molla/uploads/product_5_c7ed2cd058.jpg"></img></div>
              <div class="media">
              <div className='best_title'>Silver Gold Tone Waves Drop Pendant</div>
              <div className='best_price'>$331.00</div>
              </div>
              <div className='product_bootom text-center'>
              <Link to="/products/62d50a31df809f4b6ead7a9f"><button className='btn btn-danger text-center'>Shop Now</button></Link>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='best1'>
            <div className='img_frame'>
              <img src="https://d-themes.com/react_asset_api/molla/uploads/product_6_5923626931.jpg"></img></div>
              <div class="media">
              <div className='best_title'>Sterling Silver Tassel Drop Earrings</div>
              <div className='best_price'>$355.00</div>
              </div>
              <div className='product_bootom text-center'>
              <Link to="/products/62d50a31df809f4b6ead7a9e"> <button className='btn btn-danger text-center'>Shop Now</button></Link>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='best1'>
            <div className='img_frame'>
              <img src="https://d-themes.com/react_asset_api/molla/uploads/product_8_488732ddff.jpg"></img></div>
              <div class="media">
              <div className='best_title'>Nude Statement Tassel Drop Earrings</div>
              <div className='best_price'>$265.00</div>
              </div>
              <div className='product_bootom text-center'>
              <Link to="/products/62d50a31df809f4b6ead7aa1"><button className='btn btn-danger text-center'>Shop Now</button></Link>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='best1'>
            <div className='img_frame'>
              <img src="https://d-themes.com/react_asset_api/molla/uploads/product_9_32068f7ca1.jpg"></img></div>
              <div class="media">
              <div className='best_title'>Sterling Silver Star Ring</div>
              <div className='best_price'>$370.00</div>
              </div>
            <div className='product_bootom text-center'>
             <Link to="/products/62d50a31df809f4b6ead7aa0"> <button className='btn btn-danger text-center'>Shop Now</button></Link>
              </div>
          </div>
        </div>
      </div>
      </div>
      <section className="banner3">
      <div className="banner-content text-center justify-content-center" style={imagestyle}>
        <img src="https://d-themes.com/react/molla/demo-25/images/home/diamond-ring.png"></img>
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