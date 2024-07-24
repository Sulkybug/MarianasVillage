import React from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import LateralBar from "../../Components/LateralBar/LateralBar";
import NotAvailable from "../../Components/NotAvailable/NotAvailable";
import "./ServicesPage.css";

const ServicesPage: React.FC = () => {
  const [onScroll, SetOnScroll] = useState<string>("");

  window.onscroll = function () {
    SetOnScroll(window.pageYOffset > 0 ? "scroll-nav" : "");
  };
  return (
    <div>
      <Navbar onScroll={onScroll} />
      <div id="services">
        <NotAvailable />
      </div>
      <LateralBar />
      <Footer />
    </div>
  );
};

export default ServicesPage;
