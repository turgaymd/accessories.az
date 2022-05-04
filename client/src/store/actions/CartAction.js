import axios from "axios"
import { Add_cart, Rem_cart } from "../constants/Cartconstant"
export const addToCart=(id,qty)=>async(dispatch,getState)=>{
    const{data}=await axios.get(`/api/products/${id}`)
    dispatch({
        type:Add_cart,
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            qty,

        }
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}
export const addToCart1=(id,qty)=>async(dispatch,getState)=>{
    const{data}=await axios.get(`/api/shop/${id}`)

    dispatch({
        type:Add_cart,
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            qty,

        }
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}
export const remove_Cart=(id)=>(dispatch,getState)=>{
    dispatch({
        type:Rem_cart,
        payload:id,
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))

}