import React, { useState } from "react";
import Title from "./Title";

const FAQ = ({ data }) => {
  // State to manage expand/collapse state of each FAQ item
  const [expanded, setExpanded] = useState({});

  // Function to toggle expand/collapse state
  const toggleItem = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="faq-main">
      <div className="container">
        <Title
          title="T-shirt printing made easy."
          pra="Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix
adipiscing eliet, cowec tetopak"
        />
        <div className="row faq-row">
          <div className="col-lg-5">
            <div className="faq-list">
              {data.map((item, index) => (
                <div className="faq-item" key={index}>
                  <div className="question" onClick={() => toggleItem(index)}>
                    {item.question}
                    <span
                      className={`toggle-icon ${
                        expanded[index] ? "expanded" : ""
                      }`}
                    ></span>
                  </div>
                  {expanded[index] && (
                    <div className="answer">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-7">
            <img src="assets/img/faq.png" alt="product-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
