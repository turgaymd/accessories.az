import { Order_req,Order_success,Order_fail, Order_details_req, Order_details_success, Order_details_fail,Pay_req,Pay_success,Pay_fail } from "../constants/Orderconstant";
import axios from "axios";
import { Clear_cart } from "../constants/Cartconstant";
import { logout } from "./UserAction";

export const showOrders=(order)=>async(dispatch,getState)=>{
    try{
        dispatch({type:Order_req})
        const {
            userLogin:{userInfo},
        }=getState();
        const config={
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${userInfo.token}`,
            }
        };
        const{data}=await axios.post(`/api/orders`, order,config)
        dispatch({type:Order_success,payload:data});
        dispatch({type:Clear_cart,payload:data});
        localStorage.removeItem("cartItems");

    }
    catch(error){
        const message=
        error.response && error.response.data.message ? error.response.data.message
        : error.message;
        if(message === "Not authorized,token failed")
        dispatch(logout());
        dispatch({
            type:Order_fail,
            payload:message,
         
        });

    }
};
export const orderDetails=(id)=>async(dispatch,getState)=>{
    try{
        dispatch({type:Order_details_req})
        const {
            userLogin:{userInfo},
        }=getState();
        const config={
            headers:{
                Authorization: `Bearer ${userInfo.token}`,
            }
        };
        const{data}=await axios.get(`/api/orders/${id}`, config);
        dispatch({type:Order_details_success,payload:data});
    }
    catch(error){
        const message=
        error.response && error.response.data.message ? error.response.data.message
        : error.message;
        if(message === "Not authorized,token failed")
        dispatch(logout());
        dispatch({
            type:Order_details_fail,
            payload:message,
        });

    }
}

export const PayOrder=(orderId,paymentResult)=>async(dispatch,getState)=>{
    try{
        dispatch({type:Pay_req})
        const {
            userLogin:{userInfo},
        }=getState();

        const config={
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${userInfo.token}`,
            }
        };
        const {data}=await axios.put(`/api/orders/${orderId}/pay`,paymentResult, config);
        dispatch({type:Pay_success,payload:data});
    }
    catch(error){
        const message=
        error.response && error.response.data.message ? error.response.data.message
        : error.message;
        if(message === "Not authorized,token failed")
        dispatch(logout());
        dispatch({
            type:Pay_fail,
            payload:message,
        });

    }
}