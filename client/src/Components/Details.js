import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdAddShoppingCart } from "react-icons/md"
import { Link } from 'react-router-dom';
import { showDetails } from '../store/actions/ProductAction';
import Message from './LoadingError/error';
import Loading from './LoadingError/Loading';
import { Pro_rev_reset } from '../store/constants/Productsconstant';
import Rating from './Rating';
const Details = ({ history, match }) => {


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
      alert("Review submitted");
      setRating(0);
      setComment("");
      dispatch({ type: Pro_rev_reset });
    }
    dispatch(showDetails(productId));
  }, [dispatch, productId, successReview]);

  const HandleCart = (e) => {
    e.preventDefault()
    history.push(`/cart/${productId}?qty=${qty}`)
  }

  const sumbitHandler = (e) => {
    e.preventDefault()
  }


  const [imgb, setImgb] = useState(false)
  const changeImage = (e) => {
    e.preventDefault()
    const fullImg = document.getElementById("mainImg")
    var smallImg = document.querySelectorAll(".small")
    fullImg.src = smallImg[1].src
  }
  const changeImagel = (e) => {
    e.preventDefault()
    const fullImg = document.getElementById("mainImg")
    var smallImg = document.querySelectorAll(".small")
    fullImg.src = smallImg[2].src
  }
  const changeImager = (e) => {
    e.preventDefault()
    const fullImg = document.getElementById("mainImg")
    var smallImg = document.querySelectorAll(".small")
    fullImg.src = smallImg[0].src
  }
  return (
    <>

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
                  <div className='row'>
                    <div className='col-md-7 card-details'>
                      <div className='product-gallery'>
                        <ul className='small-img'>
                          <li><img src={product.mainImage} alt="product.name" onClick={changeImager} className="small" /></li>
                          <li><img src={product.smallImage} onClick={changeImage} className="small" /></li>
                          <li><img src={product.smallImage2} onClick={changeImagel} className="small" /></li>
                        </ul>
                      </div>
                      <div className='details-image'>
                        <img src={product.mainImage} alt="product.name" id="mainImg" onChange={(e) => setImgb(e.target.value)} />
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
                           <Rating value={product.rating} text={ `${product.numReviews} reviews`}/>
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
                                <button className='btn btn-dark' onClick={HandleCart}><MdAddShoppingCart fontSize={24} /> Add to Cart</button>
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
                        <div key={review._id} className="mb-md-3 bg-light p-3 shadow-sm rounded">
                          <strong>{review.name}</strong>
                          <span>{review.createdAt}</span>
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
                            <select className='ml-5' value={rating} onChange={(e) => setRating(e.target.value)}>
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
                            <textarea row="3" className='col-12 bg-light p-3 mt-2 border-0-rounded' onChange={(e) => setComment(e.target.value)}></textarea>
                          </div>
                          <div className='my-3'>
                            <button disabled={loadingReview} className='col-12 bg-black border-0 p-3 rounded text-white'>Submit</button>
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
        }

      </div>
    </>
   
    // <div className='new text-center'><h3 className='arrivals'>Coming Soon Products</h3></div>
    // <div className='container arrival'>
    //   <div className='row'>
    //     <div className='col-3'>
    //   <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101061-2_823x.jpg?v=1650308606"></img>
    //   <div className='product-titlen'>Terrace Drop Earnings</div>
    //   <div className='product-prize text-center'>$40.00 </div>
    //     </div>
    //     <div className='col-3'>
    //       <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101028-1_823x.jpg?v=1647540053"></img>
    //       <div className='product-titlen'>Terrace Gold Earnings</div>
    //       <div className='product-prize text-center'>$30.00
    //       </div>
    //       </div>
    //       <div className='col-3'>
    //       <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L201009-2__61837_823x.jpg?v=1645115940"></img>
    //       <div className='product-titlen'>Terrace Drop Necklace</div>
    //       <div className='product-prize text-center'>$50.00
    //       </div>
    //       </div>
    //       <div className='col-3'>
    //       <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101015-2_823x.jpg?v=1646760639"></img>
    //       <div className='product-titlen'>Daisy Post Earnings</div>
    //       <div className='product-prize text-center'>$60.00
    //       </div>
    //   </div>
    //   </div>
    // </div>

  )
}


export default Details;