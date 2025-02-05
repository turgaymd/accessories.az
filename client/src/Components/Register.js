import React,{useState,useEffect} from "react";
import { useDispatch} from "react-redux";
import { useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { register } from "../store/actions/UserAction";
import Message from "./LoadingError/error";
import Loading from "./LoadingError/Loading";
import { useContext } from "react";
import { APiContext } from "../ApiContext";
const Register=({location,history})=>{
 const {apiUrl}=useContext(APiContext)
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
    dispatch(register(name,email,password,apiUrl));
};
return (
<div className="registers">
{/* <div className='page-header'>
      <h2 className='page-title'>Register</h2>

      </div> */}
<div className="container d-flex flex-column justify-content-center align-items-center register mt-4">
{error && <Message variant="alert-danger">{error}</Message>}
{loading && <Loading/>}
<form className="auth col-md-8 col-lg-4 col-11 text-center" onSubmit={submitHandler}>
<h2 class="text-center ">Create Account </h2>
<input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
<input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
<input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
<input type="password" placeholder="Confirm Password"></input>
<div className="pb-3"><button type="submit">Register</button></div>
<Link to={redirect ? `/login?redirect=${redirect}`: "/login"}>Already have an account? Login</Link>
</form>
</div>
</div>
)
}
export default Register;