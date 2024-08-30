import "../assets/css/blog-list.css";
import blogImage from "../assets/IMAGES/images (8).jpg";

export default function BlogList() {
  return (
    <section className="blog">
      <div className="grid-blog">
        <div className="item-blog">
          <div className="card-blog">
            <img src={blogImage} alt="" />
            <div className="card-text">
              <h3>Blog</h3>
              <h4>Author</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <div className="card-footer">
                <p className="date">27-08-1999</p>
                <div className="see">
                  <p className="view">20 views</p>
                  <p>30 comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-blog">
          <div className="card-blog">
            <img src={blogImage} alt="" />
            <div className="card-text">
              <h3>Blog</h3>
              <h4>Author</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <div className="card-footer">
                <p className="date">27-08-1999</p>
                <div className="see">
                  <p className="view">20 views</p>
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
