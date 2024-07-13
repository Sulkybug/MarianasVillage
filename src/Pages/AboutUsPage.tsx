import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import LateralBar from "../Components/LateralBar/LateralBar";
import "./AboutUsPage.css";

const AboutUsPage: React.FC = () => {
  const [onScroll, SetOnScroll] = useState<string>("");

  window.onscroll = function () {
    SetOnScroll(window.pageYOffset > 0 ? "scroll-nav" : "");
  };
  return (
    <div>
      <Navbar onScroll={onScroll} />
      <div className="AboutBox">
        <div className="AboutPage">
          <h1 className="AboutUsTitle">About</h1>

          <p className="AboutDescription">
            Welcome to your premier destination for affordable living and
            investment opportunities in the heart of Medellín, Colombia.
            Offering tailored housing solutions and a range of seamless
            services, from cooking to transportation, we ensure your transition
            to Colombian life is smooth and hassle-free. Explore our diverse
            accommodation options, from cozy apartments to spacious villas, and
            seize the chance to invest in Colombia's thriving economy.
          </p>
        </div>
      </div>
      <LateralBar />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
