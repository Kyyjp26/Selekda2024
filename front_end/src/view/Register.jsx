import React, { useEffect, useState } from "react";
import "../assets/css/register.css";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axios";
import { useStageContext } from "../context/ContextProvider";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const { userToken } = useStageContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      navigate("/");
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("birth_date", birthDate);
    formData.append("phone_number", phoneNumber);
    formData.append("profile_picture", profilePicture);

    axiosClient
      .post("/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => {
        navigate("/login");
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="register-background">
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={onSubmit}>
          <div className="grid-form">
            <div className="register-form">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="register-form">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="register-form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="register-form">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="register-form">
              <label htmlFor="birth-date">Birth Date</label>
              <input
                type="date"
                id="birth-date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            <div className="register-form">
              <label htmlFor="phone-number">Phone Number</label>
              <input
                type="text"
                id="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="register-form input-file">
              <label htmlFor="profile-picture">Profile Picture</label>
              <input
                type="file"
                id="profile-picture"
                onChange={(e) => setProfilePicture(e.target.files[0])}
              />
            </div>
          </div>
          <div className="register-form">
            <button type="submit">Register</button>
          </div>
          <p>
            You have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
