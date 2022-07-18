import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux"
import { orderDetails } from "../store/actions/OrderAction";
import { Pay_reset } from "../store/constants/Orderconstant";
import {BiUser} from "react-icons/bi"
import {IoLocationSharp} from "react-icons/io5"
import {GrDeliver} from "react-icons/gr"
import Message from "./LoadingError/error";
import Loading from "./LoadingError/Loading";
import axios from "axios";
import { PayOrder } from "../store/actions/OrderAction";
import {PayPalButton} from "react-paypal-button-v2"

const Order=({match})=>{

    const [sdkReady,setSdkReady]=useState(false);

    const orderId=match.params.id;
    const dispatch=useDispatch();
   
    const detailOrder=useSelector((state)=>state.detailOrder);
    const {order,loading,error}=detailOrder;

    const payOrder=useSelector((state)=>state.payOrder);
    const {loading:loadingPay,success:successPay}=payOrder;

    useEffect(()=>{

    const addScript=async()=>{
        const {data:clientId}=await axios.get("/api/config/paypal")
        const script=document.createElement("script");
        script.type="text/javascript";
        script.src=`https://www.paypal.com/sdk/js?client-id=${clientId}`;
        script.async=true
        script.onload=()=>{
            setSdkReady(true)
        }
        document.body.appendChild(script)
    }
    if(!order || successPay){
dispatch({type:Pay_reset})
dispatch(orderDetails(orderId))
    }
    else if(!order.isPaid){
if(!window.paypal){
    addScript();
}
    else{
setSdkReady(true);
    }
}
},[dispatch,orderId,successPay,order])
   
    
    order.ItemsPrice=(
        order.orderItems.reduce((a,i)=>a+ i.qty * i.price, 0)
    )
    order.totalPrice=order.ItemsPrice+30;


    const successPayment=(paymentResult)=>{
        console.log(paymentResult);
        dispatch(PayOrder(orderId,paymentResult));
    }
    return(
        <>
        <div className="container">
        {
            loading ? (<Loading/>) : error ? (<Message variant="alert-danger">{error}</Message>) : <>

<div className="row order-details">
        <div className="col-md-4 center">
        <div className="row">
        <div className="col-md-4">
        <div className="alert-success order-box"><BiUser style={{fontSize:24}}/>
        </div>
        </div>
        <div className="col-md-8 center">
        <h6><strong>Customer</strong></h6>
        <p>Turgay</p>
        <p><a href={'mailto:memmedovturqay871@gmail'}>memmedovturqay871@gmail</a></p>
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
        <p>Shipping: {order.shippingAddress.country}</p>
        <p>Pay method: PayPal</p>
        {
            order.isPaid ? (
                <div className="bg-info p-2 col-12">
                    <p className="text-center">Paid on May 15</p>
                    </div>
            ) : (
                <div className="bg-danger p-2 col-12">
                <p className="text-center">Not Paid</p>
                </div>
            )
        }
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
        <p>{order.shippingAddress.city}, {order.shippingAddress.street}, {order.shippingAddress.zipcode}</p> 
         {
             order.isDelivered ? (
                 <div className="bg-info p-2 col-12">
                 <p className="text-center">Delivered on June 15</p>
                 </div>

             ) : (
                 <div className="bg-danger p-2 col-12">
                 <p className="text-center">Not Delivered</p>
                </div>
            )
         }
        </div>
        </div>
        </div>
        </div>
      

            </>
        }
         </div>
        <div className="container">
        <div className="row my-orders mt-3 ml-2 ">
        <div className="col-lg-8">
           {
               order.orderItems.length===0 ? (
                   <Message variant="alert-danger mt-3">Your cart is empty</Message>
               ) : (
                   <>
                   {order.orderItems.map((item,index)=>{
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
                           <h6>${item.price * item.qty}</h6>
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
                <td>${order.ItemsPrice}.00</td>
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
                <td>${order.totalPrice}.00</td>
            </tr>
        
        </tbody>
        </table>
        {
            !order.isPaid && (
                <div className="col-12">
                    {loadingPay && <Loading/>}
                    {
                        !sdkReady ? (
                            <Loading/>
                        ) :
                        (
                            <PayPalButton amount={400} onSuccess={successPayment}/>
                        )
                    }
                 </div>
            )
          
        }
        </div>
        </div>
        </div>
        </>
    )
}
export default Order;