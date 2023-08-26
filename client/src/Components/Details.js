import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdAddShoppingCart } from "react-icons/md"
import { Link } from 'react-router-dom';
import { showDetails, showReviews } from '../store/actions/ProductAction';
import Message from './LoadingError/error';
import Loading from './LoadingError/Loading';
import { Pro_rev_reset } from '../store/constants/Productsconstant';
import moment from "moment"
import Rating from './Rating';
import SweetAlert2 from "react-sweetalert2"
import showSwal from "react-swal"
const Details = ({ history, match }) => {

  const [alertShow,setAlertShow]=useState(false)
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")

  const productId = match.params.id;
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReview = useSelector((state) => state.productReview);
  const { loading: loadingReview, error: errorReview, success: successReview } = productReview;

  useEffect(() => {
    if (successReview) {
      alert("Review Submitted");
      setRating(0);
      setComment("");
      dispatch({ type: Pro_rev_reset });
    
    }
    dispatch(showDetails(productId));
  }, [dispatch, productId, successReview]);

  const handleCart = (e) => {
    e.preventDefault()
    history.push(`/cart/${productId}?qty=${qty}`)
  }

  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(showReviews(productId,{
      rating,
      comment,
    }))
   
  }

  return (
      <div className='container mb-5'>
        <h2 className='page-title'>Cart Details Page</h2>
        {
          loading ?
            (<Loading />) : error ? (
              <Message variant="alert-danger">{error}</Message>
            )
              :
              (
                <>
                    {
                          product ? (
                            <>
                            <div className='row'>
                       
                            <div className='col-md-7 card-details'>
                            <div className='details-image'>
                            <img src={product.mainImage} alt={product.name}  />

                            </div>
                            </div>
   <div className='col-md-5'>
   <div className='product-details'>
     <h4 className='product-name'><strong>{product.name}</strong></h4>
     <p>{product.desc}</p>
     <div className='product-count col-md-7'>
       <div className='flex-box d-flex justify-content-between align-items-center'>
         <h6>Price</h6>
         <span>${product.price}</span>
       </div>
       <div className='flex-box d-flex justify-content-between align-items-center'>
         <h6>Status</h6>
         {
           product.countInStock > 0 ? (
             <span>In Stock</span>
           ) :
             (
               <span>Unavailable</span>
             )
         }
       </div>
       <div className='flex-box d-flex justify-content-between align-items-center'>
         <h6>Reviews</h6>
        <Rating value={product.rating} text={ `${product.numReviews} reviews` } />
       </div>
       {
         product.countInStock > 0 ? (
           <>
             <div className='flex-box d-flex justify-content-between align-items-center'>
               <h6>Quantity</h6>
               <select value={qty} onChange={(e) => setQty(e.target.value)}>
                 {[...Array(product.countInStock).keys()].map((x) => (
                   <option key={x + 1} value={x + 1}>{x + 1}</option>
                 )
                 )}
               </select>
             </div>
             <button className='btn btn-dark' onClick={handleCart}><MdAddShoppingCart fontSize={24} /> Add to Cart</button>
           </>
         ) : null}
     </div>
   </div>
 </div>
 </div>
 
 <div className='row my-5'>
                    <div className='col-md-6'>
                      <h6 className='mt-2'>Reviews</h6>
                      {product.reviews.length === 0 && (
                        <Message variant={"alert-info mt-3"}>No reviews</Message>
                      )}
                      {product.reviews.map((review) => (
                        <div key={review._id} className="mb-md-3 bg-light p-3 shadow-sm rounded d-flex flex-column">
                          <strong>{review.name}</strong>
                          <span>{moment(review.createdAt).calendar()}</span>
                          <div className='alert alert-info mt-3'>
                            {review.comment}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='col-md-6'>
                      <h6>Write a Customer Review</h6>
                      <div className='my-4'>
                        {loadingReview && <Loading />}
                        {errorReview && (<Message variant={"alert-danger"}>{errorReview}</Message>)}
                      </div>
                      {userInfo ? (
                        <form onSubmit={sumbitHandler}>
                          <div className='my-4 rating'>
                            <strong>Rating</strong>
                            <select className='col-12 p-2 mt-2 bg-light border-0 rounded' value={rating} onChange={(e) => setRating(e.target.value)}>
                              <option value="">Select ...</option>
                              <option value="1">1 - Poor</option>
                              <option value="2">2 - Fair</option>
                              <option value="3">3 - Good</option>
                              <option value="4">4 - Excellent</option>
                              <option value="5">5 - Great</option>
                            </select>
                          </div>
                          <div className='my-4'>
                            <strong>Comment</strong>
                            <textarea rows="3" className='col-12 bg-light p-3 mt-2 border-0-rounded' onChange={(e) => setComment(e.target.value)} required></textarea>
                          </div>
                          <div className='my-3'>
                            <button disabled={loadingReview} className='col-12 bg-black border-0 p-3 rounded text-white' type='submit'>Submit</button>
                          </div>
                          <div className='row'>
                            {comment ? <SweetAlert2 {...showSwal}/> : null }
                          </div>
                        </form>
                      ) : (
                        <div className='my-3'>
                          <Message variant={"alert-warning"}>
                            Please{" "}
                            <Link to="/login">
                              " <strong>Login</strong>"
                            </Link>{" "}
                            to write a review{" "}
                          </Message>
                        </div>

                      )}
                    </div>
                  </div>
 </>
                            )
                          
                          
                          :(
                            <Loading/>
                          )
                        }
                      
                
                </>
              )}
 
      </div>
     
   
    

  )
}


export default Details;