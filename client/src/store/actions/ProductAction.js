import {
    Pro_req,
    Pro_success,
    Pro_fail,
    Pro_det_req,
    Pro_det_fail,
    Pro_det_success,
    Pro_rev_req,
    Pro_rev_success,
    Pro_rev_fail,

}
from "../constants/Productsconstant"
import axios from "axios";
import { logout } from "./UserAction";

export const showProducts=(keyword=" ", apiUrl)=>async(dispatch)=>{
    try{
        dispatch({type:Pro_req})
        const{data}=await axios.get(`${apiUrl}/products?keyword=${keyword}`);
        dispatch({type:Pro_success,payload:data});
    }
    catch(error){
        dispatch({
            type:Pro_fail,
            payload:
            error.response && error.response.data.message ? error.response.data.message
            : error.message,
        });

    }
};
export const showProductss=(apiUrl)=>async(dispatch)=>{
    try{
        dispatch({type:Pro_req})
        const{data}=await axios.get(`${apiUrl}/shop`)
        dispatch({type:Pro_success,payload:data});
    }
    catch(error){
        dispatch({
            type:Pro_fail,
            payload:
            error.response && error.response.datas.message ? error.response.datas.message
            : error.message,
        });

    }
};
export const showDetails=(id,apiUrl)=>async(dispatch)=>{
    try{
        dispatch({type:Pro_det_req})
        const{data}=await axios.get(`${apiUrl}/products/${id}`);
        dispatch({type:Pro_det_success,payload:data});
    }
    catch(error){
        dispatch({
            type:Pro_det_fail,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        });

    }
}

export const showReviews=(productId,review,apiUrl)=>async(dispatch,getState)=>{
    try{ dispatch({type:Pro_rev_req})
        const {
            userLogin:{userInfo},
        }=getState();

        const config={
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${userInfo.token}`,
            }
        };
       const {data}= await axios.post(`${apiUrl}/${productId}/review`,review,config);
        dispatch({type:Pro_rev_success, payload:data});
    }
    catch(error){
        const message= error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        if(message === "Not authorized,token failed"){
        dispatch(logout());
        }
        dispatch({
            type:Pro_rev_fail,
            payload:message,
           
        });

    }
}
