import "../assets/css/portofolio.css";
import portofolio1 from "../assets/IMAGES/images (14).jpg";
import portofolio2 from "../assets/IMAGES/images (15).jpg";
import portofolio3 from "../assets/IMAGES/images (17).jpg";
import portofolio4 from "../assets/IMAGES/images (7).webp";

export default function Portofolio() {
  return (
    <section className="portofolio">
      <h2>Portofolio</h2>
      <div className="grid-portofolio">
        <div className="item-portofolio">
          <img src={portofolio1} alt="" />
        </div>
        <div className="item-portofolio">
          <img src={portofolio2} alt="" />
        </div>
        <div className="item-portofolio">
          <img src={portofolio3} alt="" />
        </div>
        <div className="item-portofolio">
          <img src={portofolio4} alt="" />
        </div>
      </div>
    </section>
  );
}
