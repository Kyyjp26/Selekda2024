import { Outlet } from "react-router-dom";
import "../assets/css/navbar.css";
import logoNav from "../assets/IMAGES/Computer_Logo_Image.png";
import Footer from "./Footer";

export default function DefaultLayout() {
  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <img src={logoNav} alt="logo" />
        </a>
        <div>
          <ul>
            <li>
              <a href="#" className="nav-active">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Portofolio</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
