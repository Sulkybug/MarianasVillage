import React from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import LateralBar from "../../Components/LateralBar/LateralBar";
import NotAvailable from "../../Components/NotAvailable/NotAvailable";
import "./CountrySidePage.css";

const CountrySidePage: React.FC = () => {
  const [onScroll, SetOnScroll] = useState<string>("");

  window.onscroll = function () {
    SetOnScroll(window.pageYOffset > 0 ? "scroll-nav" : "");
  };
  return (
    <div>
      <Navbar onScroll={onScroll} />
      <div id="countrySide">
        <NotAvailable />
      </div>
      <LateralBar />
      <Footer />
    </div>
  );
};

export default CountrySidePage;
