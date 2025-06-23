import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-images">
        <div className="about-images-left">
          <img src="/About1.png" alt="Design concept 1" />
          <img src="/About2.png" alt="Design concept 2" />
        </div>
        <img src="/About3.png" alt="Design concept 3" />
      </div>
      <div className="about-text">
        <h2>About</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since 1500s, when an unknown printer took a gallery of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Link to="/Gallery" className="read-more-link read-more">
          Read More →
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
