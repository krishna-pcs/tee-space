import React from "react";
import Title from "../../Components/Homepage1/Section/Title";
import Button2 from "../Sections/Button2";

const Offer = () => {
  return (
    <>
      <div className="offer-main-box">
        <div className="container">
          <div className="offer-box">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <img src="assets/img/offer.png" alt="img" />
              </div>
              <div className="col-md-6">
                <div className="offer-data">
                  <Title
                    title="10,000+ of free images, icons, and graphics"
                    pra="You’ve got the ideas, we’ve got the tools"
                  />
                  <Button2 text="Get Started" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
