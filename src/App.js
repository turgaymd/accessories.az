import logo from './logo.svg';
import './App.css';
import {BsHandbag} from 'react-icons/bs'
import {FaAngleUp} from 'react-icons/fa'
import Footer from './Footer';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './Navbar';
import Handbags from './Handbags';
import Jewellery from './Jewellery';
import Holiday_shop from './Holiday_shop'
import Accessories from './Accessories';
import bootstrap from 'bootstrap';
import Home from './Home';
import { Provider } from 'react-redux';
import store from './store'
// import Scroll from './Scroll'
function App() {
  return (
    <>
      <Provider store={store}>
  <BrowserRouter>

  {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
<Navbar/>
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route path="/handbags" element={<Handbags/>}/>
<Route path="/jewellery" element={<Jewellery/>}/>
<Route exact path="/accessories" element={<Accessories/>}/>
<Route path="/holiday_shop" element={<Holiday_shop/>}/>
{/* <Route exact path="/shoes" element={<App/>}/>

<Route exact path="/gifts" element={<App/>}/>  */}
</Routes>
</BrowserRouter>
 <Footer/> 
 </Provider>
 </>
      /* <a href="#" data-target="html" className='scroll'><FaAngleUp/></a> */ 
  );
}

export default App;
