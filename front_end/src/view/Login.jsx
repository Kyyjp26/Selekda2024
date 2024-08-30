import React, { useState, useEffect } from "react";
import "../assets/css/login.css";
import { useStageContext } from "../context/ContextProvider";
import axiosClient from "../axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userToken, setToken } = useStageContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      navigate("/");
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    axiosClient
      .post("/login", {
        username,
        password,
      })
      .then(({ data }) => {
        setToken(data.token);
        navigate("/");
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <h2>Login</h2>
        <form method="POST" onSubmit={onSubmit}>
          <div className="login-form">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-form form2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-form">
            <button type="submit">Login</button>
          </div>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
