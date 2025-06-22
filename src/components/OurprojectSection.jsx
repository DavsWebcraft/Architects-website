import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

const OurprojectSection = () => {
  return (
    <section className="projects-section">
      <h2>Our Projects</h2>
      <div className="projects-row top-row">
        <div className="project-card">
          <div className="overlay">
            <h3>Sample Project</h3>
            <Link to="/Projects" className="view-projects">
              View More →
            </Link>
          </div>
        </div>
        <img src="/Project2.png" alt="Project 2" />
      </div>
      <div className="projects-row bottom-row">
        <img src="/Project3.png" alt="Project 3" />
        <img src="/Project4.png" alt="Project 4" />
        <img src="/Project5.png" alt="Project 5" />
      </div>
      <div className="button-wrapper">
        <Link to="/Projects" className="view-all-btn button">
          All Projects →
        </Link>
      </div>
    </section>
  );
};

export default OurprojectSection;
