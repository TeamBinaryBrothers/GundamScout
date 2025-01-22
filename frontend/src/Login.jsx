import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (!username) {
      setErrorMessage("Please enter your username.");
    } else if (!password) {
      setErrorMessage("Please enter your password.");
    } else {
      setErrorMessage("");
      console.log(`Username: ${username}, Password: ${password}`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username-input"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password-input"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
      <div className="login-button-container">
        <Link to="/" className="back-button">
          <button>Back to Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
