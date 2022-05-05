import React  from 'react'
import { Link } from 'react-router-dom';
import Home from './Home';
import {useSelector} from 'react-redux'
import  { useEffect, useState }  from 'react'
import {useDispatch} from 'react-redux'
import {showProductss} from '../store/actions/ProductAction';
import Loading from './LoadingError/Loading';
import Message from './LoadingError/error';
const Holiday_shop=(props)=>{
  const {keyword}=props
  const dispatch=useDispatch()
  const productLists=useSelector((state)=>state.productLists)
  const{loading,error,shop}=productLists;
useEffect(()=>{
  dispatch(showProductss(keyword));
},[dispatch],keyword);
return(
  <>
      <h2 className='page-title'>Holiday Shop</h2>
    <div className='card'>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
          {
              loading ?
              (<Loading/>) : error ? (
                <Message variant="alert-danger">{error}</Message>
              )
               :
        (
          <>
      {shop.map(product=>{
        return (
          <>
<div className='col-md-3 yess' key={product._id}>
<img src={`${product.image}`} className="card-img img-fluid"></img>
  <div className='hidden justify-content-center'>
  <Link to={`/shop/${product._id}`}><button className='btn text-center'>Add to Cart</button></Link>
  </div>
  <div className='product-title text-center'>
    {product.name}
  </div>
  <div className='product-prize text-center'>
    ${product.price}
  </div>
</div>

</>
          )
        })}
        </>
        )
      }
        </div>
          </section>
           </div>
           </>
)
}
export default Holiday_shop;