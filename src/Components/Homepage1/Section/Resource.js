import React from "react";
import Title from "./Title";
import ResourceArticle from "./ResourceArticle";

function Resource() {
  return (
    <>
      <div className="resource-main">
        <div className="container">
          <Title
            title="More resources"
            pra="Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix
adipiscing eliet, cowec tetopak"
          />
          <div className="row">
            <div className="col-lg-6">
              <ResourceArticle
                imgwide="assets/img/author-1.jpg"
                badge="Create your own"
                title="Make yourself happy with our T-shirt customer…"
                img="assets/img/user.png"
                author="admin"
                date="August 20, 2022"
              />
            </div>
            <div className="col-lg-6">
              <ResourceArticle
                imgwide="assets/img/author-1.jpg"
                badge="Create your own"
                title="Make yourself happy with our T-shirt customer…"
                img="assets/img/user.png"
                author="admin"
                date="August 20, 2022"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resource;
