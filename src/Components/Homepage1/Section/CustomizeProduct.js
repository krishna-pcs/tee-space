import React from "react";
import Title from "./Title";
import Button from "./Button";
import CustomizeInfo from "./CustomizeInfo";
import Card from "./Card";

function CustomizeProduct() {
  return (
    <>
      <div className="customize-product-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 customize">
              <Title
                title="Why customize
products with
TeeSpace?"
                pra="Heading 2 → Lorem ipsum det, cowec tetur duis necgi"
              />
              <Button text="View All Features" />
            </div>
            <div className="col-lg-9 customize-data">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <CustomizeInfo
                    img="../assets/img/Charges.svg"
                    title="NO Die & plate charges"
                    pra="Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con"
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <CustomizeInfo
                    img="../assets/img/printing.svg"
                    title="High quality offset
printing"
                    pra="Lorem ipsum det, cowec
tetur duis necgi det, consect
eturlagix adipiscing eliet duis
necgi det, con"
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <CustomizeInfo
                    img="../assets/img/payment.svg"
                    title=" Secure payment"
                    pra="Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con"
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <CustomizeInfo
                    img="../assets/img/cust-style.svg"
                    title=" Custom size & style"
                    pra="Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con"
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <CustomizeInfo
                    img="../assets/img/delivery.svg"
                    title="Fast & free delivery"
                    pra="Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con"
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <CustomizeInfo
                    img="../assets/img/quantity.svg"
                    title="Low minimum order
quantity"
                    pra="Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con"
                  />
                </div>

                <div
                  className="col-lg-12 banner-card"
                  style={{
                    backgroundImage: "url(assets/img/banner-card.png)",
                    backgroundRepeat: "no-repeat",
                    padding: "30px",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="card-inner">
                    <Title
                      title="Create your own
custom products online!"
                      pra="Free and easy way to bring your ideas to life"
                    />
                    <Button text="Order Custom Shirts" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomizeProduct;
