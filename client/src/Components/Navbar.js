import React,{useState} from 'react'
import {Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {BsHandbag,BsSearch} from 'react-icons/bs'
import {Container,Navbar,Nav,NavDropdown, Form,Button} from "react-bootstrap"
import { logout } from '../store/actions/UserAction';
var NavbarComp=({match})=>{
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

 <Navbar expand="lg" className='bg-body-tertiary navv' >
    <Container>
    <Navbar.Brand href="#brand"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" className='ydb'>Home</Nav.Link>
          <Nav.Link href="/accessories" className='ydb'>Accessories</Nav.Link>
          <Nav.Link href="/about" className='ydb'>About us</Nav.Link>
          <Nav.Link href="/contact" className='ydb'>Contact</Nav.Link>
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
        <Form className='d-flex' onSubmit={submitHandler}>
          <Form.Control
          type='search'
          placeholder='Search'
          className='me-2'
          aria-label='Search'
          onChange={(e)=>setKeyword(e.target.value)}
          />
        </Form>
  <span className='basket'>
  <Link to="/cart" style={{color:"black"}}><BsHandbag/></Link><span className="quant">{cartItems.length}</span>
  </span>
      </Navbar.Collapse>
    </Container> 
   </Navbar>
)
}
export default NavbarComp;