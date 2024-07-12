import React from "react";
import "./Investors.css";
import investment from "/img/investmentCouple.jpg";
import { HashLink } from "react-router-hash-link";

const Investors: React.FC = () => {
  return (
    <div id="investors">
      <img
        src={investment}
        alt=""
        width="1495"
        height="980"
        className="investmentImg"
      />
      <div className="texArea">
        <div className="titleBox">
          <h1>MAKE YOUR</h1>
          <h1>MONEY GROW</h1>
          <h1 className="boldTitle">AT MARIANA'S VILLAGE</h1>
        </div>
        <p className="investingText">
          Invest in Medellín's premier destination for affordable living and
          lucrative investment opportunities. We offer diverse accommodations
          and seamless services to ensure a smooth transition to Colombian life.
          Focused on projects building rural housing, our investment
          opportunities promise growth in Colombia's thriving economy. Join us
          to expand our business and be part of a dynamic and growing venture.
        </p>
        <HashLink smooth to="/dating">
          <button className="moreAboutButton">Learn more</button>
        </HashLink>
      </div>
    </div>
  );
};

export default Investors;
