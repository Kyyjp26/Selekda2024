import "../assets/css/dashboard.css";
import logo from "../assets/IMAGES/Computer_Logo_Image.png";

export default function Dashboard() {
  return (
    <>
      <div class="grid-dashborad">
        <div class="item-dashboard dash1">
          <div class="logo-dash">
            <img src={logo} alt="" />
          </div>
          <div class="dash-info">
            <div class="dash-item">
              <div class="dash-text">
                <h4 class="dash-list">1</h4>
                <h4>Admin</h4>
              </div>
              <div>
                <div class="dash-circle"></div>
              </div>
            </div>
            <div class="dash-item">
              <div class="dash-text">
                <h4 class="dash-list">10</h4>
                <h4>User</h4>
              </div>
              <div>
                <div class="dash-circle"></div>
              </div>
            </div>
            <div class="dash-item">
              <div class="dash-text">
                <h4 class="dash-list">6</h4>
                <h4>Portofolio</h4>
              </div>
              <div>
                <div class="dash-circle"></div>
              </div>
            </div>
            <div class="dash-item">
              <div class="dash-text">
                <h4 class="dash-list">50</h4>
                <h4>Blog</h4>
              </div>
              <div>
                <div class="dash-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-dashboard">
          <canvas id="lineChart" width="300" height="300"></canvas>
        </div>
        <div class="item-dashboard dash3">
          <canvas id="barChart" width="300" height="300"></canvas>
          <canvas id="pieChart" width="300" height="300"></canvas>
        </div>
      </div>
    </>
  );
}
