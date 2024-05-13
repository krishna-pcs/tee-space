import React from "react";
import Title from "./Title";
import Button from "./Button";

function ideas() {
  return (
    <div className="idea-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <img src="assets/img/ideas.png" alt="" />
          </div>
          <div className="col-lg-5">
            <Title
              title="Free and easy way to
bring your ideas to life"
              pra="Lorem ipsum det, cowec tetur duis necgi det, consec t
eturlagix adipiscing eliet, cowec tetopak"
            />
            <Button text="Get Started" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ideas;
