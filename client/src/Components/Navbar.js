import {useState} from 'react'
import {Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {BsHandbag,BsSearch} from 'react-icons/bs'
import {CiLogout,CiSearch,CiShoppingCart,CiUser } from "react-icons/ci";
import {Container,Navbar,Nav,Form} from "react-bootstrap"
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

 <Navbar expand="lg" className='bg-light navbar-custom shadow-sm bg-body-tertiary navv' >
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
        <div className='nav-right d-flex gap-3 align-items-center cursor-pointer'>
        {
        searched===false ?  <a onClick={handleSearch} ><CiSearch /></a> : <></>
       }
           {
            userInfo ? (
              <>
               <Nav.Link href=""  onClick={logoutHandler}><CiLogout/></Nav.Link>
              </>
            )
            : (
              <>
<Nav.Link href="/login"><CiUser fontSize={32}/></Nav.Link>
</>
            )
          }
  <Link to="/cart" style={{color:"black"}} className="basket"><CiShoppingCart/><span className="quant">{cartItems.length}</span></Link>
        </div>
      </Navbar.Collapse>
    </Container> 
   </Navbar>
)
}
export default NavbarComp;