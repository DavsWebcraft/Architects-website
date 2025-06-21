// pages/Gallery.jsx
import Header from "../components/Header";
import "../styles/Gallery.css";

const imageSources = [
  "/Gallery10.png",
  "/Gallery1.png",
  "/Gallery2.png",
  "/Gallery3.png",
  "/Gallery4.png",
  "/Gallery5.png",
  "/Gallery6.png",
  "/Gallery7.png",
  "/Gallery8.png",
  "/Gallery9.png",
];

const Gallery = () => {
  return (
    <>
      <Header />
      <main className="gallery-page">
        <h2 className="gallery-title">
          <span className="photo">Photo</span>
          <span className="gallery">
            <strong>Gallery</strong>
          </span>
        </h2>

        <div className="gallery-grid">
          {imageSources.map((src, idx) => (
            <img key={idx} src={src} alt={`Gallery ${idx + 1}`} />
          ))}
        </div>

        <div className="pagination">
          <span className="page-number">01</span>
          <span className="total-pages">05</span>
          <div className="arrows">
            <button disabled>&larr;</button>
            <button disabled>&rarr;</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Gallery;
