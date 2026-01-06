
import { useSelector,useDispatch } from 'react-redux'
import {useState,useEffect} from "react"
import { Link } from 'react-router-dom'
import { addToCart,remove_Cart } from '../store/actions/CartAction'
import { useContext } from 'react';
import { APiContext } from '../ApiContext'
import { BsTrash } from 'react-icons/bs'
const Cart=({match,location})=>{
    
    window.scrollTo(0,0);
    const productId=match.params.id;
    const qty=location.search ? Number(location.search.split("=")[1]) : 1;
    const cart=useSelector((state)=>state.cart);
    const {cartItems} =cart;
    const {apiUrl}=useContext(APiContext)
    const total =Number(cartItems.reduce((a,i)=>a+ i.qty * i.price, 0).toFixed(2));
    const dispatch=useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty,apiUrl))
        }
    },[dispatch,productId,qty, apiUrl])
    const removecart=(id)=>{
        dispatch(remove_Cart(id))
    }
    return(
        <article>
        <div> 
  

{
    cartItems.length ===0 ?(
        <div className='alert  text-center font-bold'>No items in your cart<br/><Link className='btn empty-cart-btn text-white' to="/accessories" style={{fontSize:"16px"}}>Shop Now</Link></div>
    ) : (
<>
    <div className='container py-5'>
            <h2 className='pb-4'>Shopping Cart</h2>
        <div className='row'>
    <div className='col-lg-8 table-responsive'>
    <table className='table' >
        <thead>
            <tr>
                  <th>Product</th>
                <th>Price</th>
                <th >Quantity</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
    
            <tbody>
                    {cartItems.map(item=>(
                <tr key={item.product}>
                    <td className='product-col d-flex'>
                         <div className='d-flex align-items-center gap-3'>                       
                     
<a className='product-media'>
                <img src={`${item.mainImage}`} alt={item.name}/>
                    </a>
                       {item.name}
              
                        </div> 
                            </td>
                    <td className='prize-col'>  <div className="product-price">
                           <span className="">${item.price}.00</span>
                             </div></td>
                    <td className="quantity-col">
                         <div className='btn-group'>
                           <button className='btn ' onClick={(e)=>dispatch(addToCart(item.product, item.qty-1, apiUrl))}>-</button>
                           <input value={item.qty} className='form-control' style={{width:"50px"}}/>
                           <button className='btn' onClick={(e)=>dispatch(addToCart(item.product, item.qty+1, apiUrl))}>+</button>

                    </div></td>
                    <td className='total-col'>
                    <div className="total-prize">
                      
                                </div>
                    </td>
                    <td className='remove-col'>    <button className="btn btn-outline-danger " onClick={()=>removecart(item.product)}>
                   <BsTrash/>
                                  </button></td>
                              </tr>
                                    ))}

                              </tbody>
                                </table>
                                    
                                  </div>
                                  <div className="col-lg-4">
                                    <div className='card'>
                                        <div className='card-body'>
                                        <h4>Summary</h4>
                                            <ul className="subtotal">

        <hr/>
        <li>Subtotal<span>${total}</span></li>
        <li>Shipping <span>$0</span></li>
        <li>Discount <span> - </span></li>
        <li className='fw-bold'>Total <span>${total}</span></li>
        <hr/>
    </ul>
                                
                                    
                                             <div className='checkout'>
          
             {userInfo ?
             
             <div className='d-flex flex-column  gap-3'>
             <Link to="/checkout"><button className=' w-100 btn btn-primary px-3 py-2'>Proceed to checkout</button></Link> 
               <Link to="/accessories"><button className=' w-100 btn btn-dark px-3 py-2'>Continue to shopping</button></Link> 
           </div>
             :
             
             (
                <div className=''> 
                   <Link to='/login'><button className='w-100 btn btn-dark px-3 py-2'>Login to continue</button></Link> 
                </div>
              )}   
                </div>
                                  </div>
                                  </div>
                              </div>
                                  </div>
                              </div>
                              </>              
    )
   
}    
            </div>      
            </article>
               )
            }
        export default Cart;

 