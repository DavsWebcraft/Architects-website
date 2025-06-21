import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
