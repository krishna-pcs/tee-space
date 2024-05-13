import React, { useState } from "react";
import Title from "../../Components/Homepage1/Section/Title";

const arr = [
  {
    id: 1,
    title: "Choose from 412 custom products in our catalog",
    image: "assets/img/click01.png",
  },
  {
    id: 2,
    title:
      "Customize your design with graphics, text or your own uploaded images.",
    image: "assets/img/card2.png",
  },
  {
    id: 3,
    title:
      "Order prints by selecting your preferred T-shirt size, style, and quantity.",
    image: "assets/img/click01.png",
  },
  {
    id: 4,
    title: "Get your order sent to your door with free standard shipping.",
    image: "assets/img/card2.png",
  },
];

const ClickSection = () => {
  const [display, Setdisplay] = useState({
    id: 1,
    title: "Choose from 412 custom products in our catalog",
    image: "assets/img/click01.png",
  });

  const changeImage = (image) => {
    Setdisplay(image);
  };

  return (
    <>
      <div className="click-section-main">
        <div className="container">
          <Title
            title="T-shirt printing made easy."
            pra="Let us show you how your product come to life."
          />
          <div className="click-section-row">
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {arr?.map((item) => (
                    <li
                      key={item.id}
                      className={`click ${
                        display?.id === item?.id && "item-selected"
                      }`}
                      onClick={() => changeImage(item)}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <img src={display?.image} alt="img"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClickSection;
