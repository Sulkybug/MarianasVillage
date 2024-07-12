import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Product from "./Components/Product/Product";
import Investors from "./Components/Investors/Investors";
import LateralBar from "./Components/LateralBar/LateralBar";
import Footer from "./Components/Footer/Footer";

function App() {
  const [onScroll, SetOnScroll] = useState<string>("");

  window.onscroll = function () {
    SetOnScroll(window.pageYOffset > 0 ? "scroll-nav" : "");
  };
  return (
    <>
      <Navbar onScroll={onScroll} />
      <Hero />
      <Product />
      <Investors />
      <LateralBar />
      <Footer />
    </>
  );
}

export default App;
