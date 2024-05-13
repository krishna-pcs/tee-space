import React from "react";
import Testimonial from "./Testimonial";
import Slider from "react-slick";
import Title from "./Title";

const TestimonialData = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonial-section">
      <div className="container">
        <Title
          title="What People Are Saying"
          pra="We provide support for more than 15K+ Businesses."
        />
        <div className="slider-container">
          <Slider {...settings}>
            <Testimonial
              img="assets/img/test.png"
              name="Dean D."
              role="Director"
              pra="“ Great quality products - Flags, programs for
                exceptional capacities, birthday, and occasion welcome are
                largely still mainstream on paper.”"
            />

            <Testimonial
              img="assets/img/test.png"
              name="Dean D."
              role="Director"
              pra="“ Great quality products - Flags, programs for
                exceptional capacities, birthday, and occasion welcome are
                largely still mainstream on paper.”"
            />
            <Testimonial
              img="assets/img/test.png"
              name="Dean D."
              role="Director"
              pra="“ Great quality products - Flags, programs for
                exceptional capacities, birthday, and occasion welcome are
                largely still mainstream on paper.”"
            />
            <Testimonial
              img="assets/img/test.png"
              name="Dean D."
              role="Director"
              pra="“ Great quality products - Flags, programs for
                exceptional capacities, birthday, and occasion welcome are
                largely still mainstream on paper.”"
            />
            <Testimonial
              img="assets/img/test.png"
              name="Dean D."
              role="Director"
              pra="“ Great quality products - Flags, programs for
                exceptional capacities, birthday, and occasion welcome are
                largely still mainstream on paper.”"
            />
            <Testimonial
              img="assets/img/test.png"
              name="Dean D."
              role="Director"
              pra="“ Great quality products - Flags, programs for
                exceptional capacities, birthday, and occasion welcome are
                largely still mainstream on paper.”"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialData;
