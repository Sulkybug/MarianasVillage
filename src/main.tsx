import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./App.tsx";
import AboutUsPage from "./Pages/AboutUsPage.tsx";
import DatingPage from "./Pages/Dating/DatingPage.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/dating" element={<DatingPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
