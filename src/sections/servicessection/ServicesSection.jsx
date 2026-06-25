import React from 'react';
import './ServicesSection.css';
import ic1 from "../../assets/ic1.png"
import ic2 from "../../assets/ic2.png"
import ic3 from "../../assets/ic3.png"
import ic4 from "../../assets/ic4.png"
import ic5 from "../../assets/ic5.png"
import ic6 from "../../assets/ic6.png"
import ic7 from "../../assets/ic7.png"
import ic8 from "../../assets/ic8.png"
import ic9 from "../../assets/ic9.png"

const services = [
  {
    icon: (
     <img src={ic1} alt="" class="ss-icon" />
    ),
    title: 'Search Engine Optimization',
    desc: 'We are here to rank you uniquely, increase your digital visibility and enhance your traffic now potential customers by Local SEO, Technical SEO, On page SEO and Off page SEO.',
  },
  {
    icon: (
       <img src={ic2} alt="" class="ss-icon" />
    ),
    title: 'Social Media Marketing',
    desc: 'We illustrate your brand effectively. Social Media Management & optimization as per the vision and identity of your brand with uniqueness.',
  },
  {
    icon: (
      <img src={ic3} alt="" class="ss-icon" />
    ),
    title: 'PPC Management',
    desc: 'Not just an activity, we are here investing on your brand and delivering the Pay Per Click with minimal budges.',
  },
  {
    icon: (
      <img src={ic4} alt="" class="ss-icon" />
    ),
    title: 'Web Design & Development',
    desc: 'A new interface is on the way to showcase your Brand Design effectively and engage your customers with smooth interface in Website Design Service.',
  },
  {
    icon: (
     <img src={ic5} alt="" class="ss-icon" />
    ),
    title: 'Lead Generation',
    desc: 'Engaging more. Transforming impact. Through strategic interactions, we are converting potential followers into long-term clients through Lead Generation Service.',
  },
  {
    icon: (
      <img src={ic6} alt="" class="ss-icon" />
    ),
    title: 'E-Commerce',
    desc: 'Doorstep at Single Click. We are here to manage the E-Commerce sites effectively through E-commerce website design service, Ecommerce Optimization, Ecommerce Marketing Service.',
  },
  {
    icon: (
      <img src={ic7} alt="" class="ss-icon" />
    ),
    title: 'Amazon FBA',
    desc: 'We go well entirely by providing various FBA services including product listing optimization, inventory management, Shipping and Handling.',
  },
  {
    icon: (
      <img src={ic8} alt="" class="ss-icon" />
    ),
    title: 'Shopify Expert',
    desc: 'We diversify your brand by providing generic shipping strategies, Shopify development services, and Shopify Ecommerce Service.',
  },
  {
    icon: (
      <img src={ic9} alt="" class="ss-icon" />
    ),
    title: 'Creative & Branding',
    desc: 'We help Digitize and Showcase on your behalf while producing innovative branding packages like Creative Content Writing, UX Design.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <h2 className="services-main-heading">Our Services</h2>
          <p className="services-main-sub">
            We open the Metaverse of Client-Focused Approaches. We deal in services including:
          </p>
        </div>

        {/* Grid */}
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="services-cta">
          <button className="svc-btn-outline">Our Work</button>
          <button className="svc-btn-primary">Let's Talk</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
