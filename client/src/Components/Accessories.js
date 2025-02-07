import React, { useContext }  from 'react'
import  { useEffect, useState }  from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {showProducts} from '../store/actions/ProductAction';
import {Link} from "react-router-dom"
import {MdAddShoppingCart} from "react-icons/md"
import {BsHeart} from "react-icons/bs"
import {GoCommentDiscussion} from "react-icons/go"
import Loading from './LoadingError/Loading';
import Message from './LoadingError/error';
import Pagination from './Pagination';
import ApiProvider, { APiContext } from '../ApiContext';
const Accessories=({match})=>{
  const keyword=match.params.keyword;
  const {apiUrl}=useContext(APiContext)
  // const pagenumber=match.params.pagenumber;
  const dispatch=useDispatch()
  const productList=useSelector((state)=>state.productList)
  const{loading,error,products}=productList;
useEffect(()=>{
  dispatch(showProducts(keyword, apiUrl));
},[dispatch,keyword,apiUrl]);
return(
  <>
    <div className='page-header'>
      <h2 className='page-title'>Accessories</h2>
      <p>Define your outfits with on-trend women's jewellery from Accessories.</p>
      </div>
        <section className='py-4 container'>
          <div className='row  justify-content-center'>
          {
              loading ?
              (<Loading/>) : error ? (
                <Message variant="alert-danger">{error}</Message>
              )
               :
        (
          <>
      {products.map((product)=>{
        return (
          <>
<div className='col-lg-3 col-12 product' key={product._id}>
  <div className='position-relative'>
  <img src={`${product.mainImage}`} className="card-img"/>
{/* <div className='hidden'>
  <Link to={`/products/${product._id}`}> <button className='btn btn-danger'><BsHeart fontSize={24}/></button></Link>
  </div> */}
  <div className='add-btn'>
  <Link to={`/products/${product._id}`}> Add to cart</Link>
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

          </>
        )
      })}
      {/* <Pagination pages={pages} page={page} keyword={keyword ? keyword : ""}/> */}
    </>
        )
}

      </div>
      
      </section>
      <section className="instagram pb-5">
        <h2 className='text-center'>Shop By Instagram</h2>
        <p className='text-center'>Discover trendy accessories to elevate your wardrobe.</p>
        <div className='flex-container social pt-4 gap-4'>
      <div className="flex-item ins" >
        <img src="https://d-themes.com/react/molla/demo-25/images/home/instagram/instagram-1.jpg" ></img>
        <div className='instagram-content'>
          <a> <i className='icon'><BsHeart/></i>550</a>
       <a><i className='icon'><GoCommentDiscussion/></i>50</a>
        </div>
        </div>
        <div className="flex-item ins" >
        <img src="https://d-themes.com/react/molla/demo-25/images/home/instagram/instagram-3.jpg"></img>
        <div className='instagram-content'>
          <a> <i className='icon'><BsHeart/></i>766</a>
       <a><i className='icon'><GoCommentDiscussion/></i>80</a>
        </div>
        </div>
        <div className="flex-item ins" >
        <img src="https://d-themes.com/react/molla/demo-25/images/home/instagram/instagram-4.jpg"></img>
        <div className='instagram-content'>
          <a> <i className='icon'><BsHeart/></i>460</a>
       <a><i className='icon'><GoCommentDiscussion/></i>30</a>
        </div>
        </div>
        <div className="flex-item ins">
        <img src="https://d-themes.com/react/molla/demo-25/images/home/instagram/instagram-5.jpg"></img>
        <div className='instagram-content'>
          <a> <i className='icon'><BsHeart/></i>466</a>
       <a><i className='icon'><GoCommentDiscussion/></i>65</a>
        </div>
        </div>
        <div className="flex-item ins">
        <img src="https://d-themes.com/react/molla/demo-25/images/home/instagram/instagram-2.jpg"></img>
        <div className='instagram-content'>
          <a> <i className='icon'><BsHeart/></i>567</a>
       <a><i className='icon'><GoCommentDiscussion/></i>45</a>
        </div>
        </div>
        </div>
        </section>
      </>  
)
}
export default Accessories;