import React from "react";
import Button from "../../Components/Homepage1/Section/Button";
function HeaderTop() {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="header-top-section">
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
            <div className="header-top-main">
              <p>
                <img src="assets/img/header-top.svg" alt="img" /> Free shipping
                on all U.S. orders $50+
              </p>
            </div>
            <div className="login-btn">
              <a href="">Login</a>
              <button className="btn btn-dark">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderTop;
