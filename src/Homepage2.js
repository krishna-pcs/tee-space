import React from "react";
import Header from "./Homepage2/Sections/Header";
import Footer from "./Homepage2/Sections/Footer";
import HeroBanner from "./Homepage2/Sections/HeroBanner";
import SectionOne from "./Homepage2/Sections/SectionOne";
import Imgbox from "./Homepage2/Sections/Imgbox";
import ClickSection from "./Homepage2/Sections/ClickSection";
import Features from "./Homepage2/Sections/Features";

function Homepage2() {
  return (
    <>
      <Header />
      <HeroBanner />
      <SectionOne />
      <Imgbox />
      <ClickSection />
      <Features />
      <Footer />
    </>
  );
}

export default Homepage2;
