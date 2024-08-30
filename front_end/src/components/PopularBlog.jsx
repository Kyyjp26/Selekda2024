import "../assets/css/popular-blog.css";
import popularImage from "../assets/IMAGES/images (10).jpg";

export default function PopularBlog() {
  return (
    <section class="popular">
      <h2>Popular Blog</h2>
      <div>
        <img src={popularImage} alt="" />
      </div>
    </section>
  );
}
