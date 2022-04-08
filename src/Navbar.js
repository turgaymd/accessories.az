import React from 'react'
import {Link} from "react-router-dom";
import {BsHandbag,BsSearch} from 'react-icons/bs'
import{slide as Menu} from "react-burger-menu"
import {FaBars} from "react-icons/fa"
import {Container,Navbar,Nav,NavDropdown} from "react-bootstrap"
var NavbarComp=()=>{
    const navStyle={
     color:"black",
     fontSize:20,
     textDecoration:"none",
     padding:20,
    };
    const iconstyle={
        fontSize:24,
    }
    const navd={
        color:"white",
    }
return (
    <>
    <Navbar bg="" expand="lg">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={navd}>
          <Nav.Link href="/" >Home</Nav.Link>
          <Nav.Link href="/handbags">HandBags</Nav.Link>
          <Nav.Link href="/jewellery">Jewellery</Nav.Link>
          <Nav.Link href="/accessories">Accessories</Nav.Link>
          <Nav.Link href="/holiday_shop">Holiday Shop</Nav.Link>
        </Nav>
    <div className='search-box'>
  <button class="btn-search"><BsSearch style={iconstyle}/></button>
  <input type="text" placeholder='Search ...' className='input-search'></input>
  </div>
  <span className='basket'>
  <BsHandbag/>
  </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
// <nav className='navbar'>
// <ul className='navbar-menu'>
// <Link style={navStyle} to='/'><li>Home</li></Link>
// <Link style={navStyle} to='/handbags'><li>Handbags</li></Link>
// <Link style={navStyle} to='/jewellery'><li>Jewellery</li></Link>
// <Link style={navStyle} to='/accessories'><li>Accessories</li></Link>
// <Link style={navStyle} to='/holiday_shop'><li>Holiday Shop</li></Link>
// </ul>
// </nav>
)
}
export default NavbarComp;