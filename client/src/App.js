
import './App.css';
import Footer from './Components/Footer';
import {Switch, Route} from "react-router-dom";
import Holiday_shop from './Components/Holiday_shop'
import Accessories from './Components/Accessories';
import Home from './Components/Home';
import NavbarComp from './Components/Navbar';
import Cart from "./Components/Cart"
import  Details from "./Components/Details"
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Register from './Components/Register.js';
import Detailss from './Components/Detailss';
import Contact from './Components/Contact';
const App=()=>{
  return (
    <>
<NavbarComp/>
<Switch>
<Route exact path="/" component={Home}/> 
<Route exact path="/search/:keyword" component={Accessories}/> 
<Route exact path="/accessories" component={Accessories} />
<Route path="/holiday_shop" component={Holiday_shop}/>
<Route path="/contact" component={Contact}/>
<Route path="/cart/:id?" component={Cart}/>
<Route path="/checkout" component={Checkout}/>
<Route path="/login" component={Login}/>
<Route path="/register" component={Register}/>
<Route path="/products/:id" component={Details}/>
<Route path="/shop/:id" component={Detailss}/>
</Switch>
<Footer/> 
 </>
  );
}
//https://dev.to/bnevilleoneill/building-an-e-commerce-website-with-react-and-8base-5mo

export default App;
