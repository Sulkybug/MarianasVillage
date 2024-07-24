import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./App.tsx";
import AboutUsPage from "./Pages/AboutUs/AboutUsPage.tsx";
import DatingPage from "./Pages/Dating/DatingPage.tsx";
import HousingPage from "./Pages/Housing/HousingPage.tsx";
import CountrySidePage from "./Pages/CountrySide/CountrySidePage.tsx";
import ServicesPage from "./Pages/ServicesPage/ServicesPage.tsx";
import InvestingPage from "./Pages/Investing/InvestingPage.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/housing" element={<HousingPage />} />
        <Route path="/dating" element={<DatingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/countrySide" element={<CountrySidePage />} />
        <Route path="/investing" element={<InvestingPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
