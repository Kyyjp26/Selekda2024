import "../assets/css/service.css";
import service1 from "../assets/IMAGES/images (2).png";
import service2 from "../assets/IMAGES/images (4).png";
import service3 from "../assets/IMAGES/images (12).jpg";

export default function Service() {
  return (
    <section className="service">
      <h2>Service</h2>
      <div className="grid-service">
        <div className="item-service">
          <img src={service1} alt="" />
          <div className="service-text">
            <h3>Service</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="item-service">
          <img src={service2} alt="" />
          <div className="service-text">
            <h3>Service</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="item-service">
          <img src={service3} alt="" />
          <div className="service-text">
            <h3>Service</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
