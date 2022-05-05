import React,{useState,useEffect} from "react";
import { useDispatch} from "react-redux";
import { useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { register } from "../store/actions/UserAction";
import Message from "./LoadingError/error";
import Loading from "./LoadingError/Loading";
const Register=({location,history})=>{
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const dispatch=useDispatch();
const redirect = location.search ? location.search.split("=")[1] : "/";
const userRegister=useSelector((state)=>state.userRegister);
const {error,loading,userInfo}=userRegister
useEffect(()=>{
    if(userInfo){
        history.push(redirect);
    }
},[userInfo,history,redirect]);
const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(register(name,email,password));
};
return (
<div className="registers">
<div className="container d-flex flex-column justify-content-center align-items-center mt-5 register">
{/* <img src="https://iephosting.com/app/views/client/bootstrap/images/graphic8.svg" id="imageAsBackground" alt="" /> */}
<h2 className="page-title">Register </h2>
{error && <Message variant="alert-danger">{error}</Message>}
{loading && <Loading/>}
<form className="Login col-md-8 col-lg-4 col-11 text-center" onSubmit={submitHandler}>
<input type="text" placeholder="First name" value={name} onChange={(e)=>setName(e.target.value)}></input>
<input type="text" placeholder="Last Name"></input>
<input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
<input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
<input type="password" placeholder="Confirm Password"></input>
<button type="submit">Register</button><br></br>
<a><Link to={redirect ? `/login?redirect=${redirect}`: "/login"}>Already have an account? Login</Link></a>
</form>
</div>
</div>
)
}
export default Register;