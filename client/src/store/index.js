import {createStore,combineReducers,applyMiddleware} from "redux";
import {ProductsReducer,ProductsReducerss,ProductsDetailsReducer,ProductsDetailssReducer} from "./reducers/ProductsReducer";
import CartReducer from "./reducers/CartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import { userLoginReducer, userRegisterReducer } from "./reducers/UserReducer";
const reducer=combineReducers({
   productList:ProductsReducer,
   productLists:ProductsReducerss,
   productDetails:ProductsDetailsReducer,
   productDetailss:ProductsDetailssReducer,
   cart:CartReducer,
   userLogin:userLoginReducer,
   userRegister:userRegisterReducer,
});
const cartItemsFromLocalStorage=localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
:[];
const userInfoFromLocalStorage=localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;
const initialState={
    cart:{
        cartItems:cartItemsFromLocalStorage,
    },
    userLogin:{userInfo:userInfoFromLocalStorage}
};
const middleware=[thunk];
const store=createStore(reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;