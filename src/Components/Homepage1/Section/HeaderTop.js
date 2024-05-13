import React from "react";
import Button from "./Button";
function HeaderTop() {
  return (
    <>
      <div className="header-main">
        <div className="container">
          <div className="header-top-main">
            <p>
              <img src="assets/img/header-top.svg" alt="img" /> Free shipping on
              all U.S. orders $50+
            </p>
            <Button text="Shop Now" />
          </div>
        </div>
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
}

export default HeaderTop;
