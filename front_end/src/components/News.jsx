import "../assets/css/news.css";
import news1 from "../assets/IMAGES/images (3).png";
import news2 from "../assets/IMAGES/images (1).jpg";
import news3 from "../assets/IMAGES/images (4).webp";

export default function News() {
  return (
    <section className="news">
      <h2>News</h2>
      <div className="grid-news">
        <div className="item-news news1">
          <img src={news1} alt="" />
        </div>
        <div className="item-news news2">
          <div>
            <div className="card-news">
              <img src={news2} alt="" />
              <div className="card-text">
                <h3>News</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <p className="card-date">
                  <small>Upload 1 day ago</small>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card-news">
              <img src={news3} alt="" />
              <div className="card-text">
                <h3>News</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <p className="card-date">
                  <small>Upload 1 day ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
