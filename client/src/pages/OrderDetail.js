import {useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux"
import { orderDetails } from "../store/actions/OrderAction";
import { Pay_reset } from "../store/constants/Orderconstant";
import Message from "../Components/LoadingError/error";
import axios from "axios";
import { PayOrder } from "../store/actions/OrderAction";

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
          <div className='page-header text-center'>
            <div className='container-fluid text-center'>
<h1 className='card-title '>Order details</h1>
</div>   
       </div>
        <div className="container">
        <div className="row my-orders mt-3 ml-2 ">
        <div className="col-lg-7">
           {
               order.orderItems.length===0 ? (
                   <Message variant="alert-danger mt-3">Your cart is empty</Message>
               ) : (
                   <>
                   {order.orderItems.map((item,index)=>{
                       return (
                       <div className="row order align-items-center" key={index}>
                           <div className="col-md-3 col-6 order-image mb-3">
                               <img src={item.mainImage}></img>
                           </div>
                           <div className="col-md-5 d-flex align-items-center">
                           <h6>{item.name}</h6> 
                           </div>
                           <div className="col-md-2 align-items-center d-flex flex-column">
                           <h6>{item.qty}</h6> 
                           </div>
                           <div className="mt-md-0 col-md-2 col-6 d-flex flex-column align-items-end" >
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
        <div className="col-md-5 ">
            <div className="card order-card">

        <div className="order-info">
        <h6><strong>Customer</strong></h6>
        <p>Turgay</p>
        </div>
        <div className="order-info">
        <h6><strong>Shipping</strong></h6>
        <p> {order.shippingAddress.country}</p>
        {/* {
            order.isPaid ? (
                <div className="p-2">
                    <p className="text-center">Paid on May 15</p>
                    </div>
            ) : (
                <div className="p-2">
                <p className="text-center">Not Paid</p>
                </div>
            )
        } */}
        </div>    
        <div className="order-info">
        <h6><strong>Deliver to</strong></h6>
        <p>{order.shippingAddress.city}, {order.shippingAddress.street}, {order.shippingAddress.zipcode}</p> 
         {/* {
             order.isDelivered ? (
                 <div className="p-2 col-12">
                 <p className="text-center">Delivered on June 15</p>
                 </div>
             ) : (
                 <div className="p-2 col-12">
                 <p className="text-center">Not Delivered</p>
                </div>
            )
         } */}
        </div>
        </div>
                        
            </div>
           </div>
        </div>
        </>
    )
}
export default Order;