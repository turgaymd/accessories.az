import { createContext, useContext } from "react"
export const APiContext=createContext(null)

const apiUrl=process.env.NODE_ENV==='production' ? 'https://accessories-az-ten.vercel.app/api' : 'http://localhost:8000/api'

const ApiProvider=(props)=>{
    return(
<APiContext.Provider value={{apiUrl}}>
    {props.children}
</APiContext.Provider>
)}
export default ApiProvider;