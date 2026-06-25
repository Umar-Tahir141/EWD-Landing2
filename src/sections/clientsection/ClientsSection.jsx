import React from 'react';
import './ClientsSection.css';
import cc1 from "../../assets/cc1.png"
import cc2 from "../../assets/cc2.png"
import cc3 from "../../assets/cc3.png"
import cc4 from "../../assets/cc4.png"
import cc5 from "../../assets/cc5.png"
import cc6 from "../../assets/cc6.png"
import cc7 from "../../assets/cc7.png"
import cc8 from "../../assets/cc8.png"
import cc9 from "../../assets/cc9.png"
import cc10 from "../../assets/cc10.png"
import cc11 from "../../assets/cc11.png"
import cc12 from "../../assets/cc12.png"

const clients = [
  cc1,
  cc2,
  cc3,
  cc4,
  cc5,
  cc6,
  cc7,
  cc8,
  cc9,
  cc10,
  cc11,
  cc12,
];

const ClientsSection = () => {
  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2 className="clients-heading">Our Clients</h2>
        <p className="clients-subtext">
          Our data-driven approach enables us to help our clients thrive by evergreen support.
        </p>

       <div className="clients-grid">
  {clients.map((logo, index) => (
    <div className="client-logo-card" key={index}>
      <img
        src={logo}
        alt={`Client ${index + 1}`}
        className="client-logo-img"
      />
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default ClientsSection;
