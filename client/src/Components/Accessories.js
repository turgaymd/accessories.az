import React  from 'react'
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
const Accessories=({match})=>{
  const keyword=match.params.keyword;
  // const pagenumber=match.params.pagenumber;
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
      <p>Define your outfits with on-trend women's jewellery from Accessories.</p>
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
      {products.map((product)=>{
        return (
          <>
<div className='col-lg-3 col-12 yess' key={product._id}>
<img src={`${product.mainImage}`} className="card-img img-responsive"></img>
<div className='hidden'>
  <Link to={`/products/${product._id}`}> <button className='btn text-center'><MdAddShoppingCart fontSize={24}/>Add to Cart</button></Link>
  </div>
  <div className='product-titlen text-center text-truncate'>
    <a>{product.name}</a>
  </div>
  <div className='product-prize text-center'>
    ${product.price}
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
      </div>
      <section className="instagram">
        <h2>Shop By Instagram</h2>
        <div className='flex-container social'>
      <div className="flex-item ins" >
        <img src="https://d-themes.com/react/molla/demo-25/images/home/instagram/instagram-1.jpg" crossOrigin='anonymous'></img>
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