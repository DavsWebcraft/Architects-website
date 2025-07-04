import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

const MissionSection = () => {
  return (
    <section className="mission-section">
      <h2>Main Focus/Mission Statement</h2>
      <div className="mission-columns">
        <div className="mission-box">
          <h2>1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </p>
        </div>
        <div className="mission-box">
          <h2>2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat, magna mauris porttitor
            tortor, a auctor est felis ut nisl.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
