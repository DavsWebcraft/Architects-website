import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-images">
        <div className="about-images-left">
          <img src="/About1.png" alt="Building 1" />
          <img src="About2.png" alt="Sketch" />
        </div>
        <img src="/About3.png" alt="Building 2" />
      </div>
      <div className="about-text">
        <h2>About</h2>
        <p>
          Lorum Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a gallery of type and
          scrambled it to make a type specimen book. It has survived not ony
          five centuries, but also the leap into electronic typesetting,
          remaining essentially uncganged.
        </p>
        <Link to="/" className="read-more-link">
          Read More →
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
