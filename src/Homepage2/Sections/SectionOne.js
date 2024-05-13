import React from "react";
import Product from "./Product";
const SectionOne = (props) => {
  return (
    <>
      <div className="product-main-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Product
                img="assets/img/product1.svg"
                title="Top quality"
                pra="Lorem ipsum det, consec tetur adipiscing elit duis nec fringi"
              />
            </div>
            <div className="col-md-4">
              <Product
                img="assets/img/product2.svg"
                title="Mix and match"
                pra="Lorem ipsum det, consec tetur adipiscing elit duis nec fringi"
              />
            </div>
            <div className="col-md-4">
              <Product
                img="assets/img/product3.svg"
                title="Shipping worldwide"
                pra="Lorem ipsum det, consec tetur adipiscing elit duis nec fringi"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
