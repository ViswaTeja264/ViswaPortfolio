import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      {/* Responsive Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${showMenu ? "open" : ""}`}></div>
        <div className={`bar ${showMenu ? "open" : ""}`}></div>
        <div className={`bar ${showMenu ? "open" : ""}`}></div>
      </div>

      {/* Desktop Menu */}
      <div className={`desktopMenu ${showMenu ? "show" : ""}`}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          className="desktopMenuListItems"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          className="desktopMenuListItems"
        >
          About
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          className="desktopMenuListItems"
        >
          Skills
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          className="desktopMenuListItems"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          className="desktopMenuListItems"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
