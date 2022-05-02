
import React from "react";
const form_endpoint="";
class Contact extends React.Component{
//     const [submit,setSubmit]=useState(false);
//     const handleSubmit=()=>{ 
// setTimeout(()=>{
//     setSubmit(true);
// },100);
//     }
//     if(submit){
//         return(
//             <>
//             <div>Thank You!</div>
//             <div>We will be in touch soon</div>
//             </>
//         )
//     }
    // constructor(props){
    //     super(props)
    //         this.state={
    //             Your_message:"your message"
    //     }
    //     }
    
render(){
return(
  <>
     <div className='des'>
      <h2 className='page-title'>Contact</h2>
      </div>
      <div className="container contact mt-4">
      <div className="row">
          <div className="col-md-6">
      <div className='card cardd'>
          <h4 className='pt-5'>Get In Touch </h4>
          <form action={form_endpoint} method="POST" target='_blank'>
              <div className='row d-flex'>       
            <div className='col-lg-6'>
              <input type="text" className='form-control' placeholder="Name" name="name" required></input>
              </div>            
            <div className='col-lg-6'>
          <input type="email" className='form-control' placeholder="Email" name="email" required></input>
          </div>    
          </div> 
          <div className='col-lg-12 mt-3'>
          <input type="text" className='form-control ' placeholder="Subject" name="subject" required></input>
          </div>
        <textarea className="form-control mt-3" placeholder="Your message"/>
          <div className='text-center'>
          <button className='submit' type='submit'>Send</button>
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
}
export default Contact;