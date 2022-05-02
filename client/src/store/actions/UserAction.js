import axios from "axios";
import {User_log_req,User_log_suc,User_log_fail} from "../constants/Userconstant"
import {User_reg_req,User_reg_suc,User_reg_fail,user_logout} from "../constants/Userconstant"
export const login=(email,password)=>async(dispatch)=>{
    try{
        dispatch({type:User_log_req});
        const config={
            headers:{
                "Content-Type":"application/json",
            },
        };
        const {data}=await axios.post(`/api/users/login`,{email,password},
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
        const {data}=await axios.post(`/api/users`,{name,email,password},
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