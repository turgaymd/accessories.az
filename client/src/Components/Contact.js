
import React, { useState } from "react";
import {useRef } from "react";
import emailjs from "@emailjs/browser"
import SweetAlert2 from 'react-sweetalert2';
 
const Contact=()=>{
  const [result,showResult]=useState(false)
  const [swalProps, setSwalProps] = useState({});
  const form=useRef()
  const sendEmail=(e)=>{
    e.preventDefault();
  emailjs.sendForm('service_c2mz4fp', 'template_qlewx5f', form.current, 'wIZ861omrA8UV6ipT')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset();
  showResult(true);
}
function handleClick(){
  setSwalProps({
      show: true,
      title: 'Message sent successfully'
  }); 
}


return(
  <>
     <div className='page-header'>
      <h2 className='page-title'>Contact Us</h2>
      </div>
      <div className="container contact mt-4">
      <div className="row d-flex justify-content-center">
          <div className="col-md-6">
      <div className='card cardd mt-5'>
          <h4 className='pt-3'>Get In Touch </h4>
          <form ref={form} onSubmit={sendEmail}>
              <div className='row d-flex justify-content-center'>       
            <div className='col-lg-6'>
              <label className="mb-2">Name</label>
              <input type="text" className="form-control pb-3" name="user_name" required></input>
              </div>            
            <div className='col-lg-6'>
            <label className="mb-2">Email</label>
          <input type="email" className="form-control pb-3"  name="user_email" required></input>
          </div>    
          </div> 
          <label className="mt-2">Message</label>
        <textarea className="form-control mt-2" name="message"/>
          <div className='text-center'>
      <button className="submit" type="submit" onClick={handleClick}>Send</button>
          </div>
          <div className="row">
            {result ?   <SweetAlert2 {...swalProps}/>: null}
          </div>
          </form>
      </div>
      </div>
      <div className="col-md-6 mt-5">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4462172340304!2d49.93281867571179!3d40.42111727143889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030638f7157b94f%3A0xfa384fc53b0cf3d6!2sRizvan%20Teymurov%2063!5e0!3m2!1saz!2saz!4v1700066580271!5m2!1saz!2saz" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
      </div>
</>
)
}
export default Contact;