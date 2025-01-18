import axios from "axios";
import {User_log_req,User_log_suc,User_log_fail} from "../constants/Userconstant"
import {User_reg_req,User_reg_suc,User_reg_fail,user_logout} from "../constants/Userconstant"
import { User_det_req,User_det_suc,User_det_fail } from "../constants/Userconstant";
export const login=(email,password)=>async(dispatch)=>{
    try{
        dispatch({type:User_log_req});
        const config={
            headers:{
                "Content-Type":"application/json",
            },
        };
        const {data}=await axios.post(`https://accessories-az-ten.vercel.app/api/users/login`,{email,password},
        config
        );
        dispatch({type:User_log_suc,payload:data});
        localStorage.setItem("userInfo",JSON.stringify(data));
    }
    catch(error){
dispatch({
    type:User_log_fail,
    payload:
    error.response && error.response.data.message
    ? error.response.data.message
    : error.message,
});
}
};
export const register=(name,email,password)=>async(dispatch)=>{
    try{
        dispatch({type:User_reg_req});
        const config={
            headers:{
                "Content-Type":"application/json",
            },
        };
        const {data}=await axios.post(`https://accessories-az-ten.vercel.app/api/users`,{name,email,password},
        config
        );
        dispatch({type:User_reg_suc,payload:data});
        localStorage.setItem("userInfo",JSON.stringify(data));
    }
    catch(error){
dispatch({
    type:User_reg_fail,
    payload:
    error.response && error.response.data.message
    ? error.response.data.message
    : error.message,
});
}
};
export const logout=()=>(dispatch)=>{
    localStorage.removeItem("userInfo");
    dispatch({type:user_logout})
    document.location.href="/login"  
}
export const getUserDetails=(id)=>async (dispatch,getState)=>{
    try{
        dispatch({type:User_det_req});
        const {
            userlogin:{userInfo},
        }=getState()
        const config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`,
            },
        };
        const {data}=await axios.get(`https://accessories-az-ten.vercel.app/api/users/${id}`,config);
        dispatch({type:User_det_suc,payload:data});
}catch(error){
    const message= error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
    if(message==="Not authorized, token failed"){
        dispatch({
            type:User_det_fail,
            payload:message
        })
    }

}
}