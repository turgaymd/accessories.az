import { Add_cart,Clear_cart,Rem_cart, Save_address} from "../constants/Cartconstant";
const CartReducer=(state={cartItems:[],shippingAddress:{}},action)=>{
switch(action.type){
    case Add_cart:
        const item=action.payload;
        const check=state.cartItems.find((p)=>p.product===item.product);
        if(check){
        return {
            ...state,cartItems:state.cartItems.map((p)=>p.product===check.product ? item:p)
        }
    }
        else{
            return {
                ...state,cartItems:[...state.cartItems,item],
            }
        }
            case Rem_cart:
            return {
                   ...state,
                   cartItems:state.cartItems.filter((p)=>p.product !==action.payload)
            }
            case Save_address:
                return {
                       ...state,shippingAddress:action.payload,
                }
                case Clear_cart:
                    return { ...state,cartItems:[] }
        default :
        return state
        

}

}
export default CartReducer;