import React from "react";
import "./NotAvailable.css";
import noAvailable from "/img/no-connection.png";
import { HashLink } from "react-router-hash-link";

const NotAvailable: React.FC = () => {
  return (
    <div className="notificationBox">
      <h1 className="notAvailableTitle">We're Coming Soon</h1>
      <img
        className="notAvailableImg"
        src={noAvailable}
        alt="Not Available"
        loading="lazy"
      />
      <p className="notAvailableDescription">
        Sorry! This website is under construction ⚙️{" "}
      </p>
      <HashLink smooth to="/#hero">
        <button className="goHome" type="submit">
          Go back Home
        </button>
      </HashLink>
    </div>
  );
};

export default NotAvailable;
