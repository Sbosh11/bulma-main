import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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
          <a href="#home" onClick={closeMenu}>
            <img
              src="https://d1xzdqg8s8ggsr.cloudfront.net/651e4a1a203962f3b10ddba7/d651b0eb-4743-4d38-b15f-274b7ac3c1b7_1696561304016730490"
              alt="Brand Logo"
              className="brand-image"
            />
          </a>
          <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
            <Link to="/Services" onClick={closeMenu}>
              Services
            </Link>
            <Link to="/Industries" onClick={closeMenu}>
              Industries
            </Link>
            <Link to="/Cases" onClick={closeMenu}>
              Cases
            </Link>
            <Link to="/Contact" onClick={closeMenu}>
              Contact
            </Link>
          </div>
          <button className="lets-talk" onClick={toggleMenu}>
            Let's Talk
          </button>
          {/* <button className="nav-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
  </button>*/}
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
