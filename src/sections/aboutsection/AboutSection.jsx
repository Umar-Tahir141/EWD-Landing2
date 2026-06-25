import React from 'react';
import './AboutSection.css';
import ceo from "../../assets/ceo.png"

const stats = [
  { number: '6,271,747', label: 'Leads Generated' },
  { number: '4,191,222', label: 'Calls Generated' },
  { number: '11,550,403', label: 'eCommerce Transactions' },
  { number: '579', label: 'Client Testimonials' },
];

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Top: Text block + Man image */}
        <div className="about-top">
          <div className="about-card">
            <h2 className="about-heading">
              Bonjour to our Digital<br />
              Marketing Agency!
            </h2>
            <p className="about-subtext">
              The community knows us for our commitment,<br />
              authenticity…
            </p>
            <button className="about-btn">Let's Talk</button>
          </div>

          <div className="about-image-wrap">
            <img
              src={ceo}
              alt="Agency representative"
              className="about-person-img"
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="stats-row">
          {stats.map((stat, i) => (
            <div className="stat-card" key={i}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
