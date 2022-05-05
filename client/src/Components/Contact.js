
import React, { useState } from "react";
import {useRef } from "react";
import emailjs from "@emailjs/browser"
const Result=()=>{
  return(
    <>
    <p> Your message has been   successfully sent.I will contact you soon</p>
      </>
  )
}
const Contact=()=>{
  const [result,showResult]=useState(false)
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
return(
  <>
     <div className='des'>
      <h2 className='page-title'>Contact Us</h2>
      </div>
      <div className="container contact mt-4">
      <div className="row">
          <div className="col-md-6">
      <div className='card cardd'>
          <h4 className='pt-5'>Get In Touch </h4>
          <form ref={form} onSubmit={sendEmail}>
              <div className='row d-flex'>       
            <div className='col-lg-6'>
              <label>Name</label>
              <br/>
              <input type="text" className="form-control" name="user_name" required></input>
              </div>            
            <div className='col-lg-6'>
            <label>Email</label>
            <br/>
          <input type="email" className="form-control"  name="user_email" required></input>
          </div>    
          </div> 
          <label className="mt-3">Message</label>
        <textarea className="form-control mt-3" name="message"/>
          <div className='text-center'>
      <button className="submit" type="submit">Send</button>
          </div>
          <div className="row">
            {result ? <Result/> : null}
          </div>
          </form>
      </div>
      </div>
      <div className="col-md-6">
      <div className="">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48627.62268861599!2d49.78739417910156!3d40.38167419999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307df041db0e89%3A0xc10506025e79ca02!2sAmelie%20couture!5e0!3m2!1saz!2s!4v1651352292518!5m2!1saz!2s" width="700" height="560"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
      </div>
      </div>
</>
)
}
export default Contact;