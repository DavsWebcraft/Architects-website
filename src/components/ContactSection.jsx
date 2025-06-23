import React from "react";
import "../styles/Landing.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="tel" placeholder="Phone Number*" required />
          <input type="email" placeholder="E-mail*" required />
          <input type="text" placeholder="Interested in" />
          <textarea placeholder="Message*" required></textarea>
          <button type="submit">SEND EMAIL →</button>
        </form>
        <div className="contact-image">
          <img src="/Contact1.png" alt="Contact" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
