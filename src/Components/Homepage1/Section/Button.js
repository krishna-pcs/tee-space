import React from "react";

function Button(props) {
  return (
    <a href="" className="btn btn-primary">
      {props.text} <i className="bi bi-arrow-right"></i>
    </a>
  );
}

export default Button;
