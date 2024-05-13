import React from "react";
import Button from "./Button";
function HeroBanner() {
  return (
    <div className="banner-main">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="banner-box">
              <span className="badge badge-light">Create your own</span>
              <h1>
                Make the most <br /> of o <br /> printing
              </h1>
              <p>
                What’s more, we do it right! A full administration printing
                background. Print shirts for yourself or your online business
              </p>
              <div className="banner-btn">
                <Button text="Shop Now" />
                <a href="" className="play-btn">
                  How We Work <i className="bi bi-play-fill"></i>
                </a>
              </div>
              <div className="banner-counter-main">
                <div className="banner-counter">
                  <span>4k+</span>
                  <p>Collections</p>
                </div>
                <div className="banner-counter">
                  <span>9k+</span>
                  <p>items trusted to deliver</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="assets/img/Hero-banner.png" alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
