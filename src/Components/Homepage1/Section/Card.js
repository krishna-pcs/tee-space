import React from "react";
import Title from "./Title";
import Button from "./Button";
function Card() {
  return (
    <>
      <div className="card-main">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              style={{
                backgroundImage: "url(assets/img/card1.png)",
                backgroundRepeat: "no-repeat",
                padding: "30px",
              }}
            >
              <div className="card-inner">
                <Title
                  title="Thousands of
free templates"
                  pra="Free and easy way to bring
your ideas to life"
                />
                <Button text="Explore More" />
              </div>
            </div>
            <div
              className="col-lg-6"
              style={{
                backgroundImage: "url(assets/img/card2.png)",
                backgroundRepeat: "no-repeat",
                padding: "30px",
              }}
            >
              <div className="card-inner">
                <Title
                  title="Create your
unique style"
                  pra="Free and easy way to make
your creative to life"
                />
                <Button text="Shop Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
