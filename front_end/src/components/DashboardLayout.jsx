import { NavLink, Outlet } from "react-router-dom";
import "../assets/css/dashboard-layout.css";

export default function DashboardLayout() {
  return (
    <>
      <nav className="dashboard-nav">
        <div className="search-input">
          <input type="text" placeholder="Search" />
          <button type="button">Cari</button>
        </div>
      </nav>

      <div className="dashboard-container">
        <aside className="sidebar">
          <ul className="sidebar-menu">
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <a href="#">User</a>
            </li>
            <li>
              <NavLink to="/dashboard/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/portofolio">Portofolio</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/banner">Banner</NavLink>
            </li>
          </ul>
        </aside>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}
