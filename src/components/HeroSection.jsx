import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Project</h1>
        <h2>Nurtown</h2>
        <Link to="/Projects" className="view-project">
          View Projects ↗
        </Link>
      </div>
      <div className="hero-image">
        <img src="/Landing.png" alt="Architecture Design" />
      </div>
    </section>
  );
};

export default HeroSection;
