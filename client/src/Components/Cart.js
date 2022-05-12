import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useState,useEffect} from "react"
import{BsDash,BsPlus} from "react-icons/bs"
import{VscChromeClose} from "react-icons/vsc"
import { Link } from 'react-router-dom'
import { addToCart1,addToCart,remove_Cart } from '../store/actions/CartAction'
import {PayPalButton } from "react-paypal-button-v2"
import axios from 'axios'
const Cart=({match,location})=>{
    window.scrollTo(0,0);
    // const [show,setShow]=useState(false)
    const productId=match.params.id;
    const qty=location.search ? Number(location.search.split("=")[1]) : 1;
    const cart=useSelector((state)=>state.cart);
    const {cartItems} =cart;
    const total =cartItems.reduce((a,i)=>a+ i.qty * i.price, 0).toFixed(2);
    const dispatch=useDispatch();
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
        if(productId){
            dispatch(addToCart1(productId,qty))
        }
    },[dispatch,productId,qty])
  
    const removecart=(id)=>{
        dispatch(remove_Cart(id))
    }
    // useEffect(()=>{
    //     const pay=async()=>{
    //         const{data:clientId}=await axios.get("/api/config/paypal")
    //         const script=document.createElement("script");
    //         script.type="text/javascript";
    //         script.src="https://www.paypal.com/sdk/js?client-id=${clientId}";
    //         script.async=true;
    //         script.onload=()=>{
    //             setShow(true)
    //         }
    //         document.body.appendChild(script)
    //     }
    //     if(!productId){

    //     }
    //     else{

    //     }
    // })
    // const successPayment=(payresult)=>{
    //     dispatch(productOrder(productId,payresult))

    // }
    return(
        <>
        <div> 
            <div className='page-header text-center'>
            <div className='container-fluid text-center'>
<h1 className='card-title'>Shopping Cart</h1><span>Shop</span>   
</div>   
       </div>
{
    cartItems.length ===0 ?(
        <div className='alert alert-info text-center'>Your Cart is empty<br/><Link className='btn btn-success' to="/accessories" style={{fontSize:"16px"}}>Shop Now</Link></div>
    ) : (
<>
<div className='alert alert-info text-center'>Total Cart Products</div>
{cartItems.map(item=>(
    <>
    <div className='container'>
    <div className='col-lg-8'>
    <table className='table' >
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th className='text-center'>Quantity</th>
                <th>Total</th>
                <th></th>
            </tr>
            </thead>
            <tbody key={item._id}>
                <tr>
                    <td className='product-col'> <div className="product"><figure className='product-media'>
<a className='product-image'>
                    <img src={`${item.image}`} alt="first image"/>
                    </a>
                    </figure>
                        </div> <h4 className="product-title">
                            {item.name}
                            </h4></td>
                    <td className='prize-col'>  <div className="product-price">
                           <span className="" >{item.price}.00</span>
                             </div></td>
                    <td className="quantity-col text-center"> <div className='detailss'>
    <select value={item.qty} onChange={(e)=>dispatch(addToCart(item.product,Number(e.target.value)))}>
   <option>1</option>
   <option>2</option>
   <option>3</option>
   <option>4</option>
   <option>5</option>
 </select>
                  
                    </div></td>
                    <td className='total-col'>
                    <div className="total-prize">
                                {item.price*item.qty}.00
                                </div>
                    </td>
                    <td className='remove-col'>    <button className="btn-remove" onClick={()=>removecart(item.product)}>
                   <VscChromeClose/>
                                  </button></td>
                              </tr>
                              </tbody>
                              </table>
                              </div>
                              </div>
                               </>
                             
                ))}
                <div className='total d-flex justify-content-center'>
                    <span className='sub'>total : </span>
                    <span className='total-price'>${total}</span>
                </div>
                 <div className='container text-center pay'>
                     <div className='row'>
               <div className='paypal text-center mt-5'><PayPalButton amount={total} /></div>  
               </div>         
               </div>    
</>
    )
   
}    
            </div>
     
        
{/* <aside className='col-lg-2'>
<div className='summary summary-cart'>
    <h3 className='summary-title'>Cart Total</h3>
            </div>
</aside> */}
         
            </>
               )
            }
        export default Cart;
            {/* <div className='page-content'>
               <div className="cart">
            <div classNamse='container cardd'>
            {products.length>0 ? <>
            <div className='row-card'>
            <div className='col-lg-9'>

</div>



</div>
</> : <h2 className='cart-empty'>Your Cart is empty!</h2>} 
            </div>
        </div>
     </div>
     </div>
*/}
 