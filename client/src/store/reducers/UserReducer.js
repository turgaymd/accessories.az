import { User_log_req, User_log_suc,User_log_fail } from "../constants/Userconstant";
import { User_reg_req, User_reg_suc,User_reg_fail } from "../constants/Userconstant";
export const userLoginReducer=(state={},action)=>{
    switch(action.type){
        case User_log_req:
            return {loading:true};
        case User_log_suc:
            return {loading:false,userInfo:action.payload};
        case User_log_fail:
                return { loading:false,error:action.payload};
        default:
            return state;
                  
    }
};
export const userRegisterReducer=(state={},action)=>{
    switch(action.type){
        case User_reg_req:
            return {loading:true};
        case User_reg_suc:
            return {loading:false,userInfo:action.payload};
        case User_reg_fail:
                return { loading:false,error:action.payload};
        default:
            return state;
                  
    }
};