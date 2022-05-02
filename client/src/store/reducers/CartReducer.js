import { Add_cart,Rem_cart} from "../constants/Cartconstant";
const CartReducer=(state={cartItems:[]},action)=>{
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
          
        default :
        return state
        

}

}
export default CartReducer;