import "../assets/css/about.css";
import about from "../assets/IMAGES/images (5).webp";

export default function About() {
  return (
    <section className="about">
      <div className="about-img">
        <img src={about} alt="" />
      </div>
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          odio cumque sequi doloremque nulla mollitia.
        </p>
      </div>
    </section>
  );
}
