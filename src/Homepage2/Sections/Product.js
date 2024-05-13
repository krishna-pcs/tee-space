import React from "react";

const SectionOne = (props) => {
  return (
    <>
      <div className="product-row-box">
        <div className="product-img">
          <img src={props.img} alt="img" />
        </div>
        <div className="product-info">
          <h4>{props.title}</h4>
          <p>{props.pra}</p>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
