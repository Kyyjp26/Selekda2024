import "../assets/css/gallery.css";
import gallery1 from "../assets/IMAGES/images (1).webp";
import gallery2 from "../assets/IMAGES/images (7).jpg";
import gallery3 from "../assets/IMAGES/images (4).png";

export default function Gallery() {
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="grid-gallery">
        <div className="item-gallery">
          <img src={gallery1} alt="gallery" />
        </div>
        <div className="item-gallery">
          <img src={gallery2} alt="gallery" />
        </div>
        <div className="item-gallery">
          <img src={gallery3} alt="gallery" />
        </div>
      </div>
    </section>
  );
}
