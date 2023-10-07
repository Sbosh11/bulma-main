import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";
import BrandLogo from "../imgs/brand logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`menu ${isMenuOpen ? "nav-open" : ""}`}>
        <div className="navbar">
          <a href="#home">
            <img
              src={BrandLogo}
              alt="Brand Logo"
              className="brand-image"
              width="100px"
              height="32px"
            />
          </a>

          <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
            <ScrollLink
              className="scroll-link"
              to="what-we-do"
              smooth={true}
              duration={500}
              onClick={closeMenu} // Close the menu when a link is clicked
            >
              Services
            </ScrollLink>
            <ScrollLink
              className="scroll-link"
              to="brands"
              smooth={true}
              duration={500}
              onClick={closeMenu} 
            >
              Industries
            </ScrollLink>
            <ScrollLink
              className="scroll-link"
              to="case-studies"
              smooth={true}
              duration={500}
              onClick={closeMenu} 
            >
              Cases
            </ScrollLink>
            <ScrollLink
              className="scroll-link"
              to="footer"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </ScrollLink>
          </div>
          <button
            className={`lets-talk ${isMenuOpen ? "hide" : ""}`}
            onClick={toggleMenu}
          >
            Let's Talk
          </button>
          <div
            className={`menu-icon ${isMenuOpen ? "change" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
