import React from "react";
import HeaderTop from "./HeaderTop";

function HeaderTwo() {
  return (
    <div>
      <HeaderTop />
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-brand" href="#">
          <a href="#">
            <img src="assets/img/logo.svg" alt="logo" />
          </a>
        </div>
        {/* <div className="nav-data"> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                TeeSpace
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pages
              </a>
            </li>
            <li className="search-icon">
              <a href="">
                <i className="bi bi-search"></i>
              </a>
            </li>
          </ul>
          <div className="navbar-text">
            <div className="cart_icon">
              <i className="bi bi-bag"></i>
              <span>0</span>
            </div>
            <div className="lineinfo">
              <span>HotLine:</span>
              <a href="tel:0019008188">00 1900 8188</a>
            </div>
            <div className="btn btn-dark">Sign Up</div>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
}

export default HeaderTwo;
