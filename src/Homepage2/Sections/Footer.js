import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-info">
                <a>
                  <img
                    src="assets/img/logo.svg"
                    style={{ maxWidth: "150px" }}
                  />
                </a>
                <a href="mailto:hello@teespace.io" className="email">
                  hello@teespace.io
                </a>
                <strong>
                  <a href="tel:+02 036 038 3996">+02 036 038 3996</a>
                </strong>
                <address>
                  3665 Paseo Place, Suite 0960 <br />
                  San Diego
                </address>

                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 footer-links">
              <h4>Information</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Our Blog</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Start a return</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Contsct Us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Shipping FAQ</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">My Account</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Print Provider</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Become a Partner</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Custom Products</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Make Your Own Shirt</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6  footer-links">
              <h4>Any questions</h4>
              <div className="questions-box">
                <a href="mailto:hello@teespace.com" className="mailto">
                  hello@teespace.com
                </a>
                <p>Find answers to all of your questions</p>
                <div className="social-icons">
                  <div className="icon-box">
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>

                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <a href="#" target="_blank">
            <img src="assets/img/payment-method.png" />
          </a>
          <div className="copyright">© 2022 TeeSpace. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
