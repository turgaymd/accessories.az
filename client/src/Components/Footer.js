import React from "react";
import {BsInstagram,BsFacebook,BsPinterest} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
var Footer=()=>{
 return(
    <div>
        <div className="footer container-fluid mt-5">
            <div className="row">
            <div className="col-md-3">
        <div className="footer-menu">
            <div className="title">
                <h4>Delivery & Return</h4>
            </div>
                <ul>
                <li><a>Check Order</a></li>
                <li><a>Delivery & Collection</a></li>
                <li><a>International Delivery</a></li>
             <li><a>Returns & Refunds</a></li>
                </ul>
            </div>
            </div>
            <div className="col-md-3">
            <div className="footer-menu">
            <div className="title">
                <h4>Customer Services</h4>
            </div>
                <ul>
              <li><a>Terms & Policies</a></li>
              <li><a> Contact Us</a></li>  
               <li><a>Stores & Opening Hours</a></li>  
             <li> <a>Gift Cards</a>  </li>
                </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-menu">
            <div className="title">
                <h4 className="text-center">   About</h4>
                </div>
                <ul>
                 <li><a>Our Brand</a> </li>
               <li><a>Charity</a> </li>
                <li> <a> Carrers</a> </li>
                  <li><a>Klarna</a></li> 
                </ul>
            </div>
            </div>
            <div className="col-md-3">
            <div className="footer-menu">
            <div className="title">
                <h4>Contact</h4>
            </div>
                <ul>
                <li><strong>Email:</strong>Accessorize@gmail.com</li>
                <li><strong>Phone:</strong>+994(70)511067700</li>
                </ul>
                <div className="social-media">
                <a href=""><BsInstagram/></a>
               <a href=""><FaTwitter/></a>
               <a href=""><BsFacebook/></a>
               <a href=""><BsPinterest/></a>
               </div>
            </div>
            </div>
            </div>
            </div>
        <div className="footer-bottom">
            <p>© 2022 ACCESSORIZE BRANDS LTD. All rights reserved.</p>
        </div>
    </div> 
   
 )   
}
export default Footer;