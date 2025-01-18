import axios from "axios"
import { Add_cart, Rem_cart, Save_address } from "../constants/Cartconstant"
export const addToCart=(id,qty,apiUrl)=>async(dispatch,getState)=>{
    const{data}=await axios.get(`${apiUrl}/products/${id}`)
    dispatch({
        type:Add_cart,
        payload:{
            product:data._id,
            name:data.name,
            mainImage:data.mainImage,
            price:data.price,
            countInStock:data.countInStock,
            qty,

        }
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}
// export const addToCart1=(id,qty)=>async(dispatch,getState)=>{
//     const{data}=await axios.get(`/api/shop/${id}`)

//     dispatch({
//         type:Add_cart,
//         payload:{
//             product:data._id,
//             name:data.name,
//             mainImage:data.mainImage,
//             price:data.price,
//             countInStock:data.countInStock,
//             qty,

//         }
//     })
//     localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
// }
export const remove_Cart=(id)=>(dispatch,getState)=>{
    dispatch({
        type:Rem_cart,
        payload:id,
    })
   
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))

}
export const saveShipping=(data)=>(dispatch)=>{
    dispatch({
        type:Save_address,
        payload:data,
    })
    localStorage.setItem("shippingAddress", JSON.stringify(data))
}