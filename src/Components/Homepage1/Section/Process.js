import React from "react";
import Title from "./Title";

function Process() {
  return (
    <div className="process-main">
      <div className="container">
        <Title
          title="How to create custom shirts"
          pra="Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix
        adipiscing eliet, cowec tetopak ec tetur duis necgi"
        />
        <div className="row process-box">
          <div className="col-lg-5 row-1">
            <img src="assets/img/product-1.png" alt="product-1" />
          </div>
          <div className="col-lg-2 row-2">
            <div className="number">
              <span>1</span>
            </div>
          </div>
          <div className="col-lg-5 row-3">
            <h4>Add your shirt design</h4>
            <p>
              Lorem ipsum det, cowec tetur duis nec fringi det, consec t
              eturlagix adipiscing eliet, cowec tetopak nec fringi det
              adipiscing
            </p>
          </div>
        </div>
        <div className="row process-box">
          <div className="col-lg-5 row-4">
            <img src="assets/img/product-1.png" alt="product-1" />
          </div>
          <div className="col-lg-2 row-5">
            <div className="number">
              <span>2</span>
            </div>
          </div>
          <div className="col-lg-5 row-6">
            <h4>Custom artwork &review</h4>
            <p>
              Lorem ipsum det, cowec tetur duis nec fringi det, consec t
              eturlagix adipiscing eliet, cowec tetopak nec fringi det
              adipiscing
            </p>
          </div>
        </div>
        <div className="row process-box">
          <div className="col-lg-5 row-7">
            <img src="assets/img/product-1.png" alt="product-1" />
          </div>
          <div className="col-lg-2 row-8">
            <div className="number">
              <span>3</span>
            </div>
          </div>
          <div className="col-lg-5 row-9">
            <h4>Enjoy your product</h4>
            <p>
              Lorem ipsum det, cowec tetur duis nec fringi det, consec t
              eturlagix adipiscing eliet, cowec tetopak nec fringi det
              adipiscing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
