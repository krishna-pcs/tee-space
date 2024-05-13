import React from "react";

const ResourceArticle = (props) => {
  return (
    <div className="resource-box">
      <img src={props.imgwide} alt="img" width="310px" height="200px" />
      <div className="resource-data">
        <div className="resource-title">
          <span className="badge badge-light badge-green">{props.badge}</span>
          <h4>{props.title}</h4>
        </div>
        <div className="author-box">
          <div className="author-img">
            <img src={props.img} alt="img" />
          </div>
          <div className="author-data">
            <p>
              by<strong>{props.author}</strong>
            </p>
            <span>{props.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceArticle;
