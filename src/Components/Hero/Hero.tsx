import React from "react";
import "./Hero.css";
import LogoMarianas from "/img/LogoMarianas.png";
import { HashLink } from "react-router-hash-link";

const Hero: React.FC = () => {
  return (
    <div id="hero">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Czgye6BfMN4?&start=25&amp;end=300;controls=0&autoplay=1&mute=1&playsinline=1&playlist=Czgye6BfMN4&loop=1&amp;start=10"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture; web-share; fullscreen"
      ></iframe>
      <div className="coveredBox"></div>
      <div className="content">
        <img
          className="LogoCompany"
          src={LogoMarianas}
          alt="Company Logo"
          loading="lazy"
        />
        <div className="buttonsArea">
          <HashLink smooth to="/#product">
            <button className="heroButton" type="submit">
              ― Our Products ―
            </button>
          </HashLink>

          <HashLink smooth to="/#investors">
            <button className="heroButton" type="submit">
              ― Invest with us ―
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
