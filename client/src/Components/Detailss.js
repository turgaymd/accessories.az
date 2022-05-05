import React, {useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import{BsDash,BsPlus} from "react-icons/bs"
import {MdAddShoppingCart} from "react-icons/md"
import { Link } from 'react-router-dom';
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
   
return(
  <>
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
    <div className='col-md-8'>
        <div className='details-image'>
        <img src={product.image} alt="product.name"></img>
        </div>
        </div>
        <div className='col-md-4'>
        <div className='product-details'>
        <h4 className='product-name'>{product.name}</h4>
        <div className='price text-center'>
      {product.price}.00
        </div>
        <div className="descr">
<h6>Description</h6>
  <p>{product.desc}</p>
    </div>
  <span className="quantity-title">Quantity</span>
 <select value={qty} onChange={(e)=>setQty(e.target.value)}>
   <option>1</option>
   <option>2</option>
   <option>3</option>
   <option>4</option>
   <option>5</option>
 </select>
        </div>  
    <div className='add'>
<button className="btn" onClick={HandleCart}><MdAddShoppingCart/> Add to Cart</button>
</div>
    </div>
    </div>
  </>
)    
}
    </div>
    <div className='new text-center'><h3 className='arrivals'>Coming Soon Products</h3>
    <div className='container arrival'>
      <div className='row'>
        <div className='col-md-3 text-center'>
      <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101061-2_823x.jpg?v=1650308606"></img>
      <div className='product-titlen'>Terrace Drop Earnings</div>
      <div className='product-prize text-center'>$40.00 </div>
        </div>
        <div className='col-md-3 text-center'>
          <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101028-1_823x.jpg?v=1647540053"></img>
          <div className='product-titlen'>Terrace Drop Earnings</div>
          <div className='product-prize text-center'>$30.00
          </div>
          </div>
          <div className='col-md-3 text-center'>
          <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L201009-2__61837_823x.jpg?v=1645115940"></img>
          <div className='product-titlen'>Terrace Drop Earnings</div>
          <div className='product-prize text-center'>$50.00
          </div>
          </div>
          <div className='col-md-3 text-center'>
          <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101015-2_823x.jpg?v=1646760639"></img>
          <div className='product-titlen'>Daisy Post Earnings</div>
          <div className='product-prize text-center'>$60.00
          </div>
      </div>
      </div>
    </div>
    </div>
    </>
)
}


export default Detailss;