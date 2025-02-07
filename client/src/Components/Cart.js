import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useState,useEffect} from "react"
import{VscChromeClose} from "react-icons/vsc"
import { Link } from 'react-router-dom'
import { addToCart,remove_Cart } from '../store/actions/CartAction'
import { useContext } from 'react';
import { APiContext } from '../ApiContext'
import { BsTrash } from 'react-icons/bs'
const Cart=({match,location})=>{
    
    window.scrollTo(0,0);
    const productId=match.params.id;
    // const qty=location.search ? Number(location.search.split("=")[1]) : 1;
    const cart=useSelector((state)=>state.cart);
    const {cartItems} =cart;
    const {apiUrl}=useContext(APiContext)
    const total =cartItems.reduce((a,i)=>a+ i.qty * i.price, 0).toFixed(2);
    const dispatch=useDispatch();
    const [qty, setQty]=useState(1)
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty,apiUrl))
        }
    },[dispatch,productId,qty,apiUrl])
  
    const removecart=(id)=>{
        dispatch(remove_Cart(id))
    }
    return(
        <>
        <div> 
            <div className='page-header text-center'>
            <div className='container-fluid text-center'>
<h1 className='card-title '>Shopping Cart</h1>
</div>   
       </div>
{
    cartItems.length ===0 ?(
        <div className='alert  text-center font-bold'>Your Cart is empty<br/><Link className='btn btn-info text-white' to="/accessories" style={{fontSize:"16px"}}>Shop Now</Link></div>
    ) : (
<>
<div className='alert alert-info text-center'>Total Cart Products
<Link className='text-success mx-2' to="/cart">({cartItems.length})</Link>
</div>
{cartItems.map(item=>(
    <>
    <div className='container'>
    <div className='col-lg-8'>
    <table className='table' >
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th >Quantity</th>
                <th>Total</th>
                <th></th>
            </tr>
            </thead>
            <tbody key={item._id}>
                <tr>
                    <td className='product-col d-flex'>
                         <div >                       
                        <figure className='product-media'>
<a className='product-image'>
                <img src={`${item.mainImage}`} alt={item.name}/>
                    </a>
                    </figure>
                        </div> 
                        {/* <h4 className="product-title">
                            {item.name}
                            </h4> */}
                            </td>
                    <td className='prize-col'>  <div className="product-price">
                           <span className="">{item.price}.00</span>
                             </div></td>
                    <td className="quantity-col">
                         <div className='detailss'>
                           <button className='btn' onClick={()=>setQty(qty-1)}>-</button>
                           <input value={qty}/>
                           <button className='btn' onClick={()=>setQty(qty+1)}>+</button>
    {/* <select value={item.qty} onChange={(e)=>dispatch(addToCart(item.product, Number(e.target.value)))} >
    {[...Array(item.countInStock).keys()].map((x)=>(
                <option key={x+1} value={x+1}>{x+1}</option>
                )
                )}
 </select> */}
                  
                    </div></td>
                    <td className='total-col'>
                    <div className="total-prize">
                               {total}
                                </div>
                    </td>
                    <td className='remove-col'>    <button className="btn-remove text-dark" onClick={()=>removecart(item.product)}>
                   <BsTrash/>
                                  </button></td>
                              </tr>
                              </tbody>
                              </table>
                              </div>
                              </div>
                               </>
                             
                ))}
                <div className='checkout d-flex justify-content-center mt-3 pt-3 pb-3 mb-3'>
              {userInfo ? <Link to="/checkout"><button className='btn btn-dark px-3 py-2'>Checkout</button></Link> : (
                <div className='mt-3 pt-3 pb-3 mb-3'> 
                   <Link to='/login'><button className='btn btn-dark px-3 py-2'>Login to continue</button></Link> 
                </div>
              )}   
                </div>
</>
    )
   
}    
            </div>      
            </>
               )
            }
        export default Cart;
         
 