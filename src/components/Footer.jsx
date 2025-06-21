function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-section logo-block">
          <img
            src="/footerLogo.png"
            alt="Digital Project Logo"
            className="footer-logo"
          />
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li>Main</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contacts</h4>
          <p>
            📍 1234 Sample Street
            <br />
            Austin Texas 78704
          </p>
          <p>📞 512.333.2222</p>
          <p>📧 sampleemail@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Social Media</h4>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">&copy; 2021 All Rights Reserved</div>
    </footer>
  );
}

export default Footer;
