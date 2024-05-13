import React from "react";

const Testimonial = (props) => {
  return (
    <div className="testimonial-box">
      <div className="test-heading">
        <div className="img-box">
          <img src={props.img} alt="img" />
        </div>
        <div className="head-content">
          <h5 className="name">{props.name} </h5>
          <span className="role">{props.role}</span>
        </div>
      </div>
      <div className="test-data">
        <p>{props.pra}</p>
      </div>
    </div>
  );
};

export default Testimonial;
