import "../assets/css/dashboard.css";
import logo from "../assets/IMAGES/Computer_Logo_Image.png";

export default function Dashboard() {
  return (
    <>
      <div className="grid-dashborad">
        <div className="item-dashboard dash1">
          <div className="logo-dash">
            <img src={logo} alt="" />
          </div>
          <div className="dash-info">
            <div className="dash-item">
              <div className="dash-text">
                <h4 className="dash-list">1</h4>
                <h4>Admin</h4>
              </div>
              <div>
                <div className="dash-circle"></div>
              </div>
            </div>
            <div className="dash-item">
              <div className="dash-text">
                <h4 className="dash-list">10</h4>
                <h4>User</h4>
              </div>
              <div>
                <div className="dash-circle"></div>
              </div>
            </div>
            <div className="dash-item">
              <div className="dash-text">
                <h4 className="dash-list">6</h4>
                <h4>Portofolio</h4>
              </div>
              <div>
                <div className="dash-circle"></div>
              </div>
            </div>
            <div className="dash-item">
              <div className="dash-text">
                <h4 className="dash-list">50</h4>
                <h4>Blog</h4>
              </div>
              <div>
                <div className="dash-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-dashboard">
          <canvas id="lineChart" width="300" height="300"></canvas>
        </div>
        <div className="item-dashboard dash3">
          <canvas id="barChart" width="300" height="300"></canvas>
          <canvas id="pieChart" width="300" height="300"></canvas>
        </div>
      </div>
    </>
  );
}
