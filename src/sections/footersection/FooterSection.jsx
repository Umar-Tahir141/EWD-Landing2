import React from "react";
import "./FooterSection.css";
import wapp from "../../assets/wapp.png"

const FooterSection = () => {
  return (
    <footer className="footer">

      {/* Top Green Bar */}
      <div className="footer-top">
        <div className="footer-top-container">
          <h3>
            One-Step Solution bringing Data & Strategy Boosted in No time.
          </h3>

          <div className="footer-phone">
            <img src={wapp} alt="" />
            <a href="tel:+19193219995">+19193219995</a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-container">

        <div className="footer-column">
          <h4>Services</h4>

          <a href="#">Search Engine Optimization</a>
          <a href="#">Social Media Marketing</a>
          <a href="#">PPC Management</a>
          <a href="#">Website Design & Development</a>
          <a href="#">Lead Generation</a>
        </div>

        <div className="footer-column">
          <h4>Learn</h4>

          <a href="#">About</a>
          <a href="#">Testimonials</a>
          <a href="#">FAQs</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>

          <a href="#">Home</a>
          <a href="#">Work</a>
          <a href="#">Services</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Knowledge Base</h4>

          <a href="#">SEO</a>
          <a href="#">Ecommerce</a>
          <a href="#">Shopify</a>
          <a href="#">Branding</a>
          <a href="#">Website Design</a>
        </div>

        <div className="footer-column footer-address">
          <h4>Headquarter:</h4>

          <p>
            6210 Plantation Center Dr Suite 105,
            <br />
            Raleigh, NC, 27616 USA
          </p>

          <h4 className="office-title">
            Other Offices
          </h4>

          <p>
            5th Floor Mezan Executive Tower,
            <br />
            Liaquat Road, Faisalabad Pakistan
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <span></span>

          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default FooterSection;