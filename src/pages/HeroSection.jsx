import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>PROJECT</h1>
        <h2>Lorum</h2>
        <Link to="/Projects" className="hero-btn">
          View Projects →
        </Link>
      </div>
      <div className="hero-image">
        <img src="/Landing.png" alt="Project Building" />
      </div>
    </section>
  );
};

export default HeroSection;
