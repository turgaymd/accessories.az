import React, {useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {MdAddShoppingCart} from "react-icons/md"
import { showDetailss } from '../store/actions/ProductAction';
import Message from './LoadingError/error';
import Loading from './LoadingError/Loading';
 const Detailss =({history,match})=>{
  const [qty,setQty]=useState(1)
  const productId=match.params.id;
  const dispatch=useDispatch()

  const productDetailss=useSelector((state)=>state.productDetailss); 
  const{loading,error,product}=productDetailss;
  useEffect(()=>{
    dispatch(showDetailss(productId));
  },[dispatch,productId]);

  const HandleCart=(e)=>{
    e.preventDefault()
    history.push(`/cart/${productId}?qty=${qty}`)
  }
  const [imgb,setImgb]=useState(false)
const changeImage=(e)=>{
  e.preventDefault()
  const fullImg=document.getElementById("mainImg")
  var smallImg=document.querySelectorAll(".small")
  fullImg.src=smallImg[1].src
}
const changeImagel=(e)=>{
  e.preventDefault()
  const fullImg=document.getElementById("mainImg")
  var smallImg=document.querySelectorAll(".small")
  fullImg.src=smallImg[2].src
}
const changeImager=(e)=>{
  e.preventDefault()
  const fullImg=document.getElementById("mainImg")
  var smallImg=document.querySelectorAll(".small")
  fullImg.src=smallImg[0].src
}

return(
    <div className='container mb-5'>
    <h2 className='page-title'>Cart Details Page</h2>
    {
      loading ?
      (<Loading/>) : error ? (
        <Message variant="alert-danger">{error}</Message>
      )
       :
(
  <>
 <div className='row'> 
    <div className='col-lg-8'>
  <div>YGGGGD</div>
  <span>TFFFF</span>
        </div>     
        <div className='col--4'>
        <div className='product-details'>
        <h4 className='product-name'>{product.name}</h4>
  <p>{product.desc}</p>
  <div className='product-count col-lg-7'>
        <div className='flex-box d-flex justify-content-between align-items-center'>
          <h6>Price</h6>
          <span>${product.price}</span>
          </div>
          <div className='flex-box d-flex justify-content-between align-items-center'>
          <h6>Status</h6>
          {
            product.countInStock>0 ? (
              <span>In Stock</span>
            ) :
            (
              <span>Unavailable</span>
            )
          }  
             </div>
          <div className='flex-box d-flex justify-content-between align-items-center'>
          <h6>Reviews</h6>
          <span>8</span>
          </div>
          {
            product.countInStock > 0 ? (
              <>
              <div className='flex-box d-flex justify-content-between align-items-center'>
              <h6>Quantity</h6>
              <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                {[...Array(product.countInStock).keys()].map((x)=>(
                <option key={x+1} value={x+1}>{x+1}</option>
                )
                )}
              </select>
           </div>     
<button className='btn btn-dark' onClick={HandleCart}><MdAddShoppingCart fontSize={24}/> Add to Cart</button>
</>
            ) : null  }
</div>
</div>
</div>
</div>
<section className='details mt-5 col-md-12'>
  <h5 className='text-center mb-2 mt-3'>Product Information</h5>
<p className="p-5">{product.long_desc}Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.</p>
</section>
</>
)  
}
    </div>
    // {/* // <div className='new text-center'><h3 className='arrivals'>Coming Soon Products</h3>
    // // <div className='container arrival'>
    // //   <div className='row'>
    // //     <div className='col-3'>
    // //   <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101061-2_823x.jpg?v=1650308606"></img>
    // //   <div className='product-titlen'>Terrace Drop Earnings</div>
    // //   <div className='product-prize text-center'>$40.00 </div>
    // //     </div>
    // //     <div className='col-3'>
    // //       <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101028-1_823x.jpg?v=1647540053"></img>
    // //       <div className='product-titlen'>Terrace Gold Earnings</div>
    // //       <div className='product-prize text-center'>$30.00
    // //       </div>
    // //       </div>
    // //       <div className='col-3'>
    // //       <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L201009-2__61837_823x.jpg?v=1645115940"></img>
    // //       <div className='product-titlen'>Terrace Drop Necklace</div>
    // //       <div className='product-prize text-center'>$50.00
    // //       </div>
    // //       </div>
    // //       <div className='col-3'>
    // //       <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101015-2_823x.jpg?v=1646760639"></img>
    // //       <div className='product-titlen'>Daisy Post Earnings</div>
    // //       <div className='product-prize text-center'>$60.00
    // //       </div>
    // //   </div>
    // //   </div>
    // // </div>
    // // </div> */}
)
}


export default Detailss;