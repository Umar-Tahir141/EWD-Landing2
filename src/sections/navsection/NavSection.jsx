import React, { useState } from 'react';
import '../herosection/HeroSection.css'
import logo from "../../assets/ewd-logo.png"

const NavSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Services ▾</a></li>
          <li><a href="#">Our Work</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <button className="nav-cta">Let's Talk</button>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`nav-mobile-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`nav-mobile-menu ${menuOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <a href="#">About</a>
          <a href="#">Blogs</a>
          <a href="#">Services</a>
          <a href="#">Our Work</a>
          <a href="#">Clients</a>
          <a href="#">Contact Us</a>

          <button className="mobile-nav-cta">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavSection;