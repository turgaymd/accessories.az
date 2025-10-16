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
import { addToCart} from '../store/actions/CartAction'
import { APiContext } from '../ApiContext';
import { useContext } from 'react';
import Swal from 'sweetalert2';
const Details = ({ history, match }) => {

  const [alertShow,setAlertShow]=useState(false)
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const {apiUrl}=useContext(APiContext)
 
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
      Swal.fire({
        icon:"success",
        text:"Review submitted successfully"
      })
      setRating(0);
      setComment("");
      dispatch({ type: Pro_rev_reset });
    
    }
    dispatch(showDetails(productId,apiUrl));
  }, [dispatch, productId, successReview,apiUrl]);

  const handleCart = (e) => {
    e.preventDefault()
    history.push(`/cart/${productId}?qty=${qty}`)
  }

  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(showReviews(productId,{
      rating,
      comment,
    },`${apiUrl}/products`))
   
  }

  return (
      <div className='container mb-5'>
        {/* <h2 className='page-title text-center'>Cart Details Page</h2> */}
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
                            <div className='row justify-content-center mt-4 pt-4'>       
                            <div className='col-md-5 card-details'>
                            <div className='details-image'>
                            <img src={product.mainImage} alt={product.name}  />
                            </div>
                            </div>
                    
   <div className='col-md-5'>
   <div className='product-title'>
     <h4 className='product-name'><strong>{product.name}</strong></h4>
     <p className='product-desc'>{product.desc}</p>
     <div className='product-count col-md-7'>
       <div className='product-price d-flex justify-content-between align-items-center'>
         <span>${product.price}</span>
       </div>
        
             <div className='d-flex justify-content-between mb-4 mt-4'>
                     {/* <h6>Quantity</h6> */}
                <div className='qty-box'>
                  
                                          <button className='btn' onClick={(e)=>setQty(qty-1)}>-</button>
                                          <input value={qty} />
                                          <button className='btn' onClick={(e)=>setQty(qty+1)}>+</button>
                                 
                                   </div>

             </div>
                                             <button className='btn add_to_card' onClick={handleCart}> Add to Cart</button>   

     </div>
   </div>
 </div>
 </div>
 {/* <div className='row justify-content-center mt-4 pt-4'>
                    <div className='col-md-5'>
                      <h3 className='pb-3'>Reviews</h3>
                      {product.reviews.length === 0 && (
                        <h4>There are no reviews yet</h4>
                      )}
                      {product.reviews.map((review) => (
                        <div key={review._id} className="mb-md-3 bg-light p-3 shadow-sm rounded d-flex flex-column">
                          <strong>{review.name}</strong>
                          <Rating value={review.rating}/>
                          <span>{moment(review.createdAt).calendar()}</span>
                          <div className='alert alert-info mt-3'>
                            {review.comment}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='col-md-5'>
                      <h6 className='pb-3'> Write a Customer Review</h6>
                      <div>
                        {loadingReview && <Loading />}
                        {errorReview && (<Message variant={"alert-danger"}>{errorReview}</Message>)}
                      </div>
                      {userInfo ? (
                        <form onSubmit={sumbitHandler}>
                          <div className=' rating'>
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
                          <div >
                          
                            <textarea rows="3" placeholder='Your Comment' className='col-12 bg-light p-3 mt-2 border-0-rounded' onChange={(e) => setComment(e.target.value)} required></textarea>
                          </div>
                          <div className='text-center'>
                            <button disabled={loadingReview} className='bg-black border-0 p-3 rounded text-white btn-comment' type='submit'>Submit</button>
                          </div>
                        </form>
                      ) : (
                        <div>
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
                  </div> */}
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