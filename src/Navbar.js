import React from 'react'
import {Link} from "react-router-dom";
import {BsHandbag,BsSearch} from 'react-icons/bs'
import{slide as Menu} from "react-burger-menu"
var Navbar=()=>{
    const navStyle={
     color:"black",
     fontSize:20,
     textDecoration:"none",
     padding:20,
    };
    const iconstyle={
        fontSize:24,
    }
return (
  
<nav className='navbar'>
{/* <Menu> */}
<ul className='navbar-menu'>
<Link style={navStyle} to='/'><li>Home</li></Link>
<Link style={navStyle} to='/handbags'><li>Handbags</li></Link>
<Link style={navStyle} to='/jewellery'><li>Jewellery</li></Link>
<Link style={navStyle} to='/accessories'><li>Accessories</li></Link>
<Link style={navStyle} to='/holiday_shop'><li>Holiday Shop</li></Link>

</ul>
{/* </Menu> */}
<div className='search-box'>
<button class="btn-search"><BsSearch style={iconstyle}/></button>
<input type="text" placeholder='Search ...' className='input-search'></input>
</div>
<span className='basket'>
<BsHandbag/>
</span>
</nav>
)
}
export default Navbar;