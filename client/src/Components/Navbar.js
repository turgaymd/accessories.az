import React,{useState} from 'react'
import {Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {BsHandbag,BsSearch} from 'react-icons/bs'
import {Container,Navbar,Nav,NavDropdown} from "react-bootstrap"
import { logout } from '../store/actions/UserAction';
var NavbarComp=()=>{
  const dispatch=useDispatch()
  const [keyword,setKeyword]=useState()
  let history =useHistory();
  const cart=useSelector((state)=>state.cart);
  const {cartItems} =cart;
  const userLogin=useSelector((state)=>state.userLogin);
  const {userInfo}=userLogin;
    const iconstyle={
        fontSize:24,
    }
   const submitHandler=(e)=>{
e.preventDefault()
if(keyword.trim()){
  history.push(`/search/${keyword}`)
}else{
  history.push("/")
}
  }
   const logoutHandler=()=>{
dispatch(logout())
   }
return (
    <>
    <div className='topnavbar' style={{color:"black"}}>
 <Navbar bg="" expand="lg" className='navv'>
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" className='ydb'>Home</Nav.Link>
          <Nav.Link href="/accessories" className='ydb'>Accessories</Nav.Link>
          <Nav.Link href="/holiday_shop" className='ydb'>Holiday_shop</Nav.Link>
          <Nav.Link href="/contact" className='ydb'>Contact us</Nav.Link>
          {
            userInfo ? (
              <>
               <Nav.Link href="" className='ydb' onClick={logoutHandler}>Log out</Nav.Link>
              </>
            )
            : (
              <>
<Nav.Link href="/login" className='ydb'>Login</Nav.Link>
</>
            )
          }
        
        </Nav> 
  <form onSubmit={submitHandler}>
  <div className='search-box'>
  <button className="btn-search"><BsSearch style={iconstyle}/></button>
  <input type="text" placeholder='Search ...' className='input-search' onChange={(e)=>setKeyword(e.target.value)}></input>
  </div>
  </form>
  <span className='basket'>
  <Link to="/cart" style={{color:"black"}}><BsHandbag/></Link><span className="quant">{cartItems.length}</span>
  </span>
      </Navbar.Collapse>
    </Container> 
   </Navbar>
  </div>
  </>
)
}
export default NavbarComp;