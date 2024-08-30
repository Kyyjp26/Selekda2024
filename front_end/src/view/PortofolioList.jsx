import "../assets/css/portofolio-list.css";
import portofolioImage from "../assets/IMAGES/images (15).jpg";

export default function PortofolioList() {
  return (
    <section className="portofolio">
      <div className="filter">
        <h3>Categori</h3>
      </div>
      <div className="grid-portofolio">
        <div className="item-portofolio">
          <div className="card-portofolio">
            <img src={portofolioImage} alt="" />
            <div className="card-text">
              <h3>Portofolio</h3>
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
