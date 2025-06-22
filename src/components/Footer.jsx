import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/footerLogo.png" alt="Digital Project Logo" />
          <p>DIGITAL PROJECT</p>
        </div>

        {/* Info Links */}
        <div className="footer-info">
          <h4>Information</h4>
          <ul>
            <li>Main</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-contacts">
          <h4>Contacts</h4>
          <p>
            📍 1234 Sample Street
            <br />
            Austin Texas 78681
          </p>
          <p>📞 512.333.2222</p>
          <p>✉️ sampleemail@gmail.com</p>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h4>Social Media</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaPinterest />
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="footer-bottom">
        <p>© 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
