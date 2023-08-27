import {createStore,combineReducers,applyMiddleware} from "redux";
import {ProductsReducer,ProductsReducerss,ProductsDetailsReducer,ProductsDetailssReducer, ProductsReviewReducer} from "./reducers/ProductsReducer";
import CartReducer from "./reducers/CartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import { userLoginReducer, userRegisterReducer } from "./reducers/UserReducer";
import { createOrder, paymentOrder, showOrder } from "./reducers/OrderReducer";
const reducer=combineReducers({
   productList:ProductsReducer,
   productDetails:ProductsDetailsReducer,
   productReview:ProductsReviewReducer,
   cart:CartReducer,
   userLogin:userLoginReducer,
   userRegister:userRegisterReducer,
   orderCreate:createOrder,
   detailOrder:showOrder,
   payOrder:paymentOrder,
});
const cartItemsFromLocalStorage=localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
:[];

const userInfoFromLocalStorage=localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;

const addressLocalStorage=localStorage.getItem("shippingAddress")
? JSON.parse(localStorage.getItem("shippingAddress"))
:{};

const initialState={
    cart:{
        cartItems:cartItemsFromLocalStorage,
        shippingAddress:addressLocalStorage
    },
    userLogin:{userInfo:userInfoFromLocalStorage}
};
const middleware=[thunk];
const store=createStore(reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;