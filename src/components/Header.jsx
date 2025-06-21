import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        <img src="/logo.png" alt="Logo" className="logo-img" />

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={menuOpen ? "open" : ""}>
          <Link to="/" className="main-link" onClick={() => setMenuOpen(false)}>
            Main
          </Link>
          <Link to="/Gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
          <Link to="/Projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/Certifications" onClick={() => setMenuOpen(false)}>
            Certifications
          </Link>
          <Link to="/Contacts" onClick={() => setMenuOpen(false)}>
            Contacts
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
