import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShipping } from "../store/actions/CartAction";
import { useContext } from "react";
import { APiContext } from "../ApiContext";
import { showOrders } from "../store/actions/OrderAction";
import { Order_reset } from "../store/constants/Orderconstant";
const Checkout = ({ history }) => {
  const cart = useSelector((state) => state.cart);

  const {cartItems} =cart;
  const { shippingAddress } = cart;
  const { apiUrl } = useContext(APiContext);
  const [country, setCountry] = useState(shippingAddress.country || "Azerbaijan");
  const [city, setCity] = useState(shippingAddress.city || "Baku");
  const [street, setStreet] = useState(shippingAddress.street || "Rizvan Teymurov 63");
  const [zipcode, setZipcode] = useState(shippingAddress.zipcode || "AZ1002");
  
  const total = Number(cartItems.reduce((a,i)=>a+ i.qty * i.price, 0).toFixed(2));
  const dispatch = useDispatch();

     const orderCreate=useSelector((state)=>state.orderCreate);
    const {order,success}=orderCreate;

    useEffect(()=>{
        if(success){
           history.push(`/order/${order._id}`)
           dispatch({type:Order_reset})
        }
    },[history,dispatch,success,order])


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ country, city, street, zipcode }));
    history.push("/placeorder");
  };

     const placeOrder=()=>{
     dispatch(showOrders({
          orderItems:cart.cartItems,
          shippingAddress:cart.shippingAddress,
          totalPrice:total,
      }, apiUrl)
     )
    }
  return (
    <>
      <div className="page-header text-center mb-5">
        <div className="container text-center">
          <h1 className="card-title">Checkout</h1>
          <span>Shop</span>
        </div>
      </div>
      <div className="container">
          <form onSubmit={submitHandler} className="checkout-details">
        <div className="row">               
            <div className="col-md-6">
       
              <div className="row">
                      <h4>Billing Address</h4>
                <div className="col-sm-6">
            
                  <label></label>
                  <input type="text" placeholder="First Name" className="form-control" />
                </div>
                <div className="col-sm-6  pt-1">
                  <label> </label>
                  <input type="text" placeholder="Last Name" className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 mt-3">
                <label></label>
                <input
                  placeholder="City"
                  type="text"
                  className="form-control"
                  defaultValue={city}
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
                <div className="col-sm-6 mt-3">
                  <label></label>
                  <input
                   placeholder="ZIP Code "
                    type="text"
                    className="form-control"
                    defaultValue={zipcode}
                    required
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                </div>
              </div>
          
              <div className="mt-3">
                <label></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street Name"
                  defaultValue={street}
                  required
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
               <div className="col-sm-12 mt-3">
                  <label></label>
                  <input
                    placeholder="Country"
                    type="text"
                    className="form-control"
                    defaultValue={country}
                    required
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              {/* <div className="mt-3 orders">
                <label>Order notes(optional)</label>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="4"
                ></textarea>
              </div> */}
              
      
          </div>
              <div className="col-md-6 ">
                <div className="checkout-details">
                <h4>Order Summary</h4>

    <>
    <ul className="subtotal">
        
        <li>Products<span>Total</span></li>
        <hr/>
        {cartItems.map(item=>(
        <li>{item.name}<span>${item.price}</span></li>
        ))}
        <li>Shipping <span>$0</span></li>
        <li>Discount <span> - </span></li>
        <li className="fw-bold">Total <span>${total}</span></li>
        
    </ul>
    <div className="checkout text-center mt-3">
                <button type="button" className="checkout-btn w-100" onClick={placeOrder}>
                  Place Order
                </button>
              </div>
                       
                               </>
                            
              </div>
      </div>       
       </div>
        </form>
        </div>
     
    </>
  );
};
export default Checkout;
