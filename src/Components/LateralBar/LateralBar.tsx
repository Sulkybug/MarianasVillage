import React from "react";
import { FaWhatsapp, FaEnvelope, FaFacebook, FaYoutube } from "react-icons/fa";
import "./LateralBar.css";

const LateralBar: React.FC = () => {
  return (
    <div>
      <section className="buttonsBar">
        <a
          href="https://www.facebook.com/marianaisvillage/"
          target="_blank"
          className="facebook"
        >
          <FaFacebook />
        </a>

        <a
          href="https://github.com/Sulkybug"
          target="_blank"
          className="youtube"
        >
          <FaYoutube />
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=573128146792"
          className="whatsapp"
          target="_blank"
        >
          <FaWhatsapp />
        </a>

        <a
          href="mailto:marianaisvillage@gmail.com"
          className="mail"
          target="_blank"
        >
          <FaEnvelope />
        </a>
      </section>
    </div>
  );
};

export default LateralBar;
