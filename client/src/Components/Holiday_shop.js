import React  from 'react'
import { Link } from 'react-router-dom';
import {MdAddShoppingCart} from "react-icons/md"
import {BsHeart} from "react-icons/bs"
import {GoCommentDiscussion} from "react-icons/go"
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
  <div className='desc'>
      <h2 className='page-title'>Holiday Shop</h2>
      <p>Define your outfits with on-trend women's gifts from Accessorize.</p>
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
      {shop.map(product=>{
        return (
          <>
<div className='col-3 yess' key={product._id}>
<img src={`${product.image}`} className="card-img img-fluid"></img>
  <div className='hidden justify-content-center'>
  <Link to={`/shop/${product._id}`}><button className='btn text-center'><MdAddShoppingCart fontSize={24}/>   Add to Cart</button></Link>
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
          <section className="instagram">
        <h2>Shop By Instagram</h2>
        <div className='flex-container social'>
      <div className="flex-item ins" >
        <img src="https://d-themes.com/react/molla/demo-25/images/home/instagram/instagram-1.jpg"></img>
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
           </div>
           </>
)
}
export default Holiday_shop;