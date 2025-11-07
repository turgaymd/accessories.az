import {Pro_req,Pro_rev_req} from "../constants/Productsconstant";
import {Pro_success,Pro_rev_success} from "../constants/Productsconstant";
import {Pro_fail,Pro_rev_fail,Pro_rev_reset} from "../constants/Productsconstant";
import {Pro_det_req} from "../constants/Productsconstant";
import {Pro_det_success} from "../constants/Productsconstant";
import {Pro_det_fail} from "../constants/Productsconstant";

export const ProductsReducer=(state={products:[]},action)=>{
    switch(action.type){
           case Pro_req:
            return {loading:true,products:[]};
             case Pro_success:
                return {loading:false,
                    // pages:action.payload.pages,
                    // page:action.payload.page,
                    products:action.payload
                }
                case Pro_fail:
                    return {
                       loading:false, error:action.payload
                    }
           default:
               return state;
    }
};
export const ProductsReducerss=(state={shop:[ ]},action)=>{
    switch(action.type){
           case Pro_req:
            return {loading:true,shop:[]}
             case Pro_success:
                return {loading:false,shop:action.payload
                }
                case Pro_fail:
                    return {
                       loading:false, error:action.payload
                    }
           default:
               return state;
    }
};
export const ProductsDetailssReducer=(
    state={product:{}},action)=>{
    switch(action.type){ 
           case Pro_det_req:
            return {...state,loading:true};
             case Pro_det_success:
                return {loading:false,product:action.payload
                }
                case Pro_det_fail:
                    return {
                       loading:false, error:action.payload
                    }
           default:
               return state;
    }
}
export const ProductsDetailsReducer=(
    state={product:{reviews:[]}},action)=>{
    switch(action.type){ 
           case Pro_det_req:
            return {...state,loading:true};
             case Pro_det_success:
                return {loading:false,product:action.payload
                }
                case Pro_det_fail:
                    return {
                       loading:false, error:action.payload
                    }
           default:
               return state;
    }
}
export const ProductsReviewReducer=(state={ },action)=>{
    switch(action.type){ 
        case Pro_rev_req:
            return {loading:true};
       case Pro_rev_success:
                return {loading:false,success:true};
        case Pro_rev_fail:
            return {
                loading:false, error:action.payload};
       case Pro_rev_reset:
                return {};
           default:
               return state;
    }
}