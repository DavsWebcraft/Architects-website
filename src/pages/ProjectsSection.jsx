import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2>Our Projects</h2>

      <div className="projects-row top-row">
        <div className="project-card featured">
          <div className="overlay">
            <h3>Sample</h3>
            <h3>Project</h3>
            <p>View More →</p>
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
        <Link to="/projects" className="view-all-btn">
          All Projects →
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
