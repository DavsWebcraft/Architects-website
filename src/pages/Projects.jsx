// src/pages/Projects.jsx
import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <section className="project-header">
        <h2>
          Our <br />
          <span>Projects</span>
        </h2>
      </section>

      <section className="project-list">
        {[1, 2, 3].map((index) => (
          <div key={index} className="project-item">
            <img
              src={`/OurProjects${index}.png`}
              alt={`Our Project ${index}`}
            />
            <div className="project-details">
              <h3>Sample Project{index > 1 ? ` ${index}` : ""}</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s...
              </p>
              <button>View More →</button>
            </div>
          </div>
        ))}
      </section>

      <section className="pagination">
        <span>1</span>
        <span>/</span>
        <span>5</span>
        <div className="controls">
          <button>◄</button>
          <button>►</button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
