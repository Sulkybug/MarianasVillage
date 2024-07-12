import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  let time = new Date();
  let year = time.getFullYear();
  const footerText = `Copyright © ${year} Mariana's Village`;

  return (
    <footer>
      <p className="footer-text">{footerText}</p>
    </footer>
  );
};

export default Footer;
