import "../assets/css/footer.css";
import logoFooter from "../assets/IMAGES/Computer_Logo_Text.png";
import icon1 from "../assets/SOCIAL_MEDIA/Colorful/fb.png";
import icon2 from "../assets/SOCIAL_MEDIA/Colorful/instagram.png";
import icon3 from "../assets/SOCIAL_MEDIA/Colorful/twitter.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="logo-footer">
          <img src={logoFooter} alt="" />
        </div>
        <div className="link-footer">
          <a href="#">Home</a>
          <a href="#">Gallery</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Portofolio</a>
        </div>
        <div className="footer-icon">
          <a href="#">
            <img src={icon1} alt="" />
          </a>
          <a href="#">
            <img src={icon2} alt="" />
          </a>
          <a href="#">
            <img src={icon3} alt="" />
          </a>
        </div>
      </footer>
      <div className="footer-copyright">
        Designed by : Zacky Julyanda Pratama
      </div>
    </>
  );
}
