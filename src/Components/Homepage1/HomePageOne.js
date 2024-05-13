import React from "react";
import HeaderTwo from "./Section/HeaderTwo.js";
import HeroBanner from "./Section/HeroBanner.js";
import LogoSection from "./Section/LogoSection.js";
import Process from "./Section/Process.js";
import Ideas from "./Section/ideas.js";
import FAQ from "./Section/Faq.js";
import PickForYou from "./Section/PickForYou.js";
import Card from "./Section/Card.js";
import CustomizeProduct from "./Section/CustomizeProduct.js";
import Resource from "./Section/Resource.js";
import TestimonialData from "./Section/TestimonialData.js";
import Vacation from "./Section/Vacation.js";
import SocialBox from "./Section/SocialBox.js";
import Footer from "./Section/Footer.js";

function HomePageOne() {
  const faqData = [
    {
      question: "Premium quality custom t-shirts",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "Easy to create & customize",
      answer:
        "You can install React using npm or yarn. For example, 'npm install react' or 'yarn add react'.",
    },
    {
      question: "Free standard shipping",
      answer:
        "You can install React using npm or yarn. For example, 'npm install react' or 'yarn add react'.",
    },
    {
      question: "Thousands of free templates",
      answer:
        "You can install React using npm or yarn. For example, 'npm install react' or 'yarn add react'.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <>
      <HeaderTwo />
      <HeroBanner />
      <LogoSection />
      <Process />
      <Ideas />
      <FAQ data={faqData} />
      <PickForYou />
      <Card />
      <CustomizeProduct />
      <Resource />
      <TestimonialData />
      <Vacation />
      <SocialBox />
      <Footer />
    </>
  );
}

export default HomePageOne;
