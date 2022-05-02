import React from "react"
import {useWindowScroll} from "react-use"
import {FaAngleUp} from 'react-icons/fa'
function Scroll(){
    const{y: pageYOffset}=useWindowScroll
    return (
        <div className="scroll">
     <FaAngleUp/>
        </div>
   
        
    )
}
export default Scroll;