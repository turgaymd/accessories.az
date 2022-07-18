import React, { useEffect } from "react"
import {BiUser} from "react-icons/bi"
import {IoLocationSharp} from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux";
import {GrDeliver} from "react-icons/gr"
import Message from "./LoadingError/error";
import { showOrders } from "../store/actions/OrderAction";
import { Order_reset } from "../store/constants/Orderconstant";
const Orders=({history})=>{
    const dispatch=useDispatch()
    const cart=useSelector((state)=>state.cart);

    const userLogin=useSelector((state)=>state.userLogin);
    const {userInfo}=userLogin;

    const orderCreate=useSelector((state)=>state.orderCreate);
    const {order,success,error}=orderCreate;

    useEffect(()=>{
        if(success){
           history.push(`/order/${order._id}`)
           dispatch({type:Order_reset})
        }
    },[history,dispatch,success,order])


    const placeOrderHandler=()=>{
     dispatch(showOrders({
          orderItems:cart.cartItems,
          shippingAddress:cart.shippingAddress,
          ItemsPrice:cart.ItemsPrice,
          totalPrice:cart.totalPrice,
    
      })
     )
    }
    cart.ItemsPrice=(
        cart.cartItems.reduce((a,i)=>a+ i.qty * i.price, 0)
    )
    cart.totalPrice=cart.ItemsPrice+30;
    return(
        <div>
<div className="container-fluid">
<div className="row order-details">
<div className="col-md-4 center">
<div className="row">
<div className="col-md-4">
<div className="alert-success order-box"><BiUser style={{fontSize:24}}/>
</div>
</div>
<div className="col-md-8 center">
<h6><strong>Customer</strong></h6>
<p>{userInfo.name}</p>
<p>{userInfo.email}</p>
</div>
</div>
</div>
<div className="col-md-4">
<div className="row">
<div className="col-md-4">
<div className="alert-success order-box"><GrDeliver style={{fontSize:24}}/>
</div>
</div>
<div className="col-md-8 center">
<h6><strong>Order info</strong></h6>
<p>Shipping: {cart.shippingAddress.country}</p>
<p>Pay method: PayPal</p>
</div>
</div>
</div>
<div className="col-md-4">
<div className="row">
<div className="col-md-4">
<div className="alert-success order-box"><IoLocationSharp style={{fontSize:24}}/>
</div>
</div>
<div className="col-md-8 center">
<h6><strong>Deliver to</strong></h6>
<p>{cart.shippingAddress.city}, {cart.shippingAddress.street}, {cart.shippingAddress.zipcode}</p>
</div>
</div>
</div>
</div>
</div>
<div className="container">
<div className="row my-orders mt-3 ml-2 ">
<div className="col-lg-8">
   {
       cart.cartItems.length === 0 ? (
           <Message variant="alert-info mt-3">Your cart is empty</Message>
       ) : (
           <>
           {cart.cartItems.map((item,index)=>{
               return (
               <div className="row order" key={index}>
                   <div className="col-md-3 col-6 order-image mb-3">
                       <img src={item.image}></img>
                   </div>
                   <div className="col-md-5 d-flex align-items-center">
                   <h6>{item.name}</h6> 
                   </div>
                   <div className="col-md-2 align-items-center d-flex flex-column">
                       <h4>Quantity</h4>
                   <h6>{item.qty}</h6> 
                   </div>
                   <div className="mt-md-0 col-md-2 col-6 d-flex flex-column align-items-end" >
                   <h4>SubTotal</h4>
                   <h6>${item.price}</h6>
                   </div>
               </div>
               )
           })
}
           </>
       )
   } 
</div>
<div className="col-lg-3 d-flex align-items-center flex-column">
<table className="table">
<tbody>
    <tr>
        <td>Products</td>
        <td>${cart.ItemsPrice}.00</td>
    </tr>
    <tr>
        <td>Shipping</td>
        <td>$20.00</td>
    </tr>
    <tr>
        <td>Tax</td>
        <td>$10.00</td>
    </tr>
    <tr>
        <td>Total</td>
        <td>${cart.totalPrice}.00</td>
    </tr>

</tbody>
</table>
{
    cart.cartItems.length === 0 ? null : (
<div className="d-flex align-items-center">
<button type="submit" className="btn btn-danger" onClick={placeOrderHandler}>Place order</button>
</div> 
    )}
    {
        error && (<div className="col-12">
            <Message variant="alert-danger">{error}</Message>
            </div>)
    }

</div>
</div>
</div>
</div>

    )
}
export default Orders;