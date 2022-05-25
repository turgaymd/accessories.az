import React from "react"
import {Redirect,Route} from "react-router-dom"
function PrivateRouter({component:Component,...rest}){
    const userLogin=useSelector
    return(
<Route component={(props)=>{
    if(token){
return <Component {...props}/>
    }
    else{ 
return <Component to ={"/login"}/>
    }
}}
/>
    )
}
export default PrivateRouter