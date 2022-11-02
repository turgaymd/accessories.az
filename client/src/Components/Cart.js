import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useState,useEffect} from "react"
import{VscChromeClose} from "react-icons/vsc"
import { Link } from 'react-router-dom'
import { addToCart1,addToCart,remove_Cart } from '../store/actions/CartAction'
const Cart=({match,location})=>{
    
    window.scrollTo(0,0);
    const productId=match.params.id;
    const qty=location.search ? Number(location.search.split("=")[1]) : 1;
    const cart=useSelector((state)=>state.cart);
    const {cartItems} =cart;
    const total =cartItems.reduce((a,i)=>a+ i.qty * i.price, 0).toFixed(2);
    const dispatch=useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

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
                <th className='text-center'>Quantity</th>
                <th>Total</th>
                <th></th>
            </tr>
            </thead>
            <tbody key={item._id}>
                <tr>
                    <td className='product-col'> <div className="product"><figure className='product-media'>
<a className='product-image'>
                    <img src={`${item.mainImage}`} alt={item.name}/>
                    </a>
                    </figure>
                        </div> <h4 className="product-title">
                            {item.name}
                            </h4></td>
                    <td className='prize-col'>  <div className="product-price">
                           <span className="">{item.price}.00</span>
                             </div></td>
                    <td className="quantity-col text-center">
                         <div className='detailss'>
                           
    <select value={item.qty} onChange={(e)=>dispatch(addToCart(item.product, Number(e.target.value)))} >
    {[...Array(item.countInStock).keys()].map((x)=>(
                <option key={x+1} value={x+1}>{x+1}</option>
                )
                )}
 </select>
                  
                    </div></td>
                    <td className='total-col'>
                    <div className="total-prize">
                               {total}
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
                <div className='checkout d-flex justify-content-center'>
              {userInfo ? <Link to="/checkout"><button className='btn btn-success'>Continue to checkout</button></Link> : (
                <div> 
                   <Link to='/login'><button className='btn btn-danger'>Please login to continue</button></Link> 
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
         
 