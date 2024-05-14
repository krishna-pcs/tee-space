import React from "react";
import Header from "./Homepage2/Sections/Header";
import Footer from "./Homepage2/Sections/Footer";
import HeroBanner from "./Homepage2/Sections/HeroBanner";
import SectionOne from "./Homepage2/Sections/SectionOne";
import Imgbox from "./Homepage2/Sections/Imgbox";
import ClickSection from "./Homepage2/Sections/ClickSection";
import Features from "./Homepage2/Sections/Features";
import Offer from "./Homepage2/Sections/Offer";
import Trust from "./Homepage2/Sections/Trust";

function Homepage2() {
  return (
    <>
      <Header />
      <HeroBanner />
      <SectionOne />
      <Imgbox />
      <ClickSection />
      <Features />
      <Offer />
      <Trust />
      <Footer />
    </>
  );
}

export default Homepage2;
