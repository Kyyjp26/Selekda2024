import "../assets/css/login.css";

function Login() {
  return (
    <div className="login-background">
      <div className="login-container">
        <h2>Login</h2>
        <form action="#">
          <div className="login-form">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="login-form">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
