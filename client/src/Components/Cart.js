
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
    // const qty=location.search ? Number(location.search.split("=")[1]) : 1;
    const cart=useSelector((state)=>state.cart);
    const {cartItems} =cart;
    const {apiUrl}=useContext(APiContext)
    const total =Number(cartItems.reduce((a,i)=>a+ i.qty * i.price, 0).toFixed(2));
    const dispatch=useDispatch();
    // const [qty, setQty]=useState(1)
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,1,apiUrl))
        }
    },[dispatch,productId,apiUrl])
  
    const removecart=(id)=>{
        dispatch(remove_Cart(id))
    }
    return(
        <article>
        <title>Shopping Cart</title>
        <meta name='author ' content="Turgay"/>
        <meta name='description' content='Shopping Cart'/>
        <meta name="keywords" content="Shopping, cart, accessories, handbags, products"/>
        <div> 
              <div className='page-header'>
      <h2 className='page-title'>Your Cart</h2>
      </div>
{
    cartItems.length ===0 ?(
        <div className='alert  text-center font-bold'>No items in your cart<br/><Link className='btn empty-cart-btn text-white' to="/accessories" style={{fontSize:"16px"}}>Shop Now</Link></div>
    ) : (
<>
    <div className='container'>
        <div className='row'>
    <div className='col-lg-8'>
    <table className='table' >
        <thead>
            <tr>
                <th>Product</th>
                  <th></th>
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
                         <div className='d-flex'>                       
                        <figure className='product-media'>
<a className='product-image'>
                <img src={`${item.mainImage}`} alt={item.name}/>
                    </a>
                    </figure>
              
                        </div> 
                            </td>
                            <td>
                                      {item.name}
                            </td>
                    <td className='prize-col'>  <div className="product-price">
                           <span className="">${item.price}.00</span>
                             </div></td>
                    <td className="quantity-col">
                         <div className='qty-box'>
                           <button className='btn' onClick={(e)=>dispatch(addToCart(item.product, item.qty-1, apiUrl))}>-</button>
                           <input value={item.qty} />
                           <button className='btn' onClick={(e)=>dispatch(addToCart(item.product, item.qty+1, apiUrl))}>+</button>
    {/* <select value={item.qty} onChange={(e)=>dispatch(addToCart(item.product, Number(e.target.value)))} >
    {[...Array(item.countInStock).keys()].map((x)=>(
                <option key={x+1} value={x+1}>{x+1}</option>
                )
                )}
 </select> */}
                  
                    </div></td>
                    <td className='total-col'>
                    <div className="total-prize">
                      
                                </div>
                    </td>
                    <td className='remove-col'>    <button className="btn-remove text-dark" onClick={()=>removecart(item.product)}>
                   <BsTrash/>
                                  </button></td>
                              </tr>
                                    ))}

                              </tbody>
                                </table>
                                    
                                  </div>
                                  <div className="col-lg-4">
                                    <div className='cart-summary'>
                                        <h4>Summary</h4>
                                            <ul className="subtotal">

        <hr/>
        <li>Subtotal<span>${total}</span></li>
        <li>Shipping <span>$0</span></li>
        <li>Discount <span> - </span></li>
        <li>Total <span>${total}</span></li>
        <hr/>
    </ul>
                                    </div>
                                    
                                             <div className='checkout d-flex justify-content-center mt-3 pt-3 pb-3 mb-3'>
          
             {userInfo ? <Link to="/checkout"><button className='btn btn-dark px-3 py-2'>Go to checkout</button></Link> : (
                <div className='mt-3 pt-3 pb-3 mb-3'> 
                   <Link to='/login'><button className='btn btn-dark px-3 py-2'>Login to continue</button></Link> 
                </div>
              )}   
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

 