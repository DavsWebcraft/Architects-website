// components/Landing.jsx
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import MissionSection from "./MissionSection";
import "../styles/Landing.css";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

const LandingPage = () => {
  return (
    <main className="landing-page">
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default LandingPage;
