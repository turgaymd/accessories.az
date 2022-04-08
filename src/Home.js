import React from "react";
import { Link } from "react-router-dom";
const Home=()=>{
    return (
<>
<header className="App-header">
<h3> Best Accessories here</h3>
<Link to="/holiday_shop"><button className='btn btn-success'>Discover holiday shop</button></Link>
</header>
<div className='container discover'>
<div className='row justify-content-center'>
<div className='col-md-4 shop'>
<img src="handbags1.jpg" className="img-fluid"></img>
<h5>Discover Handbags</h5>
<div className="product-action"><div className='text-center'>
<Link to='/handbags'><button className='btn btn-danger shops'>Shop Now</button></Link>
</div>
</div>
</div>
<div className='col-md-4 shop'>
<img src="https://www.accessorize.com/on/demandware.static/-/Library-Sites-accessorize-content-global/default/dw1aaa932f/home/2022/mar/28032022_UK/D1440-SEO3.jpg" className="img-fluid"></img>
<h5>Discover  Accessories</h5>
<div className="product-action"><div className='text-center'>
<Link to='/accessories'><button className='btn btn-secondary shops'>Shop Now</button></Link>
</div>
</div>
</div>
<div className='col-md-4 shop'>
<img src="https://www.accessorize.com/on/demandware.static/-/Library-Sites-accessorize-content-global/default/dw08fd81ba/home/2022/mar/28032022_UK/D1440-SEO2.jpg" className="img-fluid"></img>
<h5>Discover Jewellery</h5>
<div className="product-action"><div className='text-center'>
<Link to='/jewellery'><button className='btn btn-success shops'>Shop Now</button></Link>
</div>
</div>
</div>
</div>
 </div>
        <div className='container bestt'>
        <h2 className='best_sellers'>Best Sellers</h2>
        <div className='row products'>
          <div className='col-md-3'>
            <div className='best1'>
              <div className='img_frame'> <img  className="text-center" src="https://d-themes.com/react_asset_api/molla/uploads/product_5_c7ed2cd058.jpg"></img></div>
              <div className='best_title'>Silver Gold Tone Waves Drop Pendant</div>
              <div className='best_price'>$331.00</div>
              <div className='product_bootom text-center'>
              <button className='btn btn-dark text-center'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='best1'>
            <div className='img_frame'>
              <img src="https://d-themes.com/react_asset_api/molla/uploads/product_6_5923626931.jpg"></img></div>
              <div className='best_title'>Sterling Silver Tassel Drop Earrings</div>
              <div className='best_price'>$355.00</div>
              <div className='product_bootom text-center'>
              <button className='btn btn-dark text-center'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='best1'>
            <div className='img_frame'>
              <img src="https://d-themes.com/react_asset_api/molla/uploads/product_8_488732ddff.jpg"></img></div>
              <div className='best_title'>Nude Statement Tassel Drop Earrings</div>
              <div className='best_price'>$265.00</div>
              <div className='product_bootom text-center'>
              <button className='btn btn-dark text-center'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='best1'>
            <div className='img_frame'>
              <img src="https://d-themes.com/react_asset_api/molla/uploads/product_9_32068f7ca1.jpg"></img></div>
              <div className='best_title'>Sterling Silver Star Ring</div>
              <div className='best_price'>$370.00</div>
            </div>
            <div className='product_bootom text-center'>
              <button className='btn btn-dark text-center'>Add to cart</button>
              </div>
          </div>
        </div>
      </div>
      </>

    )
}
export default Home;