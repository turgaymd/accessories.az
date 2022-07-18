import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShipping } from "../store/actions/CartAction";
const Checkout=({history})=>{
    
    const cart=useSelector((state)=>state.cart)
    const {shippingAddress}=cart;

    const [country,setCountry]=useState(shippingAddress.country);
    const [city,setCity]=useState(shippingAddress.city);
    const [street,setStreet]=useState(shippingAddress.street);
    const [zipcode,setZipcode]=useState(shippingAddress.zipcode);
    const dispatch=useDispatch()
  
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(saveShipping({country,city,street,zipcode}));
        history.push("/placeorder");
       
    }
    if(!shippingAddress){
        history.push("/checkout")
    }
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
<form onSubmit={submitHandler}>
<div className="row">
<div className="col-sm-6 mt-3">
<h4>Billing Address</h4>
<label>First Name    </label>  
<input type="text" className="form-control"/>
</div>
<div className="col-sm-6 mt-5 pt-1">
<label>Last Name </label>
<input type="text" className="form-control"/>
</div> 
</div>  
<div className="row">
<div className="col-sm-6 mt-3">
<label>Country *</label>
<input type="text" className="form-control"   defaultValue ={country}  required onChange={(e)=>setCountry(e.target.value)} />
</div>
<div className="col-sm-6 mt-3">
<label>ZIP Code *</label>
<input type="text" className="form-control" defaultValue={zipcode} required onChange={(e)=>setZipcode(e.target.value)} />
</div>
</div>
<div className="mt-3">
<label>City *</label>
<input type="text" className="form-control" defaultValue={city}  required onChange={(e)=>setCity(e.target.value)} /> 
</div>
<div className="mt-3">
<label>Street Name *</label>
<input type="text" className="form-control" placeholder="Behruz Nuriyev St 55/57" defaultValue={street} required onChange={(e)=>setStreet(e.target.value)}/>
</div>
<div className="mt-3 orders">
<label>Order notes(optional)</label>
<textarea className="form-control" cols="30" rows="4"></textarea>
</div>
<div className="checkout text-center mt-3"><button type="submit" className="payp">Place Order</button></div>
</form>
</div>
</div>
</div>

</>
    )

}
export default Checkout;