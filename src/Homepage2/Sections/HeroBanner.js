import React from "react";
import Title from "../../Components/Homepage1/Section/Title.js";
import Button2 from "./Button2.js";

const HeroBanner = () => {
  return (
    <>
      <div className="card-main card-banner-home">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-6 hero-card"
              style={{
                backgroundImage: "url(assets/img/HomeTwo-banner.png)",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="card-inner">
                <Title
                  title="T-shirt printing
made easy."
                  pra="Create your design for your
online business"
                />
                <Button2 text="Create a T-shirt" />
              </div>
            </div>
            <div
              className="col-lg-6 hero-card"
              style={{
                backgroundImage: "url(assets/img/HomeBanner-Two.png)",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="card-inner">
                <Title
                  title="Bring your ideas
to life in minute"
                  pra="Print shirts for yourself or your
creative works"
                />
                <Button2 text="Shop Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
