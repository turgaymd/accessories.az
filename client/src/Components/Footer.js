
const Footer = () => {
  let currentDate = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-menu">
                <div className="title">
                  <h5>Customer Services</h5>
                </div>
                <ul>
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
            <div className="col-md-3">
              <div className="footer-menu">
                <div className="title">
                  <h5> About us</h5>
                </div>
                <ul>
                  <li>
                    <a>Our Brand</a>{" "}
                  </li>
                  <li>
                    <a>Charity</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a> Careers</a>{" "}
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
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
            <div className="col-md-3">
              <div className="footer-menu">
                <div className="title">
                  <h5>Subscribe</h5>
                </div>
                <div className="subscribe">
                  <p>
                    Get E-mail updates about our latest shop and special offers.
                  </p>
                  <form>
                    <input
                      type="email"
                      placeholder="Enter your email address..."
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© {currentDate} Accessories. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
