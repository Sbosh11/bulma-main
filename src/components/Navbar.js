import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="menu">
      <div className="navbar">
        <a href="#home">
          <img
            src="https://d1xzdqg8s8ggsr.cloudfront.net/651e4a1a203962f3b10ddba7/d651b0eb-4743-4d38-b15f-274b7ac3c1b7_1696561304016730490"
            alt="Brand Logo"
            className="brand-image"
          />
        </a>
        <div className="nav-menu">
          <ScrollLink  className="scroll-link" to="what-we-do" smooth={true} duration={500}>
            Services
          </ScrollLink>
          <ScrollLink  className="scroll-link" to="brands" smooth={true} duration={500}>
            Industries
          </ScrollLink>
          <ScrollLink className="scroll-link" to="case-studies" smooth={true} duration={500}>
            Cases
          </ScrollLink>
          <ScrollLink className="scroll-link" to="footer" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </div>
        <button className="lets-talk">Let's Talk</button>
      </div>
    </nav>
  );
}

export default Navbar;
