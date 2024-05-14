import React from "react";
import Title from "../../Components/Homepage1/Section/Title";
import Button2 from "./Button2";

const Trust = () => {
  return (
    <>
      <div className="trust-main-box">
        <div className="container">
          <Title
            title="Join the 7,000+ companies trusting us"
            pra="You’ve got the ideas, we’ve got the tools"
          />
          <Button2 text="Get Started" />
        </div>
      </div>
    </>
  );
};

export default Trust;
