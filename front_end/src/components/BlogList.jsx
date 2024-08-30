import "../assets/css/blog-list.css";
import blogImage from "../assets/IMAGES/images (8).jpg";

export default function BlogList() {
  return (
    <section class="blog">
      <div class="grid-blog">
        <div class="item-blog">
          <div class="card-blog">
            <img src={blogImage} alt="" />
            <div class="card-text">
              <h3>Blog</h3>
              <h4>Author</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <div class="card-footer">
                <p class="date">27-08-1999</p>
                <div class="see">
                  <p class="view">20 views</p>
                  <p>30 comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-blog">
          <div class="card-blog">
            <img src={blogImage} alt="" />
            <div class="card-text">
              <h3>Blog</h3>
              <h4>Author</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <div class="card-footer">
                <p class="date">27-08-1999</p>
                <div class="see">
                  <p class="view">20 views</p>
                  <p>30 comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
