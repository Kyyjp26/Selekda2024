import { Outlet } from "react-router-dom";
import "../assets/css/dashboard-layout.css";

export default function DashboardLayout() {
  return (
    <>
      <nav className="dashboard-nav">
        <div class="search-input">
          <input type="text" placeholder="Search" />
          <button type="button">Cari</button>
        </div>
      </nav>

      <div class="dashboard-container">
        <aside class="sidebar">
          <ul class="sidebar-menu">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">User</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Portofolio</a>
            </li>
            <li>
              <a href="#">Banner</a>
            </li>
          </ul>
        </aside>

        <main class="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}
