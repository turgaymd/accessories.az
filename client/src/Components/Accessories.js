import React  from 'react'
import Home from './Home';
import  { useEffect, useState }  from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {showProducts} from '../store/actions/ProductAction';
import {Link} from "react-router-dom"
import axios from 'axios';
import {BsHeart} from "react-icons/bs"
import {GoCommentDiscussion} from "react-icons/go"
import Loading from './LoadingError/Loading';
import Message from './LoadingError/error';
const Accessories=({match})=>{
  const keyword=match.params.keyword;
  const dispatch=useDispatch()
  const productList=useSelector((state)=>state.productList)
  const{loading,error,products}=productList;
useEffect(()=>{
  dispatch(showProducts(keyword));
},[dispatch,keyword]);
return(
  <>
    <div className='desc'>
      <h2 className='page-title'>Accessories</h2>
      <p>Define your outfits with on-trend women's jewellery from Accessorize.</p>
      </div>
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
      {products.map(product=>{
        return (
          <>
<div className='col-md-3 yess' key={product._id}>
<img src={`${product.image}`} className="card-img img-fluid"></img>
  <div className='hidden justify-content-center'>
  <Link to={`/products/${product._id}`}> <button className='btn text-center'>Add to Cart</button></Link>
  </div>
  <div className='product-titles text-center'>
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
      <section className="container instagram">
        <h2>Shop By Instagram</h2>
        <div className='row social text-center'>
      <div className="col-md-2 ins" >
        <img src="https://d-themes.com/react/molla/demo-25/images/home/instagram/instagram-1.jpg"></img>
        <div className='instagram-content'>
          <a> <i className='icon'><BsHeart/></i>466</a>
       <a><i className='icon'><GoCommentDiscussion/></i>65</a>
        </div>
        </div>
        <div className=" col-md-2 ins" >
        <img src="https://d-themes.com/react/molla/demo-25/images/home/instagram/instagram-3.jpg"></img>
        <div className='instagram-content'>
          <a> <i className='icon'><BsHeart/></i>466</a>
       <a><i className='icon'><GoCommentDiscussion/></i>65</a>
        </div>
        </div>
        <div className="col-md-2 ins" >
        <img src="https://d-themes.com/react/molla/demo-25/images/home/instagram/instagram-4.jpg"></img>
        <div className='instagram-content'>
          <a> <i className='icon'><BsHeart/></i>466</a>
       <a><i className='icon'><GoCommentDiscussion/></i>65</a>
        </div>
        </div>
        <div className="col-md-2 ins">
        <img src="https://d-themes.com/react/molla/demo-25/images/home/instagram/instagram-5.jpg"></img>
        <div className='instagram-content'>
          <a> <i className='icon'><BsHeart/></i>466</a>
       <a><i className='icon'><GoCommentDiscussion/></i>65</a>
        </div>
        </div>
        <div className="col-md-2 ins" >
        <img src="https://d-themes.com/react/molla/demo-25/images/home/instagram/instagram-2.jpg"></img>
        <div className='instagram-content'>
          <a> <i className='icon'><BsHeart/></i>466</a>
       <a><i className='icon'><GoCommentDiscussion/></i>65</a>
        </div>
        </div>
        </div>
        </section>
      </>  
)
}
export default Accessories;