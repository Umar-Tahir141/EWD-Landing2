import React from 'react';
import './HeroSection.css';
import herovid from "../../assets/hero-video.png"

const HeroSection = () => {

  return (
    <section className="hero-section">

      {/* Hero Content */}
      <div className="hero-overlay">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-heading">
              We digitize business with<br />
              innovative solutions
            </h1>
            <div className="hero-buttons">
              <button className="btn-outline">Our Work</button>
              <button className="btn-primary">Our Services</button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <img
        src={herovid}
        alt="Office reception"
        className="hero-bg-image"
      />
    </section>
  );
};

export default HeroSection;