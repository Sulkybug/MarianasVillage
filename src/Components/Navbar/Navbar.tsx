import React from "react";
import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";
import LogoMarianas from "/img/LogoMarianas.png";

interface NavbarProps {
  onScroll: string;
}

const Navbar: React.FC<NavbarProps> = ({ onScroll }) => {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavBar = (): void => {
    // Specify the return type as void
    if (window.innerWidth < 1024 && navRef.current) {
      navRef.current.classList.toggle("toggle_nav");
    }
  };
  return (
    <header className={onScroll}>
      <HashLink smooth to="/#hero" className="navbar-logo">
        <img src={LogoMarianas} alt="icon" className="myLogo" loading="lazy" />
        <h2 className="logoText">Mariana's Village</h2>
      </HashLink>
      <nav ref={navRef}>
        <HashLink smooth to="/#hero" onClick={showNavBar}>
          Home
        </HashLink>
        <HashLink smooth to="/#product" onClick={showNavBar}>
          Products
        </HashLink>
        <HashLink smooth to="/#investors" onClick={showNavBar}>
          Investors
        </HashLink>
        <HashLink smooth to="/about-us" onClick={showNavBar}>
          About us
        </HashLink>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
