import react from "react"
import { useDispatch} from "react-redux";
import { useSelector} from 'react-redux'
import {useEffect,useState} from "react"
import { Link } from "react-router-dom";
import Loading from "./LoadingError/Loading";
import Message from "./LoadingError/error";
import { login } from "../store/actions/UserAction";
import { useContext } from "react";
import { APiContext } from "../ApiContext";
const Login=({location,history})=>{
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const dispatch=useDispatch();
const redirect = location.search ? location.search.split("=")[1] : "/";
const userLogin=useSelector((state)=>state.userLogin);
const {apiUrl}=useContext(APiContext)
const {error,loading,userInfo}=userLogin
useEffect(()=>{
    if(userInfo){
        history.push(redirect);
    }
},[userInfo,history,redirect]);
const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(login(email,password,apiUrl));
};
return (
    <>
   <div className='page-header'>
      <h2 className='page-title'>Login</h2>
      {/* <p>Define your outfits with on-trend women's jewellery from Accessories.</p> */}
      </div>
<div className="container d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
{error && <Message variant="alert-danger">{error}</Message>}
{loading && <Loading/>}
<form className="Login col-md-8 col-lg-4 col-11 text-center" onSubmit={submitHandler}>
<input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
<input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
<div className="pb-2"><button type="submit">Login</button></div>
<Link  to={redirect ? `/register?redirect=${redirect}`: "/register"}>Create an account</Link>
</form>
</div>
 </>
)
}
export default Login;