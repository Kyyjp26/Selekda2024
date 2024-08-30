import "../assets/css/banner.css";
// import "../assets/js/script.js";
import banner1 from "../assets/IMAGES/images (12).jpg";
import banner2 from "../assets/IMAGES/images (16).jpg";
import banner3 from "../assets/IMAGES/images (15).jpg";
import banner4 from "../assets/IMAGES/images (10).jpg";

export default function Banner() {
  return (
    <section className="banner">
      <div className="slider">
        <div className="slides">
          <img src={banner1} alt="banner" />
          <img src={banner2} alt="banner" />
          <img src={banner3} alt="banner" />
          <img src={banner4} alt="banner" />
        </div>
      </div>
      <div className="indicators">
        <span className="indicator"></span>
        <span className="indicator"></span>
        <span className="indicator"></span>
        <span className="indicator"></span>
      </div>
    </section>
  );
}
