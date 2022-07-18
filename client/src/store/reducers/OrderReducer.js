import { Order_details_fail, Order_details_req, Order_details_success, Order_fail, Order_req, Order_reset, Order_success } from "../constants/Orderconstant";
import { Pay_req,Pay_success,Pay_fail,Pay_reset } from "../constants/Orderconstant";
export const  createOrder=(state={},action)=>{
    switch(action.type){
        case Order_req:
            return {loading:true};
        case Order_success:
            return {loading:false,success:true,order:action.payload};
        case Order_fail:
                return { loading:false,error:action.payload};
                case Order_reset:
                    return {};
        default:
            return state;
                  
    }
};
export const showOrder=(state={loading:true,orderItems:[],shippingAddress:{}},action)=>{
    switch(action.type){
        case Order_details_req:
            return {...state,loading:true};
        case Order_details_success:
            return {loading:false,order:action.payload};
        case Order_details_fail:
                return { loading:false,error:action.payload};
        default:
            return state;
                  
    }
};
export const paymentOrder=(state={}, action)=>{
    switch(action.type){
        case Pay_req:
            return {loading:true};
        case Pay_success:
            return {loading:false,success:true};
        case Pay_fail:
                return { loading:false,error:action.payload};
        case  Pay_reset:
        return {};       
        default:
            return state;
                  
    }
};