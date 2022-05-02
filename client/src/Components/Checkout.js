import React from "react";
import { Link } from "react-router-dom";
const Checkout=()=>{
    return (
        <>
<div className='page-header text-center'>
<div className='container text-center'>
<h1 className='card-title'>Checkout</h1><span>Shop</span> 
</div>
</div>
<div className="container">
<div className="row">
<div className="col-lg-9">
<form>
<div className="row">
<div className="col-sm-6 mt-3">
<h4>Billing Address</h4>
<label>First Name *   </label>  
<input type="text" className="form-control" required></input>
</div>
<div className="col-sm-6 mt-5 pt-1">
<label>Last Name *</label>
<input type="text" className="form-control" required></input>
</div> 
</div>  
<div className="mt-3">
<label>Street Name *</label>
<input type="text" className="form-control" placeholder="Behruz Nuriyev St 55/57" required></input>
</div>
<div className="row">
<div className="col-sm-6 mt-3">
<label>ZIP Code *</label>
<input type="text" className="form-control" required></input>
</div>
<div className="col-sm-6 mt-3">
<label>Phone *</label>
<input type="text" className="form-control" required></input>
</div>
</div>
<div className="mt-3">
<label>Email address *</label>
<input type="text" className="form-control" required></input> 
</div>
<div className="mt-3">
<label>Card Number *</label>
<input type="text" className="form-control" required></input> 
</div>
<div className="mt-3 orders">
<label>Order notes(optional)</label>
<textarea className="form-control" cols="30" rows="4"></textarea>
</div>
</form>
</div>
{/* <div className="col-lg-3 text-center mt-3">
<h4 className="text-center">Payment</h4>
<label>Card Number *</label><input type="text" className="form-control" required></input>
</div> */}
</div>
</div>
<div className="pay text-center mt-3"><Link to="/login"><button className="payp">Place Order</button></Link></div>
</>
    )

}
export default Checkout;