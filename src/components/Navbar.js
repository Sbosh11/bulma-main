import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

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
              src="https://d1xzdqg8s8ggsr.cloudfront.net/651e4a1a203962f3b10ddba7/d651b0eb-4743-4d38-b15f-274b7ac3c1b7_1696561304016730490"
              alt="Brand Logo"
              className="brand-image"
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
              onClick={closeMenu} // Close the menu when a link is clicked
            >
              Industries
            </ScrollLink>
            <ScrollLink
              className="scroll-link"
              to="case-studies"
              smooth={true}
              duration={500}
              onClick={closeMenu} // Close the menu when a link is clicked
            >
              Cases
            </ScrollLink>
            <ScrollLink
              className="scroll-link"
              to="footer"
              smooth={true}
              duration={500}
              onClick={closeMenu} // Close the menu when a link is clicked
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
