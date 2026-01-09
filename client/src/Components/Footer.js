
const Footer = () => {
  let currentDate = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-menu">
                <div className="title">
                  <h5>Customer Services</h5>
                </div>
                <ul >
                  <li>
                    <a>Terms & Policies</a>
                  </li>
                  <li>
                    <a> Contact Us</a>
                  </li>
                  <li>
                    <a>Stores & Opening Hours</a>
                  </li>
                  <li>
                    {" "}
                    <a>Gift Cards</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-menu">
                <div className="title">
                  <h5>Follow us</h5>
                </div>
                <ul className="footer-contact">
                  <li>
                    {" "}
                    <a href="/about">Instagram</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/about">Facebook</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/about">Twitter</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/about">Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-menu">
                <div className="title">
                  <h5>Subscribe</h5>
                </div>
                <div className="subscribe">
                  <p>
                    Subscribe to receive updates, access to exclusive deals, and more.
                  </p>
                  <form className="d-flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                    />
                    {/* <button type="submit" className="btn btn-dark text-white  text-uppercase   mt-2">
                      Subscribe
                    </button> */}
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-bottom d-flex justify-content-between">
              <p>© {currentDate} Accessories.az. All rights reserved.</p>
              <div className="d-flex gap-4">
<p> Privacy Policy</p>
                  <p> Terms of Service</p>
              </div>
               
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
