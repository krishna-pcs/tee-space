import React from "react";

function FeatureCard(props) {
  return (
    <>
      <div className="col-md-4">
        <div className="feature-card">
          <img src={props.img} alt="img" />
          <div className="feature-box">
            <h4>{props.title}</h4>
            <p>{props.pra}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureCard;
