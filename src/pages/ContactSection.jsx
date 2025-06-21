// components/ContactSection.jsx
const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="tel" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Interested In" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Email →</button>
        </form>
        <div className="contact-image">
          <img src="/Contact1.png" alt="Contact" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
