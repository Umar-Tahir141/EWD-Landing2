import React from 'react';
import HeroSection from './sections/herosection/HeroSection';
import AboutSection from './sections/aboutsection/AboutSection';
import ClientsSection from './sections/clientsection/ClientsSection';
import ServicesSection from './sections/servicessection/ServicesSection';
import TestimonialsSection from './sections/testimonialsection/TestimonialsSection';
import PortfolioSection from "./sections/portfoliosection/PortfolioSection"
import ContactSection from "./sections/contactsection/ContactSection"
import FooterSection from "./sections/footersection/FooterSection"
import NavSection from "./sections/navsection/NavSection"


function App() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <NavSection />
      <HeroSection />
      <AboutSection />
      <ClientsSection />
      <ServicesSection />
      <TestimonialsSection />
      <PortfolioSection/>
      <ContactSection/>
      <FooterSection/>
      
    </div>
  );
}

export default App;