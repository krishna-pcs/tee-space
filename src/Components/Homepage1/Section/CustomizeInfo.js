import React from "react";

function CustomizeInfo(props) {
    console.log(props);
  return (
    <>
      <div className="info-customize-box">
        <img alt="img" src={props.img}></img>
        <h5>{props.title}</h5>
        <p>{props.pra}</p>
      </div>
    </>
  );
}

export default CustomizeInfo;
