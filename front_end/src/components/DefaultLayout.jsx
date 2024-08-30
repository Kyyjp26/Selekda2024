import { Navigate, NavLink, Outlet } from "react-router-dom";
import "../assets/css/navbar.css";
import logoNav from "../assets/IMAGES/Computer_Logo_Image.png";
import Footer from "./Footer";
import { useStageContext } from "../context/ContextProvider";
import axiosClient from "../axios";

export default function DefaultLayout() {
  const { userToken, setToken } = useStageContext();

  if (!userToken) {
    return <Navigate to="/login" />;
  }

  const logout = () => {
    axiosClient
      .get("/logout")
      .then(({ data }) => {
        setToken(null);
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <img src={logoNav} alt="logo" />
        </a>
        <div className="nav-container">
          <ul className="nav-ul">
            <li className="nav-li">
              <NavLink to="/" className="nav-a">
                Home
              </NavLink>
            </li>
            <li className="nav-li">
              <a className="nav-a" href="#">
                About
              </a>
            </li>
            <li className="nav-li">
              <a className="nav-a" href="#">
                News
              </a>
            </li>
            <li className="nav-li">
              <NavLink to="/blog" className="nav-a">
                Blog
              </NavLink>
            </li>
            <li className="nav-li">
              <a className="nav-a" href="#">
                Service
              </a>
            </li>
            <li className="nav-li">
              <NavLink to="/portofolio" className="nav-a">
                Portofolio
              </NavLink>
            </li>
            <li className="nav-li">
              <a className="nav-a" href="#">
                Testimonials
              </a>
            </li>
          </ul>
          <button onClick={logout}>Logout</button>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
