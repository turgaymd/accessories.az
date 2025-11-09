import "./App.css";
import Footer from "./Components/Footer";
import { Switch, Route } from "react-router-dom";
import Accessories from "./pages/Accessories.js";
import Home from "./pages/Home.js";
import NavbarComp from "./Components/Navbar";
import Cart from "./pages/Cart.js";
import Details from "./pages/Details.js";
import Checkout from "./pages/Checkout.js";
import Login from "./pages/Login";
import Register from "./pages/Register.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About";
import ApiProvider from "./ApiContext.js";
import Order from "./pages/OrderDetail.js";

const App = () => {
  return (
    <>
      <ApiProvider>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/search/:keyword" component={Accessories} />
          <Route exact path="/page/:pagenumber" component={Accessories} />
          <Route exact path="/search/:keyword/page/:pageNumber" component={Accessories}/>
          <Route exact path="/accessories" component={Accessories} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/products/:id" component={Details} />
          {/* <Route path="*" component={NotFound}/> */}
          <Route path="/checkout" component={Checkout} />
          {/* <Route path="/placeorder" component={Orders}/> */}
          <Route path="/order/:id" component={Order} />
        </Switch>
        <Footer />
      </ApiProvider>
    </>
  );
};
//https://dev.to/bnevilleoneill/building-an-e-commerce-website-with-react-and-8base-5mo

export default App;
