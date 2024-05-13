import React from "react";
import Title from "./Title";
import Button from "./Button";

function Vacation() {
  return (
    <div className="vacation-main">
      <div className="container">
        <Title
          title="Enjoy up your vacations
in the best T-shirts"
          pra="T-shirts that keep you moving."
        />
        <div className="banner-btn">
          <Button text="Shop Now" />
          <Button text="Contact Us" />
        </div>
      </div>
    </div>
  );
}

export default Vacation;
