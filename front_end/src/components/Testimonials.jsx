import "../assets/css/testimonials.css";
import testimonials from "../assets/IMAGES/images (13).jpg";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="grid-testimonials">
        <div className="item-testimonials">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A incidunt
            laboriosam eos ipsam praesentium
          </p>
          <div className="tester">
            <img src={testimonials} alt="" />
            <div>
              <p>Name</p>
              <p>Email</p>
            </div>
          </div>
        </div>
        <div className="item-testimonials">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A incidunt
            laboriosam eos ipsam praesentium
          </p>
          <div className="tester">
            <img src={testimonials} alt="" />
            <div>
              <p>Name</p>
              <p>Email</p>
            </div>
          </div>
        </div>
        <div className="item-testimonials">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A incidunt
            laboriosam eos ipsam praesentium
          </p>
          <div className="tester">
            <img src={testimonials} alt="" />
            <div>
              <p>Name</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
