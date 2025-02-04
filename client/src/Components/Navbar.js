import React,{useState} from 'react'
import {Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {BsHandbag,BsSearch} from 'react-icons/bs'
import {Container,Navbar,Nav,NavDropdown, Form,Button} from "react-bootstrap"
import { logout } from '../store/actions/UserAction';
var NavbarComp=({match})=>{
  const dispatch=useDispatch()
  const [keyword,setKeyword]=useState()
  const [searched,setSearched]=useState(false)
  let history =useHistory();
  const cart=useSelector((state)=>state.cart);
  const {cartItems} =cart;
  const userLogin=useSelector((state)=>state.userLogin);
  const {userInfo}=userLogin;
const handleSearch=()=>{
setSearched(true)
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
          <Nav.Link href="/" >Home</Nav.Link>
          <Nav.Link href="/accessories" >Accessories</Nav.Link>
          <Nav.Link href="/about" >About us</Nav.Link>
          <Nav.Link href="/contact" >Contact</Nav.Link>
         
        
        </Nav> 
        <Form className='d-flex' onSubmit={submitHandler}>
       
      
       {
       
            searched===true ? <Form.Control
            type='search'
            className='me-2'
            placeholder='Search'
            aria-label='Search'
            onChange={(e)=>setKeyword(e.target.value)}
            /> : <></>

          }
          
        </Form>
       
        <div className='d-flex gap-4 align-items-center cursor-pointer'>
        {
            userInfo ? (
              <>
               <Nav.Link href=""  onClick={logoutHandler}>Log out</Nav.Link>
              </>
            )
            : (
              <>
<Nav.Link href="/login">Login</Nav.Link>
</>
            )
          }
        {
        searched===false ?  <a onClick={handleSearch} ><BsSearch fontSize={30}/></a> : <></>
       }
        <span className='basket'>
  <Link to="/cart" style={{color:"black"}}><BsHandbag/></Link><span className="quant">{cartItems.length}</span>
  </span>
        </div>
        
      </Navbar.Collapse>

    </Container> 
 
   </Navbar>
)
}
export default NavbarComp;