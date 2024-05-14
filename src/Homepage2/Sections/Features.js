import React from "react";
import Title from "../../Components/Homepage1/Section/Title";
import FeatureCard from "./FeatureCard";
import FeatureData from "./FeatureData";

const Features = () => {
  return (
    <>
      <div className="feature-main-row">
        <div className="container">
          <Title
            title="All the features you need"
            pra="You’ve got the ideas, we’ve got the tools"
          />

          <div className="feature-box-main">
            <div className="row gy-4">
              {FeatureData.map((val, ind) => {
                return (
                  <FeatureCard
                    key={ind}
                    img={val.img}
                    title={val.title}
                    pra={val.pra}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
